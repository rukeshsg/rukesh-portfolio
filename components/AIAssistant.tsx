"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";
import { portfolio } from "@/lib/data";
import { cn } from "@/lib/cn";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const quickReplies = [
  "Tell me about Rukesh",
  "Projects",
  "Skills",
  "Education",
  "Certifications",
  "Badges",
  "Resume",
  "Contact",
];

function buildAnswer(query: string): string {
  const q = query.toLowerCase();
  const { badges, certifications, education, profile, projects, skills } =
    portfolio;

  if (/resume|cv/.test(q)) {
    return "Please visit the Contact section to download my resume.";
  }

  if (/contact|email|reach|linkedin|hire/.test(q)) {
    return `You can reach ${profile.name} at ${profile.email}, or connect on LinkedIn (${profile.linkedin}) and GitHub (${profile.github}).`;
  }

  if (/education|college|school|cgpa|degree|university/.test(q)) {
    return education
      .map(
        (e) =>
          `${e.level}: ${e.institution} - ${e.degree}, ${e.department} (${e.duration}, ${e.score})`
      )
      .join("\n");
  }

  if (/certificat/.test(q)) {
    return certifications
      .map((c) => `${c.name} - ${c.organization} (${c.issueDate})`)
      .join("\n");
  }

  if (/badge/.test(q)) {
    return badges.map((b) => b.name).join("\n");
  }

  if (/skill|tech stack|tools|programming/.test(q)) {
    return skills
      .map((s) => `${s.category}: ${s.items.join(", ")}`)
      .join("\n");
  }

  if (/serenity|mental health|chatbot/.test(q)) {
    const p = projects.find((project) => project.id === "serenity");
    return p ? `${p.name} - ${p.summary}` : "Project not found.";
  }

  if (/knovera|blog/.test(q)) {
    const p = projects.find((project) => project.id === "knovera");
    return p ? `${p.name} - ${p.summary}` : "Project not found.";
  }

  if (/data science|applied|dashboard/.test(q)) {
    const p = projects.find((project) => project.id === "applied-ds-ml");
    return p ? `${p.name} - ${p.summary}` : "Project not found.";
  }

  if (/project/.test(q)) {
    return projects.map((p) => `${p.name} - ${p.summary}`).join("\n\n");
  }

  if (/about|who is|rukesh|yourself/.test(q)) {
    return `${profile.name} is ${profile.title.toLowerCase()}, ${profile.degree} in ${profile.department}. ${profile.aboutText}`;
  }

  return "I can help with questions about Rukesh's projects, skills, education, certifications, badges, resume, or contact details.";
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: `Hi, I'm a small assistant scoped to ${portfolio.profile.name}'s portfolio. Ask me about projects, skills, education, certifications, badges, or contact info.`,
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const answer = buildAnswer(text);
    setMessages((m) => [
      ...m,
      { role: "user", text },
      { role: "assistant", text: answer },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[420px] w-[300px] flex-col overflow-hidden rounded-sm border border-ink-600 bg-ink-900 shadow-2xl sm:w-[340px]">
          <div className="flex items-center justify-between border-b border-ink-700 px-4 py-3">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-signal" />
              <p className="font-mono text-[11px] uppercase text-paper-100">
                Portfolio Assistant
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="text-mist hover:text-paper-100"
            >
              <X size={15} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] whitespace-pre-line rounded-sm px-3 py-2 text-xs leading-relaxed",
                  m.role === "assistant"
                    ? "bg-ink-800 text-paper-200"
                    : "ml-auto bg-signal text-ink-950"
                )}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="border-t border-ink-700 p-3">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {quickReplies.map((q) => (
                <button
                  type="button"
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-sm border border-ink-600 px-2 py-1 font-mono text-[10px] uppercase text-mist hover:border-signal hover:text-signal"
                >
                  {q}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about this portfolio..."
                className="flex-1 rounded-sm border border-ink-600 bg-ink-950 px-3 py-2 text-xs text-paper-100 placeholder:text-ink-500 focus:border-signal"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="rounded-sm border border-ink-600 p-2 text-signal hover:border-signal"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open portfolio assistant"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 bg-ink-900 text-signal shadow-lg transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-signal"
      >
        <Sparkles size={16} />
      </button>
    </div>
  );
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  featured: boolean;
  name: string;
  category: string;
  summary: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  logo?: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
  description: string;
  skills: string[];
}

export interface Badge {
  id: string;
  name: string;
  image: string;
}

export interface Education {
  id: string;
  level: string;
  institution: string;
  logo: string;
  degree: string;
  department: string;
  duration: string;
  score: string;
}

export interface Profile {
  name: string;
  title: string;
  degree: string;
  department: string;
  currentStatus: string;
  heroDescription: string;
  aboutText: string;
  profilePhoto: string;
  resumeUrl: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface About {
  paragraphs: string[];
  interests: string[];
  careerObjective: string;
  traits: string[];
}

export interface Meta {
  siteUrl: string;
  title: string;
  description: string;
  ogImage: string;
  keywords: string[];
}

export interface PortfolioData {
  meta: Meta;
  profile: Profile;
  about: About;
  skills: SkillGroup[];
  highlightedSkills: string[];
  projects: Project[];
  certifications: Certification[];
  badges: Badge[];
  education: Education[];
}

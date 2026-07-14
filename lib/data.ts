import raw from "@/data/portfolio.json";
import { PortfolioData } from "./types";

export const portfolio = raw as unknown as PortfolioData;

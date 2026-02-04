export interface Project {
  name: string;
  github: string;
  stars: string;
  description?: string;
  role?: string; // "Creator", "Contributor" 등
}

export interface CareerEntry {
  company: string;
  role: string;
  period: string;
  description?: string;
  current?: boolean;
}

export interface Member {
  id: string; // URL-safe slug
  name: string;
  nickname?: string;
  image: string;
  accentColor: string;
  career: string; // 한 줄 요약

  // 소셜 링크
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  email?: string;

  // 프로젝트
  projects: Project[];

  // 상세 정보
  bio: string[]; // 여러 문단의 자기소개
  skills: string[]; // 전문 분야 태그
  careerHistory: CareerEntry[];
  philosophy?: string; // 개인 철학/메시지
  featured?: boolean;
}

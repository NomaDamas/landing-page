"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Github, Star, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Project {
  name: string;
  github: string;
  description: string;
  stars: string;
  gradient: string;
}

const projects: Project[] = [
  {
    name: "AutoRAG",
    github: "https://github.com/Marker-Inc-Korea/AutoRAG",
    description: "RAG 파이프라인 최적화 프레임워크",
    stars: "4.6k",
    gradient: "#9E7AFF",
  },
  {
    name: "KICE-slayer",
    github: "https://github.com/NomaDamas/KICE-slayer",
    description: "수능 국어 1등급에 도전하는 AI",
    stars: "532",
    gradient: "#FE8BBB",
  },
  {
    name: "KoDarkBench",
    github: "https://github.com/NomaDamas/KoDarkBench",
    description: "한국어 LLM 다크 패턴 탐지 벤치마크",
    stars: "58",
    gradient: "#7AE7FF",
  },
  {
    name: "AutoRAG-Research",
    github: "https://github.com/NomaDamas/AutoRAG-Research",
    description: "RAG 연구자들을 위한 궁극의 RAG 실험 툴",
    stars: "2",
    gradient: "#FFB17A",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BlurFade delay={0.1} inView>
            <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
              Open Source
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              오픈소스 <span className="text-gradient">프로젝트</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-muted-foreground">
              NomaDamas에서 만들어가는 오픈소스 프로젝트들입니다.
              함께 기여하고, 함께 성장합니다.
            </p>
          </BlurFade>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {projects.map((project, index) => (
            <BlurFade key={project.name} delay={0.2 + index * 0.1} inView>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <MagicCard
                  className="relative h-full cursor-pointer transition-transform hover:scale-[1.02]"
                  gradientColor={project.gradient}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-3 rounded-xl"
                          style={{ backgroundColor: `${project.gradient}20` }}
                        >
                          <Github
                            className="h-6 w-6"
                            style={{ color: project.gradient }}
                          />
                        </div>
                        <h3 className="text-xl font-bold">{project.name}</h3>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          <span className="text-sm font-medium">
                            {project.stars}
                          </span>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <BorderBeam size={150} duration={10} delay={index * 2.5} />
                </MagicCard>
              </Link>
            </BlurFade>
          ))}
        </div>

        {/* CTA Button */}
        <BlurFade delay={0.6} inView>
          <div className="flex justify-center">
            <Link
              href="https://github.com/NomaDamas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShimmerButton
                className="text-sm font-medium"
                background="linear-gradient(135deg, #9E7AFF 0%, #FE8BBB 100%)"
              >
                <span className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  더 보러가기
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

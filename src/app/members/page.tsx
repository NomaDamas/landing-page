"use client";

import { Header, Footer } from "@/components/sections";
import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Badge } from "@/components/ui/badge";
import { members } from "@/data/members";
import { Member, Project } from "@/types/member";
import {
  Github,
  Linkedin,
  Twitter,
  Globe,
  Mail,
  Star,
  User,
  Briefcase,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProfileImage({
  src,
  alt,
  accentColor,
}: {
  src: string;
  alt: string;
  accentColor: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shrink-0"
      style={{
        background: `linear-gradient(135deg, ${accentColor}, ${accentColor}80)`,
        padding: "3px",
      }}
    >
      <div className="w-full h-full rounded-2xl overflow-hidden bg-card">
        {hasError ? (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: `${accentColor}20` }}
          >
            <User className="w-1/2 h-1/2" style={{ color: accentColor }} />
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={160}
            height={160}
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}

function SocialLinks({ member }: { member: Member }) {
  const links = [
    { href: member.github, icon: Github, label: "GitHub" },
    { href: member.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: member.twitter, icon: Twitter, label: "Twitter" },
    { href: member.website, icon: Globe, label: "Website" },
    { href: member.email ? `mailto:${member.email}` : undefined, icon: Mail, label: "Email" },
  ].filter((link) => link.href);

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {links.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href!}
          target={label === "Email" ? undefined : "_blank"}
          rel={label === "Email" ? undefined : "noopener noreferrer"}
          className="p-2 rounded-lg bg-card/80 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-card hover:border-border transition-colors"
          aria-label={`${member.name}'s ${label}`}
        >
          <Icon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}

function ProjectBadge({ project }: { project: Project }) {
  return (
    <Link
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50 hover:bg-card hover:border-border transition-colors group"
    >
      <div className="flex items-center gap-2">
        <Github className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        <span className="font-medium">{project.name}</span>
        {project.role && (
          <Badge variant="secondary" className="text-xs">
            {project.role}
          </Badge>
        )}
      </div>
      <div className="flex items-center gap-1 ml-auto">
        <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
        <span className="text-sm text-muted-foreground">{project.stars}</span>
      </div>
    </Link>
  );
}

function MemberDetailCard({ member, index }: { member: Member; index: number }) {
  return (
    <BlurFade delay={0.2 + index * 0.1} inView>
      <MagicCard
        className="relative overflow-hidden"
        gradientColor={member.accentColor}
      >
        <div className="p-6 md:p-8">
          {/* Header: Photo + Name + Social */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8">
            <ProfileImage
              src={member.image}
              alt={member.name}
              accentColor={member.accentColor}
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-1">
                {member.name}
                {member.nickname && (
                  <span className="text-muted-foreground font-normal text-lg ml-2">
                    ({member.nickname})
                  </span>
                )}
              </h3>
              <p className="text-muted-foreground mb-4">{member.career}</p>
              <SocialLinks member={member} />
            </div>
          </div>

          {/* Bio */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <User className="h-5 w-5" style={{ color: member.accentColor }} />
              소개
            </h4>
            <div className="space-y-3 text-muted-foreground">
              {member.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3">관심 분야</h4>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-3 py-1"
                  style={{ borderColor: `${member.accentColor}50`, color: member.accentColor }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Career History */}
          {member.careerHistory.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Briefcase className="h-5 w-5" style={{ color: member.accentColor }} />
                경력
              </h4>
              <div className="space-y-3">
                {member.careerHistory.map((entry, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 p-3 rounded-lg bg-card/30"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium">{entry.company}</span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-muted-foreground">{entry.role}</span>
                        {entry.current && (
                          <Badge
                            variant="secondary"
                            className="text-xs"
                            style={{ backgroundColor: `${member.accentColor}20`, color: member.accentColor }}
                          >
                            현재
                          </Badge>
                        )}
                      </div>
                      {entry.description && (
                        <p className="text-sm text-muted-foreground mt-1">{entry.description}</p>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground shrink-0">{entry.period}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {member.projects.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Github className="h-5 w-5" style={{ color: member.accentColor }} />
                프로젝트
              </h4>
              <div className="grid gap-2">
                {member.projects.map((project) => (
                  <ProjectBadge key={project.name} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* Philosophy */}
          {member.philosophy && (
            <div className="p-4 rounded-lg border border-border/50 bg-gradient-to-r from-card/50 to-transparent">
              <Quote className="h-6 w-6 mb-2" style={{ color: member.accentColor }} />
              <p className="text-lg italic text-muted-foreground">&ldquo;{member.philosophy}&rdquo;</p>
            </div>
          )}
        </div>
        <BorderBeam
          size={250}
          duration={15}
          delay={index * 3}
          colorFrom={member.accentColor}
          colorTo="#7AE7FF"
        />
      </MagicCard>
    </BlurFade>
  );
}

function MembersHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <BlurFade delay={0.1} inView>
            <span className="inline-block text-sm font-semibold text-[#7AE7FF] mb-4 tracking-wider uppercase">
              Our Team
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              NomaDamas <span className="text-gradient">멤버들</span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg md:text-xl text-muted-foreground">
              AI 오픈소스 생태계를 함께 만들어가는
              <br className="hidden sm:block" />
              열정적인 멤버들을 소개합니다.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

function MembersGrid() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <MemberDetailCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <MembersHero />
        <MembersGrid />
      </main>
      <Footer />
    </div>
  );
}

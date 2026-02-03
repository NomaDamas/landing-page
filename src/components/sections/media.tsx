"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Newspaper, Linkedin, Twitter, Youtube, ExternalLink } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface MediaItem {
  type: "article" | "linkedin" | "twitter" | "youtube";
  title: string;
  source: string;
  date: string;
  url: string;
  excerpt?: string;
  featured?: boolean;
}

const mediaTypeConfig: Record<
  MediaItem["type"],
  { icon: LucideIcon; color: string; label: string }
> = {
  article: { icon: Newspaper, color: "#9E7AFF", label: "기사" },
  linkedin: { icon: Linkedin, color: "#0A66C2", label: "LinkedIn" },
  twitter: { icon: Twitter, color: "#1DA1F2", label: "Twitter" },
  youtube: { icon: Youtube, color: "#FF0000", label: "YouTube" },
};

const mediaItems: MediaItem[] = [
  {
    type: "article",
    title: "SKT, '해커톤'·'코딩챌린지'로 대한민국 숨은 AI 고수 발굴 나섰다",
    source: "SK텔레콤 뉴스룸",
    date: "2025.11.04",
    url: "https://news.sktelecom.com/216436",
    excerpt:
      "SK텔레콤이 앤트로픽, 콕스웨이브와 함께 '클로드 코드 빌더 해커톤'을 개최. NomaDamas 멤버인 AutoRAG 팀이 보이스피싱 탐지 AI로 1등 수상.",
    featured: true,
  },
  {
    type: "article",
    title: "\"AI 수능 1등급 시대, 맘껏 놀며 창의력 키워야\"",
    source: "여성동아",
    date: "2025.01.15",
    url: "https://woman.donga.com/edu/article/all/12/5389828/1",
  },
  {
    type: "article",
    title: "과기정통부·NIPA, 오픈소스 페스티벌 2024 개최",
    source: "뉴시스",
    date: "2024.12.06",
    url: "https://www.newsis.com/view/NISX20241206_0002986470",
  },
  {
    type: "article",
    title: "KT '믿:음', AI 안전성 벤치마크 평가 1위",
    source: "전자신문",
    date: "2025.07.29",
    url: "https://www.etnews.com/20250729000116",
  },
];

export function Media() {
  const featuredItem = mediaItems.find((item) => item.featured);
  const regularItems = mediaItems.filter((item) => !item.featured);

  return (
    <section id="media" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BlurFade delay={0.1} inView>
            <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
              Media
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              미디어 & <span className="text-gradient">언론</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-muted-foreground">
              NomaDamas의 최신 소식과 언론 보도를 확인하세요.
            </p>
          </BlurFade>
        </div>

        {/* Featured Item */}
        {featuredItem && (
          <BlurFade delay={0.4} inView>
            <div className="max-w-5xl mx-auto mb-8">
              <Link
                href={featuredItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <MagicCard
                  className="relative cursor-pointer transition-transform hover:scale-[1.01]"
                  gradientColor={mediaTypeConfig[featuredItem.type].color}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="p-2 rounded-lg"
                        style={{
                          backgroundColor: `${mediaTypeConfig[featuredItem.type].color}20`,
                        }}
                      >
                        {(() => {
                          const IconComponent = mediaTypeConfig[featuredItem.type].icon;
                          return (
                            <IconComponent
                              className="h-5 w-5"
                              style={{ color: mediaTypeConfig[featuredItem.type].color }}
                            />
                          );
                        })()}
                      </div>
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: `${mediaTypeConfig[featuredItem.type].color}20`,
                          color: mediaTypeConfig[featuredItem.type].color,
                        }}
                      >
                        Featured
                      </span>
                      <span className="text-sm text-muted-foreground ml-auto">
                        {featuredItem.source} · {featuredItem.date}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {featuredItem.title}
                    </h3>
                    {featuredItem.excerpt && (
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {featuredItem.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-6 text-primary">
                      <span className="text-sm font-medium">자세히 보기</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                  <BorderBeam size={200} duration={12} />
                </MagicCard>
              </Link>
            </div>
          </BlurFade>
        )}

        {/* Regular Items Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {regularItems.map((item, index) => (
            <BlurFade key={item.title} delay={0.5 + index * 0.1} inView>
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <MagicCard
                  className="relative h-full cursor-pointer transition-transform hover:scale-[1.02]"
                  gradientColor={mediaTypeConfig[item.type].color}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className="p-2 rounded-lg"
                        style={{
                          backgroundColor: `${mediaTypeConfig[item.type].color}20`,
                        }}
                      >
                        {(() => {
                          const IconComponent = mediaTypeConfig[item.type].icon;
                          return (
                            <IconComponent
                              className="h-4 w-4"
                              style={{ color: mediaTypeConfig[item.type].color }}
                            />
                          );
                        })()}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {mediaTypeConfig[item.type].label}
                      </span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                    </div>
                    <h3 className="font-semibold mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.source} · {item.date}
                    </p>
                  </div>
                  <BorderBeam size={100} duration={10} delay={index * 3} />
                </MagicCard>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

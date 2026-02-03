"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GitFork, Lightbulb, Users2, Rocket } from "lucide-react";

const values = [
  {
    icon: GitFork,
    title: "오픈소스 정신",
    description:
      "지식은 공유될 때 더 큰 가치를 만듭니다. 우리는 코드, 아이디어, 경험을 오픈소스 정신으로 나눕니다.",
    gradient: "#9E7AFF",
  },
  {
    icon: Lightbulb,
    title: "노마드 정신",
    description:
      "전세계를 여행하며 맥북 하나 만으로 세상을 바꾸는 라이프스타일을 지향합니다. 🇬🇧🇵🇹🇯🇵🇹🇭🇮🇩🇺🇸",
    gradient: "#FE8BBB",
  },
  {
    icon: Users2,
    title: "AI Native",
    description:
      "AI는 우리를 대체하는 것이 아닌, 우리를 더 빠르고 뛰어난 빌더로 만들 것입니다.",
    gradient: "#7AE7FF",
  },
  {
    icon: Rocket,
    title: "실행력",
    description:
      "아이디어만으로는 부족합니다. 빠르게 실험하고, 실패하고, 배우며 실제로 만들어내는 것이 중요합니다.",
    gradient: "#FFB17A",
  },
];

export function Values() {
  return (
    <section id="values" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BlurFade delay={0.1} inView>
            <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
              Our Values
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              우리가 믿는 <span className="text-gradient">가치</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-muted-foreground">
              NomaDamas를 이끄는 네 가지 핵심 가치입니다.
              이 가치들이 우리의 문화와 활동의 기반이 됩니다.
            </p>
          </BlurFade>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <BlurFade key={value.title} delay={0.2 + index * 0.1} inView>
              <MagicCard
                className="relative h-full"
                gradientColor={value.gradient}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: `${value.gradient}20` }}
                    >
                      <value.icon
                        className="h-6 w-6"
                        style={{ color: value.gradient }}
                      />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
                <BorderBeam size={150} duration={10} delay={index * 2.5} />
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

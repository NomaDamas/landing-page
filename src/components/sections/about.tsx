"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Users, GitBranch, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 4,
    suffix: "+",
    label: "상주 멤버",
  },
  {
    icon: GitBranch,
    value: 13,
    suffix: "+",
    label: "오픈소스 프로젝트",
  },
  {
    icon: Star,
    value: 5700,
    suffix: "+",
    label: "총 Github Star",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <BlurFade delay={0.1} inView>
              <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
                About Us
              </span>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                함께 만들어가는{" "}
                <span className="text-gradient">AI 오픈소스</span> 생태계
              </h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                NomaDamas는 AI와 오픈소스에 열정을 가진 빌더들이 모여 함께 성장하는
                커뮤니티입니다. 실리콘밸리의 해커 문화를 서울 강남에서 경험하세요.
              </p>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                우리는 단순히 코드를 작성하는 것을 넘어, 오픈소스 정신으로 지식을
                공유하고, 협업하며, 함께 미래를 만들어갑니다. 여기서 만난 아이디어가
                세상을 바꾸는 프로젝트가 됩니다.
              </p>
            </BlurFade>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <BlurFade key={stat.label} delay={0.2 + index * 0.1} inView>
                <div className="relative group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold">
                      <NumberTicker value={stat.value} delay={0.5 + index * 0.1} />
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

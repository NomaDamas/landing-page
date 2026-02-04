"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { members } from "@/data/members";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProfileAvatar({
  src,
  alt,
  accentColor,
  index,
}: {
  src: string;
  alt: string;
  accentColor: string;
  index: number;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-background"
      style={{
        marginLeft: index === 0 ? 0 : "-1rem",
        zIndex: members.length - index,
        background: `linear-gradient(135deg, ${accentColor}, ${accentColor}80)`,
        padding: "2px",
      }}
    >
      <div className="w-full h-full rounded-full overflow-hidden bg-card">
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
            width={80}
            height={80}
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}

export function MembersCTA() {
  return (
    <section id="members-cta" className="relative py-24 md:py-32 overflow-hidden">
      <RetroGrid className="opacity-40" angle={65} />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <BlurFade delay={0.1} inView>
            <span className="inline-block text-sm font-semibold text-[#7AE7FF] mb-4 tracking-wider uppercase">
              Members
            </span>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              함께하는 <span className="text-gradient">멤버들</span>을 만나보세요
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="flex justify-center mb-8">
              {members.slice(0, 4).map((member, index) => (
                <ProfileAvatar
                  key={member.id}
                  src={member.image}
                  alt={member.name}
                  accentColor={member.accentColor}
                  index={index}
                />
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              NomaDamas의 핵심 멤버들이
              <br className="hidden sm:block" />
              AI 오픈소스 생태계를 만들어갑니다.
            </p>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <Link href="/members">
              <ShimmerButton
                className="inline-flex items-center justify-center whitespace-nowrap text-base font-medium px-8 py-3"
                background="linear-gradient(135deg, #7AE7FF 0%, #9E7AFF 100%)"
              >
                멤버 소개 보기
              </ShimmerButton>
            </Link>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

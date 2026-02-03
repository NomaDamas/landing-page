"use client";

import { Particles } from "@/components/magicui/particles";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        staticity={30}
        color="#9E7AFF"
        ease={80}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <AnimatedGradientText>
                서울 강남에서 만나요
              </AnimatedGradientText>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <SparklesText
              text="AI 오픈소스 빌더들의"
              className="block mb-2"
              sparklesCount={8}
            />
            <span className="text-gradient">아지트</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            AI와 오픈소스로 세상을 바꾸는 빌더들이 모이는 곳
            <br className="hidden md:block" />
            Build your ideas and grow together
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <ShimmerButton
              className="text-base font-semibold px-8 py-4"
              background="linear-gradient(135deg, #9E7AFF 0%, #FE8BBB 100%)"
            >
              가입 신청하기
            </ShimmerButton>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-border bg-card/50 hover:bg-card transition-colors backdrop-blur-sm"
            >
              더 알아보기
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

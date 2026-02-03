"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com/nomadamas", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/nomadamas", label: "Twitter" },
  { icon: MessageCircle, href: "https://discord.gg/nomadamas", label: "Discord" },
];

const navLinks = [
  { href: "#about", label: "소개" },
  { href: "#values", label: "가치" },
  { href: "#programs", label: "프로그램" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <BlurFade delay={0.1} inView className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gradient">NomaDamas</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              AI와 오픈소스로 미래를 함께 만들어가는 너드 커뮤니티.
              강남 한복판에서 실리콘밸리 해커 문화를 경험하세요.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </BlurFade>

          {/* Navigation */}
          <BlurFade delay={0.2} inView>
            <h3 className="font-semibold mb-4">바로가기</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </BlurFade>

          {/* Newsletter */}
          <BlurFade delay={0.3} inView>
            <h3 className="font-semibold mb-4">뉴스레터 구독</h3>
            <p className="text-sm text-muted-foreground mb-4">
              새로운 이벤트와 소식을 가장 먼저 받아보세요.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="이메일 주소"
                className="flex-1"
              />
              <Button type="submit" size="icon" className="shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </BlurFade>
        </div>

        <Separator className="mb-8" />

        {/* Bottom */}
        <BlurFade delay={0.4} inView>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>서울특별시 강남구 역삼동</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@nomadamas.com" className="hover:text-foreground transition-colors">
                hello@nomadamas.com
              </a>
            </div>
            <p>© {new Date().getFullYear()} NomaDamas. All rights reserved.</p>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}

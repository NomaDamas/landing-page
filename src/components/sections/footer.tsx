"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { Github, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com/NomaDamas", label: "GitHub" },
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
              AI Open Source Hacker House in Seoul backed by Markr AI
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
        </div>

        <Separator className="mb-8" />

        {/* Bottom */}
        <BlurFade delay={0.4} inView>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>서울특별시 강남구 논현동</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@nomadamas.com" className="hover:text-foreground transition-colors">
                 vkehfdl1@gmail.com
              </a>
            </div>
            <p>© {new Date().getFullYear()} NomaDamas. All rights reserved.</p>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}

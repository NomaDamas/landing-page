"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "NomaDamas는 어떤 곳인가요?",
    answer:
      "NomaDamas는 AI를 사랑하는 너드들이 함께 모여 살며 오픈소스를 만들어가는 해커하우스입니다.",
  },
  {
    question: "누구나 참여할 수 있나요?",
    answer:
      "네, AI와 오픈소스에 관심이 있다면 누구나 환영합니다! 개발 경험이 없어도 괜찮습니다. 배우고자 하는 열정과 함께 만들어가고자 하는 마음이 있다면 충분합니다.",
  },
  {
    question: "참여 비용이 있나요?",
    answer:
      "해커하우스 상주를 포함한 모든 활동은 무료입니다.",
  },
  {
    question: "해커하우스 위치가 어디인가요?",
    answer:
      "서울 강남구 논현동에 위치해 있습니다. 신논현역에서 도보 10분 거리에 있어 접근성이 좋으며, 40평 정도의 공간에 침실, 주방, 욕실, 사무실이 마련되어 있습니다.",
  },
  {
    question: "선발 절차가 있나요?",
    answer:
      "NomaDamas는 많은 아이디어와 빠른 실행력을 가진 분을 찾고 있습니다. 지원서를 작성해주시면 서류 심사 후, 온라인 및 오프라인 인터뷰를 통해 최종 선발이 이루어집니다.",
  },
  {
    question: "멤버가 되면 어떤 혜택이 있나요?",
    answer:
      "자유롭게 해커하우스를 오가며 NomaDamas 멤버들과 AI 오픈소스를 함께 빌드할 수 있습니다. GPU 서버 등의 리소스 지원도 제공됩니다.",
  },
  {
    question: "NomaDamas는 어떻게 운영되나요?",
    answer: "NomaDamas는 Markr AI의 후원으로 운영되고 있습니다."
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BlurFade delay={0.1} inView>
            <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
              FAQ
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              자주 묻는 <span className="text-gradient">질문</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-muted-foreground">
              NomaDamas에 대해 궁금한 점이 있으신가요?
              아래에서 자주 묻는 질문들을 확인해보세요.
            </p>
          </BlurFade>
        </div>

        {/* FAQ Accordion */}
        <BlurFade delay={0.4} inView>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 [&[data-state=open]>svg]:text-primary">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

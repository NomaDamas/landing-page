import {
  Header,
  Hero,
  About,
  Values,
  Programs,
  MembersCTA,
  Media,
  FAQ,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <MembersCTA />
        <Values />
        <Media />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

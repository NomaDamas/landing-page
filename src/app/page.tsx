import {
  Header,
  Hero,
  About,
  Values,
  Programs,
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
        <Values />
        <Media />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

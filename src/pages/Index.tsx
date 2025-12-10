import { useState, useCallback } from "react";
import { Preloader } from "@/components/Preloader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Questionnaire } from "@/components/Questionnaire";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      <div className={`min-h-screen bg-background ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <Header />
        <main>
          <Hero />
          
          <ScrollReveal pour>
            <About />
          </ScrollReveal>
          
          <ScrollReveal pour delay={50}>
            <Menu />
          </ScrollReveal>
          
          <ScrollReveal pour delay={50}>
            <Gallery />
          </ScrollReveal>
          
          <ScrollReveal pour delay={50}>
            <Reviews />
          </ScrollReveal>
          
          <ScrollReveal pour delay={50}>
            <Questionnaire />
          </ScrollReveal>
          
          <ScrollReveal pour delay={50}>
            <Contact />
          </ScrollReveal>
          
          <ScrollReveal pour delay={50}>
            <FAQ />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

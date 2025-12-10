import { useState, useCallback } from "react";
import { Preloader } from "@/components/Preloader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

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
          <About />
          <Menu />
          <Gallery />
          <Reviews />
          <Contact />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

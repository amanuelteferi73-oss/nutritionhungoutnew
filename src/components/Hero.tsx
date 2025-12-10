import { MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="The Nutrition Hangout storefront ribbon cutting ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 animate-fade-in-up">
            <span className="text-primary">Fuel Your Day</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-2 animate-fade-in-up stagger-1 font-light tracking-wide">
            Smoothies • Loaded Teas • Protein Snacks
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 animate-fade-in-up stagger-2">
            Locally made, protein-packed, community-loved.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in-up stagger-3">
            <a href="sms:+14092097696">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                <MessageCircle className="h-5 w-5" />
                Text to Order
              </Button>
            </a>
            <a href="#menu">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                See Menu
              </Button>
            </a>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto animate-fade-in-up stagger-4">
            <div className="bg-card/50 border border-border/50 rounded-xl p-4 flex items-center gap-3 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-primary/20">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">120 Gulf Fwy S, Texas City</p>
              </div>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-xl p-4 flex items-center gap-3 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-primary/20">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Today's Hours</p>
                <p className="text-sm font-medium">7:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}

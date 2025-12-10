import { useState } from "react";
import { Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import content from "@/data/content.json";

const categoryEmojis: Record<string, string> = {
  "Protein Shakes": "🥤",
  "Loaded Teas / Hydrates": "🍹",
  "FitKids Menu": "🧒",
  "Fat Reducing Shots": "⚡",
  "Protein Balls": "🍫",
  "Iced Protein Coffee": "☕",
  "Breakfast": "🧇"
};

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(content.menu.categories[0].name);
  const activeItems = content.menu.categories.find(c => c.name === activeCategory);

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Our Menu</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Fuel Your <span className="text-gradient-tropical">Adventure</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Protein-packed smoothies, energy-boosting teas, and healthy snacks made fresh daily
          </p>
          
          {/* Price Disclaimer */}
          <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 text-sm">
            <Info className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{content.menu.price_disclaimer}</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {content.menu.categories.map((category, index) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.name)}
              className={`btn-press transition-all duration-300 ${
                activeCategory === category.name 
                  ? "bg-primary shadow-tropical" 
                  : "hover:bg-primary/10"
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="mr-1">{categoryEmojis[category.name] || "🍽️"}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Active Category Content */}
        {activeItems && (
          <div className="max-w-4xl mx-auto">
            {/* Category Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-semibold mb-2 flex items-center justify-center gap-2">
                <span>{categoryEmojis[activeItems.name]}</span>
                {activeItems.name}
              </h3>
              <p className="text-muted-foreground">{activeItems.description}</p>
            </div>

            {/* Menu Items Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {activeItems.items.map((item, index) => (
                <div
                  key={item.name}
                  className="glass rounded-xl p-5 hover:shadow-tropical transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        {item.price_note === "ESTIMATE" && (
                          <Badge variant="outline" className="text-xs">
                            Est.
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-primary">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 mb-4 text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            <span>Ready to order?</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="sms:+14092097696">
              <Button size="lg" className="w-full sm:w-auto btn-press gap-2">
                Text Your Order
              </Button>
            </a>
            <a href="tel:+14092097696">
              <Button size="lg" variant="outline" className="w-full sm:w-auto btn-press">
                Call (409) 209-7696
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

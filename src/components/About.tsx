import { Heart, Users, Leaf, Award } from "lucide-react";
import ownerImage from "@/assets/owner.png";
import interiorImage from "@/assets/gallery-interior.png";

const features = [
  {
    icon: Leaf,
    title: "Nutrient-Dense",
    description: "Every drink is packed with vitamins, protein, and natural energy"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Locally crafted recipes using quality ingredients"
  },
  {
    icon: Users,
    title: "Community First",
    description: "Supporting Texas City events and neighbors"
  },
  {
    icon: Award,
    title: "Quality Promise",
    description: "High-protein, low-calorie options that actually taste great"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Our Story</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Welcome to Your <span className="text-gradient-tropical">Nutrition Hangout</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Where healthy meets delicious in the heart of Texas City
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-tropical">
              <img
                src={interiorImage}
                alt="The Nutrition Hangout interior with teal bar stools and tropical decor"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center gap-3">
                <img
                  src={ownerImage}
                  alt="Owner of The Nutrition Hangout"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <p className="font-medium text-sm">Sebastian & Brianna</p>
                  <p className="text-xs text-muted-foreground">Founders & Owners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold">
              More Than Just Smoothies — It's a Lifestyle
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              The Nutrition Hangout is a locally-owned smoothie and energy bar in Texas City, 
              founded to make nutrient-dense, crave-worthy drinks and snacks that help people 
              feel their best — every day.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              We focus on high-protein recipes, community events, and fast friendly service. 
              Whether you're fueling up before a workout, need an afternoon energy boost, or 
              treating yourself after a long day, we've got something delicious for you.
            </p>

            <div className="pt-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                "We created a space where everyone can enjoy delicious, nutritious treats 
                in a welcoming tropical atmosphere."
                <footer className="mt-2 text-sm text-muted-foreground not-italic">
                  — Sebastian Tropea & Brianna Alleman, Owners
                  <span className="block text-xs mt-1">(UNVERIFIED — names from directory listings)</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass rounded-xl p-6 text-center hover:shadow-tropical transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

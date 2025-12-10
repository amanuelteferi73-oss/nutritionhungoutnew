import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import content from "@/data/content.json";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Find Us</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Visit The <span className="text-gradient-tropical">Hangout</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stop by for your daily dose of nutrition — we'd love to see you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground mb-3">{content.contact.address}</p>
                  <a
                    href="https://maps.google.com/?q=120+Gulf+Fwy+S,+Texas+City,+TX+77591"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2 btn-press">
                      <Navigation className="h-4 w-4" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <a 
                    href="tel:+14092097696" 
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    {content.contact.phone}
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    {content.contact.text_order_note}
                  </p>
                  <div className="flex gap-2 mt-3">
                    <a href="tel:+14092097696">
                      <Button variant="outline" size="sm" className="gap-2 btn-press">
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                    </a>
                    <a href="sms:+14092097696">
                      <Button size="sm" className="gap-2 btn-press">
                        <MessageCircle className="h-4 w-4" />
                        Text Order
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-3">Hours</h3>
                  <div className="space-y-2">
                    {Object.entries(content.hours.schedule).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-sm">
                        <span className="capitalize text-muted-foreground">{day}</span>
                        <span className={hours === "Closed" ? "text-destructive" : "text-foreground"}>
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 border-t border-border pt-4">
                    ⚠️ {content.hours.note}
                    <span className="block mt-1 text-xs opacity-70">
                      ({content.hours.verification_status})
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] lg:min-h-[500px]">
            <div className="glass rounded-xl overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.3839473789754!2d-94.9053!3d29.3838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s120+Gulf+Fwy+S%2C+Texas+City%2C+TX+77591!5e0!3m2!1sen!2sus!4v1702252800000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Nutrition Hangout location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

import galleryInterior from "@/assets/gallery-interior.png";
import galleryDrinks1 from "@/assets/gallery-drinks-1.png";
import galleryCommunity from "@/assets/gallery-community.png";
import gallerySmoothie from "@/assets/gallery-smoothie.png";
import galleryWaffle from "@/assets/gallery-waffle.png";
import galleryDrinksLineup from "@/assets/gallery-drinks-lineup.png";
import menuBoard from "@/assets/menu-board.png";

const galleryImages = [
  {
    src: galleryInterior,
    alt: "The Nutrition Hangout interior with teal bar stools and tropical decor",
    caption: "Our tropical-inspired interior"
  },
  {
    src: galleryDrinksLineup,
    alt: "Colorful lineup of loaded teas and smoothies",
    caption: "Fresh loaded teas made daily"
  },
  {
    src: galleryDrinks1,
    alt: "Mexican Lollipop and Churro protein shakes",
    caption: "Mexican Lollipop & Churro Shakes"
  },
  {
    src: gallerySmoothie,
    alt: "French Toast Oatmeal smoothie",
    caption: "French Toast Oatmeal Smoothie"
  },
  {
    src: galleryWaffle,
    alt: "Strawberry Cheesecake protein waffle",
    caption: "Strawberry Cheesecake Waffle"
  },
  {
    src: galleryCommunity,
    alt: "Community Toys for Tots event",
    caption: "Giving back to our community"
  },
  {
    src: menuBoard,
    alt: "The Nutrition Hangout menu board",
    caption: "Our full menu"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Inside The <span className="text-gradient-tropical">Hangout</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a peek at our tropical paradise and delicious creations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.alt}
              onClick={() => setSelectedImage(image)}
              className={`relative group overflow-hidden rounded-xl aspect-square ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-foreground">{image.caption}</p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="p-3 rounded-full bg-primary/80 text-primary-foreground">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Social CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">See more on our social media</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/thenutritionhangout"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/thenutritionhangout"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="max-w-4xl max-h-[90vh] animate-scale-in">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center mt-4 text-muted-foreground">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}

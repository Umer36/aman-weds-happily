import { useState, useEffect } from "react";
import { Heart, Calendar, Sparkles, Music } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import heroImage from "@/assets/wedding-hero.jpg";

const scheduleEvents = [
  {
    date: "19 OCT",
    title: "Haldi bida for Bride",
    description: "Traditional turmeric ceremony for the bride",
    icon: Sparkles,
  },
  {
    date: "20 OCT",
    title: "Allah nami Khana",
    description: "Lunch - Monday",
    icon: Heart,
  },
  {
    date: "21 OCT",
    title: "Biya",
    description: "Morning ceremony",
    icon: Calendar,
  },
  {
    date: "21 OCT",
    title: "Badi Haldi",
    description: "Evening celebration",
    icon: Sparkles,
  },
  {
    date: "22 OCT",
    title: "Mehandi and Dance",
    description: "Intricate henna art and musical evening",
    icon: Music,
  },
  {
    date: "23 OCT",
    title: "Wedding",
    description: "The sacred wedding ceremony",
    icon: Heart,
  },
  {
    date: "24 OCT",
    title: "PuranPoli (Haat baratni)",
    description: "Traditional post-wedding celebration",
    icon: Calendar,
  },
  {
    date: "25 OCT",
    title: "Reception",
    description: "Celebration dinner and festivities",
    icon: Sparkles,
  },
];

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Remove loader completely after fade animation
    const hideTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Loader Screen */}
      {showLoader && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
          <div className="relative z-10 text-center px-4 animate-fade-in">
            <Heart className="w-20 h-20 mx-auto text-primary animate-pulse mb-8" fill="currentColor" />
            <h1 className="font-playfair text-7xl md:text-9xl font-bold text-white mb-6 drop-shadow-2xl">
              Aman's Wedding
            </h1>
            <p className="font-playfair text-3xl md:text-4xl text-white/90 drop-shadow-lg animate-pulse">
              A Celebration of Love
            </p>
          </div>
        </div>
      )}

      {/* Main Content - Schedule */}
      {!showLoader && (
        <div className="animate-fade-in">
          {/* Header */}
          <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Heart className="w-12 h-12 mx-auto text-primary animate-pulse" fill="currentColor" />
              </div>
              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-4">
                Aman's Wedding
              </h1>
              <p className="font-playfair text-2xl md:text-3xl text-muted-foreground mb-6">
                A Celebration of Love
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-sans">19 - 25 October 2024</span>
                </div>
              </div>
            </div>
          </section>

          {/* Schedule Section */}
          <section className="py-20 px-4 relative overflow-hidden">
            {/* Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <Heart
                  key={i}
                  className={`absolute text-primary/20 animate-float-heart-${(i % 3) + 1}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    width: `${20 + Math.random() * 30}px`,
                    height: `${20 + Math.random() * 30}px`,
                    animationDelay: `${Math.random() * 8}s`,
                  }}
                  fill="currentColor"
                />
              ))}
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
                  Wedding Schedule
                </h2>
                <p className="text-muted-foreground text-lg font-sans">
                  Join us for these beautiful moments
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl backdrop-blur-sm bg-card/80 animate-fade-in">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 hover:from-primary/15 hover:via-secondary/15 hover:to-accent/15 border-b-2 border-primary/20">
                      <TableHead className="font-playfair text-xl font-bold text-foreground py-6 px-8">
                        Date
                      </TableHead>
                      <TableHead className="font-playfair text-xl font-bold text-foreground py-6 px-8">
                        Event
                      </TableHead>
                      <TableHead className="font-playfair text-xl font-bold text-foreground py-6 px-8">
                        Details
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduleEvents.map((event, index) => {
                      const Icon = event.icon;
                      return (
                        <TableRow
                          key={index}
                          className="hover:bg-gradient-to-r hover:from-primary/5 hover:via-secondary/5 hover:to-accent/5 transition-all duration-500 group border-b border-border/50 table-shimmer"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <TableCell className="font-sans font-semibold text-primary py-6 px-8">
                            <div className="flex items-center gap-3">
                              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-lg">{event.date}</span>
                            </div>
                          </TableCell>
                          <TableCell className="py-6 px-8">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <span className="font-playfair text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {event.title}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="font-sans text-muted-foreground py-6 px-8">
                            <span className="text-base group-hover:text-foreground transition-colors duration-300">
                              {event.description}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

              {/* Decorative Footer */}
              <div className="text-center mt-20 animate-fade-in">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full shadow-lg backdrop-blur-sm border-2 border-primary/20 hover:scale-105 transition-transform duration-500">
                  <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
                  <p className="font-playfair text-xl text-foreground">
                    We can&apos;t wait to celebrate with you!
                  </p>
                  <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Index;

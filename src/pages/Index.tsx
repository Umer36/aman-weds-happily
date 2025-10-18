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
    day: "Sunday",
    title: "Haldi bida for Bride",
    description: "Traditional turmeric ceremony for the bride",
    icon: Sparkles,
  },
  {
    date: "20 OCT",
    day: "Monday",
    title: "Allah nami Khana",
    description: "Lunch - Monday",
    icon: Heart,
  },
  {
    date: "21 OCT",
    day: "Tuesday",
    title: "Biya",
    description: "Morning ceremony",
    icon: Calendar,
  },
  {
    date: "21 OCT",
    day: "Tuesday",
    title: "Badi Haldi",
    description: "Evening celebration",
    icon: Sparkles,
  },
  {
    date: "22 OCT",
    day: "Wednesday",
    title: "Mehandi and Dance",
    description: "Intricate henna art and musical evening",
    icon: Music,
  },
  {
    date: "23 OCT",
    day: "Thursday",
    title: "Wedding",
    description: "The sacred wedding ceremony",
    icon: Heart,
  },
  {
    date: "24 OCT",
    day: "Friday",
    title: "PuranPoli (Haat baratni)",
    description: "Traditional post-wedding celebration",
    icon: Calendar,
  },
  {
    date: "25 OCT",
    day: "Saturday",
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
        <div className="animate-fade-in relative overflow-hidden">
          {/* Floating Particles */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>
          
          {/* Header */}
          <section className="relative py-12 md:py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse-slow"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/5 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/5 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            </div>
            
            {/* Sparkle Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="absolute text-primary/20 animate-sparkle"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    fontSize: `${12 + Math.random() * 8}px`
                  }}
                />
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="mb-6 relative">
                <div className="absolute inset-0 animate-ping-slow">
                  <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto text-primary/30" fill="currentColor" />
                </div>
                <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto text-primary animate-heartbeat relative z-10" fill="currentColor" />
              </div>
              <h1 className="font-playfair text-4xl md:text-7xl font-bold text-foreground mb-4 animate-text-reveal bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-300% animate-gradient">
                Aman's Wedding
              </h1>
              <p className="font-playfair text-xl md:text-3xl text-muted-foreground mb-6 animate-slide-up-delayed">
                A Celebration of Love
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-foreground animate-fade-in-delayed">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-glow">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary animate-spin-slow" />
                  <span className="font-sans text-sm md:text-base">19 - 25 October 2024</span>
                </div>
              </div>
            </div>
          </section>

          {/* Schedule Section */}
          <section className="py-20 px-4 relative overflow-hidden">
            {/* Enhanced Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <Heart
                  key={i}
                  className={`absolute text-primary/15 animate-float-heart-${(i % 3) + 1} hover:text-primary/30 transition-colors duration-1000`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    width: `${15 + Math.random() * 25}px`,
                    height: `${15 + Math.random() * 25}px`,
                    animationDelay: `${Math.random() * 12}s`,
                    filter: 'blur(0.5px)'
                  }}
                  fill="currentColor"
                />
              ))}
            </div>
            
            {/* Magical Dust Effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-magical-dust"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${6 + Math.random() * 4}s`
                  }}
                />
              ))}
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-12 md:mb-16 animate-fade-in">
                <h2 className="font-playfair text-3xl md:text-6xl font-bold text-foreground mb-4 animate-slide-down">
                  Wedding Schedule
                </h2>
                <p className="text-muted-foreground text-base md:text-lg font-sans animate-slide-up">
                  Join us for these beautiful moments
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl backdrop-blur-sm bg-card/80 animate-fade-in transform hover:scale-[1.02] transition-all duration-700 ease-out relative group">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-border-glow"></div>
                <Table className="table-fixed w-full" style={{borderSpacing: '0'}}>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 hover:from-primary/15 hover:via-secondary/15 hover:to-accent/15 border-b-2 border-primary/20 transition-all duration-500">
                      <TableHead className="font-playfair text-lg md:text-xl font-bold text-foreground py-2 md:py-4 px-4 md:px-4">
                        Date
                      </TableHead>
                      <TableHead className="font-playfair text-lg md:text-xl font-bold text-foreground py-4 md:py-6 px-4 md:px-8">
                        Event
                      </TableHead>
                      <TableHead className="font-playfair text-lg md:text-xl font-bold text-foreground py-4 md:py-6 px-4 md:px-8 hidden sm:table-cell">
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
                          className="hover:bg-gradient-to-r hover:from-primary/5 hover:via-secondary/5 hover:to-accent/5 transition-all duration-500 group border-b border-border/50 transform hover:translate-x-2 hover:shadow-lg hover:shadow-primary/10 animate-slide-up opacity-0 relative overflow-hidden"
                          style={{ 
                            animationDelay: `${index * 0.15}s`,
                            animationFillMode: 'forwards'
                          }}
                        >
                          <TableCell className="font-sans font-semibold text-primary py-4 md:py-6 pl-4 md:pl-6 pr-0 -mr-4 relative">
                            {/* Row Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none"></div>
                            <div className="flex items-center gap-2 md:gap-3">
                              <Calendar className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                              <div className="flex flex-col">
                                <span className="text-sm md:text-lg font-bold">{event.date}</span>
                                <span className="text-xs md:text-sm text-muted-foreground font-medium">{event.day}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="py-4 md:py-6 pr-4 md:pr-6 pl-0 -ml-8">
                            <div className="flex items-center gap-2 md:gap-4">
                              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                                <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-playfair text-sm md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                  {event.title}
                                </span>
                                <span className="text-xs md:hidden text-muted-foreground mt-1">
                                  {event.description}
                                </span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="font-sans text-muted-foreground py-4 md:py-6 px-4 md:px-8 hidden sm:table-cell">
                            <span className="text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
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
              <div className="text-center mt-20 animate-fade-in relative">
                {/* Magical Circle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 border border-primary/10 rounded-full animate-spin-very-slow"></div>
                  <div className="absolute w-48 h-48 border border-secondary/10 rounded-full animate-spin-reverse"></div>
                </div>
                
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full shadow-lg backdrop-blur-sm border-2 border-primary/20 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative z-10 animate-float-gentle">
                  <Heart className="w-6 h-6 text-primary animate-heartbeat" fill="currentColor" />
                  <p className="font-playfair text-lg md:text-xl text-foreground animate-text-shimmer">
                    We can&apos;t wait to celebrate with you!
                  </p>
                  <Heart className="w-6 h-6 text-primary animate-heartbeat" fill="currentColor" style={{animationDelay: '0.5s'}} />
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

import { Heart, Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/wedding-hero.jpg";

const scheduleEvents = [
  {
    time: "10:00 AM",
    title: "Welcome & Registration",
    description: "Guest arrival and welcome refreshments",
    icon: Heart,
  },
  {
    time: "11:00 AM",
    title: "Haldi Ceremony",
    description: "Traditional turmeric ceremony with family",
    icon: Calendar,
  },
  {
    time: "2:00 PM",
    title: "Lunch Break",
    description: "Traditional Indian wedding feast",
    icon: Clock,
  },
  {
    time: "4:00 PM",
    title: "Mehendi Ceremony",
    description: "Intricate henna art and music",
    icon: Heart,
  },
  {
    time: "7:00 PM",
    title: "Sangeet Night",
    description: "Musical evening with dance performances",
    icon: Calendar,
  },
  {
    time: "11:00 AM (Next Day)",
    title: "Wedding Ceremony",
    description: "The sacred wedding rituals",
    icon: Heart,
  },
  {
    time: "1:00 PM",
    title: "Reception & Dinner",
    description: "Celebration dinner and festivities",
    icon: Clock,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-8">
            <Heart className="w-16 h-16 mx-auto text-primary animate-pulse" fill="currentColor" />
          </div>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            Aman's Wedding
          </h1>
          <p className="font-playfair text-2xl md:text-3xl text-white/90 mb-8 drop-shadow">
            A Celebration of Love
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-sans">December 15-16, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-sans">Grand Celebration Hall</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
              Wedding Schedule
            </h2>
            <p className="text-muted-foreground text-lg font-sans">
              Join us for these beautiful moments
            </p>
          </div>

          <div className="space-y-6">
            {scheduleEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h3 className="font-playfair text-2xl font-semibold text-foreground">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-semibold">
                            <Clock className="w-4 h-4" />
                            <span className="font-sans">{event.time}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground font-sans">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Decorative Footer */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-card rounded-full shadow-lg">
              <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
              <p className="font-playfair text-xl text-foreground">
                We can't wait to celebrate with you!
              </p>
              <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

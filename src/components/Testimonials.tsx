import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: "James Mwangi",
      company: "Mwangi Construction Ltd",
      location: "Monrovia, Liberia",
      text: "Got my dump truck from Equipment King — smooth process and great service! The team was professional and transparent throughout.",
      rating: 5,
      avatar: "JM",
    },
    {
      name: "Fatou Diallo",
      company: "Diallo Logistics Group",
      location: "Bamako, Mali",
      text: "Honest people, quality equipment, no hidden costs. Equipment King is our trusted partner for all heavy-duty truck needs.",
      rating: 5,
      avatar: "FD",
    },
    {
      name: "Mohamed Kamara",
      company: "Kamara Transport Co.",
      location: "Freetown, Sierra Leone",
      text: "We purchased three cargo trucks for our transport company. Excellent quality and competitive pricing. Very satisfied!",
      rating: 5,
      avatar: "MK",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("whatClientsSay")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t("trustedByCompanies")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-500 animate-fade-in hover-scale overflow-hidden"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: 'var(--shadow-md)',
                transition: 'var(--transition-bounce)'
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-accent/10 group-hover:text-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-all duration-300 hover:scale-125" style={{ animation: `float 2s ease-in-out infinite`, animationDelay: `${i * 200}ms` }} />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 group-hover:text-foreground transition-colors">"{testimonial.text}"</p>

              {/* Author info */}
              <div className="border-t border-border pt-4 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

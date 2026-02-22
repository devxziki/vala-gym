import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Target, Users, Trophy, Star, ArrowRight, Flame, Heart, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-gym.jpg";
import trainingImage from "@/assets/training-action.jpg";

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Vala Gym interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-heading text-accent text-sm md:text-base uppercase tracking-[0.3em] mb-4 neon-glow">
              Ahmedabad's Premium Fitness Destination
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-none mb-6">
              Transform Your Body.
              <br />
              <span className="gradient-text-red">Transform Your Life.</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-10 font-body">
              Where strength meets discipline. Build the body you've always wanted
              with world-class equipment, expert trainers, and an unstoppable community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/membership"
                className="bg-primary text-primary-foreground px-8 py-4 font-heading text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover-scale inline-flex items-center justify-center gap-2"
              >
                Join Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="border border-accent text-accent px-8 py-4 font-heading text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all inline-flex items-center justify-center gap-2"
              >
                Book Free Trial
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Vala Gym */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Why Us</p>
            <h2 className="section-title">
              Why Choose <span className="text-primary">Vala Gym</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Dumbbell, title: "Premium Equipment", desc: "State-of-the-art machines and free weights from top global brands." },
              { icon: Users, title: "Expert Trainers", desc: "Certified professionals dedicated to your fitness journey." },
              { icon: Target, title: "Proven Results", desc: "Hundreds of transformations that speak for themselves." },
              { icon: Zap, title: "High Energy", desc: "An electric atmosphere that fuels your every rep." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-card border border-border p-8 text-center group hover:border-primary/50 transition-colors duration-300">
                  <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-heading text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">What We Offer</p>
            <h2 className="section-title">
              Our <span className="text-primary">Programs</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Dumbbell, title: "Weight Training" },
              { icon: Flame, title: "Fat Loss Programs" },
              { icon: Users, title: "Personal Training" },
              { icon: Zap, title: "Strength & Conditioning" },
              { icon: Heart, title: "Cardio Training" },
              { icon: Target, title: "Diet & Nutrition" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="bg-background border border-border p-6 flex items-center gap-4 group hover:border-primary/50 transition-colors duration-300 cursor-pointer">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base">{item.title}</h3>
                    <p className="text-muted-foreground text-xs mt-1">Learn more →</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-primary font-heading text-sm uppercase tracking-widest hover:text-accent transition-colors"
            >
              View All Programs <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={trainingImage} alt="Intense training" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative z-10 container mx-auto text-center">
          <AnimatedSection>
            <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Real Results</p>
            <h2 className="section-title mb-8">
              Transformation <span className="text-primary">Results</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { value: "500+", label: "Members" },
                { value: "50+", label: "Transformations" },
                { value: "10+", label: "Expert Trainers" },
                { value: "5+", label: "Years Experience" },
              ].map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.1}>
                  <div>
                    <p className="text-3xl md:text-5xl font-heading font-bold text-primary">{stat.value}</p>
                    <p className="text-muted-foreground text-sm mt-1 font-heading uppercase tracking-wide">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Testimonials</p>
            <h2 className="section-title">
              What Our <span className="text-primary">Members</span> Say
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rahul Patel", text: "Vala Gym completely changed my life. Lost 20kg in 6 months with their expert guidance." },
              { name: "Priya Shah", text: "The trainers here are phenomenal. Best gym experience I've ever had in Ahmedabad." },
              { name: "Amit Desai", text: "World-class equipment and an incredible atmosphere. Wouldn't train anywhere else." },
            ].map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="bg-card border border-border p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 italic">"{t.text}"</p>
                  <p className="font-heading text-sm uppercase tracking-wide">{t.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg max-w-xl mx-auto mb-8">
              Join Vala Gym today and take the first step towards a stronger, healthier you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/membership"
                className="bg-background text-foreground px-8 py-4 font-heading text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all hover-scale inline-flex items-center justify-center gap-2"
              >
                Join Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="border border-primary-foreground text-primary-foreground px-8 py-4 font-heading text-sm uppercase tracking-widest hover:bg-primary-foreground hover:text-primary transition-all inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;

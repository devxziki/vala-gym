import { Target, Eye, Dumbbell, Heart, Users, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import gymInterior from "@/assets/gym-interior.jpg";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={gymInterior} alt="Vala Gym interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Our Story</p>
            <h1 className="section-title mb-4">
              About <span className="text-primary">Vala Gym</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Born from a passion for fitness and a vision to build Ahmedabad's most premium training facility.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl mb-4">
                  Our <span className="text-primary">Story</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Vala Gym was founded with one mission: to create a fitness space that doesn't compromise. We believe every individual deserves access to world-class equipment, expert guidance, and a community that pushes them beyond their limits.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  From a small training space to Ahmedabad's most recognized fitness brand, our journey has been fueled by the transformations of hundreds of members who trusted us with their goals.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border p-6 text-center">
                  <p className="text-3xl font-heading font-bold text-primary">5+</p>
                  <p className="text-muted-foreground text-xs font-heading uppercase mt-1">Years</p>
                </div>
                <div className="bg-card border border-border p-6 text-center">
                  <p className="text-3xl font-heading font-bold text-accent">500+</p>
                  <p className="text-muted-foreground text-xs font-heading uppercase mt-1">Members</p>
                </div>
                <div className="bg-card border border-border p-6 text-center">
                  <p className="text-3xl font-heading font-bold text-primary">10+</p>
                  <p className="text-muted-foreground text-xs font-heading uppercase mt-1">Trainers</p>
                </div>
                <div className="bg-card border border-border p-6 text-center">
                  <p className="text-3xl font-heading font-bold text-accent">50+</p>
                  <p className="text-muted-foreground text-xs font-heading uppercase mt-1">Transformations</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-background border border-border p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-4">
                  <Target size={24} />
                </div>
                <h3 className="font-heading text-xl mb-3">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To empower every individual to achieve their peak physical potential through expert training, cutting-edge facilities, and an unbreakable community spirit.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-background border border-border p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent mb-4">
                  <Eye size={24} />
                </div>
                <h3 className="font-heading text-xl mb-3">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To be Gujarat's most trusted fitness brand — known for transforming lives, not just bodies. We envision a community where fitness is a lifestyle, not a chore.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">The Team</p>
            <h2 className="section-title">
              Our <span className="text-primary">Trainers</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Vikram Singh", role: "Head Trainer & Strength Coach", icon: Dumbbell },
              { name: "Neha Sharma", role: "Certified Nutritionist & Fitness Coach", icon: Heart },
              { name: "Arjun Patel", role: "Personal Trainer & Bodybuilding Expert", icon: Award },
            ].map((trainer, i) => (
              <AnimatedSection key={trainer.name} delay={i * 0.1}>
                <div className="bg-card border border-border p-8 text-center group hover:border-primary/50 transition-colors">
                  <div className="w-20 h-20 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                    <trainer.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-lg">{trainer.name}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{trainer.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Our Philosophy
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
              "Fitness is not about being better than someone else. It's about being better than you used to be. At Vala Gym, we don't just build muscles — we build mindset, discipline, and an unbreakable spirit."
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default About;

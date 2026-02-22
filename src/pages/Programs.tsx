import { Link } from "react-router-dom";
import { Dumbbell, Flame, Users, Zap, Heart, Target, ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const programs = [
  {
    icon: Dumbbell,
    title: "Weight Training",
    desc: "Build lean muscle mass with structured progressive overload programs using premium free weights and machines.",
    features: ["Customized workout plans", "Progressive overload tracking", "Muscle group targeting"],
  },
  {
    icon: Flame,
    title: "Fat Loss Programs",
    desc: "Scientifically-designed fat burning programs combining HIIT, circuit training, and nutrition guidance.",
    features: ["HIIT workouts", "Calorie tracking support", "Weekly progress monitoring"],
  },
  {
    icon: Users,
    title: "Personal Training",
    desc: "One-on-one sessions with certified trainers who create personalized plans for your unique goals.",
    features: ["1-on-1 coaching", "Goal-specific programming", "Flexible scheduling"],
  },
  {
    icon: Zap,
    title: "Strength & Conditioning",
    desc: "Build raw power and functional strength through compound movements and athletic conditioning.",
    features: ["Compound lifts focus", "Athletic performance", "Periodized training"],
  },
  {
    icon: Heart,
    title: "Cardio Training",
    desc: "Improve endurance and cardiovascular health with varied cardio equipment and group sessions.",
    features: ["Treadmills & ellipticals", "Cycling sessions", "Heart rate monitoring"],
  },
  {
    icon: Target,
    title: "Diet & Nutrition",
    desc: "Expert nutrition guidance tailored to your body type, goals, and lifestyle for sustainable results.",
    features: ["Custom meal plans", "Macro tracking", "Supplement guidance"],
  },
];

const pricingPlans = [
  { duration: "1 Month", price: "₹2,500", perMonth: "₹2,500/mo" },
  { duration: "3 Months", price: "₹6,000", perMonth: "₹2,000/mo", popular: false },
  { duration: "6 Months", price: "₹10,000", perMonth: "₹1,667/mo", popular: true },
  { duration: "1 Year", price: "₹18,000", perMonth: "₹1,500/mo" },
];

const Programs = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-background text-center">
        <div className="container mx-auto">
          <AnimatedSection>
            <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">What We Offer</p>
            <h1 className="section-title mb-4">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="section-subtitle mx-auto">
              From beginners to competitive athletes, we have the perfect program for every fitness goal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-card pt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div className="bg-background border border-border p-8 h-full group hover:border-primary/50 transition-colors duration-300">
                  <div className="w-14 h-14 flex items-center justify-center bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <p.icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check size={14} className="text-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Pricing</p>
            <h2 className="section-title">
              Simple <span className="text-primary">Pricing</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.duration} delay={i * 0.1}>
                <div className={`border p-8 text-center relative ${plan.popular ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-heading uppercase tracking-widest px-4 py-1">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-heading text-lg mb-2">{plan.duration}</h3>
                  <p className="text-3xl font-heading font-bold text-primary mb-1">{plan.price}</p>
                  <p className="text-muted-foreground text-xs mb-6">{plan.perMonth}</p>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-heading text-xs uppercase tracking-widest transition-all hover-scale ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    Join Now <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programs;

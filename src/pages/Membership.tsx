import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    name: "1 Month",
    price: "₹2,500",
    perMonth: "₹2,500/mo",
    features: ["Full gym access", "Locker facility", "Basic fitness assessment"],
  },
  {
    name: "3 Months",
    price: "₹6,000",
    perMonth: "₹2,000/mo",
    features: ["Full gym access", "Locker facility", "Fitness assessment", "1 personal training session"],
  },
  {
    name: "6 Months",
    price: "₹10,000",
    perMonth: "₹1,667/mo",
    popular: true,
    features: ["Full gym access", "Locker facility", "Monthly fitness assessment", "3 personal training sessions", "Diet consultation"],
  },
  {
    name: "1 Year",
    price: "₹18,000",
    perMonth: "₹1,500/mo",
    features: ["Full gym access", "Locker facility", "Monthly fitness assessment", "6 personal training sessions", "Diet plan included", "Priority booking"],
  },
];

const Membership = () => {
  return (
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Membership</p>
            <h1 className="section-title mb-4">
              Choose Your <span className="text-primary">Plan</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Flexible plans designed to fit your lifestyle and fitness goals.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div
                  className={`border p-8 flex flex-col h-full relative ${
                    plan.popular ? "border-primary bg-primary/5" : "border-border bg-card"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-heading uppercase tracking-widest px-4 py-1">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-heading text-xl mb-1">{plan.name}</h3>
                  <p className="text-3xl font-heading font-bold text-primary mb-1">{plan.price}</p>
                  <p className="text-muted-foreground text-xs mb-6">{plan.perMonth}</p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={14} className="text-accent mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

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

export default Membership;

import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  { name: "Rahul Patel", rating: 5, text: "Vala Gym completely transformed my physique. I lost 20kg in just 6 months with their personalized training and nutrition plans. The trainers here genuinely care about your progress.", period: "Member for 1 year" },
  { name: "Priya Shah", rating: 5, text: "As a woman, I was initially hesitant about joining a gym, but Vala Gym's inclusive environment made me feel welcome from day one. The female trainers are incredibly supportive.", period: "Member for 8 months" },
  { name: "Amit Desai", rating: 5, text: "The equipment quality is unmatched in Ahmedabad. Coming from a Gold's Gym background, I can say Vala Gym stands toe-to-toe with international standards.", period: "Member for 2 years" },
  { name: "Sneha Joshi", rating: 5, text: "The personal training sessions are worth every rupee. My trainer designed a program specifically for my postpartum recovery and the results have been amazing.", period: "Member for 6 months" },
  { name: "Karan Mehta", rating: 4, text: "Great atmosphere, great equipment, great people. The only gym in Ahmedabad where I've seen consistent results. Highly recommend the 6-month plan.", period: "Member for 1.5 years" },
  { name: "Divya Patel", rating: 5, text: "From cardio to strength training, everything is top-notch. The diet consultation that comes with the membership is a game changer. Down 15kg and feeling stronger than ever!", period: "Member for 10 months" },
];

const Testimonials = () => {
  return (
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Reviews</p>
            <h1 className="section-title mb-4">
              What Our <span className="text-primary">Members</span> Say
            </h1>
            <p className="section-subtitle mx-auto">
              Real stories from real people who transformed their lives at Vala Gym.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.08}>
                <div className="bg-card border border-border p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className={j < t.rating ? "text-accent fill-accent" : "text-border"}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 italic flex-1">"{t.text}"</p>
                  <div>
                    <p className="font-heading text-sm uppercase tracking-wide">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.period}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;

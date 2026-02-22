import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-heading text-sm uppercase tracking-[0.3em] mb-2">Get in Touch</p>
            <h1 className="section-title mb-4">
              <span className="text-primary">Contact</span> Us
            </h1>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl mb-4">Visit Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm">Vala Gym</p>
                        <p className="text-muted-foreground text-sm">Ahmedabad, Gujarat, India</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-primary shrink-0" />
                      <a href="tel:+919876543210" className="text-sm hover:text-primary transition-colors">+91 98765 43210</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={20} className="text-primary shrink-0" />
                      <a href="mailto:info@valagym.com" className="text-sm hover:text-primary transition-colors">info@valagym.com</a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-accent text-accent-foreground py-3 font-heading text-xs uppercase tracking-widest text-center hover-scale transition-all inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex-1 bg-primary text-primary-foreground py-3 font-heading text-xs uppercase tracking-widest text-center hover-scale transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Phone size={16} /> Call Now
                  </a>
                </div>

                {/* Map */}
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7091448!2d72.43965!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vala Gym Location"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.1}>
              <form onSubmit={handleSubmit} className="bg-card border border-border p-8 space-y-5">
                <h3 className="font-heading text-xl mb-2">Send a Message</h3>
                {[
                  { key: "name", label: "Name", type: "text" },
                  { key: "phone", label: "Phone Number", type: "tel" },
                  { key: "email", label: "Email", type: "email" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-xs font-heading uppercase tracking-wide text-muted-foreground mb-1 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                      maxLength={field.key === "name" ? 100 : 255}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-heading uppercase tracking-wide text-muted-foreground mb-1 block">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    maxLength={1000}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 font-heading text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors hover-scale"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

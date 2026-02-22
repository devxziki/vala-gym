import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Vala%20Gym!%20I'm%20interested%20in%20joining."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover-scale animate-pulse-glow"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;

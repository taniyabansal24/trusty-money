import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Card data - easily expandable
const CARD_DATA = [
  {
    id: 1,
    position: "left",
    initials: "RK",
    name: "Rohan Kapoor",
    role: "Owner, Glow Space",
    amount: "₹ 5,00,000",
    status: "Payment Sent",
    statusColor: "green",
    bgColor: "blue",
    delay: 0,
  },
  {
    id: 2,
    position: "right",
    initials: "TE",
    name: "Twist Enterprises",
    role: "Alaska, USA",
    amount: "$ 5,000",
    status: "Payment Received",
    statusColor: "blue",
    bgColor: "green",
    delay: 2000,
  },
  {
    id: 3,
    position: "left",
    initials: "SR",
    name: "Sophia Rodriguez",
    role: "CEO, TechFlow Inc",
    amount: "€ 12,500",
    status: "Payment Sent",
    statusColor: "green",
    bgColor: "purple",
    delay: 4000,
  },
  {
    id: 4,
    position: "right",
    initials: "TK",
    name: "Takashi Kimura",
    role: "Tokyo, Japan",
    amount: "¥ 1,250,000",
    status: "Payment Received",
    statusColor: "blue",
    bgColor: "amber",
    delay: 6000,
  },
  {
    id: 5,
    position: "left",
    initials: "AG",
    name: "Aisha Gupta",
    role: "Director, Urban Living",
    amount: "₹ 8,75,000",
    status: "Payment Sent",
    statusColor: "green",
    bgColor: "pink",
    delay: 8000,
  },
];

// Color mappings for consistent styling
const COLOR_MAP = {
  blue: {
    from: "from-blue-100",
    to: "to-blue-50",
    text: "text-blue-600",
    bg: "bg-blue-50",
  },
  green: {
    from: "from-green-100",
    to: "to-green-50",
    text: "text-green-600",
    bg: "bg-green-50",
  },
  purple: {
    from: "from-purple-100",
    to: "to-purple-50",
    text: "text-purple-600",
    bg: "bg-purple-50",
  },
  amber: {
    from: "from-amber-100",
    to: "to-amber-50",
    text: "text-amber-600",
    bg: "bg-amber-50",
  },
  pink: {
    from: "from-pink-100",
    to: "to-pink-50",
    text: "text-pink-600",
    bg: "bg-pink-50",
  },
};

interface CardProps {
  card: typeof CARD_DATA[0];
  isVisible: boolean;
}

function Card({ card, isVisible }: CardProps) {
  const color = COLOR_MAP[card.bgColor as keyof typeof COLOR_MAP];
  const statusColor = card.statusColor === "green" ? "green" : "blue";

  return (
    <motion.div
      key={`card-${card.id}`}
      initial={{ opacity: 0, x: card.position === "left" ? -120 : 120 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : (card.position === "left" ? -120 : 120) }}
      exit={{ opacity: 0, x: card.position === "left" ? -120 : 120 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut",
        opacity: { duration: 0.3 }
      }}
      className={`absolute ${card.position === "left" ? "left-0 -translate-x-full" : "right-0 translate-x-full"} top-1/2 -translate-y-1/2 pointer-events-auto`}
    >
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 h-40 w-60 backdrop-blur-sm bg-white/95">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${color.from} ${color.to} flex items-center justify-center shrink-0`}>
            <span className={`${color.text} font-semibold text-sm`}>
              {card.initials}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm truncate">
              {card.name}
            </h3>
            <p className="text-xs text-gray-600 truncate">
              {card.role}
            </p>
          </div>
        </div>

        <div className={`p-3 ${color.bg} rounded-xl`}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-600">
              {card.status.includes("Sent") ? "Sent" : "Received"}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-base font-bold text-gray-900">
                {card.amount}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className={`${statusColor === "green" ? "text-green-600" : "text-blue-600"} font-medium`}>
              {card.status}
            </span>
            <div className={`w-2 h-2 rounded-full ${statusColor === "green" ? "bg-green-500" : "bg-blue-500"}`}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function GlobeCards() {
  const [visibleCardId, setVisibleCardId] = useState<number | null>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  // Cleanup function
  const clearAllTimeouts = () => {
    timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    timeoutRefs.current = [];
  };

  // Single card animation sequence
  const animateCard = (cardId: number, delay: number) => {
    const timeout = setTimeout(() => {
      setVisibleCardId(cardId);
      
      // Hide card after 3 seconds
      const hideTimeout = setTimeout(() => {
        setVisibleCardId(null);
      }, 3000);
      
      timeoutRefs.current.push(hideTimeout);
    }, delay);
    
    timeoutRefs.current.push(timeout);
  };

  // Main animation loop
  const startAnimationLoop = () => {
    clearAllTimeouts();
    
    // Initial delay before starting
    const initialDelay = setTimeout(() => {
      // Animate each card in sequence
      CARD_DATA.forEach((card) => {
        animateCard(card.id, card.delay);
      });

      // Loop after all cards have shown (total duration + pause)
      const totalDuration = Math.max(...CARD_DATA.map(c => c.delay)) + 4000; // 4 seconds after last card
      const loopTimeout = setTimeout(() => {
        startAnimationLoop();
      }, totalDuration);
      
      timeoutRefs.current.push(loopTimeout);
    }, 1000); // 1 second initial delay
    
    timeoutRefs.current.push(initialDelay);
  };

  useEffect(() => {
    startAnimationLoop();
    
    return () => {
      clearAllTimeouts();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      <AnimatePresence mode="wait">
        {CARD_DATA.map((card) => (
          <Card
            key={card.id}
            card={card}
            isVisible={visibleCardId === card.id}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

// Alternative: Sequential animation with staggered entry
export function GlobeCardsStaggered() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = () => {
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    timeoutRefs.current = [];
  };

  useEffect(() => {
    clearAllTimeouts();

    // Show next card in sequence
    const showNextCard = () => {
      if (currentIndex >= CARD_DATA.length) {
        // All cards shown, reset and restart
        const resetTimeout = setTimeout(() => {
          setVisibleCards([]);
          setCurrentIndex(0);
          showNextCard();
        }, 3000); // Wait 3 seconds before restarting
        timeoutRefs.current.push(resetTimeout);
        return;
      }

      const currentCard = CARD_DATA[currentIndex];
      
      // Show current card
      setVisibleCards(prev => [...prev, currentCard.id]);
      
      // Hide after 3 seconds
      const hideTimeout = setTimeout(() => {
        setVisibleCards(prev => prev.filter(id => id !== currentCard.id));
        
        // Move to next card after a brief pause
        const nextTimeout = setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
          showNextCard();
        }, 1000); // 1 second pause between cards
        
        timeoutRefs.current.push(nextTimeout);
      }, 3000);
      
      timeoutRefs.current.push(hideTimeout);
    };

    // Start after initial delay
    const startTimeout = setTimeout(() => {
      showNextCard();
    }, 1000);
    
    timeoutRefs.current.push(startTimeout);

    return clearAllTimeouts;
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      <AnimatePresence>
        {CARD_DATA.map((card) => (
          <Card
            key={card.id}
            card={card}
            isVisible={visibleCards.includes(card.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

// Enhanced version with random positions
export function GlobeCardsRandom() {
  const [activeCard, setActiveCard] = useState<typeof CARD_DATA[0] | null>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const showRandomCard = () => {
      const randomIndex = Math.floor(Math.random() * CARD_DATA.length);
      const card = CARD_DATA[randomIndex];
      
      setActiveCard(card);
      
      // Hide after random time between 2-4 seconds
      const hideTimeout = setTimeout(() => {
        setActiveCard(null);
        
        // Wait random time before next card (1-3 seconds)
        const nextTimeout = setTimeout(() => {
          showRandomCard();
        }, 1000 + Math.random() * 2000);
        
        timeoutRefs.current.push(nextTimeout);
      }, 2000 + Math.random() * 2000);
      
      timeoutRefs.current.push(hideTimeout);
    };

    // Start after initial delay
    const startTimeout = setTimeout(() => {
      showRandomCard();
    }, 1500);
    
    timeoutRefs.current.push(startTimeout);

    const clearAllTimeouts = () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
      timeoutRefs.current = [];
    };

    return clearAllTimeouts;
  }, []);

  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      <AnimatePresence>
        {activeCard && (
          <Card
            key={activeCard.id}
            card={activeCard}
            isVisible={true}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/ui';
import { useInView } from '../hooks/useInView';

// Animated Text Component - Letter by letter animation
const AnimatedText = ({ text, delay = 0, className = '', inline = false }) => {
  const letters = text.split('');
  
  return (
    <span className={className} style={{ display: inline ? 'inline' : 'inline-block', whiteSpace: 'nowrap' }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: delay + index * 0.03,
            duration: 0.3
          }}
          style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

// Animated Word Component - Word by word animation
const AnimatedWords = ({ text, delay = 0, className = '' }) => {
  const words = text.split(' ');
  
  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: delay + index * 0.1,
            duration: 0.5
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// Problem data with icons and animations - Network style
const problems = [
  {
    id: 1,
    title: 'Manual Invoicing',
    icon: '📄',
    color: '#EF4444',
    description: 'Invoicing is manual and inconsistent across countries, and tax compliance varies across countries.',
    position: { x: -290, y: -200 },
    connectsToCenter: true
  },
  {
    id: 2,
    title: 'Fragmented Compliance',
    icon: '🔒',
    color: '#F59E0B',
    description: 'Reconciliation across banks, gateways, and ERPs is fragmented. Compliance requirements change by geography and transaction type.',
    position: { x: -290, y: 100 },
    connectsToCenter: true
  },
  {
    id: 3,
    title: 'Expensive & Slow Collections',
    icon: '💸',
    color: '#8B5CF6',
    description: 'Payments are expensive, slow, and opaque. Banks add hidden FX margins, and settlements are slow.',
    position: { x: 230, y: -200 },
    connectsToCenter: true
  },
  {
    id: 4,
    title: 'Poor Cash-Flow Visibility',
    icon: '📊',
    color: '#06B6D4',
    description: 'Overseas clients follow their own payment cycles, tracking becomes difficult. Businesses lack visibility over their global cash flows.',
    position: { x: 150, y: 180 },
    connectsToCenter: true
  }
];

// Network Edge/Connection Line Component
const NetworkEdge = ({ from, to, index, isVisible }) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.sqrt(dx ** 2 + dy ** 2);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ delay: index * 0.2, duration: 0.4 }}
      style={{
        position: 'absolute',
        left: `calc(50% + ${from.x}px)`,
        top: `calc(50% + ${from.y}px)`,
        width: distance,
        height: 2,
        transformOrigin: '0 0',
        transform: `rotate(${angle}deg)`,
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      <svg width="100%" height="40" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id={`edge-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Static connection line */}
        <motion.line
          x1="0"
          y1="20"
          x2={distance}
          y2="20"
          stroke={`url(#edge-gradient-${index})`}
          strokeWidth="2"
          strokeDasharray="1,1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{
            delay: index * 0.2,
            duration: 0.8,
            ease: 'easeInOut'
          }}
        />
        
        {/* Animated traveling arrows */}
        {[0, 1].map((i) => (
          <motion.g
            key={i}
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: [0, distance - 20],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2,
              delay: index * 0.2 + 0.8 + i * 1,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {/* Arrow shape */}
            <polygon
              points="0,15 0,25 12,20"
              fill="#8B5CF6"
              opacity="0.9"
            />
          </motion.g>
        ))}
      </svg>
    </motion.div>
  );
};

// Loading Animation Component
const LoadingAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Spinning loader */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 border-4 border-purple-200 border-t-purple-600 rounded-full mx-auto mb-4"
        />
        
        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-600 font-medium"
        >
          Mapping payment challenges...
        </motion.p>
        
        {/* Animated dots */}
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-purple-600 rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Mind Map Node Component
const MindMapNode = ({ problem, index, isActive, onHover, showNode }) => {
  const { title, icon, color, position } = problem;

  return (
    <AnimatePresence>
      {showNode && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            delay: index * 0.15 + 0.8,
            duration: 0.5,
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
          style={{
            position: 'absolute',
            left: `calc(50% + ${position.x}px)`,
            top: `calc(50% + ${position.y}px)`,
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }}
          onMouseEnter={() => onHover(problem.id)}
          onMouseLeave={() => onHover(null)}
          className="cursor-pointer"
        >
          {/* Node Circle */}
          <motion.div
            whileHover={{ scale: 1.15 }}
            animate={{
              scale: isActive ? 1.1 : 1,
              boxShadow: isActive 
                ? `0 0 40px ${color}80, 0 0 80px ${color}40` 
                : `0 10px 30px ${color}40`
            }}
            style={{ backgroundColor: color }}
            className="relative w-28 h-28 rounded-full flex items-center justify-center shadow-xl"
          >
            <span className="text-4xl">{icon}</span>
            
            {/* Pulsing Rings */}
            {isActive && (
              <>
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: 'easeOut'
                  }}
                  style={{ 
                    borderColor: color,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    border: '3px solid',
                    borderRadius: '50%'
                  }}
                />
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: 0.5,
                    ease: 'easeOut'
                  }}
                  style={{ 
                    borderColor: color,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    border: '3px solid',
                    borderRadius: '50%'
                  }}
                />
              </>
            )}

            {/* Orbital particles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute w-full h-full"
            >
              <div
                className="absolute w-2 h-2 rounded-full"
                style={{ 
                  backgroundColor: color,
                  top: -4,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  boxShadow: `0 0 10px ${color}`
                }}
              />
            </motion.div>
          </motion.div>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 1 }}
            className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          >
            <p className="text-sm font-bold text-gray-800 text-center px-3 py-1 bg-white/90 rounded-lg shadow-md">
              {title}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Center Hub Component
const CenterHub = ({ showHub }) => {
  return (
    <AnimatePresence>
      {showHub && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ zIndex: 5 }}
        >
          <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-2xl">
            {/* Pulsing gradient background */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-blue-500"
            />
            
            <div className="relative w-32 h-32 rounded-full bg-white flex flex-col items-center justify-center">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="text-4xl mb-1"
              >
                ⚠️
              </motion.span>
              <span className="text-xs font-bold text-gray-800 text-center px-2">
                Cross-Border<br/>Friction
              </span>
            </div>
            
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: 'linear'
              }}
              className="absolute w-44 h-44 border-2 border-dashed border-purple-300 rounded-full opacity-50"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: 'linear'
              }}
              className="absolute w-52 h-52 border-2 border-dotted border-blue-300 rounded-full opacity-30"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Animated Network Graph Visualization
const MindMapVisualization = ({ activeNode, setActiveNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showEdges, setShowEdges] = useState(false);
  const [showNodes, setShowNodes] = useState([]);
  const [showHub, setShowHub] = useState(false);

  useEffect(() => {
    // Sequence: Loading -> Hub -> Nodes appear one by one -> Edges connect
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setShowHub(true);
    }, 1500);

    // Show nodes sequentially after hub
    const nodeTimers = problems.map((_, index) => 
      setTimeout(() => {
        setShowNodes(prev => [...prev, index]);
      }, 2000 + index * 400)
    );

    // Show edges after all nodes
    const edgesTimer = setTimeout(() => {
      setShowEdges(true);
    }, 2000 + problems.length * 400 + 200);

    return () => {
      clearTimeout(loadingTimer);
      nodeTimers.forEach(timer => clearTimeout(timer));
      clearTimeout(edgesTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-[600px]">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingAnimation />}
      </AnimatePresence>

      {/* Center Hub */}
      <CenterHub showHub={showHub} />

      {/* Network edges connecting center to all nodes */}
      {showEdges && problems.map((problem, index) => (
        problem.connectsToCenter && (
          <NetworkEdge
            key={`edge-center-${problem.id}`}
            from={{ x: 0, y: 0 }}
            to={problem.position}
            index={index}
            isVisible={showEdges}
          />
        )
      ))}
      
      {/* Problem nodes appear sequentially */}
      {problems.map((problem, index) => (
        <MindMapNode
          key={problem.id}
          problem={problem}
          index={index}
          isActive={activeNode === problem.id}
          onHover={setActiveNode}
          showNode={showNodes.includes(index)}
        />
      ))}
    </div>
  );
};

// Problem Detail Card - Stripe-inspired modular card
const ProblemDetail = ({ problem, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        delay: 0.6 + (index * 0.2),
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-5 rounded-xl bg-white border border-gray-200 cursor-pointer overflow-hidden h-full"
        whileHover={{ 
          y: -4,
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          borderColor: 'rgba(139, 92, 246, 0.3)'
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Gradient overlay that appears on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${problem.color}05 0%, ${problem.color}15 100%)`
          }}
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${problem.color}40, transparent)`,
            opacity: 0
          }}
          animate={{
            opacity: isHovered ? 0.2 : 0
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative flex flex-col gap-4">
          {/* Icon Circle with glow effect */}
          <motion.div
            style={{ 
              backgroundColor: problem.color,
            }}
            className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center shadow-lg relative"
            animate={{
              boxShadow: isHovered 
                ? `0 0 30px ${problem.color}60, 0 10px 25px ${problem.color}40`
                : `0 4px 12px ${problem.color}30`
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span 
              className="text-2xl"
              animate={{
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
            >
              {problem.icon}
            </motion.span>
            
            {/* Pulsing ring on hover */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  border: `2px solid ${problem.color}`,
                }}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeOut'
                }}
              />
            )}
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              <AnimatedText 
                text={problem.title} 
                delay={0.6 + (index * 0.2) + 0.1}
              />
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm">
              <AnimatedWords 
                text={problem.description}
                delay={0.6 + (index * 0.2) + 0.3}
              />
            </p>
            
            {/* Hover arrow indicator */}
            <motion.div
              className="mt-3 flex items-center gap-2 text-purple-600 font-medium text-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -10
              }}
              transition={{ duration: 0.3 }}
            >
              Learn more
              <motion.span
                animate={{
                  x: isHovered ? [0, 4, 0] : 0
                }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0,
                  ease: 'easeInOut'
                }}
              >
                →
              </motion.span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProblemSection = () => {
  const [activeNode, setActiveNode] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  // Auto-cycle through problems after loading completes
  useEffect(() => {
    if (!isInView) return;

    // Wait for animations to complete before starting cycle
    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % (problems.length + 1);
        setActiveNode(currentIndex === problems.length ? null : problems[currentIndex].id);
      }, 3000);

      return () => clearInterval(interval);
    }, 4000);

    return () => clearTimeout(startDelay);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cross-Border Payments Operations<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
              Are More Than Just Transactions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The friction exists across billing, compliance, payments, settlement, and working capital.
          </p>
        </motion.div>

        {/* Main Content Grid: Animation Left, Text Right */}
        <div className="grid lg:grid-cols-[40%_60%] gap-20 items-start relative z-10">
          {/* Left Side: Mind Map Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-24 lg:-ml-16"
          >
            <MindMapVisualization 
              activeNode={activeNode} 
              setActiveNode={setActiveNode}
            />
          </motion.div>

          {/* Right Side: Problem Details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-10 relative z-20 lg:pl-8"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0, duration: 0.5 }}
            >
              
            </motion.div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                <AnimatedText text="International payment operations are " delay={0.2} inline={true} />
                <AnimatedText 
                  text="unpredictable" 
                  delay={0.8} 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600"
                  inline={true}
                />
              </h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-gray-600 text-lg mb-10 leading-relaxed"
              >
                <AnimatedWords 
                  text="Businesses face multiple friction points that slow down operations and drain resources."
                  delay={1.2}
                />
              </motion.p>
              
              {/* Problem Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {problems.map((problem, index) => (
                  <ProblemDetail 
                    key={problem.id} 
                    problem={problem} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;

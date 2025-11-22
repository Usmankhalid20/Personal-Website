import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FaFilter, FaCamera } from 'react-icons/fa';

// Photo data using local images
const PHOTO_DATA = [
  {
    id: 1,
    url: '/assets/photography/photo1.jpg',
    title: 'Captured Moment 1',
    category: 'Landscape'
  },
  {
    id: 2,
    url: '/assets/photography/photo2.jpg',
    title: 'Captured Moment 2',
    category: 'Nature'
  },
  {
    id: 3,
    url: '/assets/photography/photo3.jpg',
    title: 'Captured Moment 3',
    category: 'Portrait'
  },
  {
    id: 4,
    url: '/assets/photography/photo4.jpg',
    title: 'Captured Moment 4',
    category: 'Urban'
  },
  {
    id: 5,
    url: '/assets/photography/photo5.jpg',
    title: 'Captured Moment 5',
    category: 'Architecture'
  },
  {
    id: 6,
    url: '/assets/photography/photo6.jpg',
    title: 'Captured Moment 6',
    category: 'Landscape'
  },
  {
    id: 7,
    url: '/assets/photography/photo7.jpg',
    title: 'Captured Moment 7',
    category: 'Nature'
  },
  {
    id: 8,
    url: '/assets/photography/photo8.jpg',
    title: 'Captured Moment 8',
    category: 'Portrait'
  },
  {
    id: 9,
    url: '/assets/photography/photo9.jpg',
    title: 'Captured Moment 9',
    category: 'Urban'
  },
  {
    id: 10,
    url: '/assets/photography/photo10.jpg',
    title: 'Captured Moment 10',
    category: 'Architecture'
  },
  {
    id: 11,
    url: '/assets/photography/photo12.jpg',
    title: 'Captured Moment 11',
    category: 'Landscape'
  },
  {
    id: 12,
    url: '/assets/photography/photo13.jpg',
    title: 'Captured Moment 12',
    category: 'Nature'
  },
  {
    id: 13,
    url: '/assets/photography/photo14.jpg',
    title: 'Captured Moment 13',
    category: 'Portrait'
  },
  {
    id: 14,
    url: '/assets/photography/photo15.jpg',
    title: 'Captured Moment 14',
    category: 'Urban'
  },
  {
    id: 15,
    url: '/assets/photography/photo16.jpg',
    title: 'Captured Moment 15',
    category: 'Architecture'
  },
  {
    id: 16,
    url: '/assets/photography/photo17.jpg',
    title: 'Captured Moment 16',
    category: 'Landscape'
  },
  {
    id: 17,
    url: '/assets/photography/photo18.jpg',
    title: 'Captured Moment 17',
    category: 'Nature'
  },
  {
    id: 18,
    url: '/assets/photography/photo19.jpg',
    title: 'Captured Moment 18',
    category: 'Portrait'
  },
  {
    id: 19,
    url: '/assets/photography/photo20.jpg',
    title: 'Captured Moment 19',
    category: 'Urban'
  },
  {
    id: 20,
    url: '/assets/photography/photo21.jpg',
    title: 'Captured Moment 20',
    category: 'Architecture'
  },
  {
    id: 21,
    url: '/assets/photography/photo22.jpg',
    title: 'Captured Moment 21',
    category: 'Landscape'
  },
  {
    id: 22,
    url: '/assets/photography/photo23.jpg',
    title: 'Captured Moment 22',
    category: 'Nature'
  },
  {
    id: 23,
    url: '/assets/photography/photo24.jpg',
    title: 'Captured Moment 23',
    category: 'Portrait'
  },
  {
    id: 24,
    url: '/assets/photography/photo25.jpg',
    title: 'Captured Moment 24',
    category: 'Urban'
  },
  {
    id: 25,
    url: '/assets/photography/photo26.jpg',
    title: 'Captured Moment 25',
    category: 'Architecture'
  },
  {
    id: 26,
    url: '/assets/photography/photo27.jpg',
    title: 'Captured Moment 26',
    category: 'Landscape'
  },
  {
    id: 27,
    url: '/assets/photography/photo28.jpg',
    title: 'Captured Moment 27',
    category: 'Nature'
  },
  {
    id: 28,
    url: '/assets/photography/photo29.jpg',
    title: 'Captured Moment 28',
    category: 'Portrait'
  },
  {
    id: 29,
    url: '/assets/photography/photo30.jpg',
    title: 'Captured Moment 29',
    category: 'Urban'
  },
  {
    id: 30,
    url: '/assets/photography/photo31.jpg',
    title: 'Captured Moment 30',
    category: 'Architecture'
  },
  {
    id: 31,
    url: '/assets/photography/photo32.jpg',
    title: 'Captured Moment 31',
    category: 'Landscape'
  },
  {
    id: 32,
    url: '/assets/photography/20240421_222048.jpg',
    title: 'Evening Capture',
    category: 'Nature'
  },
  {
    id: 33,
    url: '/assets/photography/20251010_135709.jpg',
    title: 'Afternoon Light',
    category: 'Landscape'
  }
];

export default function PhotographyStack() {
  const [filter, setFilter] = useState('All');
  const [cards, setCards] = useState(PHOTO_DATA);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Filter logic
  const filteredCards = filter === 'All' 
    ? cards 
    : cards.filter(card => card.category === filter);

  const categories = ['All', ...new Set(PHOTO_DATA.map(p => p.category))];

  // Handle card toss
  const handleDragEnd = (info, cardId) => {
    const threshold = 200;
    if (Math.abs(info.offset.x) > threshold) {
      // Toss card
      setCards(prev => prev.filter(c => c.id !== cardId));
    }
  };

  const resetStack = () => {
    setCards(PHOTO_DATA);
  };

  return (
    <section className="min-h-screen bg-[#22223b] flex flex-col items-center justify-center py-20 px-4 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#4a4e69]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#9a8c98]/10 rounded-full blur-[120px]" />
      </div>

      <div className="z-10 w-full max-w-4xl flex flex-col items-center">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f2e9e4] mb-4 font-sans">
            Visual Stories
          </h2>
          <p className="text-[#9a8c98] max-w-md mx-auto">
            A collection of moments captured through my lens. Swipe to explore.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setCards(PHOTO_DATA); // Reset stack on filter change
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${filter === cat 
                  ? 'bg-[#f2e9e4] text-[#22223b] shadow-lg shadow-white/10' 
                  : 'bg-[#4a4e69]/30 text-[#9a8c98] hover:bg-[#4a4e69]/50 hover:text-[#f2e9e4]'
                }`}
            >
              {cat === 'All' && <FaFilter className="text-xs" />}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Card Stack */}
        <div className="relative w-full max-w-md h-[500px] flex items-center justify-center">
          <AnimatePresence>
            {filteredCards.length > 0 ? (
              filteredCards.slice(0, 4).reverse().map((card, index) => {
                const isTop = index === filteredCards.slice(0, 4).length - 1;
                return (
                  <Card
                    key={card.id}
                    card={card}
                    index={index}
                    isTop={isTop}
                    onDragEnd={(info) => handleDragEnd(info, card.id)}
                    totalCards={filteredCards.slice(0, 4).length}
                  />
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center text-[#9a8c98]"
              >
                <FaCamera className="text-6xl mx-auto mb-4 opacity-50" />
                <p className="text-xl font-medium mb-4">No more photos</p>
                <button
                  onClick={resetStack}
                  className="px-8 py-3 bg-[#f2e9e4] text-[#22223b] rounded-xl font-bold hover:scale-105 transition-transform"
                >
                  View Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Counter */}
        {filteredCards.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-[#9a8c98] font-mono text-sm bg-[#4a4e69]/20 px-4 py-2 rounded-lg backdrop-blur-sm"
          >
            Image {PHOTO_DATA.length - filteredCards.length + 1} of {PHOTO_DATA.length}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function Card({ card, index, isTop, onDragEnd, totalCards }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  // Stack effect calculations
  // index 0 is bottom, index totalCards-1 is top
  // We want top to be scale 1, others smaller
  const offsetIndex = totalCards - 1 - index; 
  const scale = 1 - offsetIndex * 0.05;
  const yOffset = offsetIndex * 15;
  
  return (
    <motion.div
      style={{
        x: isTop ? x : 0,
        rotate: isTop ? rotate : 0,
        opacity: isTop ? opacity : 1 - offsetIndex * 0.2,
        scale: isTop ? 1 : scale,
        y: isTop ? 0 : yOffset,
        zIndex: index,
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={(_, info) => isTop && onDragEnd(info)}
      initial={{ scale: 0.9, opacity: 0, y: 50 }}
      animate={{ 
        scale: isTop ? 1 : scale, 
        opacity: 1 - offsetIndex * 0.2,
        y: isTop ? 0 : yOffset 
      }}
      exit={{ 
        x: x.get() < 0 ? -500 : 500, 
        opacity: 0, 
        rotate: x.get() < 0 ? -45 : 45,
        transition: { duration: 0.4 } 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="absolute w-full h-full max-w-sm bg-[#1b263b] rounded-3xl overflow-hidden shadow-2xl border border-[#4a4e69]/30 cursor-grab active:cursor-grabbing origin-bottom"
    >
      <div className="relative w-full h-full group">
        <img 
          src={card.url} 
          alt={card.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          draggable="false"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b] via-transparent to-transparent opacity-90" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8">
          <span className="inline-block px-3 py-1 bg-[#f2e9e4]/10 backdrop-blur-md text-[#f2e9e4] text-xs font-bold rounded-full mb-3 border border-[#f2e9e4]/20">
            {card.category}
          </span>
          <h3 className="text-2xl font-bold text-[#f2e9e4] mb-1">
            {card.title}
          </h3>
          <p className="text-[#9a8c98] text-sm">
            Captured in 2024
          </p>
        </div>
      </div>
    </motion.div>
  );
}

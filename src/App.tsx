import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Heart } from "lucide-react";

interface HeartParticle {
  id: number;
  left: string;
  size: number;
  duration: number;
}

export default function App() {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  // Heart animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: HeartParticle = {
        id: Date.now() + Math.random(),
        left: `${Math.random() * 100}vw`,
        size: Math.random() * 20 + 15,
        duration: Math.random() * 2 + 3,
      };
      setHearts((prev) => [...prev.slice(-15), newHeart]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-romantic-pink flex items-center justify-center overflow-hidden relative selection:bg-romantic-red selection:text-white">
      
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ y: "105vh", opacity: 1, rotate: 0 }}
              animate={{ y: "-10vh", opacity: 0, rotate: 45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: heart.duration, ease: "linear" }}
              className="absolute text-romantic-red"
              style={{ left: heart.left, fontSize: heart.size }}
            >
              ❤️
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Main Panel (Painel) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-[90%] max-w-[700px] bg-white rounded-[30px] shadow-2xl p-8 md:p-12 text-center border border-white/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
          className="inline-block mb-6"
        >
          <Heart className="w-10 h-10 text-romantic-red fill-romantic-red" />
        </motion.div>

        <h1 className="font-display text-3xl md:text-4xl text-gray-900 leading-tight mb-10 px-4">
          Se eu pudesse comparar sua perfeição a uma <br />
          <span className="italic font-serif text-romantic-red">batalha de rima...</span>
        </h1>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50 bg-black flex items-center justify-center">
          <iframe
            src="https://drive.google.com/file/d/1GnQpEk5hhQPOK2CMltEbcvujom4hNXkL/preview"
            className="w-full h-full border-none"
            allow="autoplay"
            title="Vídeo para Isadora"
          ></iframe>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >
          <p className="font-serif text-xl text-gray-500 italic">
            Dedicado à Isadora
          </p>
          <div className="w-12 h-0.5 bg-romantic-red/20 mx-auto mt-4" />
        </motion.div>
      </motion.div>

      {/* Footer info */}
      <div className="absolute bottom-6 w-full text-center text-white/60 font-serif italic text-sm">
        Feito com carinho
      </div>
    </div>
  );
}

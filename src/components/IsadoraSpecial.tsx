import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Heart } from "lucide-react";

interface HeartParticle {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

export default function IsadoraSpecial() {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: HeartParticle = {
        id: Date.now(),
        left: `${Math.random() * 100}%`,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 3 + 4,
        delay: Math.random() * 2,
      };
      setHearts((prev) => [...prev.slice(-20), newHeart]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-warm-cream min-h-screen flex items-center justify-center">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ y: "110vh", opacity: 0, rotate: 0 }}
              animate={{ y: "-10vh", opacity: [0, 1, 1, 0], rotate: 45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: heart.duration, ease: "linear" }}
              className="absolute text-romantic-red/40"
              style={{ left: heart.left, fontSize: heart.size }}
            >
              ❤️
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Sophisticated Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl bg-white/70 backdrop-blur-md rounded-[40px] shadow-2xl shadow-romantic-red/5 border border-white p-8 md:p-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
          className="inline-block mb-8"
        >
          <Heart className="w-12 h-12 text-romantic-red fill-romantic-red" />
        </motion.div>

        <h1 className="font-display text-4xl md:text-6xl text-gray-900 leading-tight mb-12">
          Se eu pudesse comparar sua perfeição a uma <br />
          <span className="italic font-serif text-romantic-red">batalha de rima...</span>
        </h1>

        <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
          <video 
            className="w-full h-full object-cover"
            loop 
            controls 
            playsInline
          >
            <source src="https://the-drive-direct-link.vercel.app/api/drive?url=https://drive.google.com/file/d/1GnQpEk5hhQPOK2CMltEbcvujom4hNXkL/view?usp=sharing" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 font-serif text-2xl text-gray-600 italic"
        >
          Para: Isadora
        </motion.p>
      </motion.div>
    </section>
  );
}

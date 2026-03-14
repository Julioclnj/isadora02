import React from 'react';
import { motion } from "motion/react";
import { Heart, ChevronDown } from "lucide-react";

export default function RomanticHero() {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-warm-cream">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-romantic-pink rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Heart className="w-16 h-16 text-romantic-red fill-romantic-red animate-bounce" />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-romantic-red rounded-full blur-lg"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-gray-900 leading-tight mb-8"
        >
          Para <span className="italic font-serif text-romantic-red">Você</span>, <br />
          Que Ainda Não Chegou.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-serif text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto italic leading-relaxed"
        >
          "Não sei seu nome, nem a cor dos seus olhos, mas sei que meu coração já guarda um lugar especial para quando nossos caminhos se cruzarem."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12"
        >
          <a 
            href="#dates" 
            className="inline-flex items-center gap-2 text-romantic-red font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
          >
            Explorar Nosso Futuro <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Floating floating hearts or particles could go here */}
    </header>
  );
}

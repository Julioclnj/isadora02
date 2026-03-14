import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Stars, Sparkles, Send, Loader2 } from "lucide-react";

export default function LoveLetter() {
  const [mood, setMood] = useState('romântico');
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);

  const generateLetter = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Escreva uma carta de amor curta, poética e emocionante para uma futura namorada. O tom deve ser ${mood}. Use metáforas sobre o destino e a espera. Máximo 100 palavras.`,
      });
      setLetter(response.text || '');
    } catch (error) {
      console.error("Erro ao gerar carta:", error);
      setLetter("O destino ainda está escrevendo nossa história, mas saiba que meu coração já te espera com todo o carinho do mundo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center" id="letter">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-romantic-pink relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-right from-romantic-red to-pink-400" />
        
        <h2 className="font-display text-4xl md:text-5xl mb-6 text-romantic-red">Uma Mensagem do Destino</h2>
        <p className="font-serif text-xl text-gray-600 mb-8 italic">
          "Escolha o tom da nossa primeira conversa..."
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['romântico', 'poético', 'divertido', 'profundo'].map((m) => (
            <button
              key={m}
              onClick={() => setMood(m)}
              className={`px-6 py-2 rounded-full border transition-all ${
                mood === m 
                  ? 'bg-romantic-red text-white border-romantic-red shadow-lg scale-105' 
                  : 'bg-white text-romantic-red border-romantic-pink hover:bg-romantic-pink/30'
              } capitalize font-medium`}
            >
              {m}
            </button>
          ))}
        </div>

        <button
          onClick={generateLetter}
          disabled={loading}
          className="group relative inline-flex items-center gap-2 bg-romantic-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Sparkles className="group-hover:rotate-12 transition-transform" />}
          {loading ? 'Escrevendo...' : 'Gerar Carta de Amor'}
        </button>

        <AnimatePresence mode="wait">
          {letter && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-12 p-8 bg-warm-cream rounded-2xl border border-dashed border-romantic-red/30 relative"
            >
              <Heart className="absolute -top-3 -left-3 text-romantic-red fill-romantic-red w-8 h-8 opacity-20" />
              <div className="font-serif text-2xl leading-relaxed text-gray-800 whitespace-pre-line italic">
                {letter}
              </div>
              <Heart className="absolute -bottom-3 -right-3 text-romantic-red fill-romantic-red w-8 h-8 opacity-20" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

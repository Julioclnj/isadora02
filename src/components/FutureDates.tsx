import React from 'react';
import { motion } from "motion/react";
import { Coffee, MapPin, Music, Camera, Utensils, Moon } from "lucide-react";

const dates = [
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Café de Domingo",
    desc: "Aquele café sem pressa, falando sobre tudo e nada ao mesmo tempo."
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Viagem Espontânea",
    desc: "Pegar o carro e ir para onde o vento (ou o GPS) nos levar."
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Noite de Vinil",
    desc: "Dançar na sala ao som de músicas que marcaram nossas vidas."
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Pôr do Sol",
    desc: "Apenas observar o céu mudar de cor em silêncio, de mãos dadas."
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Cozinhando Juntos",
    desc: "Tentar uma receita nova e rir se o resultado for um desastre."
  },
  {
    icon: <Moon className="w-6 h-6" />,
    title: "Cinema em Casa",
    desc: "Pipoca, coberta e o filme que a gente já viu mil vezes."
  }
];

export default function FutureDates() {
  return (
    <section className="py-24 bg-romantic-pink/20" id="dates">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-romantic-red font-bold tracking-widest uppercase text-sm"
          >
            Nossos Futuros Momentos
          </motion.span>
          <h2 className="font-display text-5xl mt-4 text-gray-900">O que nos espera...</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dates.map((date, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-romantic-pink/50 group"
            >
              <div className="w-12 h-12 bg-romantic-pink rounded-2xl flex items-center justify-center text-romantic-red mb-6 group-hover:scale-110 transition-transform">
                {date.icon}
              </div>
              <h3 className="font-display text-2xl mb-3 text-gray-800">{date.title}</h3>
              <p className="font-serif text-lg text-gray-600 leading-relaxed italic">
                {date.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

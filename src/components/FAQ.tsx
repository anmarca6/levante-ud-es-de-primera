'use client';

import { useState } from 'react';

const ITEMS = [
  {
    q: '¿Dónde salen los buses?',
    a: 'Los buses salen desde el Estadi Ciutat de València a las 06:45h. Hay que presentarse a las 06:00h.',
  },
  {
    q: '¿Qué hago si pierdo mi bus?',
    a: 'Contacta inmediatamente con el responsable del viaje del club. Puedes también valorar el tren AVE comercial Valencia - Sevilla o ponerte en contacto con otros aficionados.',
  },
  {
    q: '¿Dónde está el Parking P7?',
    a: 'El Parking P7 está situado junto al Estadio La Cartuja. Es el punto de referencia habitual para los desplazados. Abre en Google Maps: "Parking P7 Estadio Cartuja Sevilla".',
  },
  {
    q: '¿Cómo vuelvo al tren después del partido?',
    a: 'El AVE de vuelta sale a las 00:45h desde Sevilla Santa Justa. Puedes coger la Cercanías C2 desde la parada cerca del estadio o taxi/Uber. Calcula al menos 45 min de margen.',
  },
  {
    q: '¿Qué línea de cercanías debo coger?',
    a: 'La línea Cercanías C2 conecta Sevilla Santa Justa con la zona del estadio. Busca la parada "Estadio Olimpico" o "Expo" según la dirección.',
  },
  {
    q: '¿Cuánto se tarda andando al estadio desde Santa Justa?',
    a: 'Desde la estación de Santa Justa, andando son aproximadamente 45-55 minutos. No es recomendable con 37º. Lo ideal es coger la cercanías C2, Uber o Cabify.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {ITEMS.map(({ q, a }, i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden transition-all"
          style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${open === i ? '#8B1A2B' : 'rgba(255,255,255,0.08)'}` }}
        >
          <button
            className="w-full flex justify-between items-center p-4 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-sm text-white">{q}</span>
            <span
              className="text-lg flex-shrink-0 transition-transform duration-200"
              style={{ transform: open === i ? 'rotate(45deg)' : 'none', color: '#8B1A2B' }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-4 pb-4 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
              {a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

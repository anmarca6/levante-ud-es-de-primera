'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    a: 'El Parking P7 está situado junto al Estadio La Cartuja. Es el punto de referencia habitual para los desplazados. Busca "Parking P7 Estadio Cartuja Sevilla" en Google Maps.',
  },
  {
    q: '¿Cómo vuelvo al tren después del partido?',
    a: 'El AVE de vuelta sale a las 00:45h desde Sevilla Santa Justa. Puedes coger la Cercanías C2 desde la parada cerca del estadio o taxi/Uber. Calcula al menos 45 min de margen.',
  },
  {
    q: '¿Qué línea de cercanías debo coger?',
    a: 'La línea Cercanías C2 conecta Sevilla Santa Justa con la zona del estadio. Busca la parada "Estadio Olímpico" o "Expo" según la dirección.',
  },
  {
    q: '¿Cuánto se tarda andando desde Santa Justa?',
    a: 'Desde la estación de Santa Justa son aproximadamente 45-55 minutos a pie. No recomendable con 37º. Lo ideal es coger la Cercanías C2, Uber o Cabify.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {ITEMS.map(({ q, a }, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden transition-all"
          style={{
            background: 'var(--surface-2)',
            border: `1px solid ${open === i ? 'var(--granate-border)' : 'var(--border)'}`,
          }}
        >
          <button
            className="w-full flex justify-between items-center px-4 py-4 text-left gap-3"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>
              {q}
            </span>
            <ChevronDown
              size={17}
              strokeWidth={2}
              style={{
                color: 'var(--granate-light)',
                flexShrink: 0,
                transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            />
          </button>
          {open === i && (
            <div
              className="px-4 pb-4 text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)', borderTop: '1px solid var(--border)' }}
            >
              <p className="pt-3">{a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

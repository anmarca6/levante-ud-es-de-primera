'use client';

import { useEffect, useState } from 'react';

const ITEMS = [
  { id: 'dni', label: 'DNI / Pasaporte', icon: '🪪' },
  { id: 'entrada', label: 'Entrada partido', icon: '🎟️' },
  { id: 'pulsera', label: 'Bufanda', icon: '🧣' },
  { id: 'justificante', label: 'Justificante bus / tren', icon: '🚌' },
  { id: 'cargador', label: 'Cargador / batería externa', icon: '🔋' },
  { id: 'agua', label: 'Agua (mínimo 1,5L)', icon: '💧' },
  { id: 'gorra', label: 'Gorra / visera', icon: '🧢' },
  { id: 'solar', label: 'Protector solar', icon: '🌞' },
];

const KEY = 'granotas_checklist';

export default function Checklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored) setChecked(JSON.parse(stored));
    } catch {}
  }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-400">{done}/{ITEMS.length} preparado</p>
        <div className="h-2 flex-1 mx-4 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${(done / ITEMS.length) * 100}%`, background: '#8B1A2B' }}
          />
        </div>
      </div>
      <ul className="space-y-3">
        {ITEMS.map(({ id, label, icon }) => (
          <li key={id}>
            <button
              onClick={() => toggle(id)}
              className="w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left"
              style={{
                background: checked[id] ? 'rgba(139,26,43,0.25)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${checked[id] ? '#8B1A2B' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              <span className="text-2xl">{icon}</span>
              <span className={`flex-1 font-medium ${checked[id] ? 'line-through text-gray-500' : 'text-white'}`}>
                {label}
              </span>
              <span
                className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                style={{ borderColor: checked[id] ? '#8B1A2B' : '#555', background: checked[id] ? '#8B1A2B' : 'transparent' }}
              >
                {checked[id] && <span className="text-white text-xs">✓</span>}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

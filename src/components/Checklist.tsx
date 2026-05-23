'use client';

import { useEffect, useState } from 'react';
import { IdCard, Ticket, Battery, Bus, BatteryCharging, Droplets, Sun, Shield, Check } from 'lucide-react';

const ITEMS = [
  { id: 'dni', label: 'DNI / Pasaporte', Icon: IdCard },
  { id: 'entrada', label: 'Entrada partido', Icon: Ticket },
  { id: 'bufanda', label: 'Bufanda granota', Icon: Shield },
  { id: 'justificante', label: 'Justificante bus / tren', Icon: Bus },
  { id: 'cargador', label: 'Cargador / batería externa', Icon: BatteryCharging },
  { id: 'agua', label: 'Agua (mínimo 1,5 L)', Icon: Droplets },
  { id: 'gorra', label: 'Gorra / visera', Icon: Sun },
  { id: 'solar', label: 'Protector solar', Icon: Sun },
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
  const pct = Math.round((done / ITEMS.length) * 100);

  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-sm font-medium tabular-nums" style={{ color: 'var(--text-muted)', minWidth: 60 }}>
          {done}/{ITEMS.length}
        </span>
        <div
          className="flex-1 h-1.5 rounded-full overflow-hidden"
          style={{ background: 'var(--surface-3)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, background: done === ITEMS.length ? '#22c55e' : 'var(--granate)' }}
          />
        </div>
        <span className="text-sm font-bold tabular-nums" style={{ color: done === ITEMS.length ? '#22c55e' : 'var(--granate-light)' }}>
          {pct}%
        </span>
      </div>

      <ul className="space-y-2">
        {ITEMS.map(({ id, label, Icon }) => (
          <li key={id}>
            <button
              onClick={() => toggle(id)}
              className="w-full flex items-center gap-3.5 py-3.5 px-4 rounded-xl transition-all text-left"
              style={{
                background: checked[id] ? 'var(--granate-muted)' : 'var(--surface-2)',
                border: `1px solid ${checked[id] ? 'var(--granate-border)' : 'var(--border)'}`,
              }}
            >
              <Icon
                size={18}
                strokeWidth={1.75}
                style={{ color: checked[id] ? 'var(--granate-light)' : 'var(--text-muted)', flexShrink: 0 }}
              />
              <span
                className="flex-1 font-medium text-sm"
                style={{
                  textDecoration: checked[id] ? 'line-through' : 'none',
                  color: checked[id] ? 'var(--text-muted)' : 'var(--text-primary)',
                }}
              >
                {label}
              </span>
              <span
                className="flex items-center justify-center rounded-full transition-all flex-shrink-0"
                style={{
                  width: 22,
                  height: 22,
                  border: `2px solid ${checked[id] ? 'var(--granate)' : 'var(--border-strong)'}`,
                  background: checked[id] ? 'var(--granate)' : 'transparent',
                }}
              >
                {checked[id] && <Check size={12} strokeWidth={3} color="#fff" />}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

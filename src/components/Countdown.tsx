'use client';

import { useEffect, useState } from 'react';

const MATCH_DATE = new Date('2026-05-23T21:00:00+02:00');

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = MATCH_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setIsOver(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  if (isOver) {
    return (
      <div
        className="rounded-2xl px-6 py-4 text-center font-black text-lg tracking-wide"
        style={{ background: 'var(--granate-muted)', border: '1px solid var(--granate-border)', color: 'var(--granate-light)' }}
      >
        El partido ya ha comenzado
      </div>
    );
  }

  const units = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-2 justify-center">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex flex-col items-center gap-1.5">
          <div
            className="countdown-block tabular-nums rounded-xl font-black text-2xl leading-none"
            style={{
              background: 'var(--granate)',
              minWidth: 56,
              padding: '10px 8px',
              textAlign: 'center',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            {pad(value)}
          </div>
          <span
            className="font-semibold uppercase tracking-widest"
            style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}
          >
            {label}
          </span>
          {i < units.length - 1 && (
            <span
              className="absolute"
              style={{ display: 'none' }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

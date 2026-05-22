'use client';

import { useEffect, useState } from 'react';

const MATCH_DATE = new Date('2026-05-25T21:00:00+02:00');

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = MATCH_DATE.getTime() - now.getTime();
      if (diff <= 0) {
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

  return (
    <div className="flex gap-3 justify-center">
      {[
        { label: 'Días', value: timeLeft.days },
        { label: 'Horas', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Seg', value: timeLeft.seconds },
      ].map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className="text-3xl font-black tabular-nums rounded-xl px-3 py-2"
            style={{ background: 'rgba(139,26,43,0.7)', minWidth: 60, textAlign: 'center' }}
          >
            {pad(value)}
          </div>
          <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{label}</span>
        </div>
      ))}
    </div>
  );
}

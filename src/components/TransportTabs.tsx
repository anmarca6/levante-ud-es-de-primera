'use client';

import { useState } from 'react';

const BUS_SCHEDULE = [
  { time: '06:00', event: 'Presentación en Estadi Ciutat de València' },
  { time: '06:45', event: 'Salida hacia Sevilla' },
  { time: '15:00', event: 'Llegada a Sevilla' },
  { time: '21:00', event: '⚽ Partido — Real Betis vs Levante UD' },
  { time: '00:30', event: 'Salida buses de vuelta desde estadio' },
  { time: '08:30', event: 'Llegada a Valencia' },
];

const TRAIN_SCHEDULE = [
  { time: '07:30', event: 'Check-in en Estación Joaquín Sorolla' },
  { time: '09:15', event: 'Salida AVE Charter' },
  { time: '13:35', event: 'Llegada a Sevilla Santa Justa' },
  { time: '21:00', event: '⚽ Partido — Real Betis vs Levante UD' },
  { time: '00:45', event: 'Salida AVE de vuelta' },
  { time: '04:30', event: 'Llegada a Valencia Joaquín Sorolla' },
];

function Timeline({ items }: { items: { time: string; event: string }[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: 'rgba(139,26,43,0.4)' }} />
      <div className="space-y-6">
        {items.map(({ time, event }, i) => {
          const isMatch = event.includes('Partido');
          return (
            <div key={i} className="relative">
              <div
                className="absolute -left-6 top-1 w-3 h-3 rounded-full border-2 -translate-x-1"
                style={{ background: isMatch ? '#8B1A2B' : '#1A2B5C', borderColor: isMatch ? '#8B1A2B' : '#3a5298' }}
              />
              <div
                className={`rounded-2xl p-4 ${isMatch ? 'border' : ''}`}
                style={isMatch ? { background: 'rgba(139,26,43,0.15)', borderColor: '#8B1A2B' } : { background: 'rgba(255,255,255,0.05)' }}
              >
                <p className="text-xs font-bold tracking-widest mb-1" style={{ color: '#8B1A2B' }}>{time}</p>
                <p className={`font-medium text-sm ${isMatch ? 'text-white' : 'text-gray-300'}`}>{event}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TransportTabs() {
  const [tab, setTab] = useState<'bus' | 'train'>('bus');

  return (
    <div>
      <div className="flex rounded-2xl p-1 mb-6" style={{ background: 'rgba(255,255,255,0.05)' }}>
        {(['bus', 'train'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="flex-1 py-3 rounded-xl font-bold text-sm transition-all"
            style={
              tab === t
                ? { background: '#8B1A2B', color: '#fff' }
                : { color: '#9ca3af' }
            }
          >
            {t === 'bus' ? '🚌 Bus' : '🚄 Tren Charter'}
          </button>
        ))}
      </div>

      {tab === 'bus' && (
        <div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="rounded-2xl p-4" style={{ background: 'rgba(26,43,92,0.4)', border: '1px solid rgba(26,43,92,0.6)' }}>
              <p className="text-xs text-gray-400 mb-1">Salida</p>
              <p className="font-bold text-white">Estadi Ciutat de València</p>
              <p className="text-2xl font-black mt-1" style={{ color: '#8B1A2B' }}>06:45</p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: 'rgba(26,43,92,0.4)', border: '1px solid rgba(26,43,92,0.6)' }}>
              <p className="text-xs text-gray-400 mb-1">Vuelta</p>
              <p className="font-bold text-white">Desde Estadio</p>
              <p className="text-2xl font-black mt-1" style={{ color: '#8B1A2B' }}>00:30</p>
            </div>
          </div>
          <Timeline items={BUS_SCHEDULE} />
        </div>
      )}

      {tab === 'train' && (
        <div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="rounded-2xl p-4" style={{ background: 'rgba(26,43,92,0.4)', border: '1px solid rgba(26,43,92,0.6)' }}>
              <p className="text-xs text-gray-400 mb-1">Check-in</p>
              <p className="font-bold text-white">Joaquín Sorolla</p>
              <p className="text-2xl font-black mt-1" style={{ color: '#8B1A2B' }}>07:30</p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: 'rgba(26,43,92,0.4)', border: '1px solid rgba(26,43,92,0.6)' }}>
              <p className="text-xs text-gray-400 mb-1">Vuelta AVE</p>
              <p className="font-bold text-white">Desde Sta. Justa</p>
              <p className="text-2xl font-black mt-1" style={{ color: '#8B1A2B' }}>00:45</p>
            </div>
          </div>
          <Timeline items={TRAIN_SCHEDULE} />
        </div>
      )}
    </div>
  );
}

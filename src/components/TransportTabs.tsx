'use client';

import { useState } from 'react';
import { Bus, TrainFront, MapPin, Footprints, Clock } from 'lucide-react';

const BUS_SCHEDULE = [
  { time: '06:00', event: 'Presentación en Estadi Ciutat de València' },
  { time: '06:45', event: 'Salida hacia Sevilla' },
  { time: '15:00', event: 'Llegada a Sevilla' },
  { time: '21:00', event: 'Partido — Real Betis vs Levante UD', isMatch: true },
  { time: '00:30', event: 'Salida buses de vuelta desde estadio' },
  { time: '08:30', event: 'Llegada a Valencia' },
];

const TRAIN_SCHEDULE = [
  { time: '07:30', event: 'Check-in en Estación Joaquín Sorolla' },
  { time: '09:15', event: 'Salida AVE Charter' },
  { time: '13:35', event: 'Llegada a Sevilla Santa Justa' },
  { time: '21:00', event: 'Partido — Real Betis vs Levante UD', isMatch: true },
  { time: '00:45', event: 'Salida AVE de vuelta' },
  { time: '04:30', event: 'Llegada a Valencia Joaquín Sorolla' },
];

function Timeline({ items }: { items: { time: string; event: string; isMatch?: boolean }[] }) {
  return (
    <div className="relative pl-8">
      <div
        className="absolute left-3 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--granate-border) 15%, var(--granate-border) 85%, transparent)' }}
      />
      <div className="space-y-3">
        {items.map(({ time, event, isMatch }, i) => (
          <div key={i} className="relative">
            <div
              className="absolute -left-5 top-3.5 w-2.5 h-2.5 rounded-full -translate-x-px"
              style={{
                background: isMatch ? 'var(--granate)' : 'var(--surface-3)',
                border: `2px solid ${isMatch ? 'var(--granate-light)' : 'var(--border-strong)'}`,
                boxShadow: isMatch ? '0 0 8px var(--granate)' : 'none',
              }}
            />
            <div
              className="rounded-xl p-3.5"
              style={
                isMatch
                  ? { background: 'var(--granate-muted)', border: '1px solid var(--granate-border)' }
                  : { background: 'var(--surface-2)', border: '1px solid var(--border)' }
              }
            >
              <p
                className="text-xs font-bold tracking-widest mb-0.5"
                style={{ color: isMatch ? 'var(--granate-light)' : 'var(--text-muted)' }}
              >
                {time}
              </p>
              <p
                className="font-medium text-sm"
                style={{ color: isMatch ? 'var(--text-primary)' : 'var(--text-secondary)' }}
              >
                {event}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TransportTabs() {
  const [tab, setTab] = useState<'bus' | 'train'>('bus');

  return (
    <div>
      <div
        className="flex rounded-2xl p-1 mb-6 gap-1"
        style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
      >
        {([
          { key: 'bus', label: 'Bus oficial', Icon: Bus },
          { key: 'train', label: 'AVE Charter', Icon: TrainFront },
        ] as const).map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all"
            style={
              tab === key
                ? { background: 'var(--granate)', color: '#fff' }
                : { color: 'var(--text-muted)' }
            }
          >
            <Icon size={15} strokeWidth={2.5} />
            {label}
          </button>
        ))}
      </div>

      {tab === 'bus' && (
        <div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <InfoCard label="Salida" title="Estadi Ciutat" time="06:45" />
            <InfoCard label="Vuelta" title="Desde Estadio" time="00:30" />
          </div>
          <Timeline items={BUS_SCHEDULE} />
        </div>
      )}

      {tab === 'train' && (
        <div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <InfoCard label="Check-in" title="Joaquín Sorolla" time="07:30" />
            <InfoCard label="AVE vuelta" title="Sta. Justa" time="00:45" />
          </div>
          <Timeline items={TRAIN_SCHEDULE} />
        </div>
      )}
    </div>
  );
}

function InfoCard({ label, title, time }: { label: string; title: string; time: string }) {
  return (
    <div
      className="rounded-2xl p-4"
      style={{ background: 'var(--navy-muted)', border: '1px solid var(--navy-border)' }}
    >
      <div className="flex items-center gap-1.5 mb-2">
        <Clock size={11} strokeWidth={2} style={{ color: 'var(--text-muted)' }} />
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</p>
      </div>
      <p className="font-bold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>{title}</p>
      <p className="text-2xl font-black mt-1.5 tabular-nums" style={{ color: 'var(--granate-light)' }}>{time}</p>
    </div>
  );
}

import Countdown from '@/components/Countdown';
import TransportTabs from '@/components/TransportTabs';
import Checklist from '@/components/Checklist';
import FAQ from '@/components/FAQ';
import {
  Trophy,
  Clock,
  Calendar,
  Bus,
  MapPin,
  Footprints,
  TrainFront,
  CarTaxiFront,
  TrafficCone,
  Navigation,
  ThermometerSun,
  Droplets,
  Wind,
  Siren,
  Phone,
  Hospital,
  Lightbulb,
  ExternalLink,
  TriangleAlert,
  ArrowDown,
} from 'lucide-react';

const MAPS = [
  {
    Icon: Trophy,
    name: 'Estadio La Cartuja',
    info: 'Estadio Olímpico · Sector visitante Curva Norte',
    distance: '4.5 km desde Santa Justa',
    walk: '55 min a pie',
    url: 'https://maps.google.com/?q=Estadio+de+la+Cartuja+Sevilla',
  },
  {
    Icon: TrainFront,
    name: 'Estación Santa Justa',
    info: 'Llegada y salida del AVE Charter',
    distance: 'Centro de Sevilla',
    walk: '15 min al centro',
    url: 'https://maps.google.com/?q=Estacion+Santa+Justa+Sevilla',
  },
  {
    Icon: Navigation,
    name: 'Alameda de Hércules',
    info: 'Zona de ocio y terrazas · Punto de encuentro granotas',
    distance: '2 km desde Santa Justa',
    walk: '25 min a pie',
    url: 'https://maps.google.com/?q=Alameda+de+Hercules+Sevilla',
  },
  {
    Icon: MapPin,
    name: 'Parking P7',
    info: 'Parking oficial junto al estadio',
    distance: 'Junto al estadio',
    walk: '5 min andando',
    url: 'https://maps.google.com/?q=Parking+P7+Cartuja+Sevilla',
  },
];

const QUICK_INFO = [
  { Icon: Trophy, label: 'Partido', value: 'Betis vs Levante' },
  { Icon: MapPin, label: 'Estadio', value: 'La Cartuja' },
  { Icon: Clock, label: 'Hora', value: '21:00h' },
  { Icon: ThermometerSun, label: 'Temperatura', value: '37º máx', warn: true },
  { Icon: Calendar, label: 'Fecha', value: '23 mayo 2026' },
  { Icon: Bus, label: 'Transporte', value: 'Bus + AVE' },
];

const TRANSPORT_OPTIONS = [
  {
    Icon: TrainFront,
    title: 'Cercanías C2',
    desc: 'La opción más rápida. Sale desde Santa Justa hasta la zona del estadio. Consulta horarios ampliados por el partido.',
  },
  {
    Icon: CarTaxiFront,
    title: 'Taxi / Uber / Cabify',
    desc: 'Disponibles en toda Sevilla. Muy recomendable en el post-partido para llegar a Santa Justa a tiempo para el AVE.',
  },
  {
    Icon: Footprints,
    title: 'A pie',
    desc: 'Posible desde el centro (~45 min), pero NO recomendable con 37º. Lleva agua si decides caminar.',
  },
  {
    Icon: TrafficCone,
    title: 'Cortes de tráfico',
    desc: 'Espera cortes en accesos al estadio antes y después del partido. Sal con tiempo y sigue las indicaciones de los agentes.',
  },
];

const EMERGENCY = [
  { Icon: Siren, label: 'Emergencias', value: '112', href: 'tel:112' },
  { Icon: Phone, label: 'Policía Nacional', value: '091', href: 'tel:091' },
  {
    Icon: Hospital,
    label: 'Hospital Virgen del Rocío',
    value: 'Ver en Maps',
    href: 'https://maps.google.com/?q=Hospital+Virgen+del+Rocio+Sevilla',
  },
  { Icon: Phone, label: 'Responsable viaje club', value: 'Consultar con el club', href: undefined },
];

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2
        className="font-black uppercase tracking-wide"
        style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.12em', marginBottom: 6 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{subtitle}</p>
      )}
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        width: '100%',
        height: 1,
        background: 'linear-gradient(to right, transparent, var(--border-strong), transparent)',
      }}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text-primary)' }}>

      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center px-4 pt-12 pb-16 text-center"
        style={{
          background: 'linear-gradient(180deg, rgba(155,29,46,0.18) 0%, rgba(10,10,20,0.0) 55%), radial-gradient(ellipse 80% 60% at 50% 0%, rgba(26,43,92,0.25) 0%, transparent 70%)',
          minHeight: '92dvh',
        }}
      >
        <div className="max-w-sm mx-auto w-full">

          {/* Badge */}
          <div
            className="label-badge mx-auto mb-8"
            style={{ background: 'var(--granate-muted)', color: 'var(--granate-light)', border: '1px solid var(--granate-border)' }}
          >
            <Trophy size={11} strokeWidth={2.5} />
            Jornada 38 · LaLiga 2025/26
          </div>

          {/* Escudos */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div
              className="flex items-center justify-center rounded-2xl p-3"
              style={{
                background: 'rgba(0,80,0,0.15)',
                border: '1.5px solid rgba(0,110,0,0.3)',
                width: 88,
                height: 88,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/betis.svg" alt="Real Betis" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            <div className="flex flex-col items-center gap-1">
              <span
                className="font-black text-sm tracking-widest"
                style={{ color: 'var(--text-muted)', letterSpacing: '0.15em' }}
              >
                VS
              </span>
            </div>

            <div
              className="flex items-center justify-center rounded-2xl p-3"
              style={{
                background: 'rgba(26,43,92,0.25)',
                border: '1.5px solid rgba(26,43,92,0.5)',
                width: 88,
                height: 88,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/levante.png" alt="Levante UD" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>

          {/* Titulo */}
          <h1
            className="font-black leading-tight tracking-tight mb-2"
            style={{ fontSize: '2.25rem' }}
          >
            Real Betis
            <br />
            <span style={{ color: 'var(--granate-light)' }}>vs Levante UD</span>
          </h1>

          <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
            Sabado 23 de mayo · 21:00h · Estadio La Cartuja, Sevilla
          </p>

          {/* Countdown */}
          <div className="mb-8">
            <p
              className="uppercase tracking-widest mb-3 font-semibold"
              style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}
            >
              Faltan
            </p>
            <Countdown />
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2.5">
            <a
              href="#transporte"
              className="w-full py-4 rounded-2xl font-bold text-white text-center transition-all active:scale-95 text-sm"
              style={{ background: 'linear-gradient(135deg, var(--granate), var(--granate-light))' }}
            >
              Ver informacion del viaje
            </a>
            <a
              href="#mapas"
              className="w-full py-3.5 rounded-2xl font-bold text-center transition-all active:scale-95 text-sm"
              style={{
                background: 'var(--surface-2)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-strong)',
              }}
            >
              Como llegar al estadio
            </a>
          </div>

          <div className="flex justify-center mt-10">
            <ArrowDown
              size={20}
              strokeWidth={1.5}
              style={{ color: 'var(--text-muted)', animation: 'bounce 2s infinite' }}
            />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>

      <Divider />

      {/* INFORMACIÓN RÁPIDA */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <SectionHeader title="Informacion rapida" />

        <div className="grid grid-cols-2 gap-2.5">
          {QUICK_INFO.map(({ Icon, label, value, warn }) => (
            <div
              key={label}
              className="rounded-xl p-4"
              style={{
                background: warn ? 'rgba(234,179,8,0.08)' : 'var(--surface-2)',
                border: `1px solid ${warn ? 'rgba(234,179,8,0.3)' : 'var(--border)'}`,
              }}
            >
              <Icon
                size={16}
                strokeWidth={1.75}
                style={{ color: warn ? '#eab308' : 'var(--text-muted)', marginBottom: 10 }}
              />
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)', fontSize: '0.6rem' }}>
                {label}
              </p>
              <p
                className="font-bold text-sm"
                style={{ color: warn ? '#eab308' : 'var(--text-primary)' }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-3 rounded-xl p-4 flex gap-3 items-start"
          style={{ background: 'rgba(234,179,8,0.07)', border: '1px solid rgba(234,179,8,0.25)' }}
        >
          <TriangleAlert size={18} strokeWidth={1.75} style={{ color: '#eab308', flexShrink: 0, marginTop: 1 }} />
          <div>
            <p className="font-bold text-sm mb-1" style={{ color: '#eab308' }}>Calor extremo en Sevilla</p>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Sevilla estara alrededor de 37 grados. Lleva agua, gorra y protector solar. Hidratacion constante.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* TRANSPORTE */}
      <section id="transporte" className="px-4 py-10 max-w-md mx-auto">
        <SectionHeader title="Transporte" subtitle="Horarios oficiales del desplazamiento organizado" />
        <TransportTabs />
      </section>

      <Divider />

      {/* MAPAS */}
      <section id="mapas" className="px-4 py-10 max-w-md mx-auto">
        <SectionHeader title="Puntos clave" subtitle="Lugares esenciales para el dia del partido" />
        <div className="space-y-2.5">
          {MAPS.map(({ Icon, name, info, distance, walk, url }) => (
            <div
              key={name}
              className="rounded-xl p-4"
              style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ width: 40, height: 40, background: 'var(--granate-muted)', border: '1px solid var(--granate-border)' }}
                >
                  <Icon size={18} strokeWidth={1.75} style={{ color: 'var(--granate-light)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{name}</p>
                  <p className="text-xs mt-0.5 leading-snug" style={{ color: 'var(--text-secondary)' }}>{info}</p>
                </div>
              </div>
              <div className="flex gap-4 mb-3">
                <div className="flex items-center gap-1.5">
                  <MapPin size={11} strokeWidth={2} style={{ color: 'var(--text-muted)' }} />
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{distance}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Footprints size={11} strokeWidth={2} style={{ color: 'var(--text-muted)' }} />
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{walk}</span>
                </div>
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-center py-2.5 rounded-xl font-bold text-xs transition-all active:scale-95"
                style={{ background: 'var(--navy-muted)', color: '#93c5fd', border: '1px solid var(--navy-border)' }}
              >
                Abrir en Google Maps
                <ExternalLink size={12} strokeWidth={2} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* COMO MOVERSE */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <SectionHeader title="Como moverse" subtitle="Opciones de transporte local en Sevilla" />
        <div className="space-y-2.5">
          {TRANSPORT_OPTIONS.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl p-4 flex gap-3.5"
              style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
            >
              <div
                className="flex items-center justify-center rounded-xl flex-shrink-0"
                style={{ width: 38, height: 38, background: 'var(--surface-3)' }}
              >
                <Icon size={17} strokeWidth={1.75} style={{ color: 'var(--text-secondary)' }} />
              </div>
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{title}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-4 rounded-xl p-4"
          style={{ background: 'var(--navy-muted)', border: '1px solid var(--navy-border)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={15} strokeWidth={1.75} style={{ color: '#93c5fd' }} />
            <p className="font-bold text-sm" style={{ color: '#93c5fd' }}>Recomendaciones</p>
          </div>
          <ul className="text-xs space-y-1.5" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex items-start gap-2"><span style={{ color: 'var(--granate-light)' }}>·</span> Llega al estadio con al menos 45 min de antelacion</li>
            <li className="flex items-start gap-2"><span style={{ color: 'var(--granate-light)' }}>·</span> Lleva bateria externa para el movil</li>
            <li className="flex items-start gap-2"><span style={{ color: 'var(--granate-light)' }}>·</span> Comparte tu ubicacion con alguien de confianza</li>
            <li className="flex items-start gap-2"><span style={{ color: 'var(--granate-light)' }}>·</span> Evita salir justo cuando acabe el partido</li>
          </ul>
        </div>
      </section>

      <Divider />

      {/* TIEMPO */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <SectionHeader title="Tiempo en Sevilla" />
        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(234,179,8,0.08), rgba(234,88,12,0.06))',
            border: '1px solid rgba(234,179,8,0.2)',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-5xl font-black" style={{ color: '#eab308', letterSpacing: '-0.02em' }}>37°</p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Temperatura maxima</p>
            </div>
            <ThermometerSun size={52} strokeWidth={1.25} style={{ color: 'rgba(234,179,8,0.4)' }} />
          </div>

          <div
            className="grid grid-cols-3 gap-2 pt-4"
            style={{ borderTop: '1px solid rgba(234,179,8,0.15)' }}
          >
            {[
              { Icon: ThermometerSun, label: 'Minima', value: '24°' },
              { Icon: Wind, label: 'Sensacion', value: '40°' },
              { Icon: Droplets, label: 'Estado', value: 'Soleado' },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon size={14} strokeWidth={1.75} style={{ color: 'var(--text-muted)', margin: '0 auto 4px' }} />
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</p>
                <p className="font-bold text-sm mt-0.5" style={{ color: 'var(--text-primary)' }}>{value}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-4 rounded-xl p-3 flex gap-2.5 items-center"
            style={{ background: 'rgba(234,179,8,0.1)' }}
          >
            <TriangleAlert size={15} strokeWidth={2} style={{ color: '#eab308', flexShrink: 0 }} />
            <div>
              <p className="font-bold text-xs" style={{ color: '#eab308' }}>Calor extremo</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>Hidratacion constante. Minimo 1,5 L de agua.</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* CHECKLIST */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <SectionHeader title="Checklist del viaje" subtitle="Marca lo que ya tienes preparado" />
        <Checklist />
      </section>

      <Divider />

      {/* NUNCA DEJES DE CREER */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <SectionHeader title="Nunca dejes de creer" subtitle="Macho Llevant" />
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--granate-border)' }}
        >
          <video
            src="/burgos.mp4"
            controls
            playsInline
            className="w-full"
            style={{ display: 'block', background: '#000' }}
          />
        </div>
      </section>

      <Divider />

      {/* FAQ */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <SectionHeader title="Preguntas frecuentes" />
        <FAQ />
      </section>

      <Divider />

      {/* EMERGENCIAS */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <SectionHeader title="Emergencias" />
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(239,68,68,0.3)' }}
        >
          <div
            className="px-4 py-3 flex items-center gap-2"
            style={{ background: 'rgba(239,68,68,0.1)' }}
          >
            <Siren size={15} strokeWidth={1.75} style={{ color: '#f87171' }} />
            <p className="font-bold text-sm" style={{ color: '#f87171' }}>Contactos de emergencia</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border)' }}>
            {EMERGENCY.map(({ Icon, label, value, href }) => (
              <div
                key={label}
                className="px-4 py-3.5 flex items-center gap-3"
                style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}
              >
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ width: 36, height: 36, background: 'rgba(239,68,68,0.1)' }}
                >
                  <Icon size={16} strokeWidth={1.75} style={{ color: '#f87171' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</p>
                  {href ? (
                    <a href={href} className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                      {value}
                    </a>
                  ) : (
                    <p className="font-bold text-sm" style={{ color: 'var(--text-secondary)' }}>{value}</p>
                  )}
                </div>
                {href && href.startsWith('tel:') && (
                  <a
                    href={href}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-xs"
                    style={{
                      background: 'rgba(239,68,68,0.15)',
                      color: '#f87171',
                      border: '1px solid rgba(239,68,68,0.25)',
                    }}
                  >
                    <Phone size={12} strokeWidth={2} />
                    Llamar
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Divider />
      <footer className="px-4 py-12 text-center">
        <div className="flex justify-center mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/levante.png" alt="Levante UD" style={{ width: 52, height: 52, objectFit: 'contain' }} />
        </div>
        <p className="font-black text-xl mb-1" style={{ color: 'var(--text-primary)' }}>Levante UD</p>
        <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>Macho Llevant</p>
        <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Jornada 38 · LaLiga 2025/26</p>
        <p className="text-xs mb-8" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
          Real Betis vs Levante UD · Estadio La Cartuja · Sevilla
        </p>
      </footer>

      {/* STICKY CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 p-4 z-50"
        style={{ background: 'linear-gradient(transparent, rgba(10,10,20,0.97) 45%)' }}
      >
        <a
          href="#mapas"
          className="flex items-center justify-center gap-2.5 w-full max-w-md mx-auto text-center py-4 rounded-2xl font-black text-white shadow-xl transition-all active:scale-95 text-sm"
          style={{ background: 'linear-gradient(135deg, var(--granate-dark), var(--granate))' }}
        >
          <Trophy size={17} strokeWidth={2.5} />
          Como llegar al estadio
        </a>
      </div>

      <div style={{ height: 80 }} />
    </main>
  );
}

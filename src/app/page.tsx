import Countdown from '@/components/Countdown';
import TransportTabs from '@/components/TransportTabs';
import Checklist from '@/components/Checklist';

const MAPS = [
  {
    name: 'Estadio La Cartuja',
    icon: '🏟️',
    info: 'Estadio Olímpico · Sector visitante Curva Norte',
    distance: '4.5 km desde Santa Justa',
    walk: '55 min a pie',
    url: 'https://maps.google.com/?q=Estadio+de+la+Cartuja+Sevilla',
  },
  {
    name: 'Estación Santa Justa',
    icon: '🚄',
    info: 'Llegada y salida del AVE Charter',
    distance: 'Centro de Sevilla',
    walk: '15 min al centro',
    url: 'https://maps.google.com/?q=Estacion+Santa+Justa+Sevilla',
  },
  {
    name: 'Alameda de Hércules',
    icon: '🍺',
    info: 'Zona de ocio y terrazas · Punto de encuentro granotas',
    distance: '2 km desde Santa Justa',
    walk: '25 min a pie',
    url: 'https://maps.google.com/?q=Alameda+de+Hercules+Sevilla',
  },
  {
    name: 'Parking P7',
    icon: '🅿️',
    info: 'Parking oficial junto al estadio',
    distance: 'Junto al estadio',
    walk: '5 min andando',
    url: 'https://maps.google.com/?q=Parking+P7+Cartuja+Sevilla',
  },
];

const QUICK_INFO = [
  { icon: '⚽', label: 'Partido', value: 'Betis vs Levante' },
  { icon: '🏟️', label: 'Estadio', value: 'La Cartuja' },
  { icon: '🕘', label: 'Hora', value: '21:00h' },
  { icon: '⚠️', label: 'Temperatura', value: '37º máx', warn: true },
  { icon: '📅', label: 'Fecha', value: '25 mayo 2026' },
  { icon: '🚌', label: 'Transporte', value: 'Bus + AVE' },
];

const TRANSPORT_OPTIONS = [
  {
    icon: '🚆',
    title: 'Cercanías C2',
    desc: 'La opción más rápida. Sale desde Santa Justa hasta la zona del estadio. Consulta horarios ampliados por el partido.',
  },
  {
    icon: '🚕',
    title: 'Taxi / Uber / Cabify',
    desc: 'Disponibles en toda Sevilla. Muy recomendable en el post-partido para llegar a Santa Justa a tiempo para el AVE.',
  },
  {
    icon: '🚶',
    title: 'A pie',
    desc: 'Posible desde el centro (~45 min), pero NO recomendable con 37º. Lleva agua si decides caminar.',
  },
  {
    icon: '⚠️',
    title: 'Cortes de tráfico',
    desc: 'Espera cortes en accesos al estadio antes y después del partido. Sal con tiempo y sigue las indicaciones de los agentes.',
  },
];

const EMERGENCY = [
  { icon: '🆘', label: 'Emergencias', value: '112', href: 'tel:112' },
  { icon: '👮', label: 'Policía Nacional', value: '091', href: 'tel:091' },
  {
    icon: '🏥',
    label: 'Hospital Virgen del Rocío',
    value: 'Ver en Maps',
    href: 'https://maps.google.com/?q=Hospital+Virgen+del+Rocio+Sevilla',
  },
  { icon: '📞', label: 'Responsable viaje club', value: 'Consultar con el club', href: undefined },
];

export default function Home() {
  return (
    <main className="min-h-screen pb-24" style={{ background: '#0d0d1a', color: '#f5f5f5' }}>

      {/* DISCLAIMER BANNER */}
      <div
        className="w-full px-4 py-3 text-center text-xs leading-relaxed"
        style={{ background: 'rgba(26,43,92,0.5)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <span className="font-bold text-yellow-400">⚠️ Página no oficial · </span>
        <span className="text-gray-300">
          Esta es una iniciativa voluntaria para ayudar al aficionado granota desplazado. Esta página no tiene afiliación alguna al Levante UD ni al Real Betis.
          Para información oficial contacta siempre con fuentes oficiales.
          Gracias a todos los aficionados béticos que se están volcando por ayudarnos. 💚💙❤️
        </span>
      </div>

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pb-16 pt-16 text-center"
        style={{
          background:
            'linear-gradient(180deg, rgba(139,26,43,0.45) 0%, rgba(13,13,26,0.97) 60%, #0d0d1a 100%), radial-gradient(ellipse at top, #1A2B5C 0%, transparent 70%)',
        }}
      >
        <div className="max-w-md mx-auto w-full">
          {/* Escudos — Betis (local) izquierda, Levante (visitante) derecha */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center p-2"
              style={{ background: 'rgba(0,80,0,0.3)', border: '2px solid rgba(0,120,0,0.4)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/betis.svg" alt="Real Betis" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
            <div className="text-2xl text-gray-500 font-black">VS</div>
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center p-2"
              style={{ background: 'rgba(26,43,92,0.4)', border: '2px solid rgba(26,43,92,0.6)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/levante.png" alt="Levante UD" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
          </div>

          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase"
            style={{ background: 'rgba(139,26,43,0.3)', color: '#f87171', border: '1px solid rgba(139,26,43,0.5)' }}
          >
            Jornada 38 · LaLiga
          </div>

          <h1 className="text-4xl font-black mb-2 leading-tight tracking-tight">
            Real Betis
            <br />
            <span style={{ color: '#8B1A2B' }}>vs Levante UD</span>
          </h1>

          <p className="text-gray-400 mb-6 text-sm">
            Domingo 25 de mayo · 21:00h · Estadio La Cartuja, Sevilla
          </p>

          <div className="mb-8">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Faltan</p>
            <Countdown />
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#transporte"
              className="w-full py-4 rounded-2xl font-bold text-white text-center transition-all active:scale-95"
              style={{ background: '#8B1A2B' }}
            >
              Ver información del viaje
            </a>
            <a
              href="#mapas"
              className="w-full py-4 rounded-2xl font-bold text-center transition-all active:scale-95"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#f5f5f5',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              Cómo llegar al estadio
            </a>
          </div>

          <p className="text-center text-3xl mt-8 animate-bounce">⬇</p>
        </div>
      </section>

      {/* INFORMACIÓN RÁPIDA */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <h2 className="text-xl font-black mb-5 uppercase tracking-wide">Información rápida</h2>
        <div className="grid grid-cols-2 gap-3">
          {QUICK_INFO.map(({ icon, label, value, warn }) => (
            <div
              key={label}
              className="rounded-2xl p-4"
              style={{
                background: warn ? 'rgba(234,179,8,0.1)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${warn ? 'rgba(234,179,8,0.4)' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              <p className="text-2xl mb-2">{icon}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
              <p className={`font-bold text-sm mt-1 ${warn ? 'text-yellow-400' : 'text-white'}`}>{value}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-4 rounded-2xl p-4 flex gap-3 items-start"
          style={{ background: 'rgba(234,179,8,0.1)', border: '1px solid rgba(234,179,8,0.3)' }}
        >
          <span className="text-2xl">⚠️</span>
          <div>
            <p className="font-bold text-yellow-400 text-sm">Calor extremo en Sevilla</p>
            <p className="text-gray-400 text-xs mt-1">
              Sevilla estará alrededor de 37º. Lleva agua, gorra y protector solar. Hidratación constante.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSPORTE */}
      <section id="transporte" className="px-4 py-10 max-w-md mx-auto">
        <h2 className="text-xl font-black mb-5 uppercase tracking-wide">Transporte</h2>
        <TransportTabs />
      </section>

      {/* MAPAS */}
      <section id="mapas" className="px-4 py-10 max-w-md mx-auto">
        <h2 className="text-xl font-black mb-5 uppercase tracking-wide">Puntos clave</h2>
        <div className="space-y-3">
          {MAPS.map(({ name, icon, info, distance, walk, url }) => (
            <div
              key={name}
              className="rounded-2xl p-4"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white">{name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{info}</p>
                </div>
              </div>
              <div className="flex gap-4 mb-3 text-xs text-gray-500">
                <span>📍 {distance}</span>
                <span>🚶 {walk}</span>
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-xl font-bold text-sm transition-all active:scale-95"
                style={{ background: 'rgba(26,43,92,0.6)', color: '#93c5fd', border: '1px solid rgba(26,43,92,0.8)' }}
              >
                Abrir en Google Maps →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO MOVERSE */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <h2 className="text-xl font-black mb-5 uppercase tracking-wide">Cómo moverse</h2>
        <div className="space-y-3">
          {TRANSPORT_OPTIONS.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl p-4 flex gap-3"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <div>
                <p className="font-bold text-sm text-white">{title}</p>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-4 rounded-2xl p-4"
          style={{ background: 'rgba(26,43,92,0.2)', border: '1px solid rgba(26,43,92,0.4)' }}
        >
          <p className="font-bold text-sm text-blue-300 mb-2">💡 Recomendaciones</p>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• Llega al estadio con al menos 45 min de antelación</li>
            <li>• Lleva batería externa para el móvil</li>
            <li>• Comparte tu ubicación con alguien de confianza</li>
            <li>• Evita salir justo cuando acabe el partido</li>
          </ul>
        </div>
      </section>

      {/* TIEMPO */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <h2 className="text-xl font-black mb-5 uppercase tracking-wide">Tiempo en Sevilla</h2>
        <div
          className="rounded-2xl p-6 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(234,179,8,0.15), rgba(234,88,12,0.1))',
            border: '1px solid rgba(234,179,8,0.3)',
          }}
        >
          <p className="text-6xl mb-2">☀️</p>
          <p className="text-5xl font-black text-yellow-400">37°</p>
          <p className="text-gray-400 text-sm mt-1">Temperatura máxima · domingo 25 mayo</p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div>
              <p className="text-gray-500 text-xs">Mín</p>
              <p className="font-bold text-white">24°</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">Sensación</p>
              <p className="font-bold text-white">40°</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">Estado</p>
              <p className="font-bold text-white">Soleado</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl p-3" style={{ background: 'rgba(234,179,8,0.15)' }}>
            <p className="text-yellow-400 font-bold text-sm">⚠️ Calor extremo</p>
            <p className="text-gray-400 text-xs mt-1">Hidratación constante recomendada. Mínimo 1,5L de agua.</p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <h2 className="text-xl font-black mb-2 uppercase tracking-wide">Checklist del viaje</h2>
        <p className="text-gray-500 text-sm mb-6">Marca lo que ya tienes preparado</p>
        <Checklist />
      </section>

      {/* NUNCA DEJES DE CREER */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <h2 className="text-xl font-black mb-2 uppercase tracking-wide">Nunca dejes de creer</h2>
        <p className="text-gray-500 text-sm mb-5">Macho Llevant 💙</p>
        <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid rgba(139,26,43,0.5)' }}>
          <video
            src="/burgos.mp4"
            controls
            playsInline
            className="w-full"
            style={{ display: 'block', background: '#000' }}
          />
        </div>
      </section>

      {/* EMERGENCIAS */}
      <section className="px-4 py-10 max-w-md mx-auto">
        <h2 className="text-xl font-black mb-5 uppercase tracking-wide">Emergencias</h2>
        <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid rgba(239,68,68,0.4)' }}>
          <div className="px-4 py-3 flex items-center gap-2" style={{ background: 'rgba(239,68,68,0.15)' }}>
            <span className="text-red-400 text-lg">🚨</span>
            <p className="font-bold text-red-400 text-sm">Contactos de emergencia</p>
          </div>
          <div className="divide-y divide-white/5">
            {EMERGENCY.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="px-4 py-4 flex items-center gap-3"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500">{label}</p>
                  {href ? (
                    <a href={href} className="font-bold text-white text-sm">
                      {value}
                    </a>
                  ) : (
                    <p className="font-bold text-gray-300 text-sm">{value}</p>
                  )}
                </div>
                {href && href.startsWith('tel:') && (
                  <a
                    href={href}
                    className="px-4 py-2 rounded-xl font-bold text-xs"
                    style={{
                      background: 'rgba(239,68,68,0.2)',
                      color: '#f87171',
                      border: '1px solid rgba(239,68,68,0.3)',
                    }}
                  >
                    Llamar
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 py-10 text-center mt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex justify-center mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/levante.png" alt="Levante UD" className="w-14 h-14 object-contain" />
        </div>
        <p className="font-black text-xl mb-1">Levante UD</p>
        <p className="text-gray-500 text-sm mb-4">Macho Llevant 💙</p>
        <p className="text-xs text-gray-600 mb-1">Jornada 38 · LaLiga 2025/26</p>
        <p className="text-xs text-gray-700 mb-6">Real Betis vs Levante UD · Estadio La Cartuja · Sevilla</p>

        {/* Disclaimer footer */}
        <div
          className="max-w-sm mx-auto rounded-2xl p-4 text-left"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs font-bold text-yellow-400 mb-2">⚠️ Aviso importante</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Esta web es una <span className="text-white font-semibold">iniciativa voluntaria y no oficial</span>, creada
            para ayudar al aficionado desplazado. No está afiliada ni representa al Levante UD ni al Real Betis.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed mt-2">
            En caso de duda sobre el viaje, horarios u organización, consulta siempre las{' '}
            <span className="text-white font-semibold">fuentes oficiales del club</span> o contacta con{' '}
            <span className="text-white font-semibold">Macho Llevant</span>.
          </p>
        </div>
      </footer>

      {/* STICKY CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 p-4 z-50"
        style={{ background: 'linear-gradient(transparent, rgba(13,13,26,0.98) 40%)' }}
      >
        <a
          href="#mapas"
          className="block w-full max-w-md mx-auto text-center py-4 rounded-2xl font-black text-white shadow-xl transition-all active:scale-95"
          style={{ background: 'linear-gradient(135deg, #8B1A2B, #a82030)' }}
        >
          🏟️ Cómo llegar al estadio
        </a>
      </div>
    </main>
  );
}

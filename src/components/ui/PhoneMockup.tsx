const COLORS = {
  comida: "#2D6A4F",
  servicios: "#F4A261",
  transporte: "#52B788",
  ropa: "#A8DADC",
};

const categories = [
  { label: "Comida", pct: 43, color: COLORS.comida, amount: "S/510.40" },
  { label: "Servicios", pct: 18, color: COLORS.servicios, amount: "S/213.70" },
  {
    label: "Transporte",
    pct: 14,
    color: COLORS.transporte,
    amount: "S/166.20",
  },
  { label: "Ropa", pct: 11, color: COLORS.ropa, amount: "S/130.60" },
];

const TxIconFood = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);
const TxIconBus = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 6v6" />
    <path d="M15 6v6" />
    <path d="M2 12h19.6" />
    <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
    <circle cx="7" cy="18" r="2" />
    <path d="M9 18h5" />
    <circle cx="16" cy="18" r="2" />
  </svg>
);
const TxIconCoffee = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);
const TxIconTv = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="7" width="20" height="15" rx="2" />
    <polyline points="17 2 12 7 7 2" />
  </svg>
);

const transactions = [
  {
    Icon: TxIconFood,
    label: "Menú PUCP",
    sub: "Comida · Hoy, 1:20 p.m.",
    amount: "- S/ 12.00",
    color: COLORS.comida,
  },
  {
    Icon: TxIconBus,
    label: "Combi a San Isidro",
    sub: "Transporte · Hoy, 9:05 a.m.",
    amount: "- S/ 2.50",
    color: COLORS.transporte,
  },
  {
    Icon: TxIconCoffee,
    label: "Starbucks Larcomar",
    sub: "Comida · Ayer, 6:42 p.m.",
    amount: "- S/ 18.50",
    color: COLORS.comida,
  },
  {
    Icon: TxIconTv,
    label: "Netflix",
    sub: "Servicios · Ayer, 12:00 p.m.",
    amount: "- S/ 28.90",
    color: COLORS.servicios,
  },
];

// Donut chart helpers
function polarToXY(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function DonutChart() {
  const cx = 52;
  const cy = 52;
  const r = 40;
  const strokeW = 14;
  const gap = 2;
  const total = categories.reduce((s, c) => s + c.pct, 0);
  let angle = 0;

  const slices = categories.map((cat) => {
    const sweep = (cat.pct / total) * 360 - gap;
    const start = polarToXY(cx, cy, r, angle);
    const end = polarToXY(cx, cy, r, angle + sweep);
    const large = sweep > 180 ? 1 : 0;
    const d = `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y}`;
    angle += (cat.pct / total) * 360;
    return { d, color: cat.color };
  });

  return (
    <svg width="104" height="104" viewBox="0 0 104 104" aria-hidden="true">
      {slices.map((s) => (
        <path
          key={s.color}
          d={s.d}
          fill="none"
          stroke={s.color}
          strokeWidth={strokeW}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

// Lucide-style SVG icons inline (avoids import overhead)
const IconHome = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconChart = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const IconBell = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);
const IconUser = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconPlus = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconAlert = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const navItems = [
  { label: "Inicio", Icon: IconHome, active: true },
  { label: "Reportes", Icon: IconChart, active: false },
  { label: "Alertas", Icon: IconBell, active: false },
  { label: "Perfil", Icon: IconUser, active: false },
];

export default function PhoneMockup() {
  return (
    <div
      className="relative mx-auto select-none"
      style={{ width: 280, animation: "float 3s ease-in-out infinite" }}
      aria-hidden="true"
    >
      {/* Phone frame */}
      <div
        style={{
          background: "#1a1a1a",
          borderRadius: "3rem",
          padding: "3px",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08) inset",
        }}
      >
        {/* Screen */}
        <div
          style={{
            background: "#F7F9F8",
            borderRadius: "calc(3rem - 3px)",
            overflow: "hidden",
            height: 570,
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* Dynamic island */}
          <div
            style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 90,
              height: 26,
              background: "#1a1a1a",
              borderRadius: 99,
              zIndex: 10,
            }}
          />

          {/* Status bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 18px 0",
              paddingTop: 14,
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, color: "#0D1F2D" }}>
              9:41
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {/* Signal */}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                aria-hidden="true"
              >
                <rect
                  x="0"
                  y="6"
                  width="2.5"
                  height="4"
                  rx="0.5"
                  fill="#0D1F2D"
                />
                <rect
                  x="3.5"
                  y="4"
                  width="2.5"
                  height="6"
                  rx="0.5"
                  fill="#0D1F2D"
                />
                <rect
                  x="7"
                  y="2"
                  width="2.5"
                  height="8"
                  rx="0.5"
                  fill="#0D1F2D"
                />
                <rect
                  x="10.5"
                  y="0"
                  width="2.5"
                  height="10"
                  rx="0.5"
                  fill="#0D1F2D"
                />
              </svg>
              {/* WiFi */}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                aria-hidden="true"
              >
                <path d="M7 8.5 a0.7 0.7 0 1 1 0 .01" fill="#0D1F2D" />
                <path
                  d="M4.5 6.5 Q7 4.5 9.5 6.5"
                  fill="none"
                  stroke="#0D1F2D"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M2 4.5 Q7 0.5 12 4.5"
                  fill="none"
                  stroke="#0D1F2D"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              {/* Battery */}
              <svg
                width="20"
                height="10"
                viewBox="0 0 20 10"
                aria-hidden="true"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="9"
                  rx="2"
                  stroke="#0D1F2D"
                  strokeWidth="1"
                  fill="none"
                />
                <rect x="2" y="2" width="11" height="6" rx="1" fill="#0D1F2D" />
                <path
                  d="M17.5 3.5 v3"
                  stroke="#0D1F2D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Scrollable content area */}
          <div
            style={{
              flex: 1,
              overflowY: "hidden",
              display: "flex",
              flexDirection: "column",
              paddingBottom: 0,
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "10px 16px 6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 10,
                    color: "#0D1F2D",
                    opacity: 0.5,
                    margin: 0,
                  }}
                >
                  Junio 2026
                </p>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0D1F2D",
                    margin: 0,
                  }}
                >
                  Hola, Josep
                </p>
              </div>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "#2D6A4F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>
                  JR
                </span>
              </div>
            </div>

            {/* Donut + legend */}
            <div
              style={{
                padding: "4px 16px 4px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div style={{ position: "relative", flexShrink: 0 }}>
                <DonutChart />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: 7,
                      color: "#0D1F2D",
                      opacity: 0.5,
                      margin: 0,
                    }}
                  >
                    Gastado
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      color: "#0D1F2D",
                      margin: 0,
                    }}
                  >
                    S/1,187
                  </p>
                  <p
                    style={{
                      fontSize: 7,
                      color: "#0D1F2D",
                      opacity: 0.4,
                      margin: 0,
                    }}
                  >
                    de S/1,500
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  flex: 1,
                }}
              >
                {categories.map((cat) => (
                  <div
                    key={cat.label}
                    style={{ display: "flex", alignItems: "center", gap: 5 }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: cat.color,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 9, color: "#0D1F2D", flex: 1 }}>
                      {cat.label}
                    </span>
                    <span
                      style={{ fontSize: 9, fontWeight: 600, color: "#0D1F2D" }}
                    >
                      {cat.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget warning */}
            <div
              style={{
                margin: "4px 16px",
                background: "#FFF8ED",
                borderRadius: 10,
                padding: "8px 10px",
                display: "flex",
                gap: 6,
                alignItems: "flex-start",
              }}
            >
              <div style={{ color: "#F4A261", marginTop: 1, flexShrink: 0 }}>
                <IconAlert />
              </div>
              <div>
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#0D1F2D",
                    margin: 0,
                  }}
                >
                  Cerca de tu límite mensual
                </p>
                <p
                  style={{
                    fontSize: 8,
                    color: "#0D1F2D",
                    opacity: 0.6,
                    margin: 0,
                  }}
                >
                  Llevás el 79% de tu presupuesto de S/ 1,500.
                </p>
              </div>
            </div>

            {/* Recent transactions */}
            <div style={{ padding: "6px 16px 4px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <span
                  style={{ fontSize: 10, fontWeight: 700, color: "#0D1F2D" }}
                >
                  Movimientos recientes
                </span>
                <span
                  style={{ fontSize: 8, color: "#2D6A4F", fontWeight: 600 }}
                >
                  Ver todo
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {transactions.map((tx) => (
                  <div
                    key={tx.label}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 8,
                        background: `${tx.color}22`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: tx.color,
                      }}
                    >
                      <tx.Icon />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontSize: 9,
                          fontWeight: 600,
                          color: "#0D1F2D",
                          margin: 0,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tx.label}
                      </p>
                      <p
                        style={{
                          fontSize: 8,
                          color: "#0D1F2D",
                          opacity: 0.45,
                          margin: 0,
                        }}
                      >
                        {tx.sub}
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: "#0D1F2D",
                        flexShrink: 0,
                      }}
                    >
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom navigation — always at the bottom */}
          <div
            style={{
              flexShrink: 0,
              background: "white",
              borderTop: "1px solid #E8EDE9",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "8px 8px 10px",
            }}
          >
            {navItems.slice(0, 2).map(({ label, Icon, active }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                  flex: 1,
                }}
              >
                <div style={{ color: active ? "#2D6A4F" : "#0D1F2D66" }}>
                  <Icon />
                </div>
                <span
                  style={{
                    fontSize: 8,
                    color: active ? "#2D6A4F" : "#0D1F2D66",
                    fontWeight: active ? 700 : 400,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}

            {/* Center + button */}
            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "#2D6A4F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(45,106,79,0.4)",
                }}
              >
                <IconPlus />
              </div>
            </div>

            {navItems.slice(2).map(({ label, Icon }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                  flex: 1,
                }}
              >
                <div style={{ color: "#0D1F2D66" }}>
                  <Icon />
                </div>
                <span style={{ fontSize: 8, color: "#0D1F2D66" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

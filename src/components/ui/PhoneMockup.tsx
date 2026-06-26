export default function PhoneMockup() {
  return (
    <div
      className="relative mx-auto"
      style={{ width: 280, animation: "float 3s ease-in-out infinite" }}
      aria-hidden="true"
    >
      {/* Outer phone frame */}
      <div
        className="relative overflow-hidden shadow-2xl"
        style={{
          background: "#1a1a1a",
          borderRadius: "3rem",
          padding: "3px",
          width: 280,
        }}
      >
        {/* Screen */}
        <div
          style={{
            background: "#F7F9F8",
            borderRadius: "calc(3rem - 3px)",
            overflow: "hidden",
            minHeight: 560,
            position: "relative",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: "50%",
              transform: "translateX(-50%)",
              width: 90,
              height: 28,
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
              padding: "10px 20px 4px",
              paddingTop: 14,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, color: "#0D1F2D" }}>9:41</span>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {/* Signal */}
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <rect x="0" y="8" width="3" height="4" rx="1" fill="#0D1F2D" />
                <rect x="4.5" y="5" width="3" height="7" rx="1" fill="#0D1F2D" />
                <rect x="9" y="2" width="3" height="10" rx="1" fill="#0D1F2D" />
                <rect x="13.5" y="0" width="2.5" height="12" rx="1" fill="#0D1F2D" opacity="0.3" />
              </svg>
              {/* Battery */}
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
                <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="#0D1F2D" strokeWidth="1" />
                <rect x="2" y="2" width="13" height="8" rx="1.5" fill="#2D6A4F" />
                <path d="M20 4v4c.8-.4 1.3-1.2 1.3-2S20.8 4.4 20 4z" fill="#0D1F2D" />
              </svg>
            </div>
          </div>

          {/* App header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 16px 4px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "#2D6A4F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontSize: 12, fontWeight: 700 }}>G</span>
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#0D1F2D" }}>Gastify</span>
            </div>
            {/* Bell icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D1F2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>

          {/* Monthly summary card */}
          <div style={{ padding: "8px 12px" }}>
            <div
              style={{
                background: "#2D6A4F",
                borderRadius: 16,
                padding: "14px 16px",
                color: "white",
              }}
            >
              <p style={{ fontSize: 10, opacity: 0.8, marginBottom: 4 }}>Resumen mensual</p>
              <p style={{ fontSize: 11, opacity: 0.7, marginBottom: 2 }}>Saldo disponible</p>
              <p style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>S/ 1,850.00</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ fontSize: 9, opacity: 0.7 }}>Gastos este mes</p>
                  <p style={{ fontSize: 13, fontWeight: 600 }}>- S/ 1,250.00</p>
                </div>
                {/* Mini chart */}
                <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                  <polyline
                    points="0,25 10,20 20,22 30,14 40,10 50,12 60,4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    opacity="0.8"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Category section */}
          <div style={{ padding: "4px 12px 6px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#0D1F2D", marginBottom: 8 }}>
              Gastos por categoría
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {/* Donut chart */}
              <svg width="64" height="64" viewBox="0 0 64 64">
                {/* Segments using stroke-dasharray on a circle with r=22 circumference=138.2 */}
                <circle cx="32" cy="32" r="22" fill="none" stroke="#E8EDE9" strokeWidth="10" />
                {/* Alimentación 450/1250 = 36% → 49.8 */}
                <circle cx="32" cy="32" r="22" fill="none" stroke="#2D6A4F" strokeWidth="10"
                  strokeDasharray="49.8 88.4" strokeDashoffset="0" />
                {/* Transporte 250/1250 = 20% → 27.6 */}
                <circle cx="32" cy="32" r="22" fill="none" stroke="#52B788" strokeWidth="10"
                  strokeDasharray="27.6 110.6" strokeDashoffset="-49.8" />
                {/* Entretenimiento 200/1250 = 16% → 22.1 */}
                <circle cx="32" cy="32" r="22" fill="none" stroke="#95D5B2" strokeWidth="10"
                  strokeDasharray="22.1 116.1" strokeDashoffset="-77.4" />
                {/* Servicios 150/1250 = 12% → 16.6 */}
                <circle cx="32" cy="32" r="22" fill="none" stroke="#B7E4C7" strokeWidth="10"
                  strokeDasharray="16.6 121.6" strokeDashoffset="-99.5" />
                {/* Otros 200/1250 = 16% */}
                <circle cx="32" cy="32" r="22" fill="none" stroke="#D8F3DC" strokeWidth="10"
                  strokeDasharray="22.1 116.1" strokeDashoffset="-116.1" />
              </svg>
              {/* Legend */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  { label: "Alimentación", amount: "S/450", color: "#2D6A4F" },
                  { label: "Transporte", amount: "S/250", color: "#52B788" },
                  { label: "Entretenimiento", amount: "S/200", color: "#95D5B2" },
                  { label: "Servicios", amount: "S/150", color: "#B7E4C7" },
                  { label: "Otros", amount: "S/200", color: "#D8F3DC" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.color, border: item.color === "#D8F3DC" ? "1px solid #ccc" : "none" }} />
                      <span style={{ fontSize: 8, color: "#0D1F2D" }}>{item.label}</span>
                    </div>
                    <span style={{ fontSize: 8, fontWeight: 600, color: "#0D1F2D" }}>{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Budget bar */}
          <div style={{ padding: "2px 12px 8px" }}>
            <div
              style={{
                background: "white",
                borderRadius: 10,
                padding: "8px 10px",
                border: "1px solid #E8EDE9",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 9, fontWeight: 600, color: "#0D1F2D" }}>Alimentación</span>
                <span style={{ fontSize: 9, color: "#0D1F2D", opacity: 0.6 }}>S/450 / S/600</span>
              </div>
              <div style={{ background: "#E8EDE9", borderRadius: 99, height: 6 }}>
                <div
                  style={{
                    background: "#2D6A4F",
                    borderRadius: 99,
                    height: 6,
                    width: "75%",
                  }}
                />
              </div>
              <p style={{ fontSize: 8, color: "#52B788", marginTop: 4, fontWeight: 500 }}>75% del presupuesto usado</p>
            </div>
          </div>

          {/* Bottom tab bar */}
          <div
            style={{
              borderTop: "1px solid #E8EDE9",
              background: "white",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "8px 8px 12px",
            }}
          >
            {/* Inicio */}
            <button style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#2D6A4F" stroke="none">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span style={{ fontSize: 8, color: "#2D6A4F", fontWeight: 600 }}>Inicio</span>
            </button>
            {/* Gastos */}
            <button style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D1F2D" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span style={{ fontSize: 8, color: "#0D1F2D", opacity: 0.5 }}>Gastos</span>
            </button>
            {/* Add button */}
            <button style={{ background: "#2D6A4F", border: "none", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 12px rgba(45,106,79,0.4)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            {/* Presupuesto */}
            <button style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D1F2D" strokeWidth="2" strokeLinecap="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <span style={{ fontSize: 8, color: "#0D1F2D", opacity: 0.5 }}>Presupuesto</span>
            </button>
            {/* Perfil */}
            <button style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D1F2D" strokeWidth="2" strokeLinecap="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span style={{ fontSize: 8, color: "#0D1F2D", opacity: 0.5 }}>Perfil</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reflection shadow */}
      <div
        style={{
          position: "absolute",
          bottom: -20,
          left: "50%",
          transform: "translateX(-50%)",
          width: 200,
          height: 20,
          background: "rgba(45,106,79,0.15)",
          borderRadius: "50%",
          filter: "blur(10px)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

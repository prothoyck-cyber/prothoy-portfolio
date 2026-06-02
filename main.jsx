import { useState, useEffect, useRef, useMemo } from 'react';

// Portfolio projects gallery with filter
function WebPortfolio({ portfolio }) {
  const [active, setActive] = useState("All");
  const filtered = active==="All" ? portfolio : portfolio.filter(p=>p.category===active);
  const sectionRef  = useRef(null);
  const mouseGlowRef = useRef(null);

  /* Mouse-reactive glow */
  useEffect(()=>{
    const section = sectionRef.current;
    const glow    = mouseGlowRef.current;
    if(!section || !glow) return;
    const onMove = e => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.left = x + "px";
      glow.style.top  = y + "px";
      glow.style.opacity = "1";
    };
    const onLeave = () => { glow.style.opacity = "0"; };
    section.addEventListener("mousemove", onMove, { passive:true });
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  /* Particle config */
  const particles = useMemo(() => (
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left:  `${Math.random() * 100}%`,
      top:   `${Math.random() * 100}%`,
      size:  1 + Math.random() * 2.5,
      dur:   6 + Math.random() * 14,
      delay: Math.random() * 12,
      color: ["rgba(0,212,255,", "rgba(139,92,246,", "rgba(236,72,153,"][Math.floor(Math.random()*3)],
      opacity: 0.4 + Math.random() * 0.5,
    }))
  ), []);

  return (
    <section ref={sectionRef} className="w-sec w-port-section-wrap" id="projects">

      {/* ── AURORA LAYERS ── */}
      <div className="w-port-aurora1" aria-hidden="true"/>
      <div className="w-port-aurora2" aria-hidden="true"/>
      <div className="w-port-aurora3" aria-hidden="true"/>

      {/* ── CYBER GRID ── */}
      <div className="w-port-grid-bg" aria-hidden="true"/>

      {/* ── DOT MATRIX ── */}
      <div className="w-port-dots" aria-hidden="true"/>

      {/* ── LIGHT STREAKS ── */}
      <div className="w-port-streak1" aria-hidden="true"/>
      <div className="w-port-streak2" aria-hidden="true"/>

      {/* ── SCAN LINE ── */}
      <div className="w-port-scan" aria-hidden="true"/>

      {/* ── FLOATING PARTICLES ── */}
      {particles.map(p => (
        <div key={p.id} className="w-port-particle" aria-hidden="true" style={{
          left: p.left, top: p.top,
          width: p.size + "px", height: p.size + "px",
          background: p.color + p.opacity + ")",
          boxShadow: `0 0 ${p.size * 3}px ${p.color}0.6)`,
          animationDuration: p.dur + "s",
          animationDelay: p.delay + "s",
        }}/>
      ))}

      {/* ── MOUSE GLOW ── */}
      <div ref={mouseGlowRef} className="w-port-mouse-glow" aria-hidden="true"
        style={{opacity:0,transition:"left 0.10s ease-out,top 0.10s ease-out,opacity 0.4s ease"}}/>

      {/* ── CONTENT ── */}
      <div className="w-port-content">

        {/* Section label & heading — unchanged */}
        <div className="w-sl">Projects</div>
        <h2 className="w-st">My <span className="g">Projects</span></h2>
        <p className="w-ss">A curated collection of work that drives results.</p>

        {/* Filter pills — no container box */}
        <div className="w-port-filter">
          {PORT_CATS.map((c, i) => (
            <button
              key={c}
              className={`w-filter-btn${active===c?" on":""}`}
              style={{animationDelay:`${i*0.05}s`}}
              onClick={()=>setActive(c)}
            >{c}</button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="w-port-grid">
          {filtered.map((p, i) => {
            const color = CAT_COLORS[p.category] || "#00D4FF";
            const hex   = color.replace("#","");
            // Parse hex to rgb for dynamic shadows
            const r = parseInt(hex.slice(0,2),16);
            const g = parseInt(hex.slice(2,4),16);
            const b = parseInt(hex.slice(4,6),16);
            return (
              <div
                key={p.id}
                className="w-port-card"
                style={{
                  animationDelay:`${i*0.07}s`,
                  "--card-r": r, "--card-g": g, "--card-b": b,
                }}
                onMouseEnter={e=>{
                  e.currentTarget.style.boxShadow = `
                    0 1px 0 rgba(255,255,255,0.13) inset,
                    0 32px 80px rgba(0,0,0,0.65),
                    0 12px 40px rgba(0,0,0,0.40),
                    0 0 0 1px rgba(${r},${g},${b},0.12),
                    0 0 80px rgba(${r},${g},${b},0.10),
                    0 0 140px rgba(${r},${g},${b},0.06)
                  `;
                }}
                onMouseLeave={e=>{
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Per-card color accent edge */}
                <div aria-hidden="true" style={{
                  position:"absolute",top:"15%",left:0,
                  width:"1.5px",height:"70%",
                  background:`linear-gradient(180deg,transparent,${color}90,transparent)`,
                  zIndex:5,borderRadius:2,
                }}/>

                {/* Thumbnail */}
                <div className="w-port-thumb">
                  {/* Dynamic color mesh per card */}
                  <div aria-hidden="true" style={{
                    position:"absolute",inset:0,zIndex:1,
                    background:`
                      radial-gradient(ellipse 90% 80% at 50% 40%, rgba(${r},${g},${b},0.13) 0%, transparent 60%),
                      radial-gradient(ellipse 50% 40% at 85% 15%, rgba(${r},${g},${b},0.07) 0%, transparent 50%),
                      radial-gradient(ellipse 40% 35% at 10% 85%, rgba(139,92,246,0.06) 0%, transparent 50%)
                    `,
                  }}/>

                  {/* Icon */}
                  <div className="w-port-icon" style={{
                    color,
                    filter:`drop-shadow(0 0 18px ${color}) drop-shadow(0 0 40px rgba(${r},${g},${b},0.5))`,
                    animationDelay:`${i*0.4}s`,
                  }}>
                    {CAT_ICONS[p.category]||"◈"}
                  </div>

                  {/* Reflection line below icon */}
                  <div className="w-port-icon-reflection" style={{color}}/>

                  <div className="w-port-overlay"/>

                  {p.featured && (
                    <div className="w-port-feat" style={{
                      color,
                      borderColor:`rgba(${r},${g},${b},0.40)`,
                      textShadow:`0 0 14px ${color}`,
                    }}>✦ Featured</div>
                  )}
                </div>

                {/* Info */}
                <div className="w-port-info" style={{
                  "--w-port-accent":`linear-gradient(90deg,${color},rgba(139,92,246,0.7))`,
                }}>
                  <div className="w-port-cat" style={{color:`rgba(${r},${g},${b},0.85)`}}>
                    {p.category}
                  </div>
                  <div className="w-port-title">{p.title}</div>
                  <div className="w-port-meta">{p.client} · {p.year}</div>
                  <div className="w-port-tags">
                    {(Array.isArray(p.tags)?p.tags:[]).map(t=>(
                      <span key={t} className="w-port-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export { WebPortfolio };

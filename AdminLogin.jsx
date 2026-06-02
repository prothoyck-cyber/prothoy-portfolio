import { useState, useEffect, useRef } from 'react';

// Floating glassmorphism navigation bar
function WebNav() {
  const [sc, setSc]       = useState(false);
  const [open, setOpen]   = useState(false);
  useEffect(()=>{ const h=()=>setSc(window.scrollY>40); window.addEventListener("scroll",h); return()=>window.removeEventListener("scroll",h); },[]);
  useEffect(()=>{ document.body.style.overflow=open?"hidden":""; return()=>{document.body.style.overflow="";}; },[open]);
  const scrollTo = id => {
    setOpen(false);
    setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"}), 50);
  };
  const links = [["services","Services"],["projects","Projects"],["reviews","Reviews"],["about","About"],["contact","Contact"]];

  /* SVG icon helper — minimal stroked icons */
  const icons = {
    home:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>,
    services: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="8" height="8" rx="2"/><rect x="14" y="3" width="8" height="8" rx="2"/><rect x="2" y="14" width="8" height="8" rx="2"/><rect x="14" y="14" width="8" height="8" rx="2"/></svg>,
    projects: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>,
    reviews:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    about:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
    contact:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  };

  return (
    <>
      <div className={`nav-outer${sc?" sc":""}`}>
        <nav className="nav">
          <span className="nav-logo" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>PC.</span>
          {/* Desktop links */}
          <div className="nav-links">
            {links.map(([id,l])=>(
              <button key={id} className="nav-link" onClick={()=>scrollTo(id)}>{l}</button>
            ))}
            <button className="nav-cta" onClick={()=>scrollTo("contact")}>Hire Me</button>
          </div>
          {/* Mobile burger — icon only, premium glass pill */}
          <button className="nav-burger" onClick={()=>setOpen(true)} aria-label="Open navigation">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="17" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
            </svg>
          </button>
        </nav>
      </div>

      {/* Backdrop overlay */}
      {open && <div className="mob-overlay open" onClick={()=>setOpen(false)}/>}

      {/* Side Drawer */}
      <div className={`mob-menu${open?" open":""}`}>
        <div className="mob-menu-bg"/>

        {/* Header */}
        <div className="mob-header">
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div className="mob-logo">PC.</div>
            <div className="mob-avail-pill">
              <div className="mob-avail-dot"/>
              Available
            </div>
          </div>
          <button className="mob-close" onClick={()=>setOpen(false)} aria-label="Close navigation">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className="mob-nav">
          <div className="mob-nav-label">Navigation</div>
          {[
            { id:"home",     label:"Home",     sub:"Back to top",       iconKey:"home"     },
            { id:"services", label:"Services", sub:"What I offer",      iconKey:"services" },
            { id:"projects", label:"Projects", sub:"My portfolio",      iconKey:"projects" },
            { id:"reviews",  label:"Reviews",  sub:"Client stories",    iconKey:"reviews"  },
            { id:"about",    label:"About",    sub:"Who I am",          iconKey:"about"    },
            { id:"contact",  label:"Contact",  sub:"Get in touch",      iconKey:"contact"  },
          ].map(({ id, label, sub, iconKey }, i) => (
            <button key={id} className="mob-link"
              onClick={() => {
                setOpen(false);
                if(id==="home") { setTimeout(()=>window.scrollTo({top:0,behavior:"smooth"}),50); }
                else setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"}),50);
              }}
              style={{animationDelay:`${i*0.045}s`}}>
              <div className="mob-link-icon">{icons[iconKey]}</div>
              <div className="mob-link-text">
                <span className="mob-link-label">{label}</span>
                <span className="mob-link-sub">{sub}</span>
              </div>
              <span className="mob-link-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </span>
            </button>
          ))}
          <div className="mob-divider" style={{marginTop:4}}/>
        </div>

        {/* Footer CTA — premium glass button, no colour gradients */}
        <div className="mob-footer">
          <button
            style={{
              width:"100%",padding:"15px 24px",
              display:"flex",alignItems:"center",justifyContent:"center",gap:10,
              background:"rgba(16,26,61,0.9)",
              border:"1px solid rgba(120,140,255,0.18)",
              borderRadius:15,
              color:"#fff",
              fontFamily:"var(--fd)",fontSize:14,fontWeight:700,letterSpacing:"-0.01em",
              cursor:"pointer",
              position:"relative",overflow:"hidden",
              boxShadow:"0 1px 0 rgba(120,140,255,0.12) inset",
              transition:"background 0.25s,border-color 0.25s,transform 0.22s,box-shadow 0.25s",
            }}
            onMouseEnter={e=>{
              e.currentTarget.style.background="rgba(20,33,75,0.95)";
              e.currentTarget.style.borderColor="rgba(120,140,255,0.32)";
              e.currentTarget.style.transform="translateY(-2px)";
              e.currentTarget.style.boxShadow="0 1px 0 rgba(120,140,255,0.18) inset,0 16px 40px rgba(0,5,30,0.45)";
            }}
            onMouseLeave={e=>{
              e.currentTarget.style.background="rgba(16,26,61,0.9)";
              e.currentTarget.style.borderColor="rgba(120,140,255,0.18)";
              e.currentTarget.style.transform="translateY(0)";
              e.currentTarget.style.boxShadow="0 1px 0 rgba(120,140,255,0.12) inset";
            }}
            onClick={()=>{setOpen(false);setTimeout(()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}),50);}}
          >
            <span>Let's Work Together</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.65}}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

function useCounter(target, go) {
  const [v, setV] = useState(0);
  useEffect(()=>{
    if(!go) return;
    let s=0; const step=target/60;
    const t=setInterval(()=>{ s+=step; if(s>=target){setV(target);clearInterval(t);}else setV(Math.floor(s)); },16);
    return()=>clearInterval(t);
  },[go,target]);
  return v;
}

export { WebNav };

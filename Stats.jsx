import { useRef, useEffect } from 'react';

// Hero section — main landing area
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

function WebHero({ hero }) {
  return (
    <section className="w-hero" id="home">
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% -10%,rgba(0,212,255,0.14),transparent 60%),radial-gradient(ellipse 50% 50% at 80% 80%,rgba(139,92,246,0.12),transparent 50%)"}} />
      <div className="w-orb w-orb1"/><div className="w-orb w-orb2"/><div className="w-orb w-orb3"/>
      <div className="w-grid"/>
      <div className="w-hero-content">
        <div className="w-badge"><span className="w-badge-dot"/>{hero.badge}</div>
        <h1 className="w-h1">
          {hero.title1}<br/>{hero.title2}<br/>
          <span className="acc">{hero.titleAccent}</span><br/>{hero.title3}
        </h1>
        <p className="w-sub">{hero.subtitle}</p>
        <div className="w-btns">
          <button className="w-btn1" onClick={()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}>{hero.btn1}</button>
          <button className="w-btn2" onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}>{hero.btn2}</button>
        </div>
      </div>
      <div className="w-floats">
        <div className="w-float"><div className="w-fl">{hero.stat1l}</div><div className="w-fv">{hero.stat1v}</div></div>
        <div className="w-float"><div className="w-fl">{hero.stat2l}</div><div className="w-fv">{hero.stat2v}</div></div>
        <div className="w-float"><div className="w-fl">{hero.stat3l}</div><div className="w-fv">{hero.stat3v}</div></div>
      </div>
      <div className="w-scroll"><div className="w-scroll-line"/>Scroll to Explore</div>
    </section>
  );
}


export { useCounter, WebHero };

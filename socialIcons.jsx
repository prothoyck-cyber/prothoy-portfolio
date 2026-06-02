import { useRef, useEffect } from 'react';

// About me + skills section
function WebAbout({ about, skills }) {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVis(true);},{threshold:0.2});
    if(ref.current)obs.observe(ref.current); return()=>obs.disconnect();
  },[]);
  return (
    <section className="w-sec" id="about" style={{overflow:"hidden"}}>
      <div className="w-about-grid">
        <div style={{position:"relative"}}>
          <div className="w-about-photo"><span style={{fontSize:80,opacity:0.1}}>👨‍💻</span></div>
          <div className="w-about-badge">
            <div className="w-about-bn">{about.experience}</div>
            <div className="w-about-bl">Years Experience</div>
          </div>
        </div>
        <div>
          <div className="w-sl">About Me</div>
          <h2 className="w-st">I'm <span className="g">{about.name.split(" ")[0]}</span><br/>{about.name.split(" ").slice(1).join(" ")}</h2>
          <p className="w-bio">{about.bio1}</p>
          <p className="w-bio">{about.bio2}</p>
          <div ref={ref}>
            {skills.map(s=>(
              <div key={s.id||s.name}>
                <div className="w-skill-head"><span>{s.name}</span><span style={{color:"var(--w-muted)"}}>{s.level}%</span></div>
                <div className="w-skill-track">
                  <div className="w-skill-fill" style={{width:vis?s.level+"%":"0%",background:`linear-gradient(90deg,${s.color},${s.color}88)`}}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export { WebAbout };

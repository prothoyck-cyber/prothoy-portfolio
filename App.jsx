// Services grid section

function WebServices({ services }) {
  const visible = services.filter(s=>s.active);
  return (
    <section className="w-sec w-srv" id="services">
      <div className="w-sl">Services</div>
      <h2 className="w-st"><span className="g">Premium</span> Services</h2>
      <p className="w-ss">Everything you need to build, grow, and dominate your market.</p>
      <div className="w-srv-grid">
        {visible.map(s=>(
          <div key={s.id} className="w-srv-card">
            <div className="w-srv-icon" style={{color:s.color,filter:`drop-shadow(0 0 8px ${s.color})`}}>{s.icon}</div>
            <div className="w-srv-title">{s.title}</div>
            <div className="w-srv-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


export { WebServices };

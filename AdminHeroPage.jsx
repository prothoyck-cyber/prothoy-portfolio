import { useMemo } from 'react';

// Admin dashboard overview page
function PH({ title, onSave, loading, extra }) {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
      <h1 style={{fontFamily:"var(--afd)",fontSize:22,fontWeight:800,letterSpacing:"-0.02em"}}>{title}</h1>
      <div style={{display:"flex",gap:10,alignItems:"center"}}>{extra}{onSave&&<button className="a-bp" onClick={onSave}>{loading&&<Spin/>}Save</button>}</div>
    </div>
  );
}

function AdminDashboard({ services, portfolio, reviews, messages, onNav }) {
  const unread=messages.filter(m=>!m.read).length, active=services.filter(s=>s.active).length, featured=portfolio.filter(p=>p.featured).length;
  const avgR=reviews.length?(reviews.reduce((a,r)=>a+r.rating,0)/reviews.length).toFixed(1):"—";
  const stats=[
    {num:services.length,lbl:"Services",    color:"var(--a-blue)",  trend:`${active} active`,icon:"✦"},
    {num:portfolio.length,lbl:"Projects",   color:"var(--a-purple)",trend:`${featured} featured`,icon:"▣"},
    {num:reviews.length, lbl:"Reviews",     color:"var(--a-pink)",  trend:`Avg ${avgR}★`,icon:"★"},
    {num:unread,         lbl:"Unread",      color:"var(--a-amber)", trend:`${messages.length} total`,icon:"✉"},
    {num:active,         lbl:"Active Srvcs",color:"var(--a-green)", trend:`${services.length-active} paused`,icon:"◉"},
    {num:"4+",           lbl:"Years Exp",   color:"#818cf8",        trend:"Since 2020",icon:"⌬"},
  ];
  const activity=[
    {text:"New message from Tariq Hassan",           time:"2h ago",  color:"var(--a-blue)"},
    {text:"Service 'Motion Graphics' set active",    time:"5h ago",  color:"var(--a-amber)"},
    {text:"Portfolio project 'AI Sales Bot' updated",time:"1d ago",  color:"var(--a-green)"},
    {text:"Review added from Arjun Mehta",           time:"2d ago",  color:"var(--a-purple)"},
    {text:"SEO Optimization price updated",          time:"3d ago",  color:"var(--a-pink)"},
  ];
  return (
    <div className="a-page">
      <div className="a-stat-grid">
        {stats.map(s=>(
          <div key={s.lbl} className="a-stat">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
              <span style={{fontSize:20}}>{s.icon}</span>
              <span style={{fontSize:9,color:"var(--a-t4)",fontFamily:"var(--afm)"}}>TOTAL</span>
            </div>
            <div className="a-stat-n" style={{color:s.color}}>{s.num}</div>
            <div className="a-stat-l">{s.lbl}</div>
            <div className="a-stat-t" style={{color:s.color,opacity:0.7}}>{s.trend}</div>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
        <div className="a-card" style={{marginBottom:0}}>
          <div className="a-ct">Quick Access</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
            {[{l:"Hero",d:"Edit headline",i:"◎",p:"hero"},{l:"Services",d:"Manage",i:"✦",p:"services"},{l:"Portfolio",d:"Projects",i:"▣",p:"portfolio"},{l:"Reviews",d:"Testimonials",i:"★",p:"reviews"},{l:"Social",d:"Links",i:"⬡",p:"social"},{l:"Messages",d:"Inbox",i:"✉",p:"messages"}].map(q=>(
              <div key={q.l} style={{padding:"12px 14px",background:"var(--a-bg3)",border:"1px solid var(--a-border)",borderRadius:12,cursor:"pointer",transition:"border-color 0.2s"}} onClick={()=>onNav(q.p)}
                onMouseEnter={e=>e.currentTarget.style.borderColor="var(--a-border2)"} onMouseLeave={e=>e.currentTarget.style.borderColor="var(--a-border)"}>
                <div style={{fontSize:16,marginBottom:6}}>{q.i}</div>
                <div style={{fontWeight:700,fontSize:12,marginBottom:2}}>{q.l}</div>
                <div style={{fontSize:10,color:"var(--a-t4)"}}>{q.d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="a-card" style={{marginBottom:0}}>
          <div className="a-ct">Recent Activity</div>
          {activity.map((a,i)=>(
            <div key={i} className="a-act-row">
              <div className="a-dot" style={{background:a.color}}/>
              <div><div style={{fontSize:13,color:"var(--a-t2)"}}>{a.text}</div><div style={{fontSize:11,color:"var(--a-t4)",marginTop:2}}>{a.time}</div></div>
            </div>
          ))}
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1.4fr 1fr",gap:16}}>
        <div className="a-card" style={{marginBottom:0}}>
          <div className="a-ct">Service Demand</div>
          <div className="a-chart-bars">
            {services.slice(0,8).map((s,i)=>(
              <div key={s.id} className="a-chart-row">
                <div className="a-chart-lbl">{s.title}</div>
                <div className="a-chart-track"><div className="a-chart-fill" style={{width:`${90-i*9}%`,background:s.color}}/></div>
                <div className="a-chart-val">{90-i*9}%</div>
              </div>
            ))}
          </div>
        </div>
        <div className="a-card" style={{marginBottom:0}}>
          <div className="a-ct">Recent Messages</div>
          {[...messages].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,4).map(m=>(
            <div key={m.id} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--a-border)"}}>
              <div className="a-av">{m.name[0]}</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:13,fontWeight:600,display:"flex",alignItems:"center",gap:6}}>{m.name}{!m.read&&<span style={{width:6,height:6,borderRadius:"50%",background:"var(--a-blue)",display:"inline-block"}}/>}</div>
                <div style={{fontSize:11,color:"var(--a-t4)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{m.message}</div>
              </div>
            </div>
          ))}
          <button className="a-bs" style={{marginTop:12,width:"100%",fontSize:12}} onClick={()=>onNav("messages")}>View All</button>
        </div>
      </div>
    </div>
  );
}


export { PH, AdminDashboard };

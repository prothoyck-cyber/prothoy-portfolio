import { useState } from 'react';

// Admin: Edit About section and skills
function AdminAboutPage({ about, setAbout, skills, setSkills }) {
  const [aForm, setAForm] = useState(about);
  const [sk, setSk] = useState(skills);
  const [saving, setSaving] = useState(false);
  const saveAll=()=>{ setSaving(true); setTimeout(()=>{ setAbout(aForm); setSkills(sk); setSaving(false); toast("About & Skills saved!"); },500); };
  const af=k=>({value:aForm[k],onChange:e=>setAForm({...aForm,[k]:e.target.value})});
  const upd=(id,k,v)=>setSk(sk.map(s=>s.id===id?{...s,[k]:v}:s));
  return (
    <div className="a-page">
      <PH title="About & Skills" onSave={saveAll} loading={saving}/>
      <div className="a-card"><div className="a-ct">Profile</div>
        <div style={{display:"grid",gap:14}}>
          <div className="a-g2"><div className="a-fg"><label className="a-fl">Name</label><input className="a-fi" {...af("name")}/></div><div className="a-fg"><label className="a-fl">Experience</label><input className="a-fi" {...af("experience")}/></div></div>
          <div className="a-fg"><label className="a-fl">Tagline</label><input className="a-fi" {...af("tagline")}/></div>
          <div className="a-fg"><label className="a-fl">Bio 1</label><textarea className="a-fi" {...af("bio1")}/></div>
          <div className="a-fg"><label className="a-fl">Bio 2</label><textarea className="a-fi" {...af("bio2")}/></div>
        </div>
      </div>
      <div className="a-card"><div className="a-ct">Skills</div>
        <div style={{display:"grid",gap:16}}>
          {sk.map(s=>(
            <div key={s.id}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:8}}>
                <span style={{fontSize:13,fontWeight:600,color:"var(--a-t2)",width:160,flexShrink:0}}>{s.name}</span>
                <div style={{flex:1,height:4,background:"var(--a-bg3)",borderRadius:4,overflow:"hidden"}}><div style={{height:"100%",borderRadius:4,background:s.color,width:s.level+"%",transition:"width 0.8s ease"}}/></div>
                <span style={{fontSize:12,color:"var(--a-t4)",fontFamily:"var(--afm)",width:36,textAlign:"right"}}>{s.level}%</span>
              </div>
              <div className="a-g3">
                <div className="a-fg"><label className="a-fl">Name</label><input className="a-fi" value={s.name} onChange={e=>upd(s.id,"name",e.target.value)}/></div>
                <div className="a-fg"><label className="a-fl">Level (%)</label><input className="a-fi" type="number" min="0" max="100" value={s.level} onChange={e=>upd(s.id,"level",Number(e.target.value))}/></div>
                <div className="a-fg"><label className="a-fl">Color</label><input type="color" className="a-fi" value={s.color} onChange={e=>upd(s.id,"color",e.target.value)}/></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export { AdminAboutPage };

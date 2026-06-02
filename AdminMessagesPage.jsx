import { useState } from 'react';

// Admin: Edit stats counters
function AdminStatsPage({ stats, setStats }) {
  const [data, setData] = useState(stats);
  const [saving, setSaving] = useState(false);
  const save=()=>{ setSaving(true); setTimeout(()=>{ setStats(data); setSaving(false); toast("Stats saved!"); },400); };
  const upd=(id,k,v)=>setData(data.map(s=>s.id===id?{...s,[k]:v}:s));
  return (
    <div className="a-page">
      <PH title="Stats" onSave={save} loading={saving}/>
      <div className="a-card"><div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16}}>
        {data.map(s=>(
          <div key={s.id} style={{padding:"16px 18px",background:"var(--a-bg3)",borderRadius:12,border:"1px solid var(--a-border2)"}}>
            <div style={{fontFamily:"var(--afd)",fontSize:26,fontWeight:800,color:"var(--a-blue)",marginBottom:12}}>{s.value}{s.suffix}</div>
            <div className="a-g3">
              <div className="a-fg"><label className="a-fl">Value</label><input className="a-fi" type="number" value={s.value} onChange={e=>upd(s.id,"value",Number(e.target.value))}/></div>
              <div className="a-fg"><label className="a-fl">Suffix</label><input className="a-fi" value={s.suffix} onChange={e=>upd(s.id,"suffix",e.target.value)}/></div>
              <div className="a-fg"><label className="a-fl">Label</label><input className="a-fi" value={s.label} onChange={e=>upd(s.id,"label",e.target.value)}/></div>
            </div>
          </div>
        ))}
      </div></div>
    </div>
  );
}


export { AdminStatsPage };

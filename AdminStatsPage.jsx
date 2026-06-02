import { useState } from 'react';

// Admin: Reorder website sections
function AdminSectionsPage() {
  const INIT=[{key:"hero",label:"Hero",visible:true,order:0},{key:"marquee",label:"Marquee",visible:true,order:1},{key:"stats",label:"Stats",visible:true,order:2},{key:"services",label:"Services",visible:true,order:3},{key:"portfolio",label:"Portfolio",visible:true,order:4},{key:"reviews",label:"Reviews",visible:true,order:5},{key:"about",label:"About",visible:true,order:6},{key:"contact",label:"Contact",visible:true,order:7}];
  const [data, setData] = useState(INIT);
  const [saving, setSaving] = useState(false);
  const save=()=>{ setSaving(true); setTimeout(()=>{ setSaving(false); toast("Sections saved!"); },400); };
  const toggle=key=>setData(data.map(s=>s.key===key?{...s,visible:!s.visible}:s));
  const move=(key,dir)=>{
    const arr=[...data].sort((a,b)=>a.order-b.order);
    const i=arr.findIndex(s=>s.key===key),j=i+dir;
    if(j<0||j>=arr.length)return;
    const aO=arr[i].order,bO=arr[j].order;
    setData(data.map(s=>s.key===arr[i].key?{...s,order:bO}:s.key===arr[j].key?{...s,order:aO}:s));
  };
  const sorted=[...data].sort((a,b)=>a.order-b.order);
  return (
    <div className="a-page">
      <PH title="Sections Order" onSave={save} loading={saving}/>
      <div className="a-card"><div style={{display:"grid",gap:10}}>
        {sorted.map((s,i)=>(
          <div key={s.key} style={{display:"flex",alignItems:"center",gap:12,padding:"14px 18px",background:s.visible?"var(--a-bg3)":"rgba(255,255,255,0.02)",borderRadius:12,border:`1px solid ${s.visible?"var(--a-border2)":"var(--a-border)"}`,transition:"all 0.2s"}}>
            <span style={{fontSize:16,opacity:0.3}}>⠿</span>
            <div style={{flex:1}}><div style={{fontWeight:700,fontSize:14,color:s.visible?"var(--a-t1)":"var(--a-t4)"}}>{s.label}</div><div style={{fontSize:10,color:"var(--a-t4)",fontFamily:"var(--afm)",marginTop:2}}>#{s.key}</div></div>
            <span style={{fontSize:11,padding:"3px 12px",borderRadius:20,background:s.visible?"rgba(52,211,153,0.1)":"rgba(248,113,113,0.1)",color:s.visible?"var(--a-green)":"var(--a-red)"}}>{s.visible?"Visible":"Hidden"}</span>
            <button className="a-bsm" onClick={()=>move(s.key,-1)} disabled={i===0} style={{opacity:i===0?0.3:1,padding:"5px 10px"}}>↑</button>
            <button className="a-bsm" onClick={()=>move(s.key,1)} disabled={i===sorted.length-1} style={{opacity:i===sorted.length-1?0.3:1,padding:"5px 10px"}}>↓</button>
            <AToggle checked={s.visible} onChange={()=>toggle(s.key)}/>
          </div>
        ))}
      </div></div>
    </div>
  );
}


export { AdminSectionsPage };

import { useState } from 'react';

// Admin: Manage social media links
function AdminSocialPage({ social, setSocial }) {
  const [data, setData] = useState(social);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({platform:"",url:"",color:"#ffffff"});
  const [saving, setSaving] = useState(false);
  const save=()=>{ setSaving(true); setTimeout(()=>{ setSocial(data); setSaving(false); toast("Social saved!"); },400); };
  const add=()=>{
    if(!form.platform||!form.url){toast("Platform & URL required","error");return;}
    setData([...data,{...form,id:Date.now(),visible:true}]); setAdding(false); setForm({platform:"",url:"",color:"#ffffff"}); toast("Link added!");
  };
  return (
    <div className="a-page">
      <PH title="Social Links" onSave={save} loading={saving} extra={<button className="a-bs" onClick={()=>setAdding(!adding)}>+ Add</button>}/>
      {adding&&(
        <div className="a-card"><div className="a-ct">New Link</div>
          <div className="a-g3">
            <div className="a-fg"><label className="a-fl">Platform</label><input className="a-fi" value={form.platform} onChange={e=>setForm({...form,platform:e.target.value})}/></div>
            <div className="a-fg"><label className="a-fl">URL</label><input className="a-fi" value={form.url} onChange={e=>setForm({...form,url:e.target.value})}/></div>
            <div className="a-fg"><label className="a-fl">Color</label><input type="color" className="a-fi" value={form.color} onChange={e=>setForm({...form,color:e.target.value})}/></div>
          </div>
          <div style={{display:"flex",gap:10,marginTop:12}}><button className="a-bp" onClick={add}>Add</button><button className="a-bs" onClick={()=>setAdding(false)}>Cancel</button></div>
        </div>
      )}
      <div className="a-card"><div style={{display:"grid",gap:10}}>
        {data.map(s=>(
          <div key={s.id} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"var(--a-bg3)",borderRadius:10,border:"1px solid var(--a-border2)",opacity:s.visible?1:0.5,transition:"opacity 0.2s"}}>
            <div style={{width:10,height:10,borderRadius:"50%",background:s.color,flexShrink:0}}/>
            <span style={{fontWeight:700,fontSize:13,minWidth:90}}>{s.platform}</span>
            <input className="a-fi" style={{flex:1,fontSize:12,padding:"7px 12px"}} value={s.url} onChange={e=>setData(data.map(x=>x.id===s.id?{...x,url:e.target.value}:x))}/>
            <AToggle checked={s.visible} onChange={()=>setData(data.map(x=>x.id===s.id?{...x,visible:!x.visible}:x))}/>
            <button className="a-bsm a-bd" onClick={()=>setData(data.filter(x=>x.id!==s.id))}>✕</button>
          </div>
        ))}
      </div></div>
    </div>
  );
}


export { AdminSocialPage };

import { useState } from 'react';

// Admin: Edit scrolling marquee tags
function AdminMarqueePage({ marquee, setMarquee }) {
  const [items, setItems] = useState(marquee);
  const [newItem, setNewItem] = useState("");
  const [saving, setSaving] = useState(false);
  const save=()=>{ setSaving(true); setTimeout(()=>{ setMarquee(items); setSaving(false); toast("Marquee saved!"); },400); };
  const add=()=>{ if(!newItem.trim()){toast("Enter a tag","warn");return;} setItems([...items,newItem.trim()]); setNewItem(""); };
  const del=i=>setItems(items.filter((_,idx)=>idx!==i));
  return (
    <div className="a-page">
      <PH title="Marquee Tags" onSave={save} loading={saving}/>
      <div className="a-card"><div className="a-ct">Add Tag</div>
        <div style={{display:"flex",gap:10}}><input className="a-fi" placeholder="e.g. UI/UX Design" value={newItem} onChange={e=>setNewItem(e.target.value)} onKeyDown={e=>e.key==="Enter"&&add()} style={{flex:1}}/><button className="a-bp" onClick={add}>Add</button></div>
      </div>
      <div className="a-card"><div className="a-ct">Tags ({items.length})</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
          {items.map((item,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 12px",background:"var(--a-bg3)",border:"1px solid var(--a-border2)",borderRadius:8}}>
              <span style={{fontSize:13,color:"var(--a-t2)"}}>{item}</span>
              <button style={{background:"none",border:"none",color:"var(--a-red)",cursor:"pointer",fontSize:13,padding:0,lineHeight:1}} onClick={()=>del(i)}>✕</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export { AdminMarqueePage };

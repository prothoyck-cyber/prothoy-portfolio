import { useState } from 'react';

// Admin: Manage services list
function AdminServicesPage({ data, setData }) {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({title:"",desc:"",price:"",icon:"✦",color:"#00D4FF",active:true});
  const [saving, setSaving] = useState(false);
  const f=k=>({value:form[k],onChange:e=>setForm({...form,[k]:e.target.value})});
  const filtered=data.filter(s=>!search||s.title.toLowerCase().includes(search.toLowerCase()));
  const openEdit=s=>{ setForm({title:s.title,desc:s.desc,price:s.price,icon:s.icon,color:s.color,active:s.active}); setModal(s); };
  const saveModal=()=>{
    if(!form.title.trim()){toast("Title required","error");return;}
    setSaving(true); setTimeout(()=>{
      if(modal==="add") setData([...data,{...form,id:Date.now()}]); else setData(data.map(s=>s.id===modal.id?{...s,...form}:s));
      toast(modal==="add"?"Service added!":"Service updated!"); setSaving(false); setModal(null);
    },400);
  };
  const del=id=>{ setData(data.filter(s=>s.id!==id)); toast("Deleted","warn"); };
  return (
    <div className="a-page">
      <PH title={`Services (${data.length})`} extra={<input className="a-fi" style={{width:180}} placeholder="Search…" value={search} onChange={e=>setSearch(e.target.value)}/>}/>
      <button className="a-bp" style={{marginBottom:16}} onClick={()=>{setForm({title:"",desc:"",price:"",icon:"✦",color:"#00D4FF",active:true});setModal("add");}}>+ Add Service</button>
      <div className="a-card">
        {filtered.length===0?<div className="a-empty">No results for "{search}"</div>:(
          <table className="a-tbl">
            <thead><tr><th>Icon</th><th>Title</th><th>Price</th><th>Active</th><th>Actions</th></tr></thead>
            <tbody>{filtered.map(s=>(
              <tr key={s.id}>
                <td><span style={{fontSize:20,color:s.color,filter:`drop-shadow(0 0 6px ${s.color})`}}>{s.icon}</span></td>
                <td><div style={{fontWeight:600}}>{s.title}</div><div style={{fontSize:11,color:"var(--a-t4)",marginTop:2}}>{s.desc.slice(0,48)}…</div></td>
                <td><span className="a-badge a-bb">{s.price}</span></td>
                <td><AToggle checked={s.active} onChange={()=>setData(data.map(x=>x.id===s.id?{...x,active:!x.active}:x))}/></td>
                <td><div style={{display:"flex",gap:8}}><button className="a-bsm" onClick={()=>openEdit(s)}>Edit</button><button className="a-bsm a-bd" onClick={()=>del(s.id)}>Del</button></div></td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </div>
      {modal&&(
        <div className="a-modal-bd" onClick={e=>e.target===e.currentTarget&&setModal(null)}>
          <div className="a-modal">
            <div className="a-modal-title">{modal==="add"?"Add Service":"Edit Service"}</div>
            <div style={{display:"grid",gap:14}}>
              <div className="a-g2"><div className="a-fg"><label className="a-fl">Title*</label><input className="a-fi" {...f("title")}/></div><div className="a-fg"><label className="a-fl">Price</label><input className="a-fi" {...f("price")}/></div></div>
              <div className="a-fg"><label className="a-fl">Description</label><textarea className="a-fi" {...f("desc")}/></div>
              <div className="a-g2"><div className="a-fg"><label className="a-fl">Icon</label><input className="a-fi" {...f("icon")}/></div><div className="a-fg"><label className="a-fl">Color</label><input type="color" className="a-fi" {...f("color")}/></div></div>
              <div style={{display:"flex",alignItems:"center",gap:10}}><AToggle checked={form.active} onChange={v=>setForm({...form,active:v})}/><span style={{fontSize:13,color:"var(--a-t3)"}}>Active on site</span></div>
              <div style={{display:"flex",gap:10,marginTop:6}}><button className="a-bp" onClick={saveModal}>{saving&&<Spin/>}Save</button><button className="a-bs" onClick={()=>setModal(null)}>Cancel</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export { AdminServicesPage };

import { useState } from 'react';

// Admin: Manage portfolio projects
function AdminPortfolioPage({ data, setData }) {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({title:"",client:"",category:"Graphics Design",year:"2024",tags:"",featured:false});
  const [saving, setSaving] = useState(false);
  const f=k=>({value:form[k],onChange:e=>setForm({...form,[k]:e.target.value})});
  const filtered=data.filter(p=>!search||p.title.toLowerCase().includes(search.toLowerCase())||p.client.toLowerCase().includes(search.toLowerCase()));
  const openEdit=p=>{ setForm({...p,tags:Array.isArray(p.tags)?p.tags.join(", "):p.tags}); setModal(p); };
  const saveModal=()=>{
    if(!form.title.trim()){toast("Title required","error");return;}
    const tags=typeof form.tags==="string"?form.tags.split(",").map(t=>t.trim()).filter(Boolean):form.tags;
    setSaving(true); setTimeout(()=>{
      if(modal==="add") setData([...data,{...form,id:Date.now(),tags}]); else setData(data.map(p=>p.id===modal.id?{...p,...form,tags}:p));
      toast(modal==="add"?"Project added!":"Project updated!"); setSaving(false); setModal(null);
    },400);
  };
  const del=id=>{ setData(data.filter(p=>p.id!==id)); toast("Deleted","warn"); };
  return (
    <div className="a-page">
      <PH title={`Portfolio (${data.length})`} extra={<input className="a-fi" style={{width:180}} placeholder="Search…" value={search} onChange={e=>setSearch(e.target.value)}/>}/>
      <button className="a-bp" style={{marginBottom:16}} onClick={()=>{setForm({title:"",client:"",category:"Graphics Design",year:"2024",tags:"",featured:false});setModal("add");}}>+ Add Project</button>
      <div className="a-card">
        {filtered.length===0?<div className="a-empty">No results</div>:(
          <table className="a-tbl">
            <thead><tr><th>Title</th><th>Category</th><th>Client</th><th>Year</th><th>Featured</th><th>Actions</th></tr></thead>
            <tbody>{filtered.map(p=>(
              <tr key={p.id}>
                <td style={{fontWeight:600}}>{p.title}</td>
                <td><span className="a-badge a-bp2">{p.category}</span></td>
                <td style={{color:"var(--a-t3)"}}>{p.client}</td>
                <td style={{color:"var(--a-t4)",fontFamily:"var(--afm)"}}>{p.year}</td>
                <td>{p.featured?<span className="a-badge a-bg">Yes</span>:<span style={{color:"var(--a-t4)"}}>—</span>}</td>
                <td><div style={{display:"flex",gap:8}}><button className="a-bsm" onClick={()=>openEdit(p)}>Edit</button><button className="a-bsm a-bd" onClick={()=>del(p.id)}>Del</button></div></td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </div>
      {modal&&(
        <div className="a-modal-bd" onClick={e=>e.target===e.currentTarget&&setModal(null)}>
          <div className="a-modal">
            <div className="a-modal-title">{modal==="add"?"Add Project":"Edit Project"}</div>
            <div style={{display:"grid",gap:14}}>
              <div className="a-g2"><div className="a-fg"><label className="a-fl">Title*</label><input className="a-fi" {...f("title")}/></div><div className="a-fg"><label className="a-fl">Client</label><input className="a-fi" {...f("client")}/></div></div>
              <div className="a-g3">
                <div className="a-fg"><label className="a-fl">Category</label><select className="a-fi" value={form.category} onChange={e=>setForm({...form,category:e.target.value})}>{ALL_PORT_CATS.map(c=><option key={c}>{c}</option>)}</select></div>
                <div className="a-fg"><label className="a-fl">Year</label><input className="a-fi" {...f("year")}/></div>
                <div className="a-fg"><label className="a-fl">Featured</label><div style={{marginTop:10}}><AToggle checked={!!form.featured} onChange={v=>setForm({...form,featured:v})}/></div></div>
              </div>
              <div className="a-fg"><label className="a-fl">Tags (comma sep.)</label><input className="a-fi" {...f("tags")}/></div>
              <div style={{display:"flex",gap:10,marginTop:6}}><button className="a-bp" onClick={saveModal}>{saving&&<Spin/>}Save</button><button className="a-bs" onClick={()=>setModal(null)}>Cancel</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export { AdminPortfolioPage };

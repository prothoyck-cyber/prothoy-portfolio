import { useState } from 'react';

// Admin: Manage client reviews
function AdminReviewsPage({ data, setData }) {
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({name:"",role:"",rating:5,text:""});
  const [saving, setSaving] = useState(false);
  const f=k=>({value:form[k],onChange:e=>setForm({...form,[k]:e.target.value})});
  const openEdit=r=>{ setForm({name:r.name,role:r.role,rating:r.rating,text:r.text}); setModal(r); };
  const saveModal=()=>{
    if(!form.name.trim()){toast("Name required","error");return;}
    setSaving(true); setTimeout(()=>{
      if(modal==="add") setData([...data,{...form,id:Date.now()}]); else setData(data.map(r=>r.id===modal.id?{...r,...form}:r));
      toast(modal==="add"?"Review added!":"Review updated!"); setSaving(false); setModal(null);
    },400);
  };
  const del=id=>{ setData(data.filter(r=>r.id!==id)); toast("Deleted","warn"); };
  return (
    <div className="a-page">
      <PH title="Reviews"/>
      <button className="a-bp" style={{marginBottom:16}} onClick={()=>{setForm({name:"",role:"",rating:5,text:""});setModal("add");}}>+ Add Review</button>
      <div style={{display:"grid",gap:12}}>
        {data.map(r=>(
          <div key={r.id} className="a-card" style={{marginBottom:0}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                  <div className="a-av">{r.name[0]}</div>
                  <div><div style={{fontWeight:700,fontSize:14}}>{r.name}</div><div style={{fontSize:12,color:"var(--a-t4)"}}>{r.role}</div></div>
                  <div style={{marginLeft:4,color:"#fbbf24",fontSize:13}}>{"★".repeat(r.rating)}</div>
                </div>
                <div style={{fontSize:13,color:"var(--a-t3)",lineHeight:1.65,fontStyle:"italic"}}>"{r.text}"</div>
              </div>
              <div style={{display:"flex",gap:8,marginLeft:16,flexShrink:0}}><button className="a-bsm" onClick={()=>openEdit(r)}>Edit</button><button className="a-bsm a-bd" onClick={()=>del(r.id)}>Del</button></div>
            </div>
          </div>
        ))}
      </div>
      {modal&&(
        <div className="a-modal-bd" onClick={e=>e.target===e.currentTarget&&setModal(null)}>
          <div className="a-modal">
            <div className="a-modal-title">{modal==="add"?"Add Review":"Edit Review"}</div>
            <div style={{display:"grid",gap:14}}>
              <div className="a-g3">
                <div className="a-fg"><label className="a-fl">Name*</label><input className="a-fi" {...f("name")}/></div>
                <div className="a-fg"><label className="a-fl">Role</label><input className="a-fi" {...f("role")}/></div>
                <div className="a-fg"><label className="a-fl">Rating</label><select className="a-fi" value={form.rating} onChange={e=>setForm({...form,rating:Number(e.target.value)})}>{[5,4,3,2,1].map(n=><option key={n} value={n}>{n}★</option>)}</select></div>
              </div>
              <div className="a-fg"><label className="a-fl">Review Text</label><textarea className="a-fi" {...f("text")}/></div>
              <div style={{display:"flex",gap:10,marginTop:6}}><button className="a-bp" onClick={saveModal}>{saving&&<Spin/>}Save</button><button className="a-bs" onClick={()=>setModal(null)}>Cancel</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export { AdminReviewsPage };

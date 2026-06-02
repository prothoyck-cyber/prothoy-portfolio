import { useState } from 'react';

// Admin: View contact form messages
function AdminMessagesPage({ data, setData }) {
  const [sel, setSel] = useState(null);
  const [search, setSearch] = useState("");
  const markRead=id=>setData(data.map(m=>m.id===id?{...m,read:true}:m));
  const del=id=>{ setData(data.filter(m=>m.id!==id)); if(sel?.id===id)setSel(null); toast("Deleted","warn"); };
  const filtered=data.filter(m=>!search||m.name.toLowerCase().includes(search.toLowerCase())||m.message.toLowerCase().includes(search.toLowerCase())||m.email.toLowerCase().includes(search.toLowerCase()));
  const unread=data.filter(m=>!m.read).length;
  return (
    <div className="a-page">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
        <h1 style={{fontFamily:"var(--afd)",fontSize:22,fontWeight:800,letterSpacing:"-0.02em"}}>Messages {unread>0&&<span className="a-badge a-bb" style={{fontSize:12,verticalAlign:"middle",marginLeft:8}}>{unread} new</span>}</h1>
        <input className="a-fi" style={{width:220}} placeholder="Search messages…" value={search} onChange={e=>setSearch(e.target.value)}/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:sel?"1fr 1fr":"1fr",gap:16}}>
        <div style={{display:"grid",gap:10,alignContent:"start"}}>
          {filtered.length===0?<div className="a-card"><div className="a-empty">No messages found.</div></div>
          :filtered.map(m=>(
            <div key={m.id} onClick={()=>{ setSel(m); markRead(m.id); }}
              style={{padding:"14px 16px",background:sel?.id===m.id?"var(--a-s2)":"var(--a-bg2)",border:`1px solid ${sel?.id===m.id?"var(--a-border3)":"var(--a-border)"}`,borderRadius:14,cursor:"pointer",transition:"all 0.18s"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <div className="a-av" style={{width:28,height:28,fontSize:12}}>{m.name[0]}</div>
                  <span style={{fontWeight:700,fontSize:14}}>{m.name}</span>
                  {!m.read&&<span style={{width:6,height:6,borderRadius:"50%",background:"var(--a-blue)",display:"inline-block"}}/>}
                </div>
                <span style={{fontSize:11,color:"var(--a-t4)"}}>{m.date}</span>
              </div>
              <div style={{fontSize:12,color:"var(--a-t4)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{m.message}</div>
            </div>
          ))}
        </div>
        {sel&&(
          <div className="a-card" style={{alignSelf:"start",position:"sticky",top:80}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:20}}>
              <div style={{display:"flex",gap:10,alignItems:"center"}}>
                <div className="a-av">{sel.name[0]}</div>
                <div><div style={{fontWeight:800,fontSize:15,fontFamily:"var(--afd)"}}>{sel.name}</div><div style={{fontSize:11,color:"var(--a-t4)",marginTop:2}}>{sel.date}</div></div>
              </div>
              <button className="a-bsm a-bd" onClick={()=>del(sel.id)}>Delete</button>
            </div>
            <div style={{display:"grid",gap:12,marginBottom:20}}>
              {sel.email&&<div><div style={{fontSize:10,fontWeight:700,color:"var(--a-t4)",letterSpacing:"0.09em",textTransform:"uppercase",marginBottom:3}}>Email</div><a href={`mailto:${sel.email}`} style={{fontSize:13,color:"var(--a-blue)"}}>{sel.email}</a></div>}
              {sel.phone&&<div><div style={{fontSize:10,fontWeight:700,color:"var(--a-t4)",letterSpacing:"0.09em",textTransform:"uppercase",marginBottom:3}}>Phone</div><div style={{fontSize:13}}>{sel.phone}</div></div>}
            </div>
            <div style={{fontSize:10,fontWeight:700,color:"var(--a-t4)",letterSpacing:"0.09em",textTransform:"uppercase",marginBottom:10}}>Message</div>
            <div style={{fontSize:14,lineHeight:1.7,color:"var(--a-t2)",padding:"14px 16px",background:"var(--a-bg3)",borderRadius:10,border:"1px solid var(--a-border)"}}>{sel.message}</div>
            <a href={`mailto:${sel.email}`} style={{display:"block",marginTop:14}}><button className="a-bp" style={{width:"100%",justifyContent:"center"}}>↗ Reply via Email</button></a>
          </div>
        )}
      </div>
    </div>
  );
}


export { AdminMessagesPage };

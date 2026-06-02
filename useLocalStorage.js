import { useState, useMemo } from 'react';

// Admin global search
function buildIdx(services, portfolio, reviews, messages) {
  return [
    ...services.map(s=>({label:s.title,sub:"Service",icon:s.icon,page:"services"})),
    ...portfolio.map(p=>({label:p.title,sub:"Project",icon:"▣",page:"portfolio"})),
    ...reviews.map(r=>({label:r.name,sub:"Review",icon:"★",page:"reviews"})),
    ...messages.map(m=>({label:m.name,sub:"Message",icon:"✉",page:"messages"})),
  ];
}
function AdminSearch({ services, portfolio, reviews, messages, onNav }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const idx = useMemo(()=>buildIdx(services,portfolio,reviews,messages),[services,portfolio,reviews,messages]);
  const results = useMemo(()=>{ if(!q.trim()) return []; const lq=q.toLowerCase(); return idx.filter(i=>i.label.toLowerCase().includes(lq)||i.sub.toLowerCase().includes(lq)).slice(0,8); },[q,idx]);
  useEffect(()=>{ const h=e=>{ if(!ref.current?.contains(e.target))setOpen(false); }; document.addEventListener("mousedown",h); return()=>document.removeEventListener("mousedown",h); },[]);
  const hl = text => { const i=text.toLowerCase().indexOf(q.toLowerCase()); if(i<0)return text; return <>{text.slice(0,i)}<span className="a-hl">{text.slice(i,i+q.length)}</span>{text.slice(i+q.length)}</>; };
  return (
    <div style={{position:"relative",flex:1,maxWidth:320}} ref={ref}>
      <div className="a-tb-search">
        <span style={{color:"var(--a-t4)",fontSize:13}}>⌕</span>
        <input placeholder="Search anything…" value={q} onChange={e=>{setQ(e.target.value);setOpen(true);}} onFocus={()=>setOpen(true)} onKeyDown={e=>{if(e.key==="Escape"){setQ("");setOpen(false);}}} />
        {q&&<button style={{background:"none",border:"none",color:"var(--a-t4)",cursor:"pointer",fontSize:13,padding:0,flexShrink:0}} onClick={()=>{setQ("");setOpen(false);}}>✕</button>}
      </div>
      {open&&q&&(
        <div className="a-sr-drop">
          {results.length===0
            ? <div style={{padding:"16px",textAlign:"center",color:"var(--a-t4)",fontSize:13}}>No results for "{q}"</div>
            : results.map((r,i)=>(
              <div key={i} className="a-sr-item" onClick={()=>{onNav(r.page);setQ("");setOpen(false);}}>
                <span style={{fontSize:16}}>{r.icon}</span><span>{hl(r.label)}</span><span className="a-sr-cat">{r.sub}</span>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
}


export { AdminSearch };

import { useState, useEffect } from 'react';

// Global toast notification system
let _tid = 0; const _tl = new Set();
function toast(msg, type="success") {
  const id=++_tid; _tl.forEach(f=>f({id,msg,type}));
  setTimeout(()=>_tl.forEach(f=>f({id,msg:null,type})), 3200);
}
function Toasts() {
  const [list, setList] = useState([]);
  useEffect(() => { const f=t=>setList(p=>t.msg?[...p.filter(x=>x.id!==t.id),t]:p.filter(x=>x.id!==t.id)); _tl.add(f); return ()=>_tl.delete(f); }, []);
  if (!list.length) return null;
  return (
    <div style={{position:"fixed",bottom:24,right:24,zIndex:99999,display:"flex",flexDirection:"column",gap:10,pointerEvents:"none"}}>
      {list.map(t=>(
        <div key={t.id} style={{display:"flex",alignItems:"center",gap:12,padding:"13px 20px",borderRadius:14,minWidth:260,
          background:t.type==="error"?"rgba(248,113,113,0.12)":t.type==="warn"?"rgba(251,191,36,0.12)":"rgba(74,222,128,0.10)",
          border:`1px solid ${t.type==="error"?"rgba(248,113,113,0.35)":t.type==="warn"?"rgba(251,191,36,0.35)":"rgba(74,222,128,0.30)"}`,
          backdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
          color:t.type==="error"?"#f87171":t.type==="warn"?"#fbbf24":"#4ade80",
          fontSize:13,fontWeight:600,animation:"toastIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both"}}>
          <span style={{fontSize:17}}>{t.type==="error"?"✕":t.type==="warn"?"⚠":"✓"}</span>{t.msg}
        </div>
      ))}
    </div>
  );
}

export { toast, Toasts };

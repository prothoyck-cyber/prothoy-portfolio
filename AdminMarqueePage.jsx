// Admin navigation sidebar

const AMENU = [
  {key:"dashboard",icon:"⊞",label:"Overview",   group:"Overview"},
  {key:"hero",     icon:"◎",label:"Hero",        group:"Content"},
  {key:"marquee",  icon:"⟳",label:"Marquee",     group:"Content"},
  {key:"stats",    icon:"★",label:"Stats",       group:"Content"},
  {key:"services", icon:"✦",label:"Services",    group:"Content"},
  {key:"portfolio",icon:"▣",label:"Portfolio",   group:"Content"},
  {key:"reviews",  icon:"◈",label:"Reviews",     group:"Content"},
  {key:"about",    icon:"◉",label:"About",       group:"Content"},
  {key:"contact",  icon:"⬡",label:"Contact",     group:"Content"},
  {key:"social",   icon:"◆",label:"Social",      group:"Content"},
  {key:"sections", icon:"⊕",label:"Sections",    group:"Layout"},
  {key:"messages", icon:"✉",label:"Messages",    group:"Inbox"},
  {key:"settings", icon:"⌬",label:"Settings",    group:"System"},
];
const AGROUPS = ["Overview","Content","Layout","Inbox","System"];

function AdminSidebar({ page, setPage, msgCount, collapsed, setCollapsed }) {
  const [q, setQ] = useState("");
  const filtered = AMENU.filter(m=>!q||m.label.toLowerCase().includes(q.toLowerCase()));
  const groups = AGROUPS.map(g=>({g,items:filtered.filter(m=>m.group===g)})).filter(x=>x.items.length);
  return (
    <aside className={`a-sidebar${collapsed?" col":""}`}>
      <div className="a-sb-logo">
        {collapsed
          ? <div style={{fontFamily:"var(--afd)",fontSize:17,fontWeight:800,background:"var(--a-grad)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>PC</div>
          : <><div className="a-sb-brand">PC Admin</div><div className="a-sb-sub">Content Management System</div></>
        }
      </div>
      {!collapsed&&<div className="a-sb-search"><span className="a-sb-si">⌕</span><input placeholder="Filter menu…" value={q} onChange={e=>setQ(e.target.value)}/></div>}
      <div className="a-sb-nav">
        {groups.map(({g,items})=>(
          <div key={g}>
            {!collapsed&&<div className="a-sb-gl">{g}</div>}
            {items.map(m=>(
              <button key={m.key} className={`a-sb-item${page===m.key?" on":""}`} onClick={()=>setPage(m.key)} title={collapsed?m.label:undefined}>
                <span className="a-sb-icon">{m.icon}</span>
                {!collapsed&&<span>{m.label}</span>}
                {!collapsed&&m.key==="messages"&&msgCount>0&&<span className="a-sb-badge">{msgCount}</span>}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="a-sb-footer">
        <button className="a-col-btn" onClick={()=>setCollapsed(c=>!c)}>
          <span style={{fontSize:14}}>{collapsed?"→":"←"}</span>
          {!collapsed&&<span style={{fontSize:12}}>Collapse</span>}
        </button>
      </div>
    </aside>
  );
}


export { AMENU, AGROUPS, AdminSidebar };

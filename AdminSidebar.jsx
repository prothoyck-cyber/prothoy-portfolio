import { useState } from 'react';

// Admin: Edit Hero section content
function AdminHeroPage({ hero, setHero }) {
  const [form, setForm] = useState(hero);
  const [saving, setSaving] = useState(false);
  const save = ()=>{ setSaving(true); setTimeout(()=>{ setHero(form); setSaving(false); toast("Hero updated!"); },400); };
  const f=k=>({value:form[k],onChange:e=>setForm({...form,[k]:e.target.value})});
  return (
    <div className="a-page">
      <PH title="Hero Section" onSave={save} loading={saving}/>
      <div className="a-card"><div className="a-ct">Badge</div><div className="a-fg"><label className="a-fl">Badge Text</label><input className="a-fi" {...f("badge")}/></div></div>
      <div className="a-card"><div className="a-ct">Headline</div>
        <div style={{display:"grid",gap:14}}>
          <div className="a-g2"><div className="a-fg"><label className="a-fl">Line 1</label><input className="a-fi" {...f("title1")}/></div><div className="a-fg"><label className="a-fl">Line 2</label><input className="a-fi" {...f("title2")}/></div></div>
          <div className="a-g2"><div className="a-fg"><label className="a-fl">Accent</label><input className="a-fi" {...f("titleAccent")}/></div><div className="a-fg"><label className="a-fl">Line 3</label><input className="a-fi" {...f("title3")}/></div></div>
          <div className="a-fg"><label className="a-fl">Subtitle</label><textarea className="a-fi" {...f("subtitle")}/></div>
        </div>
      </div>
      <div className="a-card"><div className="a-ct">Buttons</div><div className="a-g2"><div className="a-fg"><label className="a-fl">Button 1</label><input className="a-fi" {...f("btn1")}/></div><div className="a-fg"><label className="a-fl">Button 2</label><input className="a-fi" {...f("btn2")}/></div></div></div>
      <div className="a-card"><div className="a-ct">Floating Stats</div>
        <div className="a-g3">
          {[["stat1v","stat1l"],["stat2v","stat2l"],["stat3v","stat3l"]].map(([vk,lk],i)=>(
            <div key={i} style={{display:"grid",gap:10,padding:14,background:"var(--a-bg3)",borderRadius:10,border:"1px solid var(--a-border2)"}}>
              <div className="a-fg"><label className="a-fl">Value</label><input className="a-fi" {...f(vk)}/></div>
              <div className="a-fg"><label className="a-fl">Label</label><input className="a-fi" {...f(lk)}/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export { AdminHeroPage };

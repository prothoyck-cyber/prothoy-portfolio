import { useState } from 'react';

// Contact form + social links section
function WebContact({ contact, social, messages, setMessages }) {
  const [form, setForm] = useState({name:"",email:"",phone:"",message:""});
  const [sent, setSent] = useState(false);
  const submit = () => {
    if(!form.name||!form.email||!form.message) return;
    const newMsg = { id:Date.now(), name:form.name, email:form.email, phone:form.phone, message:form.message, date:new Date().toISOString().slice(0,10), read:false };
    setMessages(prev=>[newMsg,...prev]);
    setSent(true); setForm({name:"",email:"",phone:"",message:""});
    setTimeout(()=>setSent(false),4000);
  };
  const vis = social.filter(s=>s.visible);
  return (
    <section className="w-sec w-contact" id="contact">
      <div className="w-sl">Contact</div>
      <h2 className="w-st">Let's Build <span className="g">Something Great</span></h2>
      <div className="w-contact-grid">
        <div>
          <p style={{fontSize:16,color:"var(--w-text3)",lineHeight:1.8,marginBottom:28}}>{contact.subtitle}</p>
          {sent&&<div className="w-success">✓ Message sent! I'll respond within 24 hours.</div>}
          <div className="w-form">
            <div className="w-fg"><label className="w-fl">Name</label><input className="w-fi" placeholder="Your full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div>
            <div className="w-fg"><label className="w-fl">Email</label><input className="w-fi" type="email" placeholder="your@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div>
            <div className="w-fg"><label className="w-fl">Phone</label><input className="w-fi" placeholder="+880 XXX XXX XXXX" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></div>
            <div className="w-fg"><label className="w-fl">Message</label><textarea className="w-fi" placeholder="Tell me about your project..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></div>
            <button className="w-btn1" style={{alignSelf:"flex-start",padding:"13px 32px",fontSize:14}} onClick={submit}>Send Message</button>
          </div>
        </div>
        <div>
          <div style={{marginBottom:28}}><div style={{fontSize:13,color:"var(--w-muted)",marginBottom:8}}>Email</div><a href={`mailto:${contact.email}`} style={{fontSize:18,fontWeight:600,color:"var(--w-text)"}}>{contact.email}</a></div>
          <div style={{marginBottom:28}}><div style={{fontSize:13,color:"var(--w-muted)",marginBottom:8}}>Phone</div><div style={{fontSize:18,fontWeight:600}}>{contact.phone}</div></div>
          <div style={{marginBottom:36}}><div style={{fontSize:13,color:"var(--w-muted)",marginBottom:8}}>Location</div><div style={{fontSize:18,fontWeight:600}}>{contact.location}</div></div>
          <div className="w-social-links">
            {vis.map(s=>(
              <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="w-social-btn">
                <span style={{width:20,height:20,display:"flex",alignItems:"center"}}>{SOCIAL_ICONS[s.platform]||"🔗"}</span>
                {s.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export { WebContact };

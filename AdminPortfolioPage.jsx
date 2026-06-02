import { useState } from 'react';

// Admin: Edit contact info
function AdminContactPage({ contact, setContact }) {
  const [form, setForm] = useState(contact);
  const [saving, setSaving] = useState(false);
  const save=()=>{ setSaving(true); setTimeout(()=>{ setContact(form); setSaving(false); toast("Contact saved!"); },400); };
  const f=k=>({value:form[k],onChange:e=>setForm({...form,[k]:e.target.value})});
  return (
    <div className="a-page">
      <PH title="Contact Info" onSave={save} loading={saving}/>
      <div className="a-card"><div style={{display:"grid",gap:14}}>
        <div className="a-g2"><div className="a-fg"><label className="a-fl">Email</label><input className="a-fi" {...f("email")}/></div><div className="a-fg"><label className="a-fl">Phone</label><input className="a-fi" {...f("phone")}/></div></div>
        <div className="a-fg"><label className="a-fl">Location</label><input className="a-fi" {...f("location")}/></div>
        <div className="a-fg"><label className="a-fl">Subtitle</label><textarea className="a-fi" {...f("subtitle")}/></div>
      </div></div>
    </div>
  );
}


export { AdminContactPage };

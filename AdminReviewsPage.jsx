import { useState } from 'react';

// Admin: App settings and preferences
function AdminSettingsPage() {
  const [pw, setPw] = useState({cur:"",new_:"",con:""});
  const changePw=()=>{
    if(!pw.cur||!pw.new_||!pw.con){toast("All fields required","error");return;}
    if(pw.new_!==pw.con){toast("Passwords don't match","error");return;}
    if(pw.cur!==ADMIN_PASS){toast("Current password incorrect","error");return;}
    toast("Password updated!"); setPw({cur:"",new_:"",con:""});
  };
  return (
    <div className="a-page">
      <h1 style={{fontFamily:"var(--afd)",fontSize:22,fontWeight:800,letterSpacing:"-0.02em",marginBottom:20}}>Settings</h1>
      <div className="a-card"><div className="a-ct">Firebase Config</div>
        <div style={{display:"grid",gap:14}}>
          {["apiKey","authDomain","projectId","storageBucket","messagingSenderId","appId"].map(k=>(
            <div className="a-fg" key={k}><label className="a-fl">{k}</label><input className="a-fi" defaultValue={`YOUR_${k.toUpperCase()}`}/></div>
          ))}
          <button className="a-bp" style={{alignSelf:"flex-start"}} onClick={()=>toast("Firebase config saved!")}>Save Config</button>
        </div>
      </div>
      <div className="a-card"><div className="a-ct">SEO Metadata</div>
        <div style={{display:"grid",gap:14}}>
          <div className="a-fg"><label className="a-fl">Site Title</label><input className="a-fi" defaultValue="Prothoy Chakraborty — Creative Designer & Developer"/></div>
          <div className="a-fg"><label className="a-fl">Meta Description</label><textarea className="a-fi" defaultValue="Premium design, video editing, web development, SEO & AI automation."/></div>
          <button className="a-bp" style={{alignSelf:"flex-start"}} onClick={()=>toast("SEO saved!")}>Save SEO</button>
        </div>
      </div>
      <div className="a-card"><div className="a-ct">Change Password</div>
        <div style={{display:"grid",gap:14,maxWidth:400}}>
          <div className="a-fg"><label className="a-fl">Current Password</label><input className="a-fi" type="password" value={pw.cur} onChange={e=>setPw({...pw,cur:e.target.value})}/></div>
          <div className="a-fg"><label className="a-fl">New Password</label><input className="a-fi" type="password" value={pw.new_} onChange={e=>setPw({...pw,new_:e.target.value})}/></div>
          <div className="a-fg"><label className="a-fl">Confirm Password</label><input className="a-fi" type="password" value={pw.con} onChange={e=>setPw({...pw,con:e.target.value})}/></div>
          <button className="a-bp" style={{alignSelf:"flex-start"}} onClick={changePw}>Update Password</button>
        </div>
      </div>
    </div>
  );
}

export { AdminSettingsPage };

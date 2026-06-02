import { useState } from 'react';
import { Spin } from '../components/SharedPrimitives.jsx';

// Admin credentials from environment variables (set in Netlify dashboard)
// Fallback values only for local dev if .env.local not set
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || "";
const ADMIN_PASS  = import.meta.env.VITE_ADMIN_PASSWORD || "";

function AdminLogin({ onLogin, onBack }) {
  const [email, setEmail]     = useState("");
  const [pw, setPw]           = useState("");
  const [showPw, setShowPw]   = useState(false);
  const [err, setErr]         = useState("");
  const [loading, setLoading] = useState(false);

  const attempt = () => {
    if (!email.trim()) { setErr("Please enter your email."); return; }
    if (!pw.trim())    { setErr("Please enter your password."); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email.trim() === ADMIN_EMAIL && pw === ADMIN_PASS) {
        setErr("");
        onLogin();
      } else if (email.trim() !== ADMIN_EMAIL) {
        setErr("No account found with this email.");
        setEmail(""); setPw("");
      } else {
        setErr("Incorrect password. Please try again.");
        setPw("");
      }
      setTimeout(() => setErr(""), 4000);
    }, 700);
  };

  const handleKey = e => { if (e.key === "Enter") attempt(); };

  return (
    <div className="a-login-page">
      <div className="a-login-card">
        {/* Logo */}
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
          <div style={{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#38bdf8,#a78bfa)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:800,color:"#fff",fontFamily:"var(--afd)"}}>P</div>
          <div className="a-login-brand">PC Admin</div>
        </div>
        <div style={{fontSize:13,color:"var(--a-t4)",margin:"4px 0 28px"}}>Sign in to manage your portfolio</div>

        {/* Error */}
        {err && (
          <div className="a-login-err" style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
            <span>⚠</span> {err}
          </div>
        )}

        <div style={{display:"grid",gap:16}}>
          {/* Email */}
          <div className="a-fg">
            <label className="a-fl">Email Address</label>
            <div style={{position:"relative"}}>
              <span style={{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",fontSize:14,color:"var(--a-t4)",pointerEvents:"none"}}>✉</span>
              <input
                className="a-fi"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={handleKey}
                style={{paddingLeft:36}}
                autoFocus
              />
            </div>
          </div>

          {/* Password */}
          <div className="a-fg">
            <label className="a-fl">Password</label>
            <div style={{position:"relative"}}>
              <span style={{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",fontSize:14,color:"var(--a-t4)",pointerEvents:"none"}}>🔒</span>
              <input
                className="a-fi"
                type={showPw ? "text" : "password"}
                placeholder="Enter your password"
                value={pw}
                onChange={e => setPw(e.target.value)}
                onKeyDown={handleKey}
                style={{paddingLeft:36,paddingRight:44}}
              />
              <button
                onClick={() => setShowPw(s => !s)}
                style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"var(--a-t4)",cursor:"pointer",fontSize:15,padding:0,lineHeight:1}}
                tabIndex={-1}
              >{showPw ? "🙈" : "👁"}</button>
            </div>
          </div>

          {/* Sign In Button */}
          <button className="a-bp" onClick={attempt} style={{width:"100%",justifyContent:"center",padding:"12px",fontSize:14,marginTop:4}}>
            {loading ? <Spin/> : "→"}&nbsp; Sign In
          </button>

          {/* Divider */}
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{flex:1,height:1,background:"var(--a-border)"}}/>
            <span style={{fontSize:11,color:"var(--a-t4)"}}>or</span>
            <div style={{flex:1,height:1,background:"var(--a-border)"}}/>
          </div>

          {/* Back to website */}
          <button className="a-bs" onClick={onBack} style={{width:"100%",textAlign:"center",padding:"11px"}}>
            ← Back to Website
          </button>
        </div>

        {/* Footer note */}
        <div style={{marginTop:24,padding:"12px 14px",background:"rgba(56,189,248,0.05)",border:"1px solid rgba(56,189,248,0.1)",borderRadius:10,fontSize:11,color:"var(--a-t4)",textAlign:"center",lineHeight:1.6}}>
          🔒 This panel is private. Unauthorized access is prohibited.
        </div>
      </div>
    </div>
  );
}

export { AdminLogin };

import { useState, useEffect } from 'react';

// Scroll progress bar at top of page
function ScrollProg() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const h = () => { const d=document.documentElement; setW((window.scrollY/(d.scrollHeight-d.clientHeight))*100); };
    window.addEventListener("scroll",h);
    return ()=>window.removeEventListener("scroll",h);
  },[]);
  return <div className="w-scroll-prog" style={{width:w+"%"}} />;
}


export { ScrollProg };

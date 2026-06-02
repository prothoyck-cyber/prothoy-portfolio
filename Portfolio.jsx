// Scrolling skills marquee banner

function WebMarquee({ items }) {
  const d = [...items,...items,...items];
  return (
    <div className="w-mq">
      <div className="w-mq-track">
        {d.map((x,i)=><div key={i} className="w-mq-item"><span className="w-mq-dot"/>{x}</div>)}
      </div>
    </div>
  );
}


export { WebMarquee };

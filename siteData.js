// Client reviews / testimonials section

function WebReviews({ reviews }) {
  return (
    <section className="w-sec w-rev" id="reviews">
      <div className="w-sl">Testimonials</div>
      <h2 className="w-st">Client <span className="g">Reviews</span></h2>
      <p className="w-ss">Real feedback from real clients. No fluff.</p>
      <div className="w-rev-grid">
        {reviews.map(r=>(
          <div key={r.id} className="w-rev-card">
            <div className="w-rev-stars">{"★".repeat(r.rating)}</div>
            <div className="w-rev-text">"{r.text}"</div>
            <div className="w-rev-author">
              <div className="w-rev-av">{r.name[0]}</div>
              <div><div className="w-rev-name">{r.name}</div><div className="w-rev-role">{r.role}</div></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export { WebReviews };

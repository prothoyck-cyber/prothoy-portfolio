// Shared UI primitives used by both website and admin

function AToggle({ checked, onChange }) {
  return (
    <label className="a-tog">
      <input type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)} />
      <span className="a-tog-sl" />
    </label>
  );
}
function Spin() { return <span className="a-spin" />; }

export { AToggle, Spin };

import { useState, useCallback } from 'react';

// Persistent state that survives page refresh
function useLS(key, init) {
  const [v, setV] = useState(() => { try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : init; } catch { return init; } });
  const set = useCallback((x) => { setV(prev => { const n = typeof x==="function" ? x(prev) : x; try { localStorage.setItem(key, JSON.stringify(n)); } catch {} return n; }); }, [key]);
  return [v, set];
}

export { useLS };

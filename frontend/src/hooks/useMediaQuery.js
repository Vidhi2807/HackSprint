import { useState, useEffect } from 'react';

/**
 * useMediaQuery hook — track a CSS media query match
 * @param {string} query - e.g., '(min-width: 768px)'
 * @returns {boolean}
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);

    media.addEventListener('change', listener);
    setMatches(media.matches);

    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

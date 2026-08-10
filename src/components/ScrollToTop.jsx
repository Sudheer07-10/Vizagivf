import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      if (window.jQuery) {
        window.jQuery(window).trigger('resize');
        window.jQuery(document).trigger('ready');
      }
    }, 100);
  }, [pathname]);

  return null;
}

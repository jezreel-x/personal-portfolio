import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollWithOffset = (offset) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    }
  }, [hash, offset]);
};

export default useScrollWithOffset;

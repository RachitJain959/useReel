import { useEffect } from 'react';

export function useKeyPress(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code === 'Escape') {
          action();
        }
      }

      document.addEventListener('keydown', callback);

      return function () {
        document.removeEventListener('keydown', callback);
      };
    },
    [action]
  );
}

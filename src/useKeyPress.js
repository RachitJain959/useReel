import { useEffect } from 'react';

export function useKeyPress(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowercase === key.toLowercase) {
          action();
        }
      }

      document.addEventListener('keydown', callback);

      return function () {
        document.removeEventListener('keydown', callback);
      };
    },
    [action, key]
  );
}

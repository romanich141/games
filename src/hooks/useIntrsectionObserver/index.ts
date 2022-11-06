import { MutableRefObject, useEffect } from 'react';

let listenerCallbacks = new WeakMap();

export function useIntersection(
  elem: MutableRefObject<Element>,
  callback: () => void,
) {
  let observer: IntersectionObserver;

  function handleIntersections(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (listenerCallbacks.has(entry.target)) {
        let cb = listenerCallbacks.get(entry.target);
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          observer.unobserve(entry.target);
          listenerCallbacks.delete(entry.target);
          cb();
        }
      }
    });
  }

  function getIntersectionObserver() {
    if (observer === undefined) {
      observer = new IntersectionObserver(handleIntersections, {
        rootMargin: '100px',
        threshold: 0.15,
      });
    }
    return observer;
  }

  useEffect(() => {
    let target = elem.current;

    if (target) {
      let observer = getIntersectionObserver();
      listenerCallbacks.set(target, callback);
      observer.observe(target);

      return () => {
        listenerCallbacks.delete(target);
        observer.unobserve(target);
      };
    }
  }, []);
}

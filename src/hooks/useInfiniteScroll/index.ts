import { useRef, useState, useLayoutEffect } from 'react';

interface IUseInfiniteScroll {
  hasMore: boolean;
  reset?: boolean;
  distance: number;
}

export const useInfiniteScroll = ({
  hasMore,
  reset = false,
  distance = 250,
}: IUseInfiniteScroll) => {
  const scrollContainerRef = useRef();
  const loaderRef = useRef();
  const [page, setPage] = useState(0);

  if (reset && page !== 0) {
    setPage(0);
  }

  useLayoutEffect(() => {
    const loaderNode = loaderRef.current;
    const scrollContainerNode = scrollContainerRef.current;
    if (!scrollContainerNode || !loaderNode || !hasMore) return;

    const options = {
      root: scrollContainerNode,
      rootMargin: `0px 0px ${distance}px 0px`,
    };

    let previousY: number;
    let previousRatio = 0;

    const listener = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(
        ({ isIntersecting, intersectionRatio, boundingClientRect = {} }) => {
          const { y = 0 } = boundingClientRect;
          if (
            isIntersecting &&
            intersectionRatio >= previousRatio &&
            (!previousY || y < previousY)
          ) {
            setPage((page) => page + 1);
          }
          previousY = y;
          previousRatio = intersectionRatio;
        },
      );
    };

    const observer = new IntersectionObserver(listener, options);
    observer.observe(loaderNode);

    return () => observer.disconnect();
  }, [hasMore, distance]);

  return [page, loaderRef, scrollContainerRef];
};

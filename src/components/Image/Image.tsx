import React, { useState, useRef, MutableRefObject } from 'react';
import classnames from 'classnames';
import { useIntersection } from '../../hooks';

interface IImageProps {
  url: string;
  thumb: string;
  width: string;
  height: string;
}

export const Image = ({ url, thumb }: IImageProps): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const imgRef: MutableRefObject<Element> = useRef({ current: <></> });

  useIntersection(imgRef, () => setIsInView(true));

  const handleOnLoad = () => setIsLoaded(true);

  return (
    <div ref={imgRef}>
      {isInView && (
        <>
          <img
            className={classnames('image', 'thumb', {
              ['isLoaded']: !!isLoaded,
            })}
            src={thumb}
          />
          <img
            className={classnames('image', { ['isLoaded']: !!isLoaded })}
            src={url}
            onLoad={handleOnLoad}
          />
        </>
      )}
    </div>
  );
};

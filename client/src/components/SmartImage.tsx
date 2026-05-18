import {
  useEffect,
  useRef,
  useState,
  type ImgHTMLAttributes,
} from "react";

type SmartImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> & {
  src: string;
  eagerRootMargin?: string;
  fallbackClassName?: string;
  onReady?: () => void;
};

export function SmartImage({
  src,
  eagerRootMargin = "1800px 0px",
  fallbackClassName = "absolute inset-0 bg-black",
  className = "",
  onReady,
  style,
  ...props
}: SmartImageProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element || shouldLoad) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: eagerRootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [eagerRootMargin, shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;

    let cancelled = false;
    const image = new Image();
    image.decoding = "async";

    const markReady = () => {
      if (cancelled) return;
      setLoadedSrc(src);
      onReady?.();
    };

    image.onload = () => {
      if ("decode" in image) {
        void image.decode().then(markReady, markReady);
        return;
      }

      markReady();
    };
    image.onerror = () => {
      // Keep the fallback visible if the asset cannot be loaded.
    };
    image.src = src;

    return () => {
      cancelled = true;
    };
  }, [onReady, shouldLoad, src]);

  return (
    <span ref={wrapperRef} className="relative block w-full h-full">
      <span className={fallbackClassName} aria-hidden="true" />
      {loadedSrc && (
        <img
          src={loadedSrc}
          loading="eager"
          className={`${className} transition-opacity duration-500 opacity-100`}
          style={style}
          {...props}
        />
      )}
    </span>
  );
}

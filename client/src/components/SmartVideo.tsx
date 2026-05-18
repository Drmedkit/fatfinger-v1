import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type VideoHTMLAttributes,
} from "react";

type VideoSource = {
  src: string;
  media?: string;
  type?: string;
};

type SmartVideoProps = Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  "children" | "preload" | "autoPlay"
> & {
  sources: VideoSource[];
  warmRootMargin?: string;
  playRootMargin?: string;
  autoPlay?: boolean;
};

export const SmartVideo = forwardRef<HTMLVideoElement, SmartVideoProps>(
  (
    {
      sources,
      warmRootMargin = "1800px 0px",
      playRootMargin = "300px 0px",
      autoPlay,
      ...props
    },
    forwardedRef
  ) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isWarm, setIsWarm] = useState(false);
    const [shouldPlay, setShouldPlay] = useState(false);

    useImperativeHandle(forwardedRef, () => videoRef.current as HTMLVideoElement);

    useEffect(() => {
      const video = videoRef.current;
      if (!video || isWarm) return;

      if (!("IntersectionObserver" in window)) {
        setIsWarm(true);
        setShouldPlay(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsWarm(true);
            observer.disconnect();
          }
        },
        { rootMargin: warmRootMargin }
      );

      observer.observe(video);
      return () => observer.disconnect();
    }, [isWarm, warmRootMargin]);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      if (!("IntersectionObserver" in window)) {
        setShouldPlay(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => setShouldPlay(entry.isIntersecting),
        { rootMargin: playRootMargin }
      );

      observer.observe(video);
      return () => observer.disconnect();
    }, [playRootMargin]);

    useEffect(() => {
      const video = videoRef.current;
      if (!video || !autoPlay || !isWarm) return;

      if (shouldPlay) {
        void video.play().catch(() => {
          // Muted inline autoplay should work, but browsers may still reject it.
        });
        return;
      }

      video.pause();
    }, [autoPlay, isWarm, shouldPlay]);

    useEffect(() => {
      if (!isWarm) return;
      videoRef.current?.load();
    }, [isWarm]);

    return (
      <video
        ref={videoRef}
        autoPlay={Boolean(autoPlay && shouldPlay)}
        preload={isWarm ? "metadata" : "none"}
        {...props}
      >
        {isWarm &&
          sources.map((source) => (
            <source
              key={`${source.media ?? "default"}-${source.src}`}
              src={source.src}
              media={source.media}
              type={source.type ?? "video/mp4"}
            />
          ))}
      </video>
    );
  }
);

SmartVideo.displayName = "SmartVideo";

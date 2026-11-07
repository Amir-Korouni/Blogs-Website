"use client";

import { useEffect, useRef } from "react";

type InfiniteScrollTriggerProps = {
  onIntersect: () => void;
  enabled: boolean;
};

export default function InfiniteScrollTrigger({
  onIntersect,
  enabled,
}: InfiniteScrollTriggerProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;

    if (!target || !enabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [onIntersect, enabled]);

  return <div ref={targetRef} aria-hidden="true" className="h-1" />;
}

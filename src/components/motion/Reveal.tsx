import { useEffect, useRef, useState, type ReactNode } from "react";

type Rise<T extends HTMLElement> = {
  ref: React.RefObject<T | null>;
  className: string;
};

export function useRise<T extends HTMLElement = HTMLDivElement>(self = false): Rise<T> {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: `${self ? "him-rise-self" : "him-rise"}${visible ? " is-in" : ""}`,
  };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  const rise = useRise<HTMLDivElement>();
  return (
    <div ref={rise.ref} className={[className, rise.className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

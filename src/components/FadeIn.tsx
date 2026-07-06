"use client";
import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function FadeIn({ children, delay = 0, direction = "up" }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const getDirectionClasses = () => {
    if (direction === "up") return "translate-y-16";
    if (direction === "left") return "-translate-x-16";
    if (direction === "right") return "translate-x-16";
    return "";
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out w-full ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${getDirectionClasses()}`
      }`}
    >
      {children}
    </div>
  );
}

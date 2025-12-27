'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = '',
  className,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - percentage, 3);

      setCount(Math.floor(end * eased));

      if (percentage < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        hasAnimated.current = true;
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
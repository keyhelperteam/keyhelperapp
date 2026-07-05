'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const stats: Stat[] = [
  { label: 'Features Built In', value: 12, suffix: '' },
  { label: 'Languages Supported', value: 30, suffix: '+' },
  { label: 'App Rating', value: 4.8, suffix: ' ★' },
  { label: 'Data Privacy Score', value: 100, suffix: '%' },
];

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const isDecimal = value % 1 !== 0;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            const current = eased * value;
            setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className='text-4xl md:text-5xl font-extrabold'>
      {count}
      <span className='text-green-600'>{suffix}</span>
    </div>
  );
}

const StatsCounter = () => {
  return (
    <div className='py-20 bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden'>
      <div className='absolute inset-0 bg-[length:20px_20px] opacity-10' style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='2' cy='2' r='1' fill='white'/%3E%3C/svg%3E")`,
      }} />
      <div className='w-[80%] mx-auto relative'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center'>
          {stats.map((stat) => (
            <div key={stat.label} className='p-6' data-aos="zoom-in">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className='text-green-100 mt-2 font-medium text-sm'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;

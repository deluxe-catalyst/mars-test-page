import { useEffect } from "react";

export default function useMouseMove(callback: (x: number, y: number) => void) {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (window.innerWidth < 991) {
        callback(0, 0);
      } else {
        const { clientX, clientY } = event;
        const x = (clientX / window.innerWidth) - 0.5;
        const y = (clientY / window.innerHeight) - 0.5;
        callback(x, y);
      }
    };

    const handleResize = () => {
      callback(0, 0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [callback]);
}
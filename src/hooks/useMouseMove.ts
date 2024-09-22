import { useEffect } from "react";

export default function useMouseMove(callback: (x: number, y: number) => void) {
    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        const x = (clientX / window.innerWidth) - 0.5;
        const y = (clientY / window.innerHeight) - 0.5;
  
        callback(x, y);
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, [callback]);
  }
  
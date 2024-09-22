import { useEffect } from "react";

export default function useMouseMove(callback: (x: number, y: number) => void) {



    useEffect(() => {
        const handleOrientation = (event: DeviceOrientationEvent) => {
            if(window.innerWidth <= 991) {
                const { beta, gamma } = event;
                if (beta !== null && gamma !== null) {
                    const x = gamma / 90;  
                    const y = beta / 180;
                    callback(x, y);
                }
            }

        };
        const handleMouseMove = (event: MouseEvent) => {
            if(window.innerWidth > 991) {
                const { clientX, clientY } = event;
                const x = (clientX / window.innerWidth) - 0.5;
                const y = (clientY / window.innerHeight) - 0.5;
                callback(x, y);
            }
        };


        const handleResize = () => {
            callback(0, 0);
        };

        window.addEventListener('deviceorientation', handleOrientation);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('deviceorientation', handleOrientation);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
}
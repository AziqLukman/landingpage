import { useRef, useEffect } from "react";

interface ClickSparkProps {
    /**
     * The color of the sparks.
     * @default "#fff"
     */
    sparkColor?: string;
    /**
     * The size of the sparks.
     * @default 10
     */
    sparkSize?: number;
    /**
     * The radius of the explosion.
     * @default 20
     */
    sparkRadius?: number;
    /**
     * The number of sparks.
     * @default 8
     */
    sparkCount?: number;
    /**
     * The duration of the animation in milliseconds.
     * @default 400
     */
    duration?: number;
    /**
     * The easing function for the animation.
     * @default "ease-out"
     */
    easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out" | "step-start" | "step-end";
    /**
     * Extra scale multiplier for the sparks.
     * @default 1
     */
    extraScale?: number;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
    sparkColor = "#fff",
    sparkSize = 10,
    sparkRadius = 20,
    sparkCount = 8,
    duration = 400,
    easing = "ease-out",
    extraScale = 1.0,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sparksRef = useRef<{ x: number; y: number; angle: number; startTime: number }[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let requestID: number;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initialize

        const handleClick = (e: MouseEvent) => {
            const now = performance.now();
            for (let i = 0; i < sparkCount; i++) {
                sparksRef.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    angle: (i * (360 / sparkCount) * Math.PI) / 180,
                    startTime: now,
                });
            }
        };

        window.addEventListener("click", handleClick);

        const draw = (time: number) => {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear only if needed, but here we want transparency

            sparksRef.current = sparksRef.current.filter((spark) => {
                const elapsed = time - spark.startTime;
                if (elapsed >= duration) return false;

                const progress = elapsed / duration;
                const easedProgress = Math.pow(progress, 1); // Simple linear for now, can be improved

                // Calculate position
                const distance = easedProgress * sparkRadius;
                const x = spark.x + Math.cos(spark.angle) * distance;
                const y = spark.y + Math.sin(spark.angle) * distance;

                // Calculate size and opacity
                const size = sparkSize * (1 - progress) * extraScale; // Shrink as it goes
                const opacity = 1 - progress;

                ctx.globalAlpha = opacity;
                ctx.fillStyle = sparkColor;

                // Draw spark (circle for now, or line)
                ctx.beginPath();
                ctx.arc(x, y, size / 2, 0, Math.PI * 2);
                ctx.fill();

                return true;
            });

            requestID = requestAnimationFrame(draw);
        };

        requestID = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("click", handleClick);
            cancelAnimationFrame(requestID);
        };
    }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easing, extraScale]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 9999,
            }}
        />
    );
};

export default ClickSpark;

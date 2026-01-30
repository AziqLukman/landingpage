import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedTerminalProps {
    containerWidth: number
}

export default function AnimatedTerminal({ containerWidth }: AnimatedTerminalProps) {
    const [travelDistance, setTravelDistance] = useState(0)

    useEffect(() => {
        // Calculate safe travel distance
        const safeDistance = Math.max(0, containerWidth - 140)
        setTravelDistance(safeDistance)
    }, [containerWidth])

    return (
        <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Moving Elements Wrapper */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Prompt (>) */}
                <motion.div
                    className="absolute top-[8px] left-[0px] text-accent-purple"
                    animate={{
                        x: [0, travelDistance, travelDistance, 0],
                        rotate: [0, 360, 360, 0]
                    }}
                    transition={{
                        duration: 6,
                        times: [0, 0.45, 0.55, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut"
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 18 14 12 6 6" />
                    </svg>
                </motion.div>

                {/* Cursor (_) */}
                <motion.div
                    className="absolute top-[10px] left-[14px] text-primary"
                    animate={{
                        x: [0, travelDistance - 5, travelDistance - 5, 0],
                        opacity: [1, 1, 0, 1]
                    }}
                    transition={{
                        duration: 6,
                        times: [0, 0.45, 0.55, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                        delay: 0.1
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="2" y1="20" x2="18" y2="20" />
                    </svg>
                </motion.div>
            </div>
        </div>
    )
}

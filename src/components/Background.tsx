import React, { useEffect, useState } from 'react'

export default function Background({ children }: { children: React.ReactNode }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="relative min-h-screen bg-gray-50 dark:bg-background-dark overflow-hidden transition-colors duration-300">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none fixed"></div>

            {/* Fixed Background Accents */}
            <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000"></div>

            {/* Mouse Follow Gradient */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    )
}

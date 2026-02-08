import { useState, useEffect } from 'react'

export default function Intro({ onComplete }: { onComplete: () => void }) {
    const text = "ajekkk.my.id"
    const [displayText, setDisplayText] = useState("")
    const [cursorVisible, setCursorVisible] = useState(true)

    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.slice(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(interval)
                setTimeout(onComplete, 2000) // Wait 2s after typing finishes before exiting
            }
        }, 100) // Typing speed

        const blinkInterval = setInterval(() => {
            setCursorVisible(v => !v)
        }, 500)

        return () => {
            clearInterval(interval)
            clearInterval(blinkInterval)
        }
    }, [onComplete])

    return (
        <div className="fixed inset-0 z-[100] bg-background-dark flex flex-col items-center justify-center overflow-hidden text-white w-full h-[100dvh] p-4">
            {/* Dot Grid Background */}
            <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 grid grid-cols-4 gap-3 pointer-events-none select-none">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 opacity-20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 opacity-10"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-transparent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-transparent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600 opacity-40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600 opacity-20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-transparent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-transparent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 opacity-60"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 opacity-30"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 opacity-10"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-transparent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] opacity-80 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 opacity-50"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 opacity-20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-transparent"></div>
            </div>

            <main className="text-center z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center mt-20 md:mt-0">
                <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight md:tracking-wide leading-tight min-h-[1.2em] break-words max-w-full px-4">
                    {displayText}
                    <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} ml-1 text-[#10B981]`}>|</span>
                </h1>
            </main>
        </div>
    )
}

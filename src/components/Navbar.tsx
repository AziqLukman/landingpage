import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import AnimatedTerminal from './AnimatedTerminal'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const { theme, toggleTheme } = useTheme()
    const { language, setLanguage, t } = useLanguage()
    const [langOpen, setLangOpen] = useState(false)

    // Ref to measure container width for the animation
    const containerRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState(0)

    useEffect(() => {
        if (containerRef.current) {
            const updateWidth = () => {
                setContainerWidth(containerRef.current?.offsetWidth || 0)
            }

            // Initial measure
            updateWidth()

            window.addEventListener('resize', updateWidth)
            return () => window.removeEventListener('resize', updateWidth)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setVisible(false)
            } else {
                setVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <nav className={clsx(
            "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-transform duration-300",
            visible ? "translate-y-0" : "-translate-y-full"
        )}>
            <div
                ref={containerRef}
                className={twMerge(
                    "w-full max-w-5xl backdrop-blur-md bg-background-dark/80 dark:bg-background-dark/80 bg-white/80 border border-white/10 dark:border-white/10 border-gray-200 rounded-xl px-6 py-3 flex items-center justify-between shadow-lg shadow-neon/10"
                )}>
                <div className="flex items-center gap-2 group cursor-pointer relative z-20">
                    <AnimatedTerminal containerWidth={containerWidth} />
                    <span className="font-display font-bold text-xl tracking-tight text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-glow transition-colors pl-2">Ajekkk</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:shadow-neon-hover"
                        >
                            {t.nav[item.toLowerCase() as keyof typeof t.nav]}
                        </a>
                    ))}

                    <div className="h-6 w-px bg-gray-300 dark:bg-white/10 mx-2"></div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
                        title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {/* Language Toggle */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300 font-medium text-sm"
                        >
                            <Globe size={18} />
                            <span>{language.toUpperCase()}</span>
                        </button>

                        <AnimatePresence>
                            {langOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden flex flex-col"
                                >
                                    <button
                                        onClick={() => { setLanguage('en'); setLangOpen(false) }}
                                        className={clsx("px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-white/5 text-sm transition-colors", language === 'en' ? 'text-primary font-bold' : 'text-gray-600 dark:text-gray-300')}
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => { setLanguage('id'); setLangOpen(false) }}
                                        className={clsx("px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-white/5 text-sm transition-colors", language === 'id' ? 'text-primary font-bold' : 'text-gray-600 dark:text-gray-300')}
                                    >
                                        Indonesian
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-xl flex flex-col gap-4 shadow-2xl md:hidden animate-in slide-in-from-top-2 fade-in">
                        {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-600 dark:text-gray-300 hover:text-primary py-2 px-4 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {t.nav[item.toLowerCase() as keyof typeof t.nav]}
                            </a>
                        ))}

                        <div className="h-px w-full bg-gray-200 dark:bg-white/10 my-1"></div>

                        <div className="flex items-center justify-between px-4">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Theme</span>
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>

                        <div className="flex items-center justify-between px-4">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Language</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={clsx("px-2 py-1 text-xs rounded border transition-colors", language === 'en' ? 'bg-primary text-white border-primary' : 'border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-300')}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLanguage('id')}
                                    className={clsx("px-2 py-1 text-xs rounded border transition-colors", language === 'id' ? 'bg-primary text-white border-primary' : 'border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-300')}
                                >
                                    ID
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

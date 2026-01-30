import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
    const { t } = useLanguage()

    return (
        <header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden" id="home">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full text-center z-10 flex flex-col items-center gap-6"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-medium text-primary dark:text-primary-glow mb-4 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    {t.hero.available}
                </div>

                <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-gray-900 dark:text-white">
                    {t.hero.titleStart} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600 animate-text-gradient bg-300%">
                        {t.hero.titleGradient}
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 dark:text-text-dim max-w-2xl leading-relaxed mt-2 font-light">
                    {t.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                        href="#projects"
                        className="h-12 px-8 bg-primary hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold rounded-lg flex items-center justify-center transition-all shadow-neon hover:shadow-neon-hover transform hover:-translate-y-0.5"
                    >
                        {t.hero.viewProjects}
                    </a>
                    <a
                        href="#contact"
                        className="h-12 px-8 bg-white dark:bg-surface-light border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-medium rounded-lg flex items-center justify-center transition-all hover:bg-gray-50 dark:hover:bg-surface-light/80 hover:border-gray-300 dark:hover:border-white/20 hover:text-primary"
                    >
                        {t.hero.contactMe}
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 dark:text-text-dim"
            >
                <ChevronDown size={32} />
            </motion.div>
        </header>
    )
}

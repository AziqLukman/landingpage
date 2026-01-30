
import { Mail, Github, Linkedin, Instagram } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
    const { t } = useLanguage()

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="contact">
            <div className="max-w-3xl mx-auto relative z-10 text-center">
                <div className="mb-12">
                    <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-6">{t.contact.title}</h2>
                    <p className="text-gray-600 dark:text-text-dim text-lg max-w-xl mx-auto">
                        {t.contact.description}
                    </p>
                </div>

                <div className="flex justify-center gap-8 flex-wrap">
                    <a href="https://github.com/AziqLukman" className="flex flex-col items-center gap-3 group">
                        <div className="w-16 h-16 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-primary dark:group-hover:text-white group-hover:border-primary/50 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-all shadow-lg group-hover:shadow-neon group-hover:-translate-y-1">
                            <Github size={32} />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white transition-colors">{t.contact.github}</span>
                    </a>

                    <a href="https://www.linkedin.com/in/aziq-luqman-hakim-579536172/" className="flex flex-col items-center gap-3 group">
                        <div className="w-16 h-16 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-primary dark:group-hover:text-white group-hover:border-primary/50 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-all shadow-lg group-hover:shadow-neon group-hover:-translate-y-1">
                            <Linkedin size={32} />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white transition-colors">{t.contact.linkedin}</span>
                    </a>

                    <a href="https://www.instagram.com/aziqlkmn.404/" className="flex flex-col items-center gap-3 group">
                        <div className="w-16 h-16 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-primary dark:group-hover:text-white group-hover:border-primary/50 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-all shadow-lg group-hover:shadow-neon group-hover:-translate-y-1">
                            <Instagram size={32} />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white transition-colors">{t.contact.instagram}</span>
                    </a>

                    <a href="mailto:aziqlukman10@gmail.com.com" className="flex flex-col items-center gap-3 group">
                        <div className="w-16 h-16 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-primary dark:group-hover:text-white group-hover:border-primary/50 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-all shadow-lg group-hover:shadow-neon group-hover:-translate-y-1">
                            <Mail size={32} />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white transition-colors">{t.contact.email}</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

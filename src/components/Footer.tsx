

import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
    const { t } = useLanguage()
    return (
        <footer className="py-8 border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-background-dark text-center transition-colors duration-300">
            <p className="text-gray-600 dark:text-gray-500 text-sm">{t.footer.copyright}</p>
        </footer>
    )
}

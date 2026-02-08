import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Projects() {
    const { t, language } = useLanguage()

    const projects = [
        {
            title: 'CashTrace',
            year: '2026',
            desc: language === 'id'
                ? 'Aplikasi manajemen keuangan pribadi untuk melacak pemasukan, pengeluaran, dan menganalisis pola keuangan Anda.'
                : 'Personal finance management app to track income, expenses, and analyze your financial patterns.',
            tags: ['Express.js', 'Next.js', 'TypeScript', 'MySQL'],
            image: '/cashtrace-icon.png',
            color: 'primary',
            link: 'https://cashtrace.ajekkk.my.id'
        },
        {
            title: 'FinTrack Dashboard',
            year: '2023',
            desc: language === 'id'
                ? 'Platform analitik keuangan komprehensif yang menyediakan visualisasi data real-time dan alat manajemen portofolio.'
                : 'A comprehensive financial analytics platform providing real-time data visualization and portfolio management tools.',
            tags: ['React', 'D3.js', 'Tailwind'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
            color: 'primary'
        },
        {
            title: 'Neon NFT Gallery',
            year: '2023',
            desc: language === 'id'
                ? 'Pasar terdesentralisasi bagi seniman digital untuk mencetak dan memperdagangkan NFT dengan biaya gas rendah.'
                : 'A decentralized marketplace for digital artists to mint and trade NFTs with low gas fees.',
            tags: ['Next.js', 'Solidity', 'Web3.js'],
            image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop',
            color: 'accent-purple'
        },
        {
            title: 'TaskFlow App',
            year: '2022',
            desc: language === 'id'
                ? 'Aplikasi produktivitas yang dirancang untuk tim jarak jauh agar dapat berkolaborasi dengan lancar dalam proyek yang kompleks.'
                : 'A productivity application designed for remote teams to collaborate seamlessly on complex projects.',
            tags: ['Vue.js', 'Firebase', 'PWA'],
            image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop',
            color: 'primary'
        }
    ]

    return (
        <section className="py-24 px-6 relative" id="projects">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{t.projects.title}</h2>
                    <p className="text-gray-600 dark:text-text-dim">{t.projects.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-neon hover:-translate-y-2 flex flex-col shadow-lg dark:shadow-none"
                        >
                            <div className="aspect-video w-full overflow-hidden bg-gray-200 dark:bg-gray-800 relative">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform" title="View Code">
                                        <Github size={20} />
                                    </button>
                                    {project.link ? (
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-primary text-white p-3 rounded-full hover:scale-110 transition-transform" 
                                            title="Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    ) : (
                                        <button className="bg-primary text-white p-3 rounded-full hover:scale-110 transition-transform" title="Live Demo">
                                            <ExternalLink size={20} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                                    <span className={`text-xs font-mono px-2 py-1 rounded bg-${project.color}/10 text-${project.color === 'primary' ? 'primary' : 'accent-purple'}`}>
                                        {project.year}
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs text-gray-500 dark:text-gray-500 font-medium px-2 py-1 bg-gray-100 dark:bg-white/5 rounded border border-gray-200 dark:border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Mobile-visible action buttons */}
                                <div className="flex gap-2 md:hidden">
                                    <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors">
                                        <Github size={16} />
                                        Code
                                    </button>
                                    {project.link ? (
                                        <a 
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    ) : (
                                        <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-300 dark:bg-white/10 text-gray-500 dark:text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed">
                                            <ExternalLink size={16} />
                                            Coming Soon
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="px-8 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2 shadow-sm dark:shadow-none">
                        {t.projects.showMore}
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    )
}

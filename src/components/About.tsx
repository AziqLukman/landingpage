import { Code } from 'lucide-react'
import { FaHtml5, FaCss3Alt, FaPhp, FaJs, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa'
import { SiTypescript, SiExpress, SiNextdotjs, SiTailwindcss, SiMysql, SiCodeigniter, SiLaravel } from 'react-icons/si'
import { useLanguage } from '../context/LanguageContext'

const skills = [
    { name: 'HTML', icon: <FaHtml5 size={24} className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt size={24} className="text-blue-500" /> },
    { name: 'PHP', icon: <FaPhp size={24} className="text-indigo-400" /> },
    { name: 'JavaScript', icon: <FaJs size={24} className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript size={24} className="text-blue-600" /> },
    { name: 'Node.js', icon: <FaNodeJs size={24} className="text-green-500" /> },
    { name: 'Express', icon: <SiExpress size={24} className="text-gray-800 dark:text-white" /> },
    { name: 'React', icon: <FaReact size={24} className="text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={24} className="text-gray-800 dark:text-white" /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={24} className="text-cyan-500" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={24} className="text-purple-600" /> },
    { name: 'CodeIgniter', icon: <SiCodeigniter size={24} className="text-orange-600" /> },
    { name: 'Laravel', icon: <SiLaravel size={24} className="text-red-600" /> },
    { name: 'MySQL', icon: <SiMysql size={24} className="text-blue-400" /> },
]

export default function About() {
    const { t } = useLanguage()

    return (
        <section className="py-24 px-6 relative" id="about">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 space-y-8">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{t.about.title}</h2>
                        <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                            <p>{t.about.p3}</p>
                        </div>
                    </div>

                    <div className="lg:col-span-5 bg-white/50 dark:bg-surface-dark/50 border border-gray-200 dark:border-white/5 rounded-2xl p-8 shadow-2xl hover:border-primary/50 dark:hover:border-white/10 transition-colors backdrop-blur-sm">
                        <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <Code className="text-accent-purple" />
                            {t.about.techStack}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-lg hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-primary/10 transition-colors cursor-default group shadow-sm dark:shadow-none"
                                >
                                    <span className="transition-transform group-hover:scale-110 duration-300">{skill.icon}</span>
                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

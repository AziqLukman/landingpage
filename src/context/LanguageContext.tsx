import React, { createContext, useContext, useState } from 'react'

type Language = 'en' | 'id'

export const translations = {
    en: {
        nav: {
            home: 'Home',
            projects: 'Projects',
            about: 'About',
            contact: 'Contact',
        },
        hero: {
            available: 'Available for freelance work',
            titleStart: 'Designing the',
            titleGradient: 'Future of Web',
            description: "Hi, I'm Ajekkk. Working web developer who learns and builds by doing. I code with logic, references, experimentation—and a lot of vibe coding. I focus less on writing “perfect” code and more on making things work, improving them step by step as the project grows.",
            viewProjects: 'View Projects',
            contactMe: 'Contact Me',
        },
        about: {
            title: 'About Me',
            p1: "I code when the vibe is right. Not in a structured, rigid way—more like finding the flow where ideas just click into place. I let intuition guide the process, building what feels right in the moment rather than overthinking every detail upfront.",
            p2: "For me, coding is about rhythm. Some days it's fast and experimental, other days it's slow and deliberate. I don't force it. I stay in the zone, follow the energy, and let the project shape itself naturally. That's when the best work happens.",
            p3: "When I'm not coding, you can find me in silence, solitude, or hunting for the best coffee in town for a cozy spot.",
            techStack: 'Tech Stack',
        },
        projects: {
            title: 'Featured Projects',
            subtitle: 'A selection of my recent work',
            showMore: 'Show More',
        },
        contact: {
            title: "Let's Connect",
            description: "I'm currently available for freelance work and open to new opportunities. Feel free to reach out if you want to collaborate or just say hi!",
            github: 'GitHub',
            linkedin: 'LinkedIn',
            instagram: 'Instagram',
            email: 'Email',
        },
        footer: {
            copyright: '© 2026 Ajekkk. Built with Tailwind CSS & Passion.',
        }
    },
    id: {
        nav: {
            home: 'Beranda',
            projects: 'Proyek',
            about: 'Tentang',
            contact: 'Kontak',
        },
        hero: {
            available: 'Tersedia untuk proyek freelance',
            titleStart: 'Merancang',
            titleGradient: 'Web Masa Depan',
            description: "Halo, saya Ajekkk. Pengembang web yang belajar dan membangun dengan praktik langsung. Saya menulis kode dengan logika, referensi, eksperimen—dan banyak vibe coding. Saya kurang fokus pada menulis kode yang 'sempurna' dan lebih pada membuat segala sesuatunya berfungsi, meningkatkannya selangkah demi selangkah seiring perkembangan proyek.",
            viewProjects: 'Lihat Proyek',
            contactMe: 'Hubungi Saya',
        },
        about: {
            title: 'Tentang Saya',
            p1: "Saya coding kalau vibenya pas. Bukan dengan cara yang kaku—lebih ke nemuin flow dimana ide-ide langsung nyambung. Saya biarkan intuisi yang nuntun prosesnya, bikin apa yang terasa pas di saat itu daripada mikir terlalu detail di awal.",
            p2: "Buat saya, coding itu soal ritme. Ada hari yang cepat dan eksperimental, ada hari yang pelan dan hati-hati. Saya gak maksa. Tetap di zona, ikutin energinya, dan biarkan proyeknya bentuk sendiri secara natural. Disitulah hasil terbaik muncul.",
            p3: "Saat tidak coding, Anda bisa menemukan saya dikeheningan, kesunyian, atau berburu kopi terbaik di kota untuk mencari tempat nyaman.",
            techStack: 'Teknologi',
        },
        projects: {
            title: 'Proyek Unggulan',
            subtitle: 'Pilihan karya terbaru saya',
            showMore: 'Tampilkan Lebih Banyak',
        },
        contact: {
            title: "Mari Terhubung",
            description: "Saat ini saya tersedia untuk pekerjaan freelance dan terbuka untuk peluang baru. Jangan ragu untuk menghubungi jika ingin berkolaborasi atau sekadar menyapa!",
            github: 'GitHub',
            linkedin: 'LinkedIn',
            instagram: 'Instagram',
            email: 'Email',
        },
        footer: {
            copyright: '© 2026 Ajekkk. Dibuat dengan Tailwind CSS & Passion.',
        }
    }
}

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: typeof translations.en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en')

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

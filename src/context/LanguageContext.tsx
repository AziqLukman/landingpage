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
            description: "Hi, I'm Alex. A creative developer bridging the gap between engineering and design. I build immersive digital experiences with clean code.",
            viewProjects: 'View Projects',
            contactMe: 'Contact Me',
        },
        about: {
            title: 'About Me',
            p1: "I started my journey as a designer who learned to code to have more control over the final output. Now, I'm a full-stack developer with a passion for UI/UX design.",
            p2: "My approach is simple: minimalist design backed by robust engineering. I believe that the best digital products are the ones that feel invisible—where the user interface gets out of the way and lets the content shine.",
            p3: "When I'm not coding, you can find me exploring 3D art in Blender, tweaking my mechanical keyboard, or hunting for the best coffee in the city.",
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
            titleGradient: 'Masa Depan Web',
            description: "Halo, saya Alex. Pengembang kreatif yang menjembatani teknik dan desain. Saya membangun pengalaman digital yang imersif dengan kode yang rapi.",
            viewProjects: 'Lihat Proyek',
            contactMe: 'Hubungi Saya',
        },
        about: {
            title: 'Tentang Saya',
            p1: "Saya memulai perjalanan sebagai desainer yang belajar coding untuk memiliki kendali lebih atas hasil akhir. Sekarang, saya adalah pengembang full-stack dengan passion di UI/UX.",
            p2: "Pendekatan saya sederhana: desain minimalis yang didukung teknik yang kuat. Saya percaya produk digital terbaik adalah yang terasa 'tidak terlihat'—di mana antarmuka pengguna tidak mengganggu dan membiarkan konten bersinar.",
            p3: "Saat tidak coding, Anda bisa menemukan saya menjelajahi seni 3D di Blender, mengoprek keyboard mekanik, atau berburu kopi terbaik di kota.",
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

import { useState } from 'react'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'

function App() {
    const [showIntro, setShowIntro] = useState(true)

    if (showIntro) {
        return <Intro onComplete={() => setShowIntro(false)} />
    }

    return (
        <ThemeProvider>
            <LanguageProvider>
                <Background>
                    <Navbar />
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                    <Footer />
                </Background>
            </LanguageProvider>
        </ThemeProvider>
    )
}

export default App

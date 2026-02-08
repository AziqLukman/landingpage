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
import ClickSpark from './components/ClickSpark'

function App() {
    const [showIntro, setShowIntro] = useState(true)

    if (showIntro) {
        return <Intro onComplete={() => setShowIntro(false)} />
    }


    return (
        <ThemeProvider>
            <LanguageProvider>
                <Background>
                    <ClickSpark
                        sparkColor='#fff'
                        sparkSize={10}
                        sparkRadius={20}
                        sparkCount={8}
                        duration={400}
                    />
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

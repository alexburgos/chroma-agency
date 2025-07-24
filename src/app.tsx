import './app.css'
import { useState } from 'preact/hooks'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { About, Artists, Contact } from './components/index.ts'

export function App() {
  const [activeSection, setActiveSection] = useState<string | null>('about')

  const handleNavClick = (section: string) => {
    setActiveSection(section)
  }

  const renderSectionContent = (section: string | null) => {
    switch (section) {
      case 'about':
        return <About />

      case 'artists':
        return <Artists />

      case 'contact':
        return <Contact />

      default:
        return null
    }
  }

  return (
    <>
      <header className="header">
        <h1 className="title">CHROMA</h1>
      </header>

      <nav className="navigation">
        <button
          type="button"
          onClick={() => handleNavClick('about')}
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
        >
          About
        </button>
        <button
          type="button"
          onClick={() => handleNavClick('artists')}
          className={`nav-link ${activeSection === 'artists' ? 'active' : ''}`}
        >
          Artists
        </button>
        <button
          type="button"
          onClick={() => handleNavClick('contact')}
          className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
        >
          Contact
        </button>
      </nav>

      <main className="main">
        <SwitchTransition>
          <CSSTransition
            key={activeSection || 'empty'}
            timeout={400}
            classNames="page"
            unmountOnExit
          >
            <div className="page-section">
              {renderSectionContent(activeSection)}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </main>

      <footer className="footer">
        <p>© 2025 Chroma Agency</p>
        <p>Made by <a href="https://alexburgos.dev" target="_blank" rel="noopener noreferrer">Alex Burgos</a></p>
      </footer>
    </>
  )
}

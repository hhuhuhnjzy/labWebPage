import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NewsPage from './pages/NewsPage'
import PublicationsPage from './pages/PublicationsPage'
import PeoplePage from './pages/PeoplePage'
import ProjectsPage from './pages/ProjectsPage'
import PositionsPage from './pages/PositionsPage'
import './styles/App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/people" element={<PeoplePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/positions" element={<PositionsPage />} />
            </Routes>
          </main>
        <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App


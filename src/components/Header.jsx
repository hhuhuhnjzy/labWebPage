import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import '../styles/Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const navLinks = {
    en: {
      home: 'Home',
      people: 'People',
      projects: 'Projects',
      publications: 'Publications',
      news: 'News',
      positions: 'Positions'
    },
    zh: {
      home: '首页',
      people: '团队',
      projects: '项目',
      publications: '论文',
      news: '动态',
      positions: '招聘'
    }
  }

  const t = navLinks[language]

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo-section">
          <img src="/logo.png" alt="AgentFabric Logo" className="logo-img" />
          <span className="logo-text">AgentFabric</span>
        </Link>
        <nav className="nav">
          <Link to="/" className={`nav-link ${isActive('/')}`}>{t.home}</Link>
          <Link to="/people" className={`nav-link ${isActive('/people')}`}>{t.people}</Link>
          <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>{t.projects}</Link>
          <Link to="/publications" className={`nav-link ${isActive('/publications')}`}>{t.publications}</Link>
          <Link to="/news" className={`nav-link ${isActive('/news')}`}>{t.news}</Link>
          <Link to="/positions" className={`nav-link ${isActive('/positions')}`}>{t.positions}</Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}

export default Header


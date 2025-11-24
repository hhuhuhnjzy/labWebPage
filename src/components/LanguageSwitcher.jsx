import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button 
      className="language-switcher" 
      onClick={toggleLanguage}
      aria-label="Switch Language"
    >
      {language === 'en' ? '中文' : 'EN'}
    </button>
  )
}

export default LanguageSwitcher



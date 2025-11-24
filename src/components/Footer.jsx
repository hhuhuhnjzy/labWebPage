import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      copyright: 'AgentFabric Research Group. All rights reserved.'
    },
    zh: {
      copyright: 'AgentFabric 研究组。保留所有权利。'
    }
  }

  const t = content[language]

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 {t.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer



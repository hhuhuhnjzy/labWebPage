import React, { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { getPublications } from '../lib/sanity'
import SEOHead from '../components/SEOHead'
import '../styles/Pages.css'

const PublicationsPage = () => {
  const { language } = useLanguage()
  const [publications, setPublications] = useState([])
  const [loading, setLoading] = useState(true)
  
  const content = {
    en: {
      title: 'Publications',
      subtitle: 'Research papers and academic publications',
      loading: 'Loading...'
    },
    zh: {
      title: '学术成果',
      subtitle: '研究论文与学术发表',
      loading: '加载中...'
    }
  }

  useEffect(() => {
    getPublications()
      .then(data => {
        setPublications(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching publications:', err)
        setLoading(false)
      })
  }, [])

  const t = content[language]
  
  if (loading) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">{t.title}</h1>
            <p className="page-subtitle">{t.loading}</p>
          </div>
        </div>
      </section>
    )
  }

  const oldPublications = [
    {
      date: 'January 2026',
      title: 'Please Don\'t Kill My Vibe: Empowering Agents with Data Flow Control',
      authors: 'Author1, Author2, Author3',
      venue: 'Conference/Journal Name 2026',
      links: {
        pdf: '#',
        code: '#',
        slides: '#'
      }
    },
    {
      date: 'December 2025',
      title: 'LLM Generated Persona is a Promise with a Catch',
      authors: 'Author1, Author2',
      venue: 'Conference/Journal Name 2025',
      links: {
        pdf: '#',
        code: '#'
      }
    },
    {
      date: 'December 2025',
      title: 'Agents for Web Testing: A Case Study in the Wild',
      authors: 'Author1, Author2, Author3, Author4',
      venue: 'Conference/Journal Name 2025',
      links: {
        pdf: '#',
        code: '#',
        demo: '#'
      }
    },
    {
      date: 'December 2025',
      title: 'Data Mixture Optimization: A Multi-Fidelity Multi-Scale Bayesian Framework',
      authors: 'Author1, Author2',
      venue: 'Conference/Journal Name 2025',
      links: {
        pdf: '#',
        code: '#'
      }
    },
    {
      date: 'November 2025',
      title: 'Tail-Optimized Caching for LLM Inference',
      authors: 'Author1, Author2, Author3',
      venue: 'Conference/Journal Name 2025',
      links: {
        pdf: '#',
        code: '#'
      }
    },
    {
      date: 'November 2025',
      title: 'Multi-Agent Markov Entanglement',
      authors: 'Author1, Author2',
      venue: 'Conference/Journal Name 2025',
      links: {
        pdf: '#'
      }
    },
    {
      date: 'October 2025',
      title: 'Set It and Forget It: Zero-Mod ML Magic for Linux Tuning',
      authors: 'Author1, Author2, Author3',
      venue: 'Conference/Journal Name 2025',
      links: {
        pdf: '#',
        code: '#',
        blog: '#'
      }
    },
    {
      date: 'October 2025',
      title: 'Cortex: Workflow-Aware Resource Pooling and Scheduling for Agentic Serving',
      authors: 'Author1, Author2, Author3, Author4',
      venue: 'Conference/Journal Name 2025',
      links: {
        pdf: '#',
        code: '#',
        slides: '#'
      }
    }
  ]

  const displayPublications = publications.length > 0 ? publications : oldPublications

  return (
    <section className="page-section">
      <SEOHead 
        title={language === 'zh' ? 'AgentFabric论文发表 - 学术出版物' : 'AgentFabric Publications - Research Papers'}
        description={language === 'zh' ? '浏览AgentFabric实验室发表的学术论文和研究成果，涵盖AI Agent、分布式系统等领域。' : 'Browse academic publications and research papers from AgentFabric Lab, covering AI agents, distributed systems, and more.'}
        keywords="AI agent papers, LLM publications, machine learning research papers, agent systems research"
        path="/publications"
      />
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{t.title}</h1>
          <p className="page-subtitle">{t.subtitle}</p>
        </div>
        
        <div className="publications-list-page">
          {displayPublications.map((pub, index) => (
            <article key={index} className="publication-card-page">
              <div className="pub-date-page">{pub.date}</div>
              <h2 className="pub-title-page">{pub.title}</h2>
              <p className="pub-authors-page">{pub.authors}</p>
              <p className="pub-venue-page">{pub.venue}</p>
              <div className="pub-links">
                {pub.pdfUrl && <a href={pub.pdfUrl} className="pub-link">PDF</a>}
                {pub.codeUrl && <a href={pub.codeUrl} className="pub-link">Code</a>}
                {pub.slidesUrl && <a href={pub.slidesUrl} className="pub-link">Slides</a>}
                {pub.demoUrl && <a href={pub.demoUrl} className="pub-link">Demo</a>}
                {pub.blogUrl && <a href={pub.blogUrl} className="pub-link">Blog</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PublicationsPage


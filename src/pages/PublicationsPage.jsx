import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/Pages.css'

const PublicationsPage = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Publications',
      subtitle: 'Research papers and academic publications'
    },
    zh: {
      title: '学术成果',
      subtitle: '研究论文与学术发表'
    }
  }

  const publications = [
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

  const t = content[language]

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{t.title}</h1>
          <p className="page-subtitle">{t.subtitle}</p>
        </div>
        
        <div className="publications-list-page">
          {publications.map((pub, index) => (
            <article key={index} className="publication-card-page">
              <div className="pub-date-page">{pub.date}</div>
              <h2 className="pub-title-page">{pub.title}</h2>
              <p className="pub-authors-page">{pub.authors}</p>
              <p className="pub-venue-page">{pub.venue}</p>
              <div className="pub-links">
                {pub.links.pdf && <a href={pub.links.pdf} className="pub-link">PDF</a>}
                {pub.links.code && <a href={pub.links.code} className="pub-link">Code</a>}
                {pub.links.slides && <a href={pub.links.slides} className="pub-link">Slides</a>}
                {pub.links.demo && <a href={pub.links.demo} className="pub-link">Demo</a>}
                {pub.links.blog && <a href={pub.links.blog} className="pub-link">Blog</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PublicationsPage


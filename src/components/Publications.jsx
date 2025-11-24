import React from 'react'
import '../styles/Publications.css'

const Publications = () => {
  const publications = [
    {
      date: 'January 2026',
      title: 'Please Don\'t Kill My Vibe: Empowering Agents with Data Flow Control',
      authors: '',
      venue: ''
    },
    {
      date: 'December 2025',
      title: 'LLM Generated Persona is a Promise with a Catch',
      authors: '',
      venue: ''
    },
    {
      date: 'December 2025',
      title: 'Agents for Web Testing: A Case Study in the Wild',
      authors: '',
      venue: ''
    },
    {
      date: 'December 2025',
      title: 'Data Mixture Optimization: A Multi-Fidelity Multi-Scale Bayesian Framework',
      authors: '',
      venue: ''
    },
    {
      date: 'October 2025',
      title: 'Set It and Forget It: Zero-Mod ML Magic for Linux Tuning',
      authors: '',
      venue: ''
    },
    {
      date: 'October 2025',
      title: 'Cortex: Workflow-Aware Resource Pooling and Scheduling for Agentic Serving',
      authors: '',
      venue: ''
    }
  ]

  return (
    <section id="publications" className="publications-section">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-card">
              <div className="pub-date">{pub.date}</div>
              <h3 className="pub-title">{pub.title}</h3>
              {pub.authors && <p className="pub-authors">{pub.authors}</p>}
              {pub.venue && <p className="pub-venue">{pub.venue}</p>}
            </div>
          ))}
        </div>
        <div className="more-link">
          <a href="#all-publications">More publications...</a>
        </div>
      </div>
    </section>
  )
}

export default Publications



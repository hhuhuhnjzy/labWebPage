import React, { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { getResearch } from '../lib/sanity'
import SEOHead from '../components/SEOHead'
import '../styles/Pages.css'

const ResearchPage = () => {
  const { language } = useLanguage()
  const [research, setResearch] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getResearch()
        setResearch(data)
      } catch (error) {
        console.error('Error fetching research:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const content = {
    en: {
      title: 'Research',
      subtitle: 'Explore our research in algorithms, frameworks, and applications for AI agents',
      all: 'All',
      algorithm: 'Algorithm',
      framework: 'Framework',
      application: 'Application',
      noResults: 'No research items found',
      loading: 'Loading...'
    },
    zh: {
      title: '研究',
      subtitle: '探索我们在AI Agent算法、框架和应用领域的研究成果',
      all: '全部',
      algorithm: '算法',
      framework: '框架',
      application: '应用',
      noResults: '暂无研究项目',
      loading: '加载中...'
    }
  }

  const t = content[language]

  const filteredResearch = activeFilter === 'all' 
    ? research 
    : research.filter(item => item.category === activeFilter)

  const getCategoryLabel = (category) => {
    const labels = {
      algorithm: { en: 'Algorithm', zh: '算法' },
      framework: { en: 'Framework', zh: '框架' },
      application: { en: 'Application', zh: '应用' }
    }
    return labels[category]?.[language] || category
  }

  const getCategoryClass = (category) => {
    const classes = {
      algorithm: 'tag-algorithm',
      framework: 'tag-framework',
      application: 'tag-application'
    }
    return classes[category] || ''
  }

  return (
    <div className="page research-page">
      <SEOHead 
        title={language === 'zh' ? '研究 - AgentFabric实验室' : 'Research - AgentFabric Lab'}
        description={language === 'zh' ? '探索AgentFabric实验室在AI Agent算法、框架和应用领域的研究成果' : 'Explore AgentFabric Lab research in AI agent algorithms, frameworks, and applications'}
        keywords="AI Agent Research, Algorithm, Framework, Application, Machine Learning, Deep Learning"
        path="/research"
      />
      
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{t.title}</h1>
          <p className="page-subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              {t.all}
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'algorithm' ? 'active' : ''}`}
              onClick={() => setActiveFilter('algorithm')}
            >
              {t.algorithm}
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'framework' ? 'active' : ''}`}
              onClick={() => setActiveFilter('framework')}
            >
              {t.framework}
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'application' ? 'active' : ''}`}
              onClick={() => setActiveFilter('application')}
            >
              {t.application}
            </button>
          </div>

          {/* Research Grid */}
          {loading ? (
            <div className="loading-state">{t.loading}</div>
          ) : filteredResearch.length > 0 ? (
            <div className="research-page-grid">
              {filteredResearch.map((item, index) => (
                <a 
                  key={index}
                  href={item.projectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="research-page-card"
                >
                  <div className="research-page-thumbnail">
                    {item.thumbnailUrl ? (
                      <img src={item.thumbnailUrl} alt={language === 'zh' ? item.titleZh : item.title} />
                    ) : (
                      <div className="thumbnail-placeholder">
                        <span>🔬</span>
                      </div>
                    )}
                    <span className={`category-badge ${getCategoryClass(item.category)}`}>
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>
                  <div className="research-page-content">
                    <h3 className="research-page-title">
                      {language === 'zh' ? item.titleZh : item.title}
                    </h3>
                    {item.descriptionEn && (
                      <p className="research-page-description">
                        {language === 'zh' ? item.descriptionZh : item.descriptionEn}
                      </p>
                    )}
                    {item.participants && item.participants.length > 0 && (
                      <p className="research-page-participants">
                        <strong>{language === 'zh' ? '参与者：' : 'Participants: '}</strong>
                        {item.participants.join(', ')}
                      </p>
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <div className="research-page-tags">
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="research-page-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="empty-state">{t.noResults}</div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ResearchPage




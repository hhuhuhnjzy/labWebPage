import React, { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { getPeople } from '../lib/sanity'
import SEOHead from '../components/SEOHead'
import '../styles/Pages.css'

const PeoplePage = () => {
  const { language } = useLanguage()
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const content = {
    en: {
      title: 'People',
      subtitle: 'Research team members',
      facultyTitle: 'Faculty',
      studentsTitle: 'Students',
      loading: 'Loading...',
      error: 'Failed to load team members'
    },
    zh: {
      title: '团队成员',
      subtitle: '课题组成员',
      facultyTitle: '导师',
      studentsTitle: '学生',
      loading: '加载中...',
      error: '加载团队成员失败'
    }
  }

  useEffect(() => {
    getPeople()
      .then(data => {
        setPeople(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching people:', err)
        setError(err.message)
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

  if (error) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">{t.title}</h1>
            <p className="page-subtitle" style={{color: 'red'}}>{t.error}</p>
          </div>
        </div>
      </section>
    )
  }

  const faculty = people.filter(p => p.category === 'faculty')
  const students = people.filter(p => p.category === 'students')

  return (
    <section className="page-section">
      <SEOHead 
        title={language === 'zh' ? 'AgentFabric团队 - 成员介绍' : 'AgentFabric Team - Our People'}
        description={language === 'zh' ? '认识AgentFabric实验室的研究团队成员，包括教授、研究生和访问学者。' : 'Meet the AgentFabric research team, including faculty, PhD students, and visiting scholars.'}
        keywords="AgentFabric team, research group members, AI researchers, LLM experts"
        path="/people"
      />
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{t.title}</h1>
          <p className="page-subtitle">{t.subtitle}</p>
        </div>
        
        <div className="people-section">
          <h2 className="people-category-title">{t.facultyTitle}</h2>
          <div className="people-grid">
            {faculty.map((person, index) => (
              <div key={index} className="person-card">
                <div className="person-photo">
                  {person.photoUrl ? (
                    <img src={person.photoUrl} alt={person.name} />
                  ) : (
                    <div className="photo-placeholder">{language === 'en' ? 'Photo' : '照片'}</div>
                  )}
                </div>
                <h3 className="person-name">{person.name}</h3>
                <p className="person-role">{person.role}</p>
                <p className="person-bio">
                  {language === 'en' ? person.bioEn : person.bioZh}
                </p>
                <div className="person-links">
                  {person.email && <a href={`mailto:${person.email}`}>Email</a>}
                  {person.website && <a href={person.website}>Website</a>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="people-section">
          <h2 className="people-category-title">{t.studentsTitle}</h2>
          <div className="people-grid">
            {students.map((person, index) => (
              <div key={index} className="person-card">
                <div className="person-photo">
                  {person.photoUrl ? (
                    <img src={person.photoUrl} alt={person.name} />
                  ) : (
                    <div className="photo-placeholder">{language === 'en' ? 'Photo' : '照片'}</div>
                  )}
                </div>
                <h3 className="person-name">{person.name}</h3>
                <p className="person-role">{person.role}</p>
                <p className="person-bio">
                  {language === 'en' ? person.bioEn : person.bioZh}
                </p>
                <div className="person-links">
                  {person.email && <a href={`mailto:${person.email}`}>Email</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PeoplePage


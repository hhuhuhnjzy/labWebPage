import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/Pages.css'

const PeoplePage = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'People',
      subtitle: 'Research team members',
      facultyTitle: 'Faculty',
      studentsTitle: 'Students'
    },
    zh: {
      title: '团队成员',
      subtitle: '课题组成员',
      facultyTitle: '导师',
      studentsTitle: '学生'
    }
  }

  const faculty = [
    {
      name: 'Professor Name',
      role: 'Principal Investigator',
      photo: '',
      bio: {
        en: 'Research interests and bio...',
        zh: '研究方向和个人简介...'
      },
      email: 'professor@university.edu',
      website: '#'
    }
  ]

  const students = [
    {
      name: 'PhD Student 1',
      role: 'PhD Student',
      photo: '',
      bio: {
        en: 'Research: Efficient LLM Agents',
        zh: '研究方向：高效LLM Agent'
      },
      email: 'student1@university.edu'
    },
    {
      name: 'PhD Student 2',
      role: 'PhD Student',
      photo: '',
      bio: {
        en: 'Research: Distributed Agent Systems',
        zh: '研究方向：分布式Agent系统'
      },
      email: 'student2@university.edu'
    },
    {
      name: 'Master Student 1',
      role: 'Master Student',
      photo: '',
      bio: {
        en: 'Research: Edge Agent Deployment',
        zh: '研究方向：边缘Agent部署'
      },
      email: 'student3@university.edu'
    },
    {
      name: 'Master Student 2',
      role: 'Master Student',
      photo: '',
      bio: {
        en: 'Research: Healthcare Agents',
        zh: '研究方向：医疗Agent应用'
      },
      email: 'student4@university.edu'
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
        
        <div className="people-section">
          <h2 className="people-category-title">{t.facultyTitle}</h2>
          <div className="people-grid">
            {faculty.map((person, index) => (
              <div key={index} className="person-card">
                <div className="person-photo">
                  {person.photo ? (
                    <img src={person.photo} alt={person.name} />
                  ) : (
                    <div className="photo-placeholder">{language === 'en' ? 'Photo' : '照片'}</div>
                  )}
                </div>
                <h3 className="person-name">{person.name}</h3>
                <p className="person-role">{person.role}</p>
                <p className="person-bio">
                  {typeof person.bio === 'object' ? person.bio[language] : person.bio}
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
                  {person.photo ? (
                    <img src={person.photo} alt={person.name} />
                  ) : (
                    <div className="photo-placeholder">{language === 'en' ? 'Photo' : '照片'}</div>
                  )}
                </div>
                <h3 className="person-name">{person.name}</h3>
                <p className="person-role">{person.role}</p>
                <p className="person-bio">
                  {typeof person.bio === 'object' ? person.bio[language] : person.bio}
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


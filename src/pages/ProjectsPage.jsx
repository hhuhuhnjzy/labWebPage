import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/Pages.css'

const ProjectsPage = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Projects',
      subtitle: 'Research projects',
      collaborators: 'Team Members:'
    },
    zh: {
      title: '研究项目',
      subtitle: '课题组研究项目',
      collaborators: '团队成员：'
    }
  }

  const projects = [
    {
      title: 'Efficient LLM Agent Framework',
      description: {
        en: 'Developing efficient LLM Agent framework to optimize token consumption, communication efficiency, and computational efficiency. This project aims to reduce Agent system operational costs and improve response speed.',
        zh: '开发高效的LLM Agent框架，优化token消耗、通信效率和计算效率。该项目旨在降低Agent系统的运行成本，提高响应速度。'
      },
      status: 'Ongoing',
      collaborators: ['Student 1', 'Student 2'],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'Distributed Agent Orchestration System',
      description: {
        en: 'Building a scalable distributed Agent orchestration system supporting large-scale Agent deployment and management. The system provides load balancing, fault tolerance, and dynamic resource allocation.',
        zh: '构建可扩展的分布式Agent编排系统，支持大规模Agent的部署和管理。系统提供负载均衡、容错机制和动态资源分配功能。'
      },
      status: 'Ongoing',
      collaborators: ['Student 3', 'Student 4'],
      links: {
        github: '#',
        paper: '#'
      }
    },
    {
      title: 'Edge-Optimized Agent Runtime',
      description: {
        en: 'Edge-device optimized Agent runtime environment supporting efficient LLM Agent execution on resource-constrained devices. Employs model compression and inference optimization techniques.',
        zh: '针对边缘设备优化的Agent运行时环境，支持在资源受限的设备上高效运行LLM Agent。采用模型压缩和推理优化技术。'
      },
      status: 'Ongoing',
      collaborators: ['Student 5'],
      links: {
        github: '#'
      }
    },
    {
      title: 'Healthcare Agent Platform',
      description: {
        en: 'Intelligent Agent platform for healthcare providing patient consultation, diagnostic assistance, and health management. Emphasizes privacy protection and medical accuracy.',
        zh: '面向医疗领域的智能Agent平台，提供患者咨询、诊断辅助、健康管理等功能。注重隐私保护和医疗准确性。'
      },
      status: 'Planning',
      collaborators: ['Student 6', 'Student 7'],
      links: {}
    },
    {
      title: 'Education Agent System',
      description: {
        en: 'Intelligent educational Agent system providing personalized learning tutoring, homework grading, and knowledge graph construction. Supports multiple subjects and languages.',
        zh: '智能教育Agent系统，提供个性化学习辅导、作业批改、知识图谱构建等功能。支持多学科和多语言。'
      },
      status: 'Planning',
      collaborators: ['Student 8'],
      links: {}
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
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-header">
                <h2 className="project-title">{project.title}</h2>
                <span className={`project-status status-${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">
                {typeof project.description === 'object' ? project.description[language] : project.description}
              </p>
              <div className="project-meta">
                <div className="project-collaborators">
                  <strong>{t.collaborators}</strong> {project.collaborators.join(', ')}
                </div>
                {Object.keys(project.links).length > 0 && (
                  <div className="project-links">
                    {project.links.github && <a href={project.links.github} className="project-link">GitHub</a>}
                    {project.links.demo && <a href={project.links.demo} className="project-link">Demo</a>}
                    {project.links.paper && <a href={project.links.paper} className="project-link">Paper</a>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage


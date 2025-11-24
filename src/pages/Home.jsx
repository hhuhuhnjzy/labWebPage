import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/Home.css'

const Home = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      description1: 'AgentFabric Research Group is building the foundations for a future where AI agents safely and reliably automate complex work. We bring together researchers in data systems, applied AI, operating systems, HCI, algorithms, and business to invent the infrastructure, algorithms, and design principles needed to deploy agents in the real world.',
      description2: 'Our work spans the full stack—from systems and training frameworks to human-agent interaction, process automation, and digital twins. We build open-source tools, collaborate closely with industry partners, and prototype agentic technologies that reimagine how work gets done. AgentFabric is a home for students, researchers, and partners who want to shape the next generation of AI-native systems.',
      contact: 'For more information about the lab, please contact',
      recruitingLabel: 'Now recruiting:',
      recruitingText: 'Undergraduate and MS students interested in working with AgentFabric on agentic systems',
      applyButton: 'Apply here'
    },
    zh: {
      description1: 'AgentFabric课题组致力于构建未来AI Agent安全可靠地自动化复杂工作的基础设施。我们汇聚数据系统、应用AI、操作系统、人机交互、算法和工程等领域的研究人员，共同发明在真实世界中部署Agent所需的基础设施、算法和设计原则。',
      description2: '我们的工作涵盖全栈——从系统和训练框架到人机交互、流程自动化和数字孪生。我们构建开源工具，与产业合作伙伴紧密协作，原型化重新定义工作方式的Agent技术。AgentFabric是学生、研究人员和合作伙伴的家园，我们共同塑造下一代AI原生系统。',
      contact: '了解更多信息，请联系',
      recruitingLabel: '正在招募：',
      recruitingText: '对Agent系统研究感兴趣的本科生和硕士研究生',
      applyButton: '立即申请'
    }
  }

  const t = content[language]

  const highlights = [
    {
      date: 'January 2026',
      type: 'Publication',
      title: 'Please Don\'t Kill My Vibe: Empowering Agents with Data Flow Control',
      description: {
        en: 'Latest paper published at top-tier conference',
        zh: '最新论文发表于顶级会议'
      }
    },
    {
      date: 'December 2025',
      type: 'Publication',
      title: 'LLM Generated Persona is a Promise with a Catch',
      description: {
        en: 'Research on LLM-generated personas',
        zh: '关于LLM生成人格的研究'
      }
    },
    {
      date: 'December 2025',
      type: 'Team',
      title: {
        en: 'Welcome New Member',
        zh: '欢迎新成员加入'
      },
      description: {
        en: 'Dr. Li joins AgentFabric, focusing on distributed agent systems',
        zh: '李博士加入AgentFabric，研究方向为分布式Agent系统'
      }
    },
    {
      date: 'November 2025',
      type: 'Publication',
      title: 'Agents for Web Testing: A Case Study in the Wild',
      description: {
        en: 'Real-world case study of web testing agents',
        zh: 'Web测试Agent的实际案例研究'
      }
    },
    {
      date: 'November 2025',
      type: 'Event',
      title: {
        en: 'AI Agent Workshop Successfully Held',
        zh: 'AI Agent工作坊成功举办'
      },
      description: {
        en: 'Over 100 researchers participated in our annual workshop',
        zh: '超过100名研究者参与了我们的年度工作坊'
      }
    },
    {
      date: 'October 2025',
      type: 'Publication',
      title: 'Cortex: Workflow-Aware Resource Pooling',
      description: {
        en: 'Workflow-aware resource scheduling system for agent serving',
        zh: '面向Agent服务的工作流感知资源调度系统'
      }
    },
    {
      date: 'October 2025',
      type: 'Team',
      title: {
        en: 'New PhD Student Joins',
        zh: '新博士生加入'
      },
      description: {
        en: 'Wang joins the group, focusing on edge agent deployment',
        zh: '王同学加入课题组，专注于边缘Agent部署研究'
      }
    },
    {
      date: 'September 2025',
      type: 'Award',
      title: {
        en: 'Research Grant Awarded',
        zh: '获得研究资助'
      },
      description: {
        en: 'AgentFabric received new research funding',
        zh: 'AgentFabric获得新的研究资助支持'
      }
    },
    {
      date: 'September 2025',
      type: 'Publication',
      title: 'Set It and Forget It: Zero-Mod ML Magic',
      description: {
        en: 'Machine learning approach for Linux system auto-tuning',
        zh: 'Linux系统自动调优的机器学习方法'
      }
    }
  ]

  const partners = [
    { name: 'Anthropic', logo: '/partners/anthropic.png' },
    { name: 'AWS', logo: '/partners/aws.png' },
    { name: 'Google', logo: '/partners/google.png' },
    { name: 'MiniMax', logo: '/partners/minmax.png' },
    { name: 'OpenAI', logo: '/partners/openai.png' },
    { name: 'Qwen', logo: '/partners/qwen.png' }
  ]

  return (
    <div className="home-page">
      {/* Hero Section with Logo and Description */}
      <section className="home-hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-logo-section">
              <img src="/logo.png" alt="AgentFabric Logo" className="hero-logo" />
            </div>
            <div className="hero-text-section">
              <p className="hero-description">
                {t.description1}
              </p>
              <p className="hero-description">
                {t.description2}
              </p>
              <p className="hero-contact">
                {t.contact}: <a href="mailto:contact@agentfabric.edu">contact@agentfabric.edu</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiting Banner */}
      <section className="recruiting-banner">
        <div className="container">
          <div className="recruiting-content">
            <span className="recruiting-label">{t.recruitingLabel}</span>
            <span className="recruiting-text">{t.recruitingText}</span>
            <a href="/positions" className="recruiting-button">{t.applyButton}</a>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <article key={index} className="highlight-card">
                <div className="highlight-header">
                  <span className={`highlight-type type-${item.type.toLowerCase()}`}>
                    {item.type}
                  </span>
                  <span className="highlight-date">{item.date}</span>
                </div>
                <h3 className="highlight-title">
                  {typeof item.title === 'object' ? item.title[language] : item.title}
                </h3>
                <p className="highlight-description">
                  {typeof item.description === 'object' ? item.description[language] : item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="home-partners">
        <div className="container">
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo">
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} className="partner-img" />
                ) : (
                  <div className="partner-placeholder">{partner.name}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


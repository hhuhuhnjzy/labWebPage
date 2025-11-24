import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/Pages.css'

const PositionsPage = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Positions',
      subtitle: 'Join us',
      intro1: 'AgentFabric Research Group is recruiting researchers interested in agent systems, distributed frameworks, and machine learning. We offer world-class research environment, abundant computing resources, and opportunities to collaborate with top international scholars and industry partners.',
      intro2: 'If you are interested in any of the following areas, please apply:',
      requirements: 'Requirements:',
      deadline: 'Deadline:',
      applyButton: 'Apply Now',
      howToApplyTitle: 'How to Apply',
      howToApplyText: 'Please send the following materials to',
      materials: [
        'Curriculum Vitae (CV)',
        'Research statement (1-2 pages)',
        'Transcripts',
        '2-3 recommendation letters'
      ],
      followUpText: 'We will respond within 2 weeks of receiving your application. If you have any questions, please feel free to contact us.'
    },
    zh: {
      title: '招聘信息',
      subtitle: '加入我们',
      intro1: 'AgentFabric研究组正在招募对Agent系统、分布式框架和机器学习感兴趣的研究人员。我们提供一流的研究环境、充足的计算资源、以及与国际顶尖学者和工业界合作的机会。',
      intro2: '如果您对以下任何方向感兴趣，欢迎申请：',
      requirements: '要求：',
      deadline: '申请截止：',
      applyButton: '立即申请',
      howToApplyTitle: '如何申请',
      howToApplyText: '请将以下材料发送至',
      materials: [
        '个人简历（CV）',
        '研究兴趣说明（1-2页）',
        '成绩单',
        '2-3封推荐信'
      ],
      followUpText: '我们会在收到申请后2周内回复。如有任何问题，请随时联系我们。'
    }
  }

  const researchAreas = [
    { en: 'Efficient LLM Agents', zh: '高效LLM Agent' },
    { en: 'Distributed Agent Systems', zh: '分布式Agent系统' },
    { en: 'Edge Agent Deployment', zh: '边缘Agent部署' },
    { en: 'Domain-specific Agents (Healthcare, Education, etc.)', zh: '领域特定Agent（医疗、教育等）' }
  ]

  const openPositions = [
    {
      title: { en: 'PhD Student', zh: '博士研究生' },
      type: 'PhD Position',
      description: {
        en: 'We are recruiting PhD students interested in agent systems, distributed systems, and machine learning. You will have the opportunity to participate in cutting-edge research projects, publish high-quality academic papers, and collaborate closely with industry partners.',
        zh: '我们正在招募对Agent系统、分布式系统、机器学习感兴趣的博士研究生。您将有机会参与前沿研究项目，发表高水平学术论文，并与工业界合作伙伴紧密合作。'
      },
      requirements: {
        en: [
          'Master\'s degree in Computer Science or related field',
          'Strong programming skills (Python, C++, etc.)',
          'Strong interest in agent systems or distributed systems',
          'Good English reading and writing skills',
          'Experience in machine learning or systems research preferred'
        ],
        zh: [
          '计算机科学或相关专业硕士学位',
          '扎实的编程能力（Python, C++等）',
          '对Agent系统或分布式系统有浓厚兴趣',
          '良好的英文读写能力',
          '有机器学习或系统研究经验者优先'
        ]
      },
      deadline: 'Rolling basis'
    },
    {
      title: { en: 'Master Student', zh: '硕士研究生' },
      type: 'Master Position',
      description: {
        en: 'We welcome Master students interested in AI agents, distributed systems, and edge computing to join our team. You will participate in research projects under faculty guidance and receive systematic research training.',
        zh: '欢迎对AI Agent、分布式系统、边缘计算感兴趣的硕士研究生加入我们的团队。您将在导师指导下参与实际研究项目，获得系统的科研训练。'
      },
      requirements: {
        en: [
          'Bachelor\'s degree in Computer Science or related field',
          'Good programming foundation',
          'Passion for research work',
          'Team collaboration spirit'
        ],
        zh: [
          '计算机科学或相关专业本科学位',
          '良好的编程基础',
          '对研究工作有热情',
          '具备团队合作精神'
        ]
      },
      deadline: 'Rolling basis'
    },
    {
      title: { en: 'Undergraduate Research Assistant', zh: '本科生科研助理' },
      type: 'Undergraduate Research Assistant',
      description: {
        en: 'We offer research opportunities for outstanding undergraduates to participate in agent systems research. This is an excellent opportunity to learn about cutting-edge research and prepare for graduate studies.',
        zh: '我们为优秀本科生提供科研机会，参与Agent系统相关的研究工作。这是一个很好的机会来了解前沿研究，为未来的研究生学习做准备。'
      },
      requirements: {
        en: [
          'Undergraduate student in Computer Science or related field',
          'Basic programming skills',
          'Ability to commit at least 10 hours per week',
          'Interest in AI and systems research'
        ],
        zh: [
          '计算机科学或相关专业本科在读',
          '基本的编程能力',
          '每周能投入至少10小时',
          '对AI和系统研究有兴趣'
        ]
      },
      deadline: 'Rolling basis'
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
        
        <div className="positions-intro">
          <p>{t.intro1}</p>
          <p>{t.intro2}</p>
          <ul className="research-areas">
            {researchAreas.map((area, index) => (
              <li key={index}>{area[language]}</li>
            ))}
          </ul>
        </div>

        <div className="positions-list">
          {openPositions.map((position, index) => (
            <article key={index} className="position-card">
              <div className="position-header">
                <h2 className="position-title">
                  {typeof position.title === 'object' ? position.title[language] : position.title}
                </h2>
                <span className="position-type">{position.type}</span>
              </div>
              <p className="position-description">
                {typeof position.description === 'object' ? position.description[language] : position.description}
              </p>
              <div className="position-requirements">
                <h3>{t.requirements}</h3>
                <ul>
                  {(typeof position.requirements === 'object' ? position.requirements[language] : position.requirements).map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="position-footer">
                <span className="position-deadline">{t.deadline} {position.deadline}</span>
                <a href="mailto:contact@agentfabric.edu" className="apply-button">{t.applyButton}</a>
              </div>
            </article>
          ))}
        </div>

        <div className="contact-section">
          <h2>{t.howToApplyTitle}</h2>
          <p>
            {t.howToApplyText} <a href="mailto:contact@agentfabric.edu">contact@agentfabric.edu</a>:
          </p>
          <ul>
            {t.materials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
          <p>{t.followUpText}</p>
        </div>
      </div>
    </section>
  )
}

export default PositionsPage


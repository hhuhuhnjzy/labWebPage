import React, { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { getNews } from '../lib/sanity'
import '../styles/Pages.css'

const NewsPage = () => {
  const { language } = useLanguage()
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  
  const content = {
    en: {
      title: 'News & Events',
      subtitle: 'Latest updates and activities',
      loading: 'Loading...'
    },
    zh: {
      title: '新闻动态',
      subtitle: '最新动态与活动',
      loading: '加载中...'
    }
  }

  useEffect(() => {
    getNews()
      .then(data => {
        setNews(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching news:', err)
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

  const oldNewsItems = [
    {
      date: 'Fall 2025',
      title: {
        en: 'AI Entrepreneurship Series',
        zh: 'AI创业系列活动'
      },
      description: {
        en: 'AgentFabric is organizing a series of events bringing together students, faculty, and industry partners to discuss transitioning research insights into products and value.',
        zh: 'AgentFabric正在组织一系列活动，汇集学生、教师和行业合作伙伴，讨论如何将研究成果转化为产品和价值。'
      }
    },
    {
      date: 'Fall 2025',
      title: {
        en: 'AgentFabric Research Seminar',
        zh: 'AgentFabric研究研讨会'
      },
      description: {
        en: 'Our Tuesday 12PM research seminar invites speakers to share cutting-edge agent systems research or discuss processes in their organizations and automation attempts.',
        zh: 'AgentFabric的周二中午12点研究研讨会邀请演讲者分享前沿Agent系统研究，或讨论组织流程的自动化尝试。'
      }
    },
    {
      date: 'November 2025',
      title: {
        en: 'Building Foundation Models at Scale',
        zh: '大规模构建基础模型'
      },
      description: {
        en: 'Invited talk on system experiences and challenges in building massive foundation models for AI applications.',
        zh: '关于构建大规模AI基础模型的系统经验与挑战的特邀报告。'
      }
    },
    {
      date: 'October 2025',
      title: {
        en: 'AI Agents for Work Workshop',
        zh: 'AI Agents工作坊'
      },
      description: {
        en: 'Second iteration of our AI Agents for Work workshop. Day one is a public event with cutting-edge research and engaging panels.',
        zh: '第二届AI Agents for Work工作坊。第一天是公开活动，包含前沿研究和专题讨论。'
      }
    },
    {
      date: 'September 2025',
      title: {
        en: 'New Members Join',
        zh: '新成员加入'
      },
      description: {
        en: 'We are excited to welcome new PhD and Master students to AgentFabric. They will work on distributed agent systems and edge computing.',
        zh: '我们很高兴欢迎新的博士生和硕士生加入AgentFabric，他们将研究分布式Agent系统和边缘计算。'
      }
    },
    {
      date: 'August 2025',
      title: {
        en: 'Research Grant Awarded',
        zh: '研究资助获批'
      },
      description: {
        en: 'AgentFabric received new research funding for large-scale distributed LLM agent systems, supporting our work for the next three years.',
        zh: 'AgentFabric获得新的研究资助，用于大规模分布式LLM Agent系统研究，将支持未来三年的工作。'
      }
    }
  ]

  const displayNews = news.length > 0 ? news : oldNewsItems

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{t.title}</h1>
          <p className="page-subtitle">{t.subtitle}</p>
        </div>
        
        <div className="news-grid-page">
          {displayNews.map((item, index) => (
            <article key={index} className="news-card-page">
              <div className="news-date-page">{item.date}</div>
              <h2 className="news-title-page">{typeof item.title === 'object' ? item.title[language] : item.title}</h2>
              <p className="news-description-page">{typeof item.description === 'object' ? item.description[language] : item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsPage


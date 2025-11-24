import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SEOHead = ({ 
  title = 'AgentFabric Lab - AI Agent Infrastructure Research',
  description = 'AgentFabric is a research group focused on infrastructure for AI agents, including distributed frameworks, efficient LLM agents, edge computing, and domain-specific agents.',
  keywords = 'AgentFabric, AI Agent, LLM, Distributed Systems, Edge Computing, Machine Learning, Research Lab',
  path = ''
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update language attribute
    document.documentElement.lang = language;
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const baseUrl = window.location.origin;
      canonical.setAttribute('href', `${baseUrl}${path}`);
    }
  }, [title, description, keywords, language, path]);

  return null;
};

export default SEOHead;


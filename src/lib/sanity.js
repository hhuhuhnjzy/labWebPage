import {createClient} from '@sanity/client'

// 创建 Sanity 客户端
export const client = createClient({
  projectId: 'fy1t5d1m',
  dataset: 'production',
  useCdn: true, // 使用CDN加速
  apiVersion: '2024-01-01',
  perspective: 'published', // 只获取已发布的内容
})

// 获取团队成员
export async function getPeople() {
  return await client.fetch(`
    *[_type == "people"] | order(order asc) {
      name,
      role,
      category,
      "photoUrl": photo.asset->url,
      bioEn,
      bioZh,
      email,
      website
    }
  `)
}

// 获取研究项目（按类别）
export async function getResearch(category = null) {
  const filter = category 
    ? `*[_type == "research" && category == "${category}"]`
    : `*[_type == "research"]`
  
  return await client.fetch(`
    ${filter} | order(order asc) {
      title,
      titleZh,
      category,
      participants,
      "thumbnailUrl": thumbnail.asset->url,
      tags,
      descriptionEn,
      descriptionZh,
      projectUrl,
      order
    }
  `)
}

// 获取算法类研究
export async function getAlgorithmResearch() {
  return getResearch('algorithm')
}

// 获取框架类研究
export async function getFrameworkResearch() {
  return getResearch('framework')
}

// 获取应用类研究
export async function getApplicationResearch() {
  return getResearch('application')
}

// 获取新闻
export async function getNews() {
  return await client.fetch(`
    *[_type == "news"] | order(publishedAt desc) {
      titleEn,
      titleZh,
      descriptionEn,
      descriptionZh,
      date
    }
  `)
}

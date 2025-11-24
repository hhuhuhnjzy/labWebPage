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

// 获取项目
export async function getProjects() {
  return await client.fetch(`
    *[_type == "projects"] | order(order asc) {
      title,
      descriptionEn,
      descriptionZh,
      status,
      collaborators,
      githubUrl,
      demoUrl,
      paperUrl
    }
  `)
}

// 获取论文
export async function getPublications() {
  return await client.fetch(`
    *[_type == "publications"] | order(year desc, date desc) {
      title,
      authors,
      venue,
      date,
      year,
      pdfUrl,
      codeUrl,
      slidesUrl,
      demoUrl,
      blogUrl
    }
  `)
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


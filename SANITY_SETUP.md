# Sanity.io 设置指南

## ✅ 已完成步骤

1. ✅ 安装 Sanity CLI
2. ✅ 安装前端依赖
3. ✅ 创建 Studio 项目结构
4. ✅ 配置数据模型（Schemas）

---

## 🚀 下一步操作

### 第一步：创建 Sanity 项目

在浏览器中访问：https://www.sanity.io/manage

1. 使用 GitHub 账号登录
2. 点击 "Create new project"
3. 项目名称：`agentfabric`
4. 选择免费计划
5. 创建完成后，复制 **Project ID**

---

### 第二步：配置 Project ID

打开文件：`studio/sanity.config.js`

将 `YOUR_PROJECT_ID` 替换为您刚才复制的 Project ID：

```javascript
projectId: 'abc123xyz',  // 替换这里
```

---

### 第三步：安装 Studio 依赖

```bash
cd studio
npm install
```

---

### 第四步：启动 Sanity Studio（本地）

```bash
npm run dev
```

访问：http://localhost:3333

您会看到一个漂亮的管理界面！🎉

---

### 第五步：部署 Sanity Studio（在线）

```bash
npm run deploy
```

选择一个名称（例如：`agentfabric`）

完成后会生成一个公开 URL：
```
https://agentfabric.sanity.studio
```

**团队成员可以直接访问这个 URL 来编辑内容！**

---

## 🔗 连接前端网站

### 创建 Sanity 客户端

创建文件：`src/lib/sanity.js`

```javascript
import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'YOUR_PROJECT_ID',  // 从 studio/sanity.config.js 复制
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
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
```

---

### 更新页面组件

修改 `src/pages/PeoplePage.jsx`：

```javascript
import { useEffect, useState } from 'react'
import { getPeople } from '../lib/sanity'

const PeoplePage = () => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPeople().then(data => {
      setPeople(data)
      setLoading(false)
    })
  }, [])

  if (loading) return <div>Loading...</div>

  const faculty = people.filter(p => p.category === 'faculty')
  const students = people.filter(p => p.category === 'students')

  // 渲染界面...
}
```

类似地更新其他页面。

---

## 👥 添加团队成员权限

在 Sanity 项目设置中：

1. 访问 https://www.sanity.io/manage
2. 选择您的项目
3. 点击 "Members"
4. 点击 "Invite members"
5. 输入邮箱邀请团队成员

权限级别：
- **Administrator** - 完全控制
- **Editor** - 可以编辑内容
- **Viewer** - 只能查看

---

## 🎨 使用 Sanity Studio

### 添加团队成员

1. 打开 Studio URL
2. 登录
3. 点击左侧 "Team Members"
4. 点击 "+" 按钮
5. 填写表单：
   - Name: 张三
   - Role: PhD Student
   - Category: Students
   - Bio (English): Research on AI systems
   - Bio (Chinese): 研究AI系统
   - Email: zhangsan@university.edu
6. 上传照片（可选）
7. 点击 "Publish"

✨ **网站会自动更新！**

### 添加项目

类似操作，点击 "Research Projects" → "+" → 填写 → Publish

### 添加论文

点击 "Publications" → "+" → 填写 → Publish

### 添加新闻

点击 "News & Events" → "+" → 填写 → Publish

---

## 🔄 部署到 Vercel

### 配置环境变量

在 Vercel 项目设置中添加：

```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

### 触发重新部署

每次在 Sanity 中更新内容后，需要触发 Vercel 重新构建。

**方法一：手动触发**
在 Vercel 控制台点击 "Redeploy"

**方法二：自动触发（推荐）**

1. 在 Vercel 项目设置中找到 "Deploy Hooks"
2. 创建一个 Hook，复制 URL
3. 在 Sanity 项目设置中：
   - API → Webhooks → Add webhook
   - URL: 粘贴 Vercel Hook URL
   - Dataset: production
   - Trigger on: Create, Update, Delete
4. 保存

现在，每次在 Sanity 更新内容，Vercel 会自动重新部署！🎉

---

## 📊 总结

完成上述步骤后：

✅ 可视化管理界面已就绪
✅ 团队成员可通过浏览器编辑内容
✅ 内容自动同步到网站
✅ 无需懂代码
✅ 支持中英文
✅ 支持图片上传

**预计完成时间：30-60分钟**

---

## 🆘 遇到问题？

- [Sanity 文档](https://www.sanity.io/docs)
- [Sanity Slack 社区](https://slack.sanity.io/)

有问题随时问我！


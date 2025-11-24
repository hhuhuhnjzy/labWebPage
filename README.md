# AgentFabric Research Group Website

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com)

一个现代化、工程化的学术实验室网站，集成了Sanity CMS内容管理系统和SEO优化。

## 🌟 特性

- ✅ **现代化技术栈**: React 18 + Vite 5
- ✅ **多页面导航**: React Router实现真正的多页面体验
- ✅ **双语支持**: 英文/中文无缝切换
- ✅ **内容管理系统**: Sanity.io CMS，无需编写代码即可更新内容
- ✅ **SEO优化**: 完整的搜索引擎优化，支持Google、百度等搜索引擎
- ✅ **响应式设计**: 适配桌面、平板、移动设备
- ✅ **Anthropic风格**: 简洁、专业的学术风格

## 📁 项目结构

```
website/
├── src/                      # 前端源代码
│   ├── components/          # React组件
│   │   ├── Header.jsx       # 导航栏
│   │   ├── Footer.jsx       # 页脚
│   │   ├── SEOHead.jsx      # SEO元数据管理
│   │   └── LanguageSwitcher.jsx  # 语言切换
│   ├── pages/               # 页面组件
│   │   ├── Home.jsx         # 首页
│   │   ├── PeoplePage.jsx   # 团队成员
│   │   ├── ProjectsPage.jsx # 研究项目
│   │   ├── PublicationsPage.jsx  # 论文发表
│   │   ├── NewsPage.jsx     # 新闻动态
│   │   └── PositionsPage.jsx # 招聘信息
│   ├── context/             # React Context
│   │   └── LanguageContext.jsx  # 语言状态管理
│   ├── lib/                 # 工具库
│   │   └── sanity.js        # Sanity客户端配置
│   └── styles/              # CSS样式
├── studio/                  # Sanity Studio (CMS管理界面)
│   ├── schemas/            # 数据模型定义
│   │   ├── people.js       # 团队成员模型
│   │   ├── projects.js     # 项目模型
│   │   ├── publications.js # 论文模型
│   │   └── news.js         # 新闻模型
│   └── sanity.config.js    # Studio配置
├── public/                  # 静态资源
│   ├── logo.png            # 实验室Logo
│   ├── partners/           # 合作伙伴Logo
│   ├── robots.txt          # 搜索引擎爬虫规则
│   └── sitemap.xml         # 网站地图
├── index.html              # HTML模板（含SEO meta标签）
├── vite.config.js          # Vite配置
├── vercel.json             # Vercel部署配置
├── package.json            # 依赖管理
└── SEO_GUIDE.md            # SEO优化详细指南

```

## 🚀 快速开始

### 1. 安装依赖

```bash
# 安装前端依赖
npm install

# 安装Sanity Studio依赖
cd studio
npm install
cd ..
```

### 2. 本地开发

```bash
# 启动前端开发服务器
npm run dev

# 在另一个终端启动Sanity Studio
cd studio
npm run dev
```

- 前端网站: http://localhost:3000
- Sanity Studio: http://localhost:3333

### 3. 更新内容

1. 访问 Sanity Studio: https://agentfabric.sanity.studio/
2. 登录您的Sanity账号
3. 选择要编辑的内容类型（People/Projects/Publications/News）
4. 点击 "Create" 添加新内容或编辑现有内容
5. 完成后点击 "Publish"
6. 刷新网站，新内容立即显示！

## 🔍 SEO优化

### 已完成的SEO配置

✅ **Meta标签**: title, description, keywords  
✅ **Open Graph**: 社交媒体分享优化  
✅ **Twitter Card**: Twitter分享卡片  
✅ **robots.txt**: 搜索引擎爬虫规则  
✅ **sitemap.xml**: 网站地图  
✅ **多语言标签**: hreflang支持  
✅ **动态SEO**: 每个页面独立的SEO内容

### 让搜索引擎找到您的网站

✅ **URL已配置完成**：https://lab-web-page-one.vercel.app/

**详细提交步骤请查看**：[`SEO_提交指南.md`](./SEO_提交指南.md)

#### 快速步骤：

1. **提交到Google**（推荐）
   - 访问 [Google Search Console](https://search.google.com/search-console/)
   - 添加网站：`https://lab-web-page-one.vercel.app`
   - 使用HTML标签验证（将验证标签添加到`index.html`）
   - 提交sitemap：`sitemap.xml`

2. **提交到百度**（可选，面向中国用户）
   - 访问 [百度站长平台](https://ziyuan.baidu.com/)
   - 添加并验证网站
   - 提交sitemap：`https://lab-web-page-one.vercel.app/sitemap.xml`

3. **测试SEO配置**
   - 访问 https://lab-web-page-one.vercel.app/robots.txt
   - 访问 https://lab-web-page-one.vercel.app/sitemap.xml

4. **预期时间**
   - Google: 1-3天开始抓取，1-2周完全收录
   - 百度: 3-7天开始抓取，2-4周完全收录

5. **加速收录**（重要！）
   - 在学校官网、教师主页添加实验室链接
   - 在arXiv论文、GitHub项目中引用网站
   - 在社交媒体分享

## 🌐 部署

### 前端部署到Vercel

```bash
# 方式1: 通过Vercel CLI
npm install -g vercel
vercel

# 方式2: 连接GitHub仓库
# 在Vercel dashboard中导入GitHub仓库
```

### Sanity Studio部署

```bash
cd studio
npm run deploy
```

Studio将部署到: https://agentfabric.sanity.studio/

## 🔧 环境变量

在Vercel中配置以下环境变量：

```
VITE_SANITY_PROJECT_ID=fy1t5d1m
VITE_SANITY_DATASET=production
```

## 📝 内容类型

### People（团队成员）
- 姓名、职位、个人简介
- 头像照片
- 个人网站、邮箱
- 研究兴趣

### Projects（研究项目）
- 项目标题、描述
- 状态（Active/Completed）
- 合作者
- 链接（GitHub/Demo/Paper）

### Publications（论文发表）
- 论文标题、作者
- 发表日期、会议/期刊
- 链接（PDF/Code/Slides/Demo/Blog）

### News（新闻动态）
- 标题、描述
- 发布日期
- 中英文双语内容

## 🎨 自定义样式

主要颜色变量定义在 `src/styles/index.css` 中：

```css
:root {
  --primary-color: #191918;     /* 深色背景 */
  --accent-color: #d97536;      /* 橙色强调 */
  --text-color: #1a1a1a;        /* 文字颜色 */
  --bg-color: #f5f5f0;          /* 浅色背景 */
}
```

## 👥 团队协作

### 邀请团队成员编辑内容

1. 访问 Sanity项目管理页面
2. 进入 "Team" 选项卡
3. 点击 "Add member"
4. 输入成员邮箱，选择权限（Editor/Admin）
5. 发送邀请

## 🆘 常见问题

### Q: 如何更改实验室Logo？
A: 替换 `public/logo.png` 文件，推荐尺寸 500×500px

### Q: 如何添加新的合作伙伴Logo？
A: 
1. 将Logo图片放入 `public/partners/` 目录
2. 在Sanity Studio中创建Partner内容（如果已配置）
3. 或在 `src/pages/Home.jsx` 的 `partners` 数组中添加

### Q: 内容更新后网站没有显示？
A: 
1. 确保在Studio中点击了 "Publish" 而不是 "Save"
2. 等待几秒钟，刷新浏览器
3. 清除浏览器缓存（Ctrl+Shift+R / Cmd+Shift+R）

### Q: 如何修改网站结构或添加新页面？
A: 
1. 在 `src/pages/` 中创建新的页面组件
2. 在 `src/App.jsx` 中添加路由
3. 在 `src/components/Header.jsx` 中添加导航链接
4. 更新 `public/sitemap.xml` 包含新页面

### Q: CORS错误怎么办？
A: 
1. 访问 https://www.sanity.io/manage/personal/project/fy1t5d1m/api
2. 在 "CORS Origins" 中添加您的域名
3. 勾选 "Allow credentials"

## 📚 技术文档

- [SEO优化指南](./SEO_GUIDE.md) - 详细的搜索引擎优化步骤
- [React Router文档](https://reactrouter.com/)
- [Sanity文档](https://www.sanity.io/docs)
- [Vite文档](https://vitejs.dev/)

## 📄 许可证

MIT License

## 📞 支持

如有问题，请联系: contact@agentfabric.edu

---

**祝您的AgentFabric Lab网站运营顺利！** 🎉


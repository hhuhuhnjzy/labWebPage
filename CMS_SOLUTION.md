# 内容管理系统方案

## 🎯 推荐方案对比

### ⭐ 方案一：Sanity.io（强烈推荐）

**优点：**
- ✅ 完全免费（小团队）
- ✅ 友好的可视化编辑界面
- ✅ 实时预览
- ✅ 支持中英文
- ✅ 无需编写后端代码
- ✅ 5分钟即可设置完成

**适合：** 所有场景，特别是不懂技术的内容编辑者

**设置步骤见下方 "Sanity 设置指南"**

---

### 方案二：简单 JSON 文件 + GitHub 编辑

**优点：**
- ✅ 最简单
- ✅ 完全免费
- ✅ 无需额外服务

**缺点：**
- ❌ 需要基本的 Git 操作
- ❌ 没有预览功能
- ❌ 编辑界面不够友好

**适合：** 技术人员更新内容

---

### 方案三：自建管理后台

**优点：**
- ✅ 完全自定义
- ✅ 不依赖第三方

**缺点：**
- ❌ 需要开发时间
- ❌ 需要后端和数据库
- ❌ 维护成本高

**适合：** 有开发资源且需要深度定制

---

## 🚀 Sanity.io 设置指南（推荐）

### 第一步：安装 Sanity

```bash
cd website
npm install @sanity/client @sanity/image-url
npm install -g @sanity/cli
```

### 第二步：创建 Sanity 项目

```bash
sanity init
```

选择：
- Create new project
- Use the default dataset configuration
- Output path: `./studio`
- Select project template: `Clean project`

### 第三步：定义内容模式

在 `studio/schemas` 目录创建内容类型：

**people.js** - 团队成员
**projects.js** - 研究项目  
**publications.js** - 论文
**news.js** - 新闻动态

### 第四步：启动 Sanity Studio

```bash
cd studio
sanity start
```

访问 http://localhost:3333 即可看到管理界面！

### 第五步：部署 Sanity Studio

```bash
sanity deploy
```

会生成一个公开的 URL，例如：`your-project.sanity.studio`

团队成员可以访问这个 URL 来编辑内容，无需安装任何软件！

---

## 📝 方案对比表

| 功能 | Sanity.io | JSON文件 | 自建后台 |
|------|-----------|----------|----------|
| 可视化编辑 | ✅ 优秀 | ❌ | ✅ 需开发 |
| 学习成本 | ⭐ 极低 | ⭐⭐ 中等 | ⭐⭐⭐ 高 |
| 实时预览 | ✅ | ❌ | ✅ 需开发 |
| 图片上传 | ✅ | ❌ | ✅ 需开发 |
| 多人协作 | ✅ | ⭐ 需Git | ✅ 需开发 |
| 成本 | 免费 | 免费 | 开发成本 |
| 维护 | 无需维护 | 简单 | 需维护 |

---

## 💡 最佳实践建议

1. **小团队（<5人）：** 使用 Sanity.io
2. **只有技术人员：** 可以用 JSON 文件
3. **大团队或复杂需求：** 自建管理后台

---

## 📞 下一步

如果您选择：
- **Sanity.io** → 告诉我，我帮您完整配置
- **JSON文件** → 告诉我，我创建简化的编辑流程
- **自建后台** → 告诉我，我帮您搭建完整的管理系统




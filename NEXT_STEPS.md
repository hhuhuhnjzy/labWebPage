# 下一步操作指南

## 🎉 当前状态

✅ **People 页面** - 已成功连接到 Sanity 并显示数据！  
✅ **Projects 页面** - 已连接到 Sanity（需要添加数据）  
✅ **Publications 页面** - 已连接到 Sanity（需要添加数据）  
✅ **News 页面** - 已连接到 Sanity（需要添加数据）  
✅ **CORS 已配置** - localhost:3002  

---

## 📝 数据管理策略

### 应该放在 Sanity 中（可视化管理）

| 内容 | 理由 | 操作 |
|------|------|------|
| **Team Members** | ✅ 已添加 | 继续在 Studio 中管理 |
| **Research Projects** | 项目会更新 | 在 Studio 中添加 |
| **Publications** | 论文持续发表 | 在 Studio 中添加 |
| **News & Events** | 需要频繁更新 | 在 Studio 中添加 |

### 保留在代码中（静态内容）

| 内容 | 位置 |
|------|------|
| 实验室简介 | `src/pages/Home.jsx` |
| 研究方向 | `src/pages/Home.jsx` |
| 合作伙伴 Logo | `public/partners/*.png` |

---

## 🚀 添加其他数据

### 在 Sanity Studio 添加项目

1. 访问 http://localhost:3333
2. 点击 **"Research Projects"**
3. 点击 **"+"** 添加新项目
4. 填写：
   - Title: 项目名称
   - Description (English): 英文描述
   - Description (Chinese): 中文描述
   - Status: Ongoing / Planning / Completed
   - Team Members: 添加团队成员名字
   - Links: GitHub / Demo / Paper URL（可选）
5. 点击 **"Publish"**
6. 刷新网站 Projects 页面查看！

### 添加论文

1. 点击 **"Publications"**
2. 点击 **"+"**
3. 填写：
   - Title: 论文标题
   - Authors: 作者名单
   - Venue: 会议或期刊名
   - Date: 如 "December 2025"
   - Year: 2025
   - Links: PDF / Code / Slides 等
4. 点击 **"Publish"**

### 添加新闻

1. 点击 **"News & Events"**
2. 点击 **"+"**
3. 填写：
   - Title (English): 英文标题
   - Title (Chinese): 中文标题
   - Description (English): 英文描述
   - Description (Chinese): 中文描述
   - Date: 如 "Fall 2025"
   - Published Date: 选择日期时间
4. 点击 **"Publish"**

---

## 🌐 部署到 Vercel

### 步骤 1：推送代码到 Git

```bash
git add .
git commit -m "Connect all pages to Sanity CMS"
git push
```

### 步骤 2：在 Vercel 配置环境变量

1. 登录 Vercel
2. 选择您的项目
3. Settings → Environment Variables
4. 添加：
   - **Name**: `VITE_SANITY_PROJECT_ID`
   - **Value**: `fy1t5d1m`
5. 添加：
   - **Name**: `VITE_SANITY_DATASET`
   - **Value**: `production`
6. 保存

### 步骤 3：添加 Vercel 域名到 CORS

1. 访问：https://www.sanity.io/manage/personal/project/fy1t5d1m/api
2. CORS Origins → Add CORS origin
3. 添加您的 Vercel URL：
   - `https://your-site.vercel.app`
   - ✅ Allow credentials
4. 保存

### 步骤 4：重新部署

在 Vercel 控制台点击 **"Redeploy"**

✅ **完成！网站已部署，数据从 Sanity 读取！**

---

## 🔄 设置自动部署（Webhook）

### 目标：Sanity 内容更新 → 自动触发 Vercel 部署

#### 在 Vercel 创建 Deploy Hook

1. 项目设置 → Git → Deploy Hooks
2. 创建 Hook：
   - Name: `Sanity Content Update`
   - Branch: `main`
3. 复制生成的 URL

#### 在 Sanity 配置 Webhook

1. 访问：https://www.sanity.io/manage/personal/project/fy1t5d1m/api
2. Webhooks → Add webhook
3. 配置：
   - Name: `Vercel Deploy`
   - URL: 粘贴上面复制的 Vercel Hook URL
   - Dataset: `production`
   - HTTP method: `POST`
   - Trigger on: ✅ Create, ✅ Update, ✅ Delete
4. Save

✅ **现在每次在 Sanity 更新内容，Vercel 会自动重新部署！**

---

## 📊 完整工作流程

```
团队成员在 Sanity Studio 添加/编辑内容
         ↓
    点击 Publish
         ↓
  内容保存到 Sanity 云端
         ↓
  Webhook 触发 Vercel 重新部署
         ↓
   网站自动更新（1-2分钟）
         ↓
   访客看到最新内容！
```

---

## 🎯 部署 Sanity Studio（推荐）

让团队成员可以在线访问管理界面：

```bash
cd studio
npm run deploy
```

选择名称（如 `agentfabric`），生成：
```
https://agentfabric.sanity.studio
```

团队成员可以直接访问这个 URL 编辑内容！

---

## 👥 邀请团队成员

1. 访问：https://www.sanity.io/manage/personal/project/fy1t5d1m/members
2. 点击 **"Invite members"**
3. 输入邮箱
4. 选择权限：
   - **Administrator**: 完全控制
   - **Editor**: 编辑内容
   - **Viewer**: 只读

---

## ✅ 检查清单

完成这些步骤，您的网站就完全配置好了：

- [ ] 在 Sanity Studio 添加至少一个项目
- [ ] 在 Sanity Studio 添加至少一篇论文
- [ ] 在 Sanity Studio 添加至少一条新闻
- [ ] 推送代码到 Git
- [ ] 在 Vercel 配置环境变量
- [ ] 添加 Vercel URL 到 Sanity CORS
- [ ] 设置 Webhook 自动部署
- [ ] 部署 Sanity Studio 到云端
- [ ] 邀请团队成员

---

## 🎊 完成后的效果

✨ **团队成员可以：**
- 访问 Sanity Studio URL
- 登录后添加/编辑内容
- 点击 Publish
- 1-2 分钟后网站自动更新

✨ **无需：**
- 懂代码
- 使用 Git
- 访问服务器
- 手动部署

**这就是现代化的内容管理系统！** 🚀

---

有任何问题随时问我！


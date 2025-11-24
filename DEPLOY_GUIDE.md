# 🚀 部署指南

## 第一步：部署 Sanity Studio

### 1. 打开终端，进入 studio 目录

```bash
cd studio
```

### 2. 部署 Studio

```bash
npm run deploy
```

### 3. 选择名称

系统会提示：
```
? Studio hostname (<value>.sanity.studio):
```

输入：`agentfabric` 或任何您喜欢的名称

### 4. 完成！

部署成功后会显示：
```
Success! Studio deployed to https://agentfabric.sanity.studio
```

**保存这个 URL！团队成员将使用它来编辑内容。**

---

## 第二步：准备代码部署到 Vercel

### 1. 确保代码已保存

所有改动都已保存。

### 2. 初始化 Git（如果还没有）

```bash
# 回到项目根目录
cd ..

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Add Sanity CMS integration"
```

### 3. 推送到 GitHub

#### 如果还没有 GitHub 仓库：

1. 访问 https://github.com/new
2. 创建新仓库（例如：`agentfabric-website`）
3. 不要添加 README、.gitignore 或 license

#### 推送代码：

```bash
# 添加远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/your-username/agentfabric-website.git

# 推送代码
git branch -M main
git push -u origin main
```

---

## 第三步：部署到 Vercel

### 方法 A：通过 Vercel 网站（推荐）

1. 访问 https://vercel.com
2. 登录（使用 GitHub 账号）
3. 点击 **"Add New Project"**
4. 选择刚才推送的 GitHub 仓库
5. Vercel 会自动检测为 Vite 项目
6. **重要：配置环境变量**
   - 点击 "Environment Variables"
   - 添加：
     - Name: `VITE_SANITY_PROJECT_ID`
     - Value: `fy1t5d1m`
   - 添加：
     - Name: `VITE_SANITY_DATASET`
     - Value: `production`
7. 点击 **"Deploy"**
8. 等待部署完成（约 1-2 分钟）

### 方法 B：通过命令行

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 部署
vercel

# 设置环境变量
vercel env add VITE_SANITY_PROJECT_ID
# 输入: fy1t5d1m

vercel env add VITE_SANITY_DATASET
# 输入: production

# 重新部署以应用环境变量
vercel --prod
```

---

## 第四步：配置 CORS（重要！）

### 1. 获取 Vercel 部署的 URL

例如：`https://agentfabric-website.vercel.app`

### 2. 添加到 Sanity CORS

1. 访问：https://www.sanity.io/manage/personal/project/fy1t5d1m/api
2. 找到 **"CORS Origins"**
3. 点击 **"Add CORS origin"**
4. 输入：`https://agentfabric-website.vercel.app`（替换为您的实际 URL）
5. ✅ 勾选 **"Allow credentials"**
6. 点击 **"Save"**

### 3. 如果有自定义域名

也将自定义域名添加到 CORS。

---

## 第五步：测试生产环境

### 1. 访问您的 Vercel 网站

例如：https://agentfabric-website.vercel.app

### 2. 测试所有页面

- People 页面能看到数据 ✅
- Projects 页面能看到数据 ✅
- Publications 页面能看到数据 ✅
- News 页面能看到数据 ✅
- 语言切换正常工作 ✅

### 3. 测试内容更新

1. 访问 Sanity Studio：https://agentfabric.sanity.studio
2. 修改或添加内容
3. 点击 Publish
4. 回到网站刷新页面
5. ✅ 应该立即看到更新！

---

## 第六步：邀请团队成员

### 1. 访问 Sanity 项目设置

https://www.sanity.io/manage/personal/project/fy1t5d1m/members

### 2. 邀请成员

1. 点击 **"Invite members"**
2. 输入邮箱地址
3. 选择权限：
   - **Administrator**: 完全控制（推荐给负责人）
   - **Editor**: 可以编辑所有内容（推荐给团队成员）
   - **Viewer**: 只能查看
4. 点击 **"Send invite"**

### 3. 分享 Studio URL

告诉团队成员访问：
```
https://agentfabric.sanity.studio
```

他们收到邀请邮件后，登录即可编辑内容！

---

## ✅ 完成检查清单

部署完成后，确认以下项目：

- [ ] Sanity Studio 已部署到云端
- [ ] 代码已推送到 GitHub
- [ ] 网站已部署到 Vercel
- [ ] Vercel 环境变量已配置
- [ ] Vercel URL 已添加到 Sanity CORS
- [ ] 所有页面数据显示正常
- [ ] 团队成员已收到邀请

---

## 🎊 完成！

现在您有了：

✅ **在线网站** - 部署在 Vercel  
✅ **在线管理后台** - 部署在 Sanity  
✅ **实时数据同步** - 无需重新部署  
✅ **团队协作** - 多人可同时编辑

**工作流程：**
```
团队成员访问 Sanity Studio
    ↓
编辑内容并 Publish
    ↓
用户刷新网站
    ↓
立即看到更新！
```

---

## 🔧 后续维护

### 日常更新内容

1. 访问 https://agentfabric.sanity.studio
2. 编辑内容
3. 点击 Publish
4. 完成！

### 更新代码（样式、功能等）

```bash
git add .
git commit -m "Update website"
git push
```

Vercel 会自动重新部署。

### 更新 Sanity Schema（添加新字段）

1. 修改 `studio/schemas/` 中的文件
2. 推送代码到 Git
3. Sanity Studio 会自动更新

---

有问题随时问！🚀


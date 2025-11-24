# Sanity Studio 快速启动指南

## ✅ 已完成配置

- ✅ Project ID 已设置: `fy1t5d1m`
- ✅ Studio 文件已创建
- ✅ 数据模型（Schemas）已配置好

---

## 🚀 启动 Sanity Studio

### 方法一：使用启动脚本（推荐）

双击运行：`start-studio.bat`

### 方法二：手动启动

打开终端，运行：

```bash
cd studio
npm run dev
```

---

## 🌐 访问 Studio

启动成功后，访问：**http://localhost:3333**

您会看到 Sanity Studio 的登录界面！

---

## 🔐 首次登录

1. 点击 "Sign in"
2. 选择 GitHub 登录
3. 授权 Sanity 访问
4. 登录成功！

---

## 📝 开始添加内容

登录后，您会看到左侧菜单：

- **Team Members** - 添加团队成员
- **Research Projects** - 添加研究项目  
- **Publications** - 添加论文
- **News & Events** - 添加新闻动态

### 添加团队成员示例

1. 点击 "Team Members"
2. 点击右上角 "+" 按钮
3. 填写表单：
   - Name: Zhang San
   - Role: 选择 PhD Student
   - Category: 选择 students
   - Bio (English): Research on distributed systems
   - Bio (Chinese): 研究分布式系统
   - Email: zhangsan@university.edu
4. （可选）上传照片
5. 点击 "Publish"

✅ **内容已保存到 Sanity 云端！**

---

## 🌍 部署 Studio 到云端（推荐）

当您测试完成后，部署 Studio 让团队成员访问：

```bash
cd studio
npm run deploy
```

选择一个名称（如 `agentfabric`），完成后会生成：

```
https://agentfabric.sanity.studio
```

团队成员可以访问这个 URL 来编辑内容！

---

## 🔗 下一步：连接网站

### 1. 创建环境变量文件

在项目根目录创建 `.env` 文件：

```
VITE_SANITY_PROJECT_ID=fy1t5d1m
VITE_SANITY_DATASET=production
```

### 2. 在 Vercel 添加环境变量

登录 Vercel → 选择项目 → Settings → Environment Variables

添加：
- `VITE_SANITY_PROJECT_ID` = `fy1t5d1m`
- `VITE_SANITY_DATASET` = `production`

### 3. 设置自动部署（Webhook）

**在 Vercel：**
1. Settings → Git → Deploy Hooks
2. 创建新 Hook，命名为 "Sanity Content Update"
3. 复制生成的 URL

**在 Sanity：**
1. 访问 https://www.sanity.io/manage/personal/project/fy1t5d1m
2. API → Webhooks → Add webhook
3. Name: Vercel Deploy
4. URL: 粘贴上面复制的 Vercel Hook URL
5. Dataset: production
6. HTTP method: POST
7. Trigger on: Create, Update, Delete
8. Save

✅ **完成！现在每次在 Sanity 更新内容，网站会自动重新部署！**

---

## 📊 完整流程

```
1. 在 Sanity Studio 添加/编辑内容
   ↓
2. 内容保存到 Sanity 云端
   ↓
3. Webhook 触发 Vercel 重新部署
   ↓
4. Vercel 从 Sanity 获取最新数据
   ↓
5. 网站更新完成！（约 1-2 分钟）
```

---

## 🆘 常见问题

**Q: Studio 启动后打不开？**
A: 检查端口 3333 是否被占用，或访问终端显示的实际端口

**Q: 登录失败？**
A: 确保使用了创建 Sanity 项目时使用的 GitHub 账号

**Q: 数据不显示在网站上？**
A: 需要更新前端页面组件从 Sanity 读取数据（下一步操作）

**Q: 如何邀请团队成员？**
A: 在 https://www.sanity.io/manage → 选择项目 → Members → Invite

---

## 📞 需要帮助？

遇到问题随时告诉我！



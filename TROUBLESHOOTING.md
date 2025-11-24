# 故障排查指南

## 🔧 修复 "Failed to load team members" 错误

### 已执行的修复：

1. ✅ 更新了 `vite.config.js` - 排除 @sanity/client 优化
2. ✅ 更新了 Sanity 客户端配置

### 现在需要您执行：

#### 步骤 1：停止并重启服务器

1. 在运行前端的终端按 **Ctrl + C**
2. 重新启动：
   ```bash
   npm run dev
   ```

#### 步骤 2：配置 Sanity CORS（重要！）

**这是最关键的步骤！**

1. 访问：https://www.sanity.io/manage/personal/project/fy1t5d1m/api

2. 找到 **CORS Origins** 部分

3. 点击 **"Add CORS origin"**

4. 添加以下两个地址：
   - `http://localhost:3000`
   - `http://localhost:3001`
   - 勾选 **"Allow credentials"**

5. 点击 **"Save"**

6. 如果您的 Vercel 网站已部署，也添加：
   - `https://your-site.vercel.app` （替换为您的实际域名）

#### 步骤 3：确保数据已发布

在 Sanity Studio (http://localhost:3333)：

1. 打开 Team Members
2. 检查是否有数据
3. 确保点击了 **"Publish"** 按钮（不是 Save Draft）
4. 检查 **Category** 字段是否设置为 `faculty` 或 `students`

---

## 🔍 检查配置

### 验证 Project ID

打开 `src/lib/sanity.js`，确认：
```javascript
projectId: 'fy1t5d1m',
```

### 验证环境变量

检查项目根目录的 `.env` 文件是否存在并包含：
```
VITE_SANITY_PROJECT_ID=fy1t5d1m
VITE_SANITY_DATASET=production
```

---

## 🧪 测试连接

### 测试 Sanity API

在浏览器打开（F12 控制台），粘贴：

```javascript
fetch('https://fy1t5d1m.api.sanity.io/v2024-01-01/data/query/production?query=*[_type == "people"]')
  .then(r => r.json())
  .then(d => console.log(d))
```

如果看到 CORS 错误，说明需要配置 CORS。

---

## 📋 完整检查清单

- [ ] Sanity Studio 中有数据并已 Publish
- [ ] Category 字段设置正确（faculty 或 students）
- [ ] CORS 已在 Sanity 后台配置
- [ ] `.env` 文件存在且配置正确
- [ ] 前端服务器已重启
- [ ] 浏览器已清除缓存（Ctrl + Shift + R）

---

## 🎯 如果还是不行

### 临时测试方法

让我们先用静态数据测试页面是否正常工作。

如果配置 CORS 后还是有问题，告诉我，我会提供其他解决方案。

---

## 📞 常见错误信息

### "Failed to load team members"
→ 通常是 CORS 未配置或数据未发布

### "Network error"
→ 检查网络连接和 Sanity 服务状态

### "Unauthorized"
→ 检查 Project ID 是否正确

### 页面空白
→ 检查浏览器控制台（F12）查看具体错误

---

按照上述步骤操作后告诉我结果！


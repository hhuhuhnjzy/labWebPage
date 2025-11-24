# 快速修复 - Failed to load team members

## 🎯 最关键的一步：配置 CORS

### 访问 Sanity 项目设置：

**直接点击这个链接：**
https://www.sanity.io/manage/personal/project/fy1t5d1m/api

### 配置步骤（有截图说明）：

1. 找到页面中的 **"CORS Origins"** 部分
2. 点击 **"Add CORS origin"** 按钮
3. 在弹出的输入框中输入：`http://localhost:3000`
4. ✅ **勾选** "Allow credentials" 选项
5. 点击 "Add" 或 "Save"
6. 重复步骤 2-5，添加：`http://localhost:3001`

### 为什么需要这一步？

浏览器的安全策略阻止网站访问其他域名的 API。
配置 CORS 后，Sanity 会允许您的本地开发网站访问数据。

---

## ✅ 配置完成后

### 1. 重启前端服务器

在终端按 **Ctrl + C**，然后：
```bash
npm run dev
```

### 2. 刷新页面

访问 http://localhost:3000/people 并刷新（F5）

### 3. 应该看到数据了！

如果还是不行，检查：
- Sanity Studio 中的数据是否已 **Publish**（不是 Draft）
- Category 字段是否设置为 `faculty` 或 `students`

---

## 🧪 测试 API 连接

配置 CORS 后，在浏览器控制台（F12）粘贴这段代码测试：

```javascript
fetch('https://fy1t5d1m.api.sanity.io/v2024-01-01/data/query/production?query=*[_type == "people"]')
  .then(r => r.json())
  .then(d => console.log('Data:', d))
  .catch(e => console.error('Error:', e))
```

如果看到数据，说明连接成功！
如果看到 CORS 错误，说明 CORS 还没配置好。

---

完成后告诉我结果！


# 查看 Sanity 数据效果

## ✅ 已完成配置

- ✅ People 页面已连接到 Sanity
- ✅ 环境变量已设置
- ✅ 页面会自动从 Sanity 云端读取数据

---

## 🌐 查看效果

### 步骤 1：重启前端服务器

**重要：** 需要重启以加载环境变量

1. 如果前端服务器正在运行，按 `Ctrl + C` 停止
2. 重新启动：
   ```bash
   npm run dev
   ```
3. 访问：http://localhost:3000

### 步骤 2：访问 People 页面

在网站导航栏点击 **"People"** 或访问：
```
http://localhost:3000/people
```

您应该能看到您在 Sanity Studio 中添加的团队成员！

---

## 🎯 您应该看到的效果

### 如果数据正常显示：
✅ 显示您在 Sanity 中添加的成员姓名
✅ 显示角色（PhD Student, Master Student等）
✅ 显示中英文简介（根据语言切换）
✅ 如果上传了照片，会显示照片
✅ 显示邮箱和网站链接

### 如果显示 "Loading..."：
⏳ 正在从 Sanity 获取数据，稍等几秒

### 如果显示错误：
❌ 检查以下：
1. 确保 Sanity Studio 中已经 Publish 了数据
2. 确保 `.env` 文件存在且包含正确的 Project ID
3. 检查浏览器控制台（F12）查看错误信息

---

## 🔄 测试实时更新

### 试试这个：

1. **在 Sanity Studio 中修改数据**
   - 访问 http://localhost:3333
   - 编辑一个团队成员的名字
   - 点击 "Publish"

2. **刷新网站页面**
   - 回到 http://localhost:3000/people
   - 刷新页面（F5）
   - ✨ 应该看到更新的内容！

---

## 📊 数据流程

```
Sanity Studio (localhost:3333)
   ↓ Publish
Sanity Cloud (云端数据库)
   ↓ API 请求
您的网站 (localhost:3000)
   ↓ 显示
浏览器页面
```

---

## 🚀 下一步：其他页面

目前只有 People 页面连接到了 Sanity。

如果效果满意，我可以帮您连接其他页面：
- Projects 页面
- Publications 页面  
- News 页面

---

## 📞 遇到问题？

### 常见错误排查

**错误：Failed to load team members**
- 检查 Sanity 中是否 Publish 了数据
- 检查 Project ID 是否正确：`fy1t5d1m`

**看不到数据：**
- 重启前端服务器（必须！）
- 清除浏览器缓存
- 检查 Sanity Studio 中数据的 Category 字段是否设置正确

**网络错误：**
- 检查网络连接
- Sanity 服务是否可访问

---

## ✨ 成功标志

如果您能在 People 页面看到自己在 Sanity 中添加的团队成员，说明：

✅ Sanity 配置成功
✅ 数据同步正常
✅ 前端连接成功

**恭喜！🎉 您的内容管理系统已经可以使用了！**

---

告诉我效果如何，如果一切正常，我会继续连接其他页面！



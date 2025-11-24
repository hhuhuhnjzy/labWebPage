# 快速更新指南 - 给非技术人员

## 🎯 如何更新网站内容

### 方法一：使用管理后台（推荐）

一旦配置好 Sanity.io 或其他 CMS：

1. 访问管理后台 URL（如 `your-project.sanity.studio`）
2. 登录账号
3. 点击左侧菜单选择要编辑的内容：
   - People（团队成员）
   - Projects（项目）
   - Publications（论文）
   - News（新闻）
4. 点击 "+" 添加新内容，或点击现有条目进行编辑
5. 保存后，网站会自动更新（通常1-2分钟内）

**无需任何代码知识！**

---

### 方法二：编辑 JSON 文件（临时方案）

如果还没有配置管理后台，可以先用这个方法：

#### 更新团队成员

1. 打开 GitHub 仓库
2. 找到文件：`src/pages/PeoplePage.jsx`
3. 点击 "编辑" 图标（笔图标）
4. 找到 `students` 或 `faculty` 数组
5. 复制现有格式，添加新成员
6. 点击 "Commit changes"

示例：
```javascript
{
  name: 'Zhang San',
  role: 'PhD Student',
  bio: {
    en: 'Research: AI Systems',
    zh: '研究方向：AI系统'
  },
  email: 'zhangsan@university.edu'
}
```

#### 更新新闻

编辑文件：`src/pages/NewsPage.jsx`

在 `newsItems` 数组添加：
```javascript
{
  date: 'December 2025',
  title: {
    en: 'News Title',
    zh: '新闻标题'
  },
  description: {
    en: 'Description in English',
    zh: '中文描述'
  }
}
```

#### 更新论文

编辑文件：`src/pages/PublicationsPage.jsx`

在 `publications` 数组添加：
```javascript
{
  date: 'December 2025',
  title: 'Paper Title',
  authors: 'Author1, Author2',
  venue: 'Conference Name 2025',
  links: {
    pdf: 'https://link-to-pdf',
    code: 'https://github.com/...'
  }
}
```

---

## ⚠️ 注意事项

### 方法二（编辑 JSON）的限制：
- ❌ 需要懂一点 JSON 格式
- ❌ 容易出现语法错误
- ❌ 没有预览功能
- ❌ 需要等待部署（2-5分钟）

### 为什么推荐管理后台：
- ✅ 完全可视化，不需要懂代码
- ✅ 实时预览
- ✅ 自动检查错误
- ✅ 支持图片上传
- ✅ 多人可同时编辑

---

## 🔄 更新后多久生效？

- **使用管理后台：** 1-2 分钟
- **编辑 GitHub 文件：** 2-5 分钟（取决于部署平台）

---

## 🆘 遇到问题？

1. 检查语法是否正确（逗号、引号等）
2. 查看部署日志（在 Vercel/Netlify 控制台）
3. 联系技术负责人

---

## 📞 推荐行动

**立即配置管理后台！** 

只需 30 分钟设置，就可以让所有团队成员轻松更新网站，无需任何技术知识。

请技术负责人按照 `CMS_SOLUTION.md` 文档进行配置。




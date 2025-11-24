# AgentFabric Research Group Website

基于 React + Vite 的现代化研究组网站，采用 Anthropic 风格的配色方案。

## 🎨 设计特点

- **配色方案**：参考 Anthropic 的暖色调设计（橙色/棕色系）
- **网站结构**：参考 DAPLab 的布局和功能
- **工程化**：使用 React + Vite，易于维护和扩展

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

构建后的文件在 `dist` 目录

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
website/
├── public/
│   └── logo.png              # 您的 AgentFabric Logo
├── src/
│   ├── components/           # React 组件
│   │   ├── Header.jsx        # 导航栏
│   │   ├── Hero.jsx          # 首屏介绍
│   │   ├── News.jsx          # 新闻动态
│   │   ├── Events.jsx        # 活动列表
│   │   ├── Publications.jsx  # 论文发表
│   │   └── Partners.jsx      # 合作伙伴
│   ├── styles/               # 样式文件
│   │   ├── index.css         # 全局样式
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── News.css
│   │   ├── Events.css
│   │   ├── Publications.css
│   │   └── Partners.css
│   ├── App.jsx               # 主应用组件
│   └── main.jsx              # 入口文件
├── index-new.html            # HTML 模板
├── vite.config.js            # Vite 配置
├── package.json              # 项目依赖
└── README-NEW.md             # 说明文档
```

## 🎨 配色方案（Anthropic 风格）

```css
--primary-orange: #e97451;    /* 主橙色 */
--primary-dark: #1a1a1a;      /* 深色文字 */
--text-primary: #2d2d2d;      /* 主要文字 */
--text-secondary: #5a5a5a;    /* 次要文字 */
--bg-cream: #f9f7f4;          /* 奶油色背景 */
--bg-white: #ffffff;          /* 白色背景 */
--accent-brown: #8b6f47;      /* 棕色强调 */
--border-light: #e8e3dc;      /* 浅色边框 */
--hover-orange: #d96640;      /* 悬浮橙色 */
```

## 📝 内容自定义

### 1. Logo 设置

将您的 logo 图片命名为 `logo.png` 放在 `public` 目录下。

### 2. 修改内容

所有内容都在各个组件文件中，易于修改：

- **News.jsx** - 修改新闻动态
- **Events.jsx** - 更新活动信息
- **Publications.jsx** - 添加论文
- **Partners.jsx** - 更新合作伙伴

### 3. 修改样式

每个组件都有对应的 CSS 文件，可以独立修改样式而不影响其他部分。

## 🔧 技术栈

- **React 18** - UI 框架
- **Vite 5** - 构建工具
- **React Router** - 路由管理（已安装，可用于多页面）

## 📱 响应式设计

网站已完全响应式适配：
- 桌面端（> 768px）
- 平板端（768px - 480px）
- 移动端（< 480px）

## 🌟 功能特性

- ✅ 平滑滚动导航
- ✅ 固定导航栏（滚动时有阴影效果）
- ✅ 悬浮交互效果
- ✅ 模块化组件设计
- ✅ 易于维护和扩展

## 📌 添加新功能

### 添加新页面

1. 在 `src/components/` 创建新组件
2. 在 `src/styles/` 创建对应样式
3. 在 `App.jsx` 中引入并使用

### 修改配色

在 `src/styles/index.css` 的 `:root` 部分修改 CSS 变量即可全局生效。

## 🔨 开发建议

1. **组件优先**：每个功能模块都是独立组件
2. **样式隔离**：每个组件有独立的 CSS 文件
3. **保持简洁**：遵循 Anthropic 的简洁设计风格
4. **响应式优先**：确保在各种设备上都能正常显示

## 📄 浏览器支持

- Chrome（推荐）
- Firefox
- Safari
- Edge
- 其他现代浏览器

## 📞 联系方式

如需帮助或有问题，请联系课题组。

---

© 2025 AgentFabric Research Group. All rights reserved.



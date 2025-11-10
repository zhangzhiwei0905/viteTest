# 钣金厂网站前端项目

这是一个为钣金厂设计的现代化企业官网前端项目，基于React + Vite构建，提供美观、响应式的用户界面，适合展示公司信息、服务项目、产品和工厂环境。

## 技术栈

- React 18
- Vite
- React Router DOM
- Bootstrap 5
- Font Awesome

## 项目结构

```
├── public/              # 静态资源文件
├── src/
│   ├── components/      # React组件
│   │   ├── Home.jsx     # 首页组件
│   │   ├── About.jsx    # 关于我们组件
│   │   ├── Services.jsx # 服务项目组件
│   │   ├── Products.jsx # 产品展示组件
│   │   ├── Gallery.jsx  # 工厂展示组件
│   │   └── Contact.jsx  # 联系我们组件
│   ├── App.jsx          # 应用主组件
│   ├── App.css          # 应用样式
│   ├── main.jsx         # 应用入口
│   └── index.css        # 全局样式
├── .gitignore           # Git忽略文件
├── index.html           # HTML模板
├── package.json         # 项目依赖配置
└── vite.config.js       # Vite配置
```

## 功能特性

- 响应式设计，适配桌面、平板和移动设备
- 现代化UI设计，美观简洁
- 完整的导航系统
- 精美的动画和过渡效果
- 工厂和产品图片展示
- 联系方式和表单
- SEO友好的元数据

## 如何运行

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 如何部署到Vercel

1. 将项目上传到GitHub仓库
2. 登录Vercel账户
3. 点击"New Project"，导入您的GitHub仓库
4. 配置构建命令为`npm run build`，输出目录为`dist`
5. 点击"Deploy"按钮开始部署
6. 部署完成后，您将获得一个公开的URL

## 自定义内容

### 替换图片

- 在各组件中的图片URL可以替换为您实际的工厂、产品和团队照片

### 修改文本内容

- 各页面的标题、描述、服务介绍等文本都可以根据您的实际情况进行修改

### 更新联系信息

- 在Contact.jsx组件中更新您的联系电话、邮箱和地址

### 修改颜色和样式

- 可以在index.css中修改CSS变量来自定义主题颜色

## 注意事项

- 本项目使用了在线图片资源，建议替换为您自己的图片
- 表单提交功能需要后端支持，当前仅为前端模拟
- 地图嵌入使用了Google Maps，在中国可能需要替换为其他地图服务

## License

MIT
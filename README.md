# 钣金厂网站前端项目 - Next.js 版本

这是一个为钣金厂设计的现代化企业官网前端项目，基于Next.js构建，提供美观、响应式的用户界面，适合展示公司信息、服务项目、产品和工厂环境。

## 技术栈

- Next.js 13
- JavaScript
- React
- 自定义CSS
- npm

## 项目结构

```
├── components/      # React组件
│   ├── Navbar.js    # 导航栏组件
│   ├── Footer.js    # 页脚组件
│   ├── HeroSection.js    # 首页英雄区域
│   ├── AboutSection.js   # 首页关于我们区域
│   ├── ServicesSection.js # 首页服务区域
│   ├── ProductsSection.js # 首页产品区域
│   ├── ContactSection.js  # 首页联系区域
│   └── ProductList.js     # 产品列表组件
├── pages/           # Next.js页面
│   ├── _app.js      # 应用入口
│   ├── index.js     # 首页
│   ├── products.js  # 产品页
│   ├── about.js     # 关于我们页
│   └── contact.js   # 联系我们页
├── public/          # 静态资源
│   └── images/      # 图片文件夹
├── styles/          # 样式文件
│   └── globals.css  # 全局样式
├── package.json     # 项目配置
├── .gitignore       # Git忽略文件
└── README.md        # 项目说明
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

然后访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 导出静态网站

```bash
npm run export
```

导出的静态文件将位于 `out` 目录中。

## 如何部署到Vercel

1. 将项目上传到GitHub仓库
2. 登录Vercel账户
3. 点击"New Project"，导入您的GitHub仓库
4. 对于Next.js项目，Vercel会自动识别并配置正确的构建命令和输出目录
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

- 请确保将产品图片放置在 `public/images` 目录下
- 图片命名应与组件中引用的文件名一致
- 本项目使用了在线图片资源，建议替换为您自己的图片
- 表单提交功能需要后端支持，当前仅为前端模拟
- 地图嵌入使用了Google Maps，在中国可能需要替换为其他地图服务
- 如需部署到生产环境，请配置合适的环境变量
- 构建前请确保所有依赖已正确安装

## License

MIT
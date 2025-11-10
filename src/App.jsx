import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css'

// 导入组件
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  // 监听滚动事件，用于导航栏样式变化
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div className="App">
        {/* 导航栏 */}
        <nav className={`navbar navbar-expand-lg navbar-light ${isScrolled ? 'scrolled' : ''}`}>
          <div className="container">
            <Link className="navbar-brand" to="/">
              <i className="fas fa-industry mr-2"></i>
              <span>玮莱达</span>
            </Link>
            
            {/* 移动端菜单按钮 */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            {/* 导航菜单 */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">首页</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">关于我们</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">服务项目</Link>
                </li>
                <li className="nav-item">
              <Link className="nav-link" to="/products">产品展示</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">工厂展示</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">联系我们</Link>
            </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* 主要内容区域 */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>

        {/* 页脚 */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              {/* 公司信息 */}
              <div className="col-lg-4 col-md-6 mb-4">
                <h4><i className="fas fa-building mr-2"></i>公司简介</h4>
                <p>我们是一家专业从事钣金加工的制造企业，拥有先进的设备和技术团队，为客户提供高品质的金属制品定制服务。</p>
                <div className="footer-social">
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              
              {/* 快速链接 */}
              <div className="col-lg-4 col-md-6 mb-4">
                <h4><i className="fas fa-link mr-2"></i>快速链接</h4>
                <ul className="list-unstyled">
                  <li><a href="/">首页</a></li>
                  <li><a href="/about">关于我们</a></li>
                  <li><a href="/services">服务项目</a></li>
                  <li><a href="/products">产品展示</a></li>
                  <li><a href="/gallery">工厂展示</a></li>
                  <li><a href="/contact">联系我们</a></li>
                </ul>
              </div>
              
              {/* 联系信息 */}
              <div className="col-lg-4 col-md-6 mb-4">
                <h4><i className="fas fa-map-marker-alt mr-2"></i>联系我们</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>公司地址：中国广东省深圳市</span>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-phone mr-2"></i>
                    <span>联系电话：+86 123 4567 8910</span>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-envelope mr-2"></i>
                    <span>电子邮箱：info@sheetmetal-factory.com</span>
                  </li>
                  <li>
                    <i className="fas fa-clock mr-2"></i>
                    <span>工作时间：周一至周五 9:00-18:00</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 版权信息 */}
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} 钣金加工专家. 保留所有权利.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
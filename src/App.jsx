import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css'

// 导入组件
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
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
        {/* 导航栏 - 响应式设计，支持移动端适配 */}
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'var(--primary-color)', borderBottom: '3px solid var(--accent-color)', position: 'sticky', top: '0', zIndex: '1000'}}>
          <div className="container">
            <Link className="navbar-brand" to="/" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
              <i className="fas fa-industry mr-2"></i>
              <span>玮莱达钣金加工</span>
            </Link>
            
            {/* 移动端菜单按钮 */}
            <button className="navbar-toggler" type="button" onClick={() => document.getElementById('navbarNav').classList.toggle('show')} aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            {/* 导航菜单 - 简化为主要导航项 */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" style={{padding: '0.5rem 1rem', color: 'var(--white)', textDecoration: 'none'}}>首页</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products" style={{padding: '0.5rem 1rem', color: 'var(--white)', textDecoration: 'none'}}>产品</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" style={{padding: '0.5rem 1rem', color: 'var(--white)', textDecoration: 'none'}}>关于我</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" style={{padding: '0.5rem 1rem', color: 'var(--white)', textDecoration: 'none'}}>联系我们</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* 主要内容区域 */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>

        {/* 页脚 - 专业商务风格 */}
        <footer className="footer" style={{backgroundColor: 'var(--primary-color)', color: 'var(--white)', padding: '2rem 0', marginTop: '2rem'}}>
          <div className="container">
            <div className="row">
              {/* 公司信息 */}
              <div className="col-lg-4 col-md-6 mb-4">
                <h4 style={{color: 'var(--white)', borderBottom: '1px solid var(--white)', paddingBottom: '0.5rem', marginBottom: '1rem'}}>
                  <i className="fas fa-building mr-2"></i>公司简介
                </h4>
                <p style={{marginBottom: '1.5rem'}}>玮莱达是一家专业从事钣金加工的制造企业，拥有先进的设备和技术团队，为客户提供高品质的金属制品定制服务。</p>
                <div className="footer-social">
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{color: 'var(--white)', marginRight: '1rem', fontSize: '1.2rem'}}><i className="fab fa-facebook-f"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{color: 'var(--white)', marginRight: '1rem', fontSize: '1.2rem'}}><i className="fab fa-twitter"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{color: 'var(--white)', marginRight: '1rem', fontSize: '1.2rem'}}><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{color: 'var(--white)', marginRight: '1rem', fontSize: '1.2rem'}}><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              
              {/* 快速链接 */}
              <div className="col-lg-4 col-md-6 mb-4">
                <h4 style={{color: 'var(--white)', borderBottom: '1px solid var(--white)', paddingBottom: '0.5rem', marginBottom: '1rem'}}>
                  <i className="fas fa-link mr-2"></i>快速链接
                </h4>
                <ul className="list-unstyled">
                  <li><a href="/" style={{color: 'var(--white)', textDecoration: 'none', display: 'block', padding: '0.3rem 0'}}>首页</a></li>
                  <li><a href="/about" style={{color: 'var(--white)', textDecoration: 'none', display: 'block', padding: '0.3rem 0'}}>关于我们</a></li>
                  <li><a href="/services" style={{color: 'var(--white)', textDecoration: 'none', display: 'block', padding: '0.3rem 0'}}>服务项目</a></li>
                  <li><a href="/products" style={{color: 'var(--white)', textDecoration: 'none', display: 'block', padding: '0.3rem 0'}}>产品展示</a></li>
                  <li><a href="/gallery" style={{color: 'var(--white)', textDecoration: 'none', display: 'block', padding: '0.3rem 0'}}>工厂展示</a></li>
                  <li><a href="/contact" style={{color: 'var(--white)', textDecoration: 'none', display: 'block', padding: '0.3rem 0'}}>联系我们</a></li>
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
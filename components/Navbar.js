import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light sticky-top" 
      style={{
        backgroundColor: 'var(--primary-color)',
        padding: '0.75rem 0',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand" style={{ color: 'var(--white)', fontSize: '1.5rem', fontWeight: '700' }}>
          钣金加工厂
        </Link>
        
        {/* 移动端菜单按钮 */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
          aria-label="切换导航菜单"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* 导航菜单 */}
        <div 
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link" style={{ color: 'var(--white)', padding: '0.5rem 1rem', textDecoration: 'none' }}>
                首页
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products" className="nav-link" style={{ color: 'var(--white)', padding: '0.5rem 1rem', textDecoration: 'none' }}>
                产品
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link" style={{ color: 'var(--white)', padding: '0.5rem 1rem', textDecoration: 'none' }}>
                关于我
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link" style={{ color: 'var(--white)', padding: '0.5rem 1rem', textDecoration: 'none' }}>
                联系我们
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
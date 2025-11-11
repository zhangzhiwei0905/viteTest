import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--dark-color)', color: 'var(--light-color)', padding: '3rem 0 2rem' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>关于我们</h4>
            <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
              专业的钣金加工企业，提供高品质的金属制品定制服务，
              包括激光切割、折弯成型、焊接装配等一站式解决方案。
            </p>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>快速链接</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" style={{ color: 'var(--light-color)', textDecoration: 'none' }}>
                  首页
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/products" style={{ color: 'var(--light-color)', textDecoration: 'none' }}>
                  产品
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" style={{ color: 'var(--light-color)', textDecoration: 'none' }}>
                  关于我
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" style={{ color: 'var(--light-color)', textDecoration: 'none' }}>
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>联系我们</h4>
            <div className="mb-2">
              <i className="fas fa-map-marker-alt mr-2" style={{ color: 'var(--accent-color)', marginRight: '0.5rem' }}></i>
              <span>中国广东省东莞市XX工业区XX路XX号</span>
            </div>
            <div className="mb-2">
              <i className="fas fa-phone mr-2" style={{ color: 'var(--accent-color)', marginRight: '0.5rem' }}></i>
              <span>+86 0769-XXXXXXX</span>
            </div>
            <div className="mb-2">
              <i className="fas fa-envelope mr-2" style={{ color: 'var(--accent-color)', marginRight: '0.5rem' }}></i>
              <span>contact@sheetmetal-factory.com</span>
            </div>
          </div>
        </div>
        
        <div className="footer-social" style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'center' }}>
          <a href="#" className="social-link" style={{ color: 'var(--light-color)' }} aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-link" style={{ color: 'var(--light-color)' }} aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-link" style={{ color: 'var(--light-color)' }} aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="social-link" style={{ color: 'var(--light-color)' }} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        
        <div className="footer-bottom" style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '2rem' }}>
          <p style={{ color: 'var(--text-light)', margin: 0 }}>
            © {new Date().getFullYear()} 钣金加工厂. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
}
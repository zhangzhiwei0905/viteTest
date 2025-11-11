import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="hero" 
      style={{
        backgroundColor: 'var(--primary-color)',
        color: 'var(--white)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6" style={{ zIndex: '1' }}>
            <h1 style={{ 
              color: 'var(--white)', 
              fontSize: '2.8rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              专业钣金加工服务
            </h1>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.1rem',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              提供高品质、高精度的金属制品定制解决方案，
              从设计到生产一站式服务，满足您的多样化需求。
            </p>
            <div>
              <Link 
                href="/products" 
                className="btn btn-accent mr-4" 
                style={{
                  backgroundColor: 'var(--accent-color)',
                  borderColor: 'var(--accent-color)',
                  color: 'var(--white)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  marginRight: '1rem'
                }}
              >
                浏览产品
              </Link>
              <Link 
                href="/contact" 
                className="btn btn-outline-light" 
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'var(--white)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                联系我们
              </Link>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img 
              src="/images/hero-image.jpg" 
              alt="钣金加工产品展示" 
              className="img-fluid" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      {/* 装饰元素 */}
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '50%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.05)',
        clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
        zIndex: '0'
      }}></div>
    </section>
  );
}
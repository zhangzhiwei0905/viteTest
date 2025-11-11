import Link from 'next/link';

export default function AboutSection() {
  return (
    <section 
      className="about" 
      style={{
        backgroundColor: 'var(--white)',
        padding: '4rem 0'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-6 mb-lg-0">
            <img 
              src="/images/about.jpg" 
              alt="关于我们" 
              className="img-fluid rounded-lg shadow-lg" 
              style={{ maxWidth: '100%', height: 'auto' }}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 pl-lg-5">
            <h2 
              style={{
                color: 'var(--primary-color)',
                borderBottom: '2px solid var(--primary-color)',
                paddingBottom: '0.5rem',
                marginBottom: '1.5rem',
                display: 'inline-block'
              }}
            >
              关于我们
            </h2>
            <p 
              style={{
                color: 'var(--text-color)',
                marginBottom: '1rem',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}
            >
              我们是一家专业的钣金加工企业，拥有多年的行业经验和先进的生产设备。
              自成立以来，我们始终坚持&ldquo;品质第一、客户至上&rdquo;的经营理念，为各行各业提供高质量的金属制品定制服务。
            </p>
            <p 
              style={{
                color: 'var(--text-color)',
                marginBottom: '1.5rem',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}
            >
              我们的产品广泛应用于机械设备、电子电器、医疗设备、自动化设备等领域，
              凭借优质的产品和完善的服务，赢得了广大客户的信赖和好评。
            </p>
            <div>
              <Link 
                href="/about" 
                className="btn btn-primary" 
                style={{
                  backgroundColor: 'var(--primary-color)',
                  borderColor: 'var(--primary-color)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
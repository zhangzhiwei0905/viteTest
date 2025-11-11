import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Head>
        <title>关于我们 | 专业钣金加工服务</title>
        <meta name="description" content="了解我们的钣金加工工厂，专业团队、先进设备和严格的质量控制体系，为客户提供高品质金属制品定制服务。" />
        <meta name="keywords" content="钣金加工厂,专业团队,先进设备,质量控制,金属制品定制" />
      </Head>
      
      <Navbar />
      
      {/* 页面标题区域 */}
      <section className="bg-primary" style={{ backgroundColor: 'var(--primary-color)', padding: '3rem 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="text-white mb-3" style={{ color: 'var(--white)' }}>关于我们</h1>
              <p className="text-white-70" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                专注于提供高品质的钣金加工服务
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 公司简介区域 */}
      <section className="py-12 bg-light" style={{ backgroundColor: 'var(--white)', padding: '4rem 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-6 mb-lg-0">
              <h2 style={{ color: 'var(--primary-color)', borderBottom: '2px solid var(--primary-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>公司简介</h2>
              <p style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>
                我们是一家专业的钣金加工企业，拥有多年的行业经验和先进的生产设备。
                自成立以来，我们始终坚持&ldquo;品质第一、客户至上&rdquo;的经营理念，为各行各业提供高质量的金属制品定制服务。
              </p>
              <p style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>
                我们的产品广泛应用于机械设备、电子电器、医疗设备、自动化设备等领域，
                凭借优质的产品和完善的服务，赢得了广大客户的信赖和好评。
              </p>
              <div className="mt-6">
                <Link 
                  href="/contact" 
                  className="btn btn-primary" 
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  联系我们
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="/images/factory.jpg" 
                alt="工厂环境" 
                className="img-fluid rounded-lg shadow-lg" 
                style={{ maxWidth: '100%', height: 'auto' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
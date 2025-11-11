import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

export default function Products() {
  return (
    <div>
      <Head>
        <title>产品展示 | 专业钣金加工服务</title>
        <meta name="description" content="浏览我们的钣金加工产品展示，包括不锈钢制品、铝合金构件、镀锌板配件等多种材质的定制金属产品。" />
        <meta name="keywords" content="钣金产品,不锈钢制品,铝合金构件,激光切割产品,金属制品定制" />
      </Head>
      
      <Navbar />
      
      {/* 页面标题区域 */}
      <section className="bg-primary" style={{ backgroundColor: 'var(--primary-color)', padding: '3rem 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="text-white mb-3" style={{ color: 'var(--white)' }}>产品展示</h1>
              <p className="text-white-70" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                专业定制各类高品质金属制品，满足您的多样化需求
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 产品列表区域 */}
      <section className="py-12" style={{ padding: '4rem 0' }}>
        <div className="container">
          <ProductList />
          
          {/* SEO增强部分 */}
          <div className="mt-12 bg-light p-6 rounded-lg" style={{ backgroundColor: 'var(--bg-color)' }}>
            <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>精密钣金加工解决方案</h2>
            <p className="text-center mb-6" style={{ color: 'var(--text-color)', maxWidth: '800px', margin: '0 auto 2rem' }}>
              我们提供从设计到生产的一站式钣金加工服务，采用先进的数控设备和严格的质量控制体系，
              为客户提供高品质、高精度的金属制品。无论您需要小批量原型还是大批量生产，我们都能满足您的需求。
            </p>
            <div className="text-center">
              <Link 
                href="/contact" 
                className="btn btn-primary" 
                style={{ backgroundColor: 'var(--primary-color)' }}
                aria-label="获取报价咨询"
              >
                获取报价咨询
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
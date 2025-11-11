import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>联系我们 | 专业钣金加工服务</title>
        <meta name="description" content="如需钣金加工服务咨询或报价，请联系我们，我们将尽快回复您的需求。" />
        <meta name="keywords" content="钣金加工咨询,定制报价,联系方式,技术支持" />
      </Head>
      
      <Navbar />
      
      {/* 页面标题区域 */}
      <section className="bg-primary" style={{ backgroundColor: 'var(--primary-color)', padding: '3rem 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="text-white mb-3" style={{ color: 'var(--white)' }}>联系我们</h1>
              <p className="text-white-70" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                随时为您提供钣金加工咨询和定制服务
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 联系表单区域 */}
      <section className="py-12" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-6 mb-lg-0">
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>发送消息</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">姓名</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">邮箱</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="请输入您的邮箱"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="form-label">电话</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    id="phone" 
                    placeholder="请输入您的电话"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">留言</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    rows="5" 
                    placeholder="请输入您的需求"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  提交
                </button>
              </form>
            </div>
            <div className="col-lg-6">
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>联系方式</h2>
              <div className="mb-4">
                <i className="fas fa-map-marker-alt text-primary" style={{ color: 'var(--primary-color)', marginRight: '1rem', fontSize: '1.2rem' }}></i>
                <span>地址：中国广东省东莞市XX工业区XX路XX号</span>
              </div>
              <div className="mb-4">
                <i className="fas fa-phone text-primary" style={{ color: 'var(--primary-color)', marginRight: '1rem', fontSize: '1.2rem' }}></i>
                <span>电话：+86 0769-XXXXXXX</span>
              </div>
              <div className="mb-4">
                <i className="fas fa-envelope text-primary" style={{ color: 'var(--primary-color)', marginRight: '1rem', fontSize: '1.2rem' }}></i>
                <span>邮箱：contact@sheetmetal-factory.com</span>
              </div>
              <div className="mb-4">
                <i className="fas fa-clock text-primary" style={{ color: 'var(--primary-color)', marginRight: '1rem', fontSize: '1.2rem' }}></i>
                <span>营业时间：周一至周五 8:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
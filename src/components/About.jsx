import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="page-transition">
      {/* 页面标题 */}
      <section className="page-header" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1581092929311-c77333aa3c47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1>关于我们</h1>
          <p className="mt-2">二十年专业钣金加工经验，值得信赖的合作伙伴</p>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2>公司简介</h2>
              <p className="mb-4">
                我们成立于2003年，是一家专业从事钣金加工的制造企业，拥有先进的设备和技术团队，为客户提供高品质的金属制品定制服务。
                二十年来，我们始终坚持以质量求生存，以创新求发展的经营理念，不断提升产品质量和服务水平。
              </p>
              <p className="mb-4">
                目前，我们的产品广泛应用于自动化设备、电子电器、机械设备、医疗设备、通信设备等领域，客户遍布全国各地及海外市场。
                我们的目标是成为钣金加工行业的领军企业，为客户创造更大的价值。
              </p>
              <div className="row mt-5">
                <div className="col-6">
                  <div className="text-center">
                    <div className="count" style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>20+</div>
                    <div className="text-muted">行业经验</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <div className="count" style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>100+</div>
                    <div className="text-muted">专业员工</div>
                  </div>
                </div>
                <div className="col-6 mt-4">
                  <div className="text-center">
                    <div className="count" style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>500+</div>
                    <div className="text-muted">合作客户</div>
                  </div>
                </div>
                <div className="col-6 mt-4">
                  <div className="text-center">
                    <div className="count" style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>10000+</div>
                    <div className="text-muted">成功案例</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl-lg-5">
              <div className="row">
                <div className="col-12 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="工厂环境" 
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-6">
                  <img 
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="加工设备" 
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-6">
                  <img 
                    src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="产品展示" 
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 我们的优势 */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>我们的优势</h2>
          </div>
          
          <div className="row">
            {/* 优势 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon-box" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h3 className="card-title">先进设备</h3>
                  <p className="card-text">
                    我们引进了国际先进的激光切割机、数控折弯机、冲压设备等，确保产品加工精度和一致性。
                    设备的自动化程度高，能够提高生产效率，降低成本。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 优势 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon-box" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="card-title">专业团队</h3>
                  <p className="card-text">
                    我们拥有一支经验丰富、技术精湛的专业团队，包括工程师、技术人员和熟练工人。
                    团队成员平均从业经验超过10年，能够解决各种复杂的钣金加工问题。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 优势 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon-box" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3 className="card-title">质量管理</h3>
                  <p className="card-text">
                    我们建立了严格的质量管理体系，从原材料采购到产品出厂，每一个环节都进行严格的质量控制。
                    我们的目标是为客户提供零缺陷的产品。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 优势 4 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon-box" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                    <i className="fas fa-paint-brush"></i>
                  </div>
                  <h3 className="card-title">定制服务</h3>
                  <p className="card-text">
                    我们能够根据客户的需求提供定制化的钣金加工服务，包括产品设计、工艺设计、样品制作和批量生产。
                    我们的设计团队可以帮助客户优化产品结构，降低成本。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 优势 5 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon-box" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                    <i className="fas fa-truck"></i>
                  </div>
                  <h3 className="card-title">快速交付</h3>
                  <p className="card-text">
                    我们拥有高效的生产管理系统和完善的供应链，能够在保证质量的前提下，尽可能缩短交货周期。
                    对于紧急订单，我们可以提供加急服务。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 优势 6 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon-box" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                    <i className="fas fa-headset"></i>
                  </div>
                  <h3 className="card-title">完善售后</h3>
                  <p className="card-text">
                    我们提供完善的售后服务，对于客户反馈的问题，我们会在24小时内响应，并给出解决方案。
                    我们的目标是让每一位客户都满意。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>发展历程</h2>
          </div>
          
          <div className="timeline">
            <div className="row">
              {/* 2003 */}
              <div className="col-lg-6 mb-4">
                <div className="timeline-item" style={{ padding: '2rem', backgroundColor: 'var(--light-color)', borderRadius: '8px', position: 'relative' }}>
                  <div className="timeline-year" style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>2003</div>
                  <h3>公司成立</h3>
                  <p>我们在深圳成立，开始了钣金加工业务，初期只有几台简单的加工设备和几名员工。</p>
                </div>
              </div>
              <div className="col-lg-6"></div>
              
              {/* 2008 */}
              <div className="col-lg-6"></div>
              <div className="col-lg-6 mb-4">
                <div className="timeline-item" style={{ padding: '2rem', backgroundColor: 'var(--light-color)', borderRadius: '8px', position: 'relative' }}>
                  <div className="timeline-year" style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>2008</div>
                  <h3>扩大规模</h3>
                  <p>随着业务的发展，我们扩大了生产规模，引进了更多先进的加工设备，员工人数增加到30人。</p>
                </div>
              </div>
              
              {/* 2013 */}
              <div className="col-lg-6 mb-4">
                <div className="timeline-item" style={{ padding: '2rem', backgroundColor: 'var(--light-color)', borderRadius: '8px', position: 'relative' }}>
                  <div className="timeline-year" style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>2013</div>
                  <h3>技术升级</h3>
                  <p>我们引进了激光切割机、数控折弯机等先进设备，大大提高了生产效率和产品质量。</p>
                </div>
              </div>
              <div className="col-lg-6"></div>
              
              {/* 2018 */}
              <div className="col-lg-6"></div>
              <div className="col-lg-6 mb-4">
                <div className="timeline-item" style={{ padding: '2rem', backgroundColor: 'var(--light-color)', borderRadius: '8px', position: 'relative' }}>
                  <div className="timeline-year" style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>2018</div>
                  <h3>国际市场</h3>
                  <p>我们开始拓展国际市场，产品出口到欧美、东南亚等地区，赢得了海外客户的认可。</p>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="col-lg-6 mb-4">
                <div className="timeline-item" style={{ padding: '2rem', backgroundColor: 'var(--light-color)', borderRadius: '8px', position: 'relative' }}>
                  <div className="timeline-year" style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>2023</div>
                  <h3>数字化转型</h3>
                  <p>我们开始数字化转型，引入ERP系统，实现了生产管理的信息化和智能化。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 资质证书 */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>资质证书</h2>
          </div>
          
          <div className="row">
            {/* 证书 1 */}
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="certificate" style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', boxShadow: 'var(--shadow)', textAlign: 'center', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                  <i className="fas fa-certificate text-primary" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
                  <h4>ISO 9001</h4>
                </div>
              </div>
            </div>
            
            {/* 证书 2 */}
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="certificate" style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', boxShadow: 'var(--shadow)', textAlign: 'center', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                  <i className="fas fa-certificate text-primary" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
                  <h4>ISO 14001</h4>
                </div>
              </div>
            </div>
            
            {/* 证书 3 */}
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="certificate" style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', boxShadow: 'var(--shadow)', textAlign: 'center', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                  <i className="fas fa-certificate text-primary" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
                  <h4>CE认证</h4>
                </div>
              </div>
            </div>
            
            {/* 证书 4 */}
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="certificate" style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', boxShadow: 'var(--shadow)', textAlign: 'center', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                  <i className="fas fa-certificate text-primary" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
                  <h4>安全生产许可证</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 呼吁行动 */}
      <section className="section">
        <div className="container text-center">
          <h2>选择我们，选择专业</h2>
          <p className="mt-3 mb-5" style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            无论您需要小批量定制还是大规模生产，我们都能为您提供专业的钣金加工解决方案。立即联系我们，让我们一起合作，创造更多价值！
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            立即联系 <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
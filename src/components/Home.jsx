import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page-transition">
      {/* 英雄区域 - 专业商务风格 */}
      <section className="hero-section" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0',
        color: 'var(--white)'
      }}>
        <div className="container">
          <div className="bg-dark bg-opacity-80 p-5 rounded">
            <h1 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '600', color: 'var(--white)' }}>
              专业钣金加工解决方案
            </h1>
            <p className="text-center" style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              玮莱达拥有二十年行业经验，配备先进的激光切割、数控折弯、冲压成型设备，专业团队提供高精度钣金加工定制服务
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <Link to="/services" className="btn btn-primary btn-lg" style={{
                backgroundColor: 'var(--accent-color)',
                borderColor: 'var(--accent-color)',
                padding: '0.8rem 1.8rem',
                fontWeight: '600'
              }}>
                了解服务 <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link to="/contact" className="btn btn-outline-primary btn-lg" style={{
                color: 'var(--white)',
                borderColor: 'var(--white)',
                padding: '0.8rem 1.8rem',
                fontWeight: '600'
              }}>
                联系我们 <i className="fas fa-envelope ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 关于简介 - 专业SEO优化 */}
      <section className="section" style={{backgroundColor: 'var(--light-color)', padding: '3rem 0'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title mb-4" style={{color: 'var(--primary-color)', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '0.5rem', display: 'inline-block'}}>
                关于玮莱达
              </h2>
              <p className="mb-4" style={{lineHeight: '1.8', color: 'var(--dark-color)'}}>
                玮莱达是一家专业的高精度钣金冲压加工企业，拥有先进的数控设备和完善的质量管理体系。
                我们专注于各类钣金件的设计、生产和加工服务，为客户提供定制化的解决方案。
              </p>
              <p className="mb-6" style={{lineHeight: '1.8', color: 'var(--dark-color)'}}>
                我们的团队由经验丰富的工程师和技术人员组成，能够满足电子设备、机械设备、汽车零部件等多个行业的需求。
                严格的质量控制流程确保每件产品都达到国际标准，为客户创造最大价值。
              </p>
              <Link to="/about" 
                className="btn" 
                style={{
                  backgroundColor: 'var(--primary-color)',
                  color: 'var(--white)',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  border: 'none'
                }}
              >
                了解更多
              </Link>
            </div>
            <div className="col-lg-6">
              <div style={{border: '1px solid var(--border-color)', padding: '8px', backgroundColor: 'var(--white)'}}>
                <img 
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
                  alt="玮莱达精密钣金加工工厂环境" 
                  title="玮莱达专业钣金加工生产线" 
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务项目 */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>我们的服务</h2>
          </div>
          
          <div className="row">
            {/* 服务项目 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <i className="fas fa-cogs"></i>
                <h3>激光切割</h3>
                <p>采用先进的激光切割设备，可精确切割各种金属板材，厚度从0.5mm到25mm，满足高精度加工需求。</p>
              </div>
            </div>
            
            {/* 服务项目 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <i className="fas fa-layer-group"></i>
                <h3>数控折弯</h3>
                <p>专业的数控折弯技术，可完成复杂的钣金成型加工，精度高达±0.1mm，确保产品一致性。</p>
              </div>
            </div>
            
            {/* 服务项目 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <i className="fas fa-hammer"></i>
                <h3>冲压成型</h3>
                <p>大型冲压设备可进行批量生产，提高生产效率，降低成本，适用于标准化产品的大规模制造。</p>
              </div>
            </div>
            
            {/* 服务项目 4 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <i className="fas fa-paint-brush"></i>
                <h3>表面处理</h3>
                <p>提供多种表面处理工艺，包括喷塑、喷漆、电镀、阳极氧化等，满足不同产品的外观和耐腐蚀需求。</p>
              </div>
            </div>
            
            {/* 服务项目 5 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <i className="fas fa-screwdriver"></i>
                <h3>组装加工</h3>
                <p>提供从零件到成品的一站式服务，包括焊接、铆接、装配等工序，确保产品的完整性和功能性。</p>
              </div>
            </div>
            
            {/* 服务项目 6 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <i className="fas fa-design"></i>
                <h3>定制设计</h3>
                <p>专业的设计团队可根据客户需求提供定制化解决方案，包括结构设计、工艺设计和成本优化。</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-outline-primary">
              查看全部服务 <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>产品展示</h2>
          </div>
          
          <div className="row">
            {/* 产品 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="product-item">
                <div className="product-img">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="工业设备外壳" 
                    className="img-fluid"
                  />
                </div>
                <div className="product-info">
                  <h3>工业设备外壳</h3>
                  <p>高精度加工的工业设备外壳，具有良好的防护性能和美观的外观设计。</p>
                  <Link to="/products" className="text-primary">查看详情 <i className="fas fa-arrow-right ml-1"></i></Link>
                </div>
              </div>
            </div>
            
            {/* 产品 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="product-item">
                <div className="product-img">
                  <img 
                    src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="不锈钢制品" 
                    className="img-fluid"
                  />
                </div>
                <div className="product-info">
                  <h3>不锈钢制品</h3>
                  <p>高品质不锈钢钣金制品，具有优异的耐腐蚀性和美观的表面处理效果。</p>
                  <Link to="/products" className="text-primary">查看详情 <i className="fas fa-arrow-right ml-1"></i></Link>
                </div>
              </div>
            </div>
            
            {/* 产品 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="product-item">
                <div className="product-img">
                  <img 
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="电子设备箱体" 
                    className="img-fluid"
                  />
                </div>
                <div className="product-info">
                  <h3>电子设备箱体</h3>
                  <p>专为电子设备设计的精密箱体，提供良好的电磁屏蔽和散热性能。</p>
                  <Link to="/products" className="text-primary">查看详情 <i className="fas fa-arrow-right ml-1"></i></Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-outline-primary">
              浏览更多产品 <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 客户评价 */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>客户评价</h2>
          </div>
          
          <div className="row">
            {/* 评价 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3 text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="mb-4">"他们的钣金加工质量非常出色，精度高，交货及时，服务态度也很好。我们已经合作多年，非常满意他们的产品和服务。"</p>
                  <div className="d-flex align-items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="客户头像" 
                      className="img-fluid rounded-circle mr-3" 
                      style={{ width: '50px', height: '50px' }}
                    />
                    <div>
                      <h5 className="mb-0">张先生</h5>
                      <p className="text-sm text-muted">某自动化设备公司经理</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 评价 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3 text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <p className="mb-4">"作为一家科技公司，我们对产品的精度和外观要求很高。这家钣金厂能够很好地满足我们的需求，是我们值得信赖的合作伙伴。"</p>
                  <div className="d-flex align-items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="客户头像" 
                      className="img-fluid rounded-circle mr-3" 
                      style={{ width: '50px', height: '50px' }}
                    />
                    <div>
                      <h5 className="mb-0">李女士</h5>
                      <p className="text-sm text-muted">某电子科技公司采购总监</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 评价 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3 text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="mb-4">"我们需要定制一批特殊规格的钣金件，他们的技术团队提供了很好的解决方案，并且在短时间内完成了生产。产品质量超出了我们的预期。"</p>
                  <div className="d-flex align-items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/men/67.jpg" 
                      alt="客户头像" 
                      className="img-fluid rounded-circle mr-3" 
                      style={{ width: '50px', height: '50px' }}
                    />
                    <div>
                      <h5 className="mb-0">王先生</h5>
                      <p className="text-sm text-muted">某机械设备公司工程师</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 CTA */}
      <section className="cta-section" style={{
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem' }}>准备好开始您的项目了吗？</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            无论您需要小批量定制还是大规模生产，我们都能为您提供专业的钣金加工解决方案。立即联系我们获取报价！
          </p>
          <Link to="/contact" className="btn btn-light btn-lg">
            立即联系 <i className="fas fa-envelope ml-2"></i>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
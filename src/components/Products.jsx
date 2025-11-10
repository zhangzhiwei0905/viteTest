import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  // 产品数据
  const products = [
    {
      id: 1,
      name: '工业设备外壳',
      description: '高精度加工的工业设备外壳，具有良好的防护性能和美观的外观设计。采用优质材料制造，可根据客户需求进行定制。',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '设备外壳',
      features: ['高精度加工', '优质材料', '防护性能好', '美观耐用']
    },
    {
      id: 2,
      name: '不锈钢制品',
      description: '高品质不锈钢钣金制品，具有优异的耐腐蚀性和美观的表面处理效果。适用于各种环境下的使用需求。',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '不锈钢产品',
      features: ['耐腐蚀', '美观耐用', '表面处理多样', '易清洁']
    },
    {
      id: 3,
      name: '电子设备箱体',
      description: '专为电子设备设计的精密箱体，提供良好的电磁屏蔽和散热性能。保护电子元件免受外部环境的影响。',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '电子设备',
      features: ['电磁屏蔽', '散热性能好', '防尘防水', '结构稳固']
    },
    {
      id: 4,
      name: '医疗设备外壳',
      description: '符合医疗行业标准的设备外壳，具有良好的卫生性能和耐腐蚀性能。适用于各种医疗设备的外壳需求。',
      image: 'https://images.unsplash.com/photo-1593642632500-2682810df593?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '医疗设备',
      features: ['符合医疗标准', '易清洁', '耐腐蚀', '安全可靠']
    },
    {
      id: 5,
      name: '通信设备机柜',
      description: '高性能通信设备机柜，具有良好的防护性能和散热性能。为通信设备提供安全可靠的安装环境。',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '通信设备',
      features: ['防护性能好', '散热性能优异', '安装便捷', '结构稳固']
    },
    {
      id: 6,
      name: '自动化设备零件',
      description: '高精度自动化设备零件，确保自动化设备的正常运行和高精度要求。采用先进的加工工艺制造。',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '自动化设备',
      features: ['高精度', '高耐磨', '一致性好', '使用寿命长']
    },
    {
      id: 7,
      name: '太阳能支架',
      description: '高强度太阳能支架系统，为太阳能电池板提供稳定的安装支撑。采用优质材料制造，具有良好的耐候性。',
      image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '新能源设备',
      features: ['高强度', '耐候性好', '安装便捷', '使用寿命长']
    },
    {
      id: 8,
      name: '展示架和陈列柜',
      description: '美观实用的展示架和陈列柜，用于产品展示和陈列。可根据客户需求进行定制设计和制造。',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '商业展示',
      features: ['美观大方', '结构稳固', '拆装便捷', '可定制化']
    },
    {
      id: 9,
      name: '厨房设备配件',
      description: '不锈钢厨房设备配件，具有良好的耐腐蚀性和卫生性能。适用于各种厨房设备的制造和维修。',
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '厨房设备',
      features: ['食品级材质', '易清洁', '耐腐蚀', '使用寿命长']
    }
  ]

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
          <h1>产品展示</h1>
          <p className="mt-2">高品质钣金加工产品，满足您的各种需求</p>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* 产品过滤 */}
            <div className="col-lg-3 mb-4">
              <div className="filter-box" style={{ padding: '1.5rem', backgroundColor: 'var(--light-color)', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
                <h3>产品分类</h3>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <a href="#" className="text-primary"><i className="fas fa-check mr-2"></i>全部产品</a>
                  </li>
                  <li className="mb-2">
                    <a href="#"><i className="fas fa-circle mr-2"></i>设备外壳</a>
                  </li>
                  <li className="mb-2">
                    <a href="#"><i className="fas fa-circle mr-2"></i>不锈钢产品</a>
                  </li>
                  <li className="mb-2">
                    <a href="#"><i className="fas fa-circle mr-2"></i>电子设备</a>
                  </li>
                  <li className="mb-2">
                    <a href="#"><i className="fas fa-circle mr-2"></i>医疗设备</a>
                  </li>
                  <li className="mb-2">
                    <a href="#"><i className="fas fa-circle mr-2"></i>通信设备</a>
                  </li>
                  <li className="mb-2">
                    <a href="#"><i className="fas fa-circle mr-2"></i>自动化设备</a>
                  </li>
                  <li className="mb-2">
                    <a href="#"><i className="fas fa-circle mr-2"></i>新能源设备</a>
                  </li>
                  <li className="mb-2">
                    <a href="#"><i className="fas fa-circle mr-2"></i>商业展示</a>
                  </li>
                </ul>
                
                <div className="mt-5">
                  <h3>材质</h3>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">
                      <input type="checkbox" id="material1" className="mr-2" />
                      <label htmlFor="material1">不锈钢</label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" id="material2" className="mr-2" />
                      <label htmlFor="material2">碳钢</label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" id="material3" className="mr-2" />
                      <label htmlFor="material3">铝合金</label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" id="material4" className="mr-2" />
                      <label htmlFor="material4">铜</label>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-5">
                  <button className="btn btn-primary w-100">应用筛选</button>
                </div>
              </div>
            </div>
            
            {/* 产品列表 */}
            <div className="col-lg-9">
              <div className="row">
                {products.map(product => (
                  <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="product-item">
                      <div className="product-img" style={{ height: '200px', overflow: 'hidden' }}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="img-fluid w-100 h-100 object-cover"
                          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                          style={{ transition: 'transform 0.5s ease' }}
                        />
                      </div>
                      <div className="product-info">
                        <div className="product-category" style={{ fontSize: '0.875rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                          {product.category}
                        </div>
                        <h3>{product.name}</h3>
                        <p className="text-muted mb-3">{product.description.substring(0, 100)}...</p>
                        <div className="product-features mb-3">
                          {product.features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="badge badge-primary mr-2 mb-2">{feature}</span>
                          ))}
                        </div>
                        <Link to="/contact" className="btn btn-outline-primary w-100">
                          查看详情
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 分页 */}
              <div className="pagination justify-content-center mt-5">
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品定制说明 */}
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="产品定制" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6 pl-lg-5">
              <h2>产品定制</h2>
              <p className="mb-4">
                我们提供专业的产品定制服务，根据客户的需求和图纸，定制各种规格和类型的钣金产品。
                无论您需要小批量定制还是大规模生产，我们都能为您提供高品质的产品和服务。
              </p>
              <h3 className="mt-4 mb-2">定制流程</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="step-number" style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>1</div>
                    <div>
                      <h4>需求沟通</h4>
                      <p>了解客户需求，提供专业建议</p>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="step-number" style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>2</div>
                    <div>
                      <h4>设计方案</h4>
                      <p>根据需求设计产品方案</p>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="step-number" style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>3</div>
                    <div>
                      <h4>样品制作</h4>
                      <p>制作样品，客户确认</p>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="step-number" style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>4</div>
                    <div>
                      <h4>批量生产</h4>
                      <p>根据确认的样品进行批量生产</p>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="step-number" style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>5</div>
                    <div>
                      <h4>品质检验</h4>
                      <p>严格的品质检验，确保产品质量</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-start">
                    <div className="step-number" style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>6</div>
                    <div>
                      <h4>交付使用</h4>
                      <p>按时交付，提供售后服务</p>
                    </div>
                  </div>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary mt-4">
                定制咨询 <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 呼吁行动 */}
      <section className="cta-section" style={{
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem' }}>需要定制钣金产品？</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            我们的专业团队可以根据您的需求，为您定制高品质的钣金产品。立即联系我们，获取专业的定制方案！
          </p>
          <Link to="/contact" className="btn btn-light btn-lg">
            立即定制 <i className="fas fa-envelope ml-2"></i>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
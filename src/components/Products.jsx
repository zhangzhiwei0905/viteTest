import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  // 状态管理
  const [selectedCategory, setSelectedCategory] = useState('所有')
  const [selectedMaterial, setSelectedMaterial] = useState('所有')
  
  // 产品数据 - 基于参考网站的钣金冲压产品风格
  const products = [
    {
      id: 1,
      name: '精密钣金冲压件',
      description: '通过冲压设备和模具对金属板材施加压力，使其产生塑性变形或分离，从而获得具有特定形状、尺寸和性能的零件。',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '冲压件',
      material: '不锈钢',
      features: ['高精度加工', '高强度', '耐腐蚀', '一致性好']
    },
    {
      id: 2,
      name: '自动化设备外壳',
      description: '为自动化设备提供保护和美观外观的精密钣金外壳，采用优质材料制造，具有良好的防护性能。',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '设备外壳',
      material: '冷轧钢',
      features: ['防护性能好', '美观耐用', '结构稳固', '可定制化']
    },
    {
      id: 3,
      name: '电子控制柜',
      description: '专为电子设备设计的控制柜，提供良好的电磁屏蔽和散热性能，保护电子元件免受外部环境的影响。',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '控制柜',
      material: '镀锌板',
      features: ['电磁屏蔽', '散热性能好', '防尘防水', '结构稳固']
    },
    {
      id: 4,
      name: '医疗设备钣金外壳',
      description: '符合医疗行业标准的设备外壳，具有良好的卫生性能和耐腐蚀性能，适用于各种医疗设备。',
      image: 'https://images.unsplash.com/photo-1593642632500-2682810df593?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '医疗设备',
      material: '不锈钢',
      features: ['符合医疗标准', '易清洁', '耐腐蚀', '安全可靠']
    },
    {
      id: 5,
      name: '通信设备机柜',
      description: '高性能通信设备机柜，具有良好的防护性能和散热性能，为通信设备提供安全可靠的安装环境。',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '通信设备',
      material: '冷轧钢',
      features: ['防护性能好', '散热性能优异', '安装便捷', '结构稳固']
    },
    {
      id: 6,
      name: '工业自动化配件',
      description: '高精度工业自动化设备配件，确保自动化设备的正常运行和高精度要求，采用先进的加工工艺制造。',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '自动化配件',
      material: '铝合金',
      features: ['高精度', '高耐磨', '一致性好', '使用寿命长']
    },
    {
      id: 7,
      name: '太阳能支架系统',
      description: '高强度太阳能支架系统，为太阳能电池板提供稳定的安装支撑，采用优质材料制造，具有良好的耐候性。',
      image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '新能源设备',
      material: '铝合金',
      features: ['高强度', '耐候性好', '安装便捷', '使用寿命长']
    },
    {
      id: 8,
      name: '商业展示架',
      description: '美观实用的商业展示架，用于产品展示和陈列，可根据客户需求进行定制设计和制造。',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '商业展示',
      material: '不锈钢',
      features: ['美观大方', '结构稳固', '拆装便捷', '可定制化']
    },
    {
      id: 9,
      name: '不锈钢厨房设备配件',
      description: '优质不锈钢厨房设备配件，具有良好的耐腐蚀性和卫生性能，适用于各种厨房设备的制造和维修。',
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: '厨房设备',
      material: '不锈钢',
      features: ['食品级材质', '易清洁', '耐腐蚀', '使用寿命长']
    }
  ]
  
  // 提取唯一的分类和材质
  const categories = ['所有', ...Array.from(new Set(products.map(product => product.category)))]
  const materials = ['所有', ...Array.from(new Set(products.map(product => product.material)))]
  
  // 过滤产品
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === '所有' || product.category === selectedCategory
    const materialMatch = selectedMaterial === '所有' || product.material === selectedMaterial
    return categoryMatch && materialMatch
  })

  return (
    <div className="page-transition">
      {/* 页面标题 - 专业SEO优化 */}
      <section className="page-header" style={{
        backgroundColor: 'var(--primary-color)',
        padding: '80px 0',
        color: 'var(--white)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{color: 'var(--white)', marginBottom: '1rem'}}>专业钣金冲压产品</h1>
          <p className="mt-2" style={{fontSize: '1.1rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
            玮莱达提供高精度钣金冲压加工服务，使用先进设备和优质材料，满足各行业客户的定制需求
          </p>
        </div>
      </section>

      {/* 产品展示 - 符合参考网站风格 */}
      <section className="section" style={{backgroundColor: 'var(--white)', padding: '2rem 0'}}>
        <div className="container">
          {/* 产品分类和材质筛选 */}
          <div className="filter-section mb-5" style={{backgroundColor: 'var(--light-color)', padding: '1.5rem', borderRadius: '5px'}}>
            <div className="row">
              <div className="col-md-6 mb-3 mb-md-0">
                <label htmlFor="categoryFilter" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark-color)'}}>
                  产品分类
                </label>
                <select 
                  id="categoryFilter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    backgroundColor: 'var(--white)'
                  }}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="materialFilter" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark-color)'}}>
                  材质选择
                </label>
                <select 
                  id="materialFilter"
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    backgroundColor: 'var(--white)'
                  }}
                >
                  {materials.map(material => (
                    <option key={material} value={material}>{material}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
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
            
            {/* 产品列表 - SEO优化的产品卡片 */}
            <div className="col-lg-9">
              <div className="row">
                {filteredProducts.map(product => (
                  <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 border border-secondary" style={{borderRadius: '3px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}}>
                      <div className="p-2" style={{backgroundColor: 'var(--light-color)'}}>
                        <span className="text-sm" style={{color: 'var(--secondary-color)', fontWeight: '600'}}>
                          材质: {product.material}
                        </span>
                      </div>
                      <div className="product-img" style={{ height: '160px', overflow: 'hidden' }}>
                        <img 
                          src={product.image} 
                          alt={`${product.name} - 高精度${product.category}`} 
                          title={`${product.name} - 玮莱达高品质钣金产品`}
                          className="img-fluid w-100 h-100 object-cover"
                          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                          style={{ transition: 'transform 0.5s ease', borderBottom: '1px solid var(--border-color)' }}
                        />
                      </div>
                      <div className="card-body" style={{padding: '1rem'}}>
                        <div className="product-category" style={{ fontSize: '0.875rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                          {product.category}
                        </div>
                        <h4 className="card-title" style={{color: 'var(--dark-color)', fontSize: '1.1rem', marginBottom: '0.5rem'}}>
                          {product.name}
                        </h4>
                        <p className="card-text" style={{fontSize: '0.9rem', color: '#666', marginBottom: '1rem', minHeight: '40px'}}>
                          {product.description.substring(0, 100)}...
                        </p>
                        <div className="product-features mb-3">
                          {product.features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="badge badge-primary mr-2 mb-2">{feature}</span>
                          ))}
                        </div>
                        <div className="text-center">
                          <Link to="/contact" 
                            className="btn" 
                            style={{
                              backgroundColor: 'var(--primary-color)',
                              color: 'var(--white)',
                              padding: '0.4rem 1.2rem',
                              borderRadius: '2px',
                              textDecoration: 'none',
                              border: 'none',
                              fontSize: '0.9rem',
                              width: '100%'
                            }}
                            aria-label={`查看${product.name}的详细信息`}
                          >
                            查看详情
                          </Link>
                        </div>
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
      
      {/* 产品页底部SEO增强部分 */}
      <section style={{backgroundColor: 'var(--light-color)', padding: '2rem 0', borderTop: '1px solid var(--border-color)'}}>
        <div className="container">
          <div className="text-center" style={{maxWidth: '900px', margin: '0 auto'}}>
            <h3 style={{color: 'var(--primary-color)', marginBottom: '1rem'}}>精密钣金加工解决方案</h3>
            <p style={{marginBottom: '1.5rem', lineHeight: '1.6'}}>
              玮莱达专业提供高质量钣金冲压加工服务，支持定制化设计和大批量生产。
              我们的产品广泛应用于电子设备外壳、机械设备配件、汽车零部件等领域，
              严格的质量控制体系确保每一件产品都达到客户的高标准要求。
            </p>
            <Link to="/contact" 
              className="btn" 
              style={{
                backgroundColor: 'var(--secondary-color)',
                color: 'var(--white)',
                padding: '0.6rem 2rem',
                borderRadius: '2px',
                textDecoration: 'none',
                border: 'none',
                fontWeight: '600'
              }}
            >
              获取报价咨询
            </Link>
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
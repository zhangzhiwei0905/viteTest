import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
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
          <h1>服务项目</h1>
          <p className="mt-2">专业的钣金加工解决方案，满足您的各种需求</p>
        </div>
      </section>

      {/* 服务概览 */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2>我们的服务</h2>
              <p className="mb-4">
                作为专业的钣金加工企业，我们提供全方位的钣金加工服务，从设计到生产，从样品到批量，为客户提供一站式的解决方案。
                我们的服务涵盖了激光切割、数控折弯、冲压成型、表面处理、组装加工等多个环节，能够满足不同客户的多样化需求。
              </p>
              <p className="mb-4">
                我们拥有先进的加工设备和专业的技术团队，能够处理各种复杂的钣金加工任务，包括高精度、高难度的产品。
                我们的服务理念是：以客户为中心，以质量为生命，以效率为保障，为客户创造更大的价值。
              </p>
              <Link to="/contact" className="btn btn-primary">
                获取报价 <i className="fas fa-file-invoice-dollar ml-2"></i>
              </Link>
            </div>
            <div className="col-lg-6 pl-lg-5">
              <img 
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="钣金加工服务" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 服务详情 */}
      <section className="section bg-light">
        <div className="container">
          {/* 激光切割 */}
          <div className="service-detail mb-12" style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)', marginBottom: '3rem' }}>
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="service-icon" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                  <i className="fas fa-cogs"></i>
                </div>
                <h3>激光切割</h3>
                <div className="service-divider" style={{ width: '50px', height: '3px', backgroundColor: 'var(--primary-color)', margin: '1.5rem 0' }}></div>
              </div>
              <div className="col-lg-8">
                <p className="mb-4">
                  我们采用先进的光纤激光切割机，可精确切割各种金属板材，包括不锈钢、碳钢、铝合金、铜等。
                  激光切割具有精度高、速度快、无毛刺、热影响区小等优点，适用于复杂形状的精密零件加工。
                </p>
                <div className="service-specs">
                  <h4>技术参数</h4>
                  <ul className="list-unstyled mt-2">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      切割厚度：0.5mm-25mm
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      切割精度：±0.1mm
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      最大切割尺寸：3000mm×1500mm
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      支持材料：不锈钢、碳钢、铝合金、铜等
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 数控折弯 */}
          <div className="service-detail mb-12" style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)', marginBottom: '3rem' }}>
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="service-icon" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                  <i className="fas fa-layer-group"></i>
                </div>
                <h3>数控折弯</h3>
                <div className="service-divider" style={{ width: '50px', height: '3px', backgroundColor: 'var(--primary-color)', margin: '1.5rem 0' }}></div>
              </div>
              <div className="col-lg-8">
                <p className="mb-4">
                  我们配备了多台数控折弯机，可完成复杂的钣金成型加工。数控折弯具有精度高、重复性好、生产效率高等优点，
                  能够满足高精度产品的加工需求。我们的技术人员具有丰富的折弯经验，能够处理各种复杂的折弯工艺。
                </p>
                <div className="service-specs">
                  <h4>技术参数</h4>
                  <ul className="list-unstyled mt-2">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      最大折弯长度：3000mm
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      最大折弯厚度：12mm
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      折弯精度：±0.1mm
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      支持材料：不锈钢、碳钢、铝合金等
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 冲压成型 */}
          <div className="service-detail mb-12" style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)', marginBottom: '3rem' }}>
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="service-icon" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                  <i className="fas fa-hammer"></i>
                </div>
                <h3>冲压成型</h3>
                <div className="service-divider" style={{ width: '50px', height: '3px', backgroundColor: 'var(--primary-color)', margin: '1.5rem 0' }}></div>
              </div>
              <div className="col-lg-8">
                <p className="mb-4">
                  我们拥有多台冲压设备，可进行批量生产，提高生产效率，降低成本。冲压成型适用于标准化产品的大规模制造，
                  具有生产效率高、成本低、一致性好等优点。我们的模具设计团队能够根据客户需求设计和制造各种冲压模具。
                </p>
                <div className="service-specs">
                  <h4>技术参数</h4>
                  <ul className="list-unstyled mt-2">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      冲床吨位：10吨-200吨
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      最大冲压尺寸：2000mm×1000mm
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      最大冲压厚度：8mm
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      支持材料：碳钢、不锈钢、铝合金等
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 表面处理 */}
          <div className="service-detail mb-12" style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)', marginBottom: '3rem' }}>
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="service-icon" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3>表面处理</h3>
                <div className="service-divider" style={{ width: '50px', height: '3px', backgroundColor: 'var(--primary-color)', margin: '1.5rem 0' }}></div>
              </div>
              <div className="col-lg-8">
                <p className="mb-4">
                  我们提供多种表面处理工艺，包括喷塑、喷漆、电镀、阳极氧化等，满足不同产品的外观和耐腐蚀需求。
                  表面处理不仅可以提高产品的美观度，还可以增强产品的耐腐蚀性、耐磨性和使用寿命。
                </p>
                <div className="service-specs">
                  <h4>处理工艺</h4>
                  <ul className="list-unstyled mt-2">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      喷塑：粉末静电喷涂，提供各种颜色和纹理
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      喷漆：液体涂料喷涂，包括哑光、亮光等效果
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      电镀：镀锌、镀铬、镀镍等，提高耐腐蚀性
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      阳极氧化：主要用于铝合金，提供各种颜色和硬度
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      拉丝、抛光：提高表面光洁度
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 组装加工 */}
          <div className="service-detail mb-12" style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)', marginBottom: '3rem' }}>
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="service-icon" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                  <i className="fas fa-screwdriver"></i>
                </div>
                <h3>组装加工</h3>
                <div className="service-divider" style={{ width: '50px', height: '3px', backgroundColor: 'var(--primary-color)', margin: '1.5rem 0' }}></div>
              </div>
              <div className="col-lg-8">
                <p className="mb-4">
                  我们提供从零件到成品的一站式服务，包括焊接、铆接、装配等工序，确保产品的完整性和功能性。
                  我们的装配团队具有丰富的经验，能够按照客户的要求完成各种复杂产品的装配任务。
                </p>
                <div className="service-specs">
                  <h4>加工工艺</h4>
                  <ul className="list-unstyled mt-2">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      焊接：氩弧焊、二氧化碳保护焊、点焊等
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      铆接：压铆、拉铆等
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      螺栓连接：各种标准和非标准螺栓连接
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      电气装配：简单的电气元件安装和接线
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 定制设计 */}
          <div className="service-detail" style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="service-icon" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                  <i className="fas fa-pencil-alt"></i>
                </div>
                <h3>定制设计</h3>
                <div className="service-divider" style={{ width: '50px', height: '3px', backgroundColor: 'var(--primary-color)', margin: '1.5rem 0' }}></div>
              </div>
              <div className="col-lg-8">
                <p className="mb-4">
                  我们的设计团队拥有丰富的经验和专业知识，能够根据客户需求提供定制化解决方案，包括结构设计、工艺设计和成本优化。
                  我们使用先进的CAD/CAM软件进行设计和模拟，确保产品的可行性和优化性。
                </p>
                <div className="service-specs">
                  <h4>设计能力</h4>
                  <ul className="list-unstyled mt-2">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      3D建模和渲染
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      结构强度分析
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      工艺优化和成本分析
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      样品制作和测试
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      技术文档编写
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 行业解决方案 */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>行业解决方案</h2>
          </div>
          
          <div className="row">
            {/* 自动化设备 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="自动化设备" 
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">自动化设备</h3>
                  <p className="card-text">
                    为自动化设备制造商提供高精度、高质量的钣金外壳和零部件，包括控制系统箱体、机械臂防护罩等。
                  </p>
                  <Link to="/contact" className="text-primary">了解更多 <i className="fas fa-arrow-right ml-1"></i></Link>
                </div>
              </div>
            </div>
            
            {/* 电子电器 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="电子电器" 
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">电子电器</h3>
                  <p className="card-text">
                    为电子电器行业提供精密的钣金箱体和外壳，具有良好的电磁屏蔽和散热性能，适用于各种电子设备。
                  </p>
                  <Link to="/contact" className="text-primary">了解更多 <i className="fas fa-arrow-right ml-1"></i></Link>
                </div>
              </div>
            </div>
            
            {/* 医疗设备 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img 
                  src="https://images.unsplash.com/photo-1593642632500-2682810df593?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="医疗设备" 
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">医疗设备</h3>
                  <p className="card-text">
                    为医疗设备行业提供符合卫生标准的钣金零部件，包括医疗仪器外壳、设备支架等，满足医疗行业的严格要求。
                  </p>
                  <Link to="/contact" className="text-primary">了解更多 <i className="fas fa-arrow-right ml-1"></i></Link>
                </div>
              </div>
            </div>
            
            {/* 通信设备 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img 
                  src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="通信设备" 
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">通信设备</h3>
                  <p className="card-text">
                    为通信设备行业提供高性能的钣金箱体和支架，包括基站设备外壳、服务器机柜等，具有良好的防护性能。
                  </p>
                  <Link to="/contact" className="text-primary">了解更多 <i className="fas fa-arrow-right ml-1"></i></Link>
                </div>
              </div>
            </div>
            
            {/* 机械设备 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img 
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="机械设备" 
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">机械设备</h3>
                  <p className="card-text">
                    为机械设备行业提供高强度、耐用的钣金零部件，包括机械防护外壳、设备框架等，满足各种复杂环境的使用需求。
                  </p>
                  <Link to="/contact" className="text-primary">了解更多 <i className="fas fa-arrow-right ml-1"></i></Link>
                </div>
              </div>
            </div>
            
            {/* 新能源设备 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img 
                  src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="新能源设备" 
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">新能源设备</h3>
                  <p className="card-text">
                    为新能源行业提供专业的钣金解决方案，包括太阳能设备支架、风力发电设备零部件等，适应新能源产业的发展需求。
                  </p>
                  <Link to="/contact" className="text-primary">了解更多 <i className="fas fa-arrow-right ml-1"></i></Link>
                </div>
              </div>
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
          <h2 style={{ marginBottom: '1.5rem' }}>需要钣金加工服务？</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            无论您需要哪种钣金加工服务，我们都能为您提供专业的解决方案。立即联系我们，获取免费报价！
          </p>
          <Link to="/contact" className="btn btn-light btn-lg">
            立即联系 <i className="fas fa-envelope ml-2"></i>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
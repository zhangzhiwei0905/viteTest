import React, { useState } from 'react'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  // 图片数据
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: '工厂全景',
      category: 'factory',
      title: '工厂全景'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: '生产车间',
      category: 'workshop',
      title: '生产车间'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: '激光切割机',
      category: 'equipment',
      title: '激光切割机'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: '数控折弯机',
      category: 'equipment',
      title: '数控折弯机'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: '冲压设备',
      category: 'equipment',
      title: '冲压设备'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: '焊接车间',
      category: 'workshop',
      title: '焊接车间'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: '表面处理车间',
      category: 'workshop',
      title: '表面处理车间'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1593642632500-2682810df593?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: '质量检测',
      category: 'quality',
      title: '质量检测'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1581092929311-c77333aa3c47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: '装配车间',
      category: 'workshop',
      title: '装配车间'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: '仓库管理',
      category: 'factory',
      title: '仓库管理'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: '技术团队',
      category: 'team',
      title: '技术团队'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1573164574572-cf91398b02c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: '生产现场',
      category: 'workshop',
      title: '生产现场'
    }
  ]
  
  // 过滤图片
  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory)
  
  // 打开图片预览
  const [previewImage, setPreviewImage] = useState(null)
  
  const openPreview = (image) => {
    setPreviewImage(image)
  }
  
  const closePreview = () => {
    setPreviewImage(null)
  }
  
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
          <h1>工厂展示</h1>
          <p className="mt-2">参观我们的工厂，了解我们的生产环境和设备</p>
        </div>
      </section>

      {/* 图片展示 */}
      <section className="section">
        <div className="container">
          {/* 分类过滤器 */}
          <div className="gallery-filter text-center mb-5">
            <button 
              className={`btn ${activeCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'} mx-1 mb-2`}
              onClick={() => setActiveCategory('all')}
            >
              全部
            </button>
            <button 
              className={`btn ${activeCategory === 'factory' ? 'btn-primary' : 'btn-outline-primary'} mx-1 mb-2`}
              onClick={() => setActiveCategory('factory')}
            >
              工厂环境
            </button>
            <button 
              className={`btn ${activeCategory === 'workshop' ? 'btn-primary' : 'btn-outline-primary'} mx-1 mb-2`}
              onClick={() => setActiveCategory('workshop')}
            >
              生产车间
            </button>
            <button 
              className={`btn ${activeCategory === 'equipment' ? 'btn-primary' : 'btn-outline-primary'} mx-1 mb-2`}
              onClick={() => setActiveCategory('equipment')}
            >
              设备展示
            </button>
            <button 
              className={`btn ${activeCategory === 'quality' ? 'btn-primary' : 'btn-outline-primary'} mx-1 mb-2`}
              onClick={() => setActiveCategory('quality')}
            >
              质量检测
            </button>
            <button 
              className={`btn ${activeCategory === 'team' ? 'btn-primary' : 'btn-outline-primary'} mx-1 mb-2`}
              onClick={() => setActiveCategory('team')}
            >
              团队风采
            </button>
          </div>
          
          {/* 图片网格 */}
          <div className="gallery-grid row">
            {filteredImages.map(image => (
              <div key={image.id} className="col-lg-4 col-md-6 mb-4">
                <div className="gallery-item" style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="img-fluid w-100 h-100 object-cover" 
                    style={{ height: '250px', transition: 'transform 0.5s ease' }}
                    onClick={() => openPreview(image)}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div className="gallery-caption" style={{ padding: '1rem', backgroundColor: 'white' }}>
                    <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center mt-5">
              <p>暂无该分类的图片</p>
            </div>
          )}
        </div>
      </section>

      {/* 工厂介绍 */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2>现代化工厂</h2>
              <p className="mb-4">
                我们拥有现代化的生产工厂，占地面积超过10,000平方米，配备了先进的加工设备和完善的生产设施。
                工厂环境整洁有序，管理规范，为员工提供了良好的工作环境，也为产品质量提供了保障。
              </p>
              <p className="mb-4">
                我们注重环境保护和安全生产，严格遵守相关法律法规，建立了完善的环境管理体系和安全生产管理体系。
                工厂通过了ISO 14001环境管理体系认证和安全生产标准化认证。
              </p>
              <h3 className="mt-5 mb-3">工厂优势</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success mr-2"></i>
                  现代化的生产设备和设施
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success mr-2"></i>
                  完善的质量管理体系
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success mr-2"></i>
                  专业的技术团队和管理团队
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success mr-2"></i>
                  良好的工作环境和企业文化
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success mr-2"></i>
                  严格的环境和安全管理
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pl-lg-5">
              <div className="row">
                <div className="col-12 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581092929311-c77333aa3c47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="工厂环境" 
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-6">
                  <img 
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="生产管理" 
                    className="img-fluid rounded shadow"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-6">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="团队协作" 
                    className="img-fluid rounded shadow"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 设备展示 */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>先进设备</h2>
          </div>
          
          <div className="row">
            {/* 设备 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="激光切割机" 
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h3 className="card-title">激光切割机</h3>
                  <p className="card-text">
                    我们引进了国际先进的光纤激光切割机，切割精度高，速度快，适用于各种金属材料的精密切割。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 设备 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="数控折弯机" 
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h3 className="card-title">数控折弯机</h3>
                  <p className="card-text">
                    高精度数控折弯机，可完成复杂的钣金成型加工，精度高达±0.1mm，确保产品的一致性和稳定性。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 设备 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="冲压设备" 
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h3 className="card-title">冲压设备</h3>
                  <p className="card-text">
                    多台不同吨位的冲压设备，可满足不同规格和批量的冲压加工需求，提高生产效率，降低成本。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 图片预览模态框 */}
      {previewImage && (
        <div className="modal" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }} onClick={closePreview}>
          <div style={{ maxWidth: '90%', maxHeight: '90%' }}>
            <img 
              src={previewImage.src} 
              alt={previewImage.alt} 
              className="img-fluid"
            />
            <h3 style={{ color: 'white', textAlign: 'center', marginTop: '1rem' }}>{previewImage.title}</h3>
          </div>
          <button 
            onClick={closePreview}
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              color: 'white',
              fontSize: '30px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  )
}

export default Gallery
export default function ServicesSection() {
  const services = [
    {
      icon: 'fas fa-cut',
      title: '激光切割',
      description: '采用先进的激光切割设备，提供高精度、高效率的金属板材切割服务。'
    },
    {
      icon: 'fas fa-cogs',
      title: '折弯成型',
      description: '专业的数控折弯机，能够满足各种复杂形状的金属板材折弯需求。'
    },
    {
      icon: 'fas fa-welding',
      title: '焊接装配',
      description: '经验丰富的焊接团队，提供高质量的焊接服务和完整的产品装配解决方案。'
    },
    {
      icon: 'fas fa-paint-brush',
      title: '表面处理',
      description: '提供喷漆、喷粉、镀锌等多种表面处理工艺，满足不同的外观和防腐需求。'
    }
  ];

  return (
    <section 
      className="services" 
      style={{
        backgroundColor: 'var(--bg-color)',
        padding: '4rem 0'
      }}
    >
      <div className="container">
        <div className="section-title text-center mb-10">
          <h2 
            style={{
              color: 'var(--primary-color)',
              marginBottom: '1rem',
              borderBottom: 'none'
            }}
          >
            我们的服务
          </h2>
          <div 
            style={{
              width: '100px',
              height: '3px',
              backgroundColor: 'var(--primary-color)',
              margin: '0 auto'
            }}
          ></div>
        </div>
        
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div 
                className="service-card" 
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  backgroundColor: 'var(--white)',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow)';
                }}
              >
                <i 
                  className={service.icon} 
                  style={{
                    fontSize: '2.5rem',
                    color: 'var(--primary-color)',
                    marginBottom: '1.5rem'
                  }}
                ></i>
                <h3 
                  style={{
                    color: 'var(--secondary-color)',
                    marginBottom: '1rem',
                    fontSize: '1.3rem'
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  style={{
                    color: 'var(--text-color)',
                    lineHeight: '1.6'
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
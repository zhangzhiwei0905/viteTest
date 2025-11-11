import Link from 'next/link';

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: '不锈钢机柜',
      description: '高品质不锈钢机柜，适用于各种电子设备的保护和安装。',
      image: '/images/product-placeholder.svg',
      material: '不锈钢'
    },
    {
      id: 2,
      name: '铝合金外壳',
      description: '轻量化铝合金外壳，具有良好的散热性能和美观的外观。',
      image: '/images/product-placeholder.svg',
      material: '铝合金'
    },
    {
      id: 3,
      name: '镀锌板配件',
      description: '耐腐蚀镀锌板配件，适用于各种机械设备的配套使用。',
      image: '/images/product-placeholder.svg',
      material: '镀锌板'
    },
    {
      id: 4,
      name: '精密钣金件',
      description: '高精度钣金加工件，满足各种复杂形状和严格公差要求。',
      image: '/images/product-placeholder.svg',
      material: '冷轧板'
    }
  ];

  return (
    <section 
      className="products" 
      style={{
        backgroundColor: 'var(--white)',
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
            产品展示
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
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-4">
              <div 
                className="product-item" 
                style={{
                  marginBottom: '2rem',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow)';
                }}
              >
                <div 
                  className="product-img" 
                  style={{
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <div 
                    className="material-tag" 
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: 'var(--accent-color)',
                      color: 'var(--white)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}
                  >
                    {product.material}
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    title={product.name} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    loading="lazy"
                  />
                </div>
                <div 
                  className="product-info" 
                  style={{
                    padding: '1.5rem',
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <h3 
                    style={{
                      color: 'var(--primary-color)',
                      marginBottom: '0.5rem',
                      fontSize: '1.2rem'
                    }}
                  >
                    {product.name}
                  </h3>
                  <p 
                    style={{
                      color: 'var(--text-color)',
                      marginBottom: '1rem',
                      fontSize: '0.9rem',
                      flex: '1'
                    }}
                  >
                    {product.description}
                  </p>
                  <Link 
                    href={`/products`} 
                    className="btn btn-primary" 
                    style={{
                      backgroundColor: 'var(--primary-color)',
                      borderColor: 'var(--primary-color)',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      textAlign: 'center',
                      display: 'inline-block',
                      fontSize: '0.9rem'
                    }}
                    aria-label={`查看${product.name}详情`}
                  >
                    查看详情
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <Link 
            href="/products" 
            className="btn btn-outline-primary" 
            style={{
              borderColor: 'var(--primary-color)',
              color: 'var(--primary-color)',
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              fontWeight: '600',
              textDecoration: 'none'
            }}
          >
            查看更多产品
          </Link>
        </div>
      </div>
    </section>
  );
}
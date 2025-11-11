import Link from 'next/link';
import { useState } from 'react';
// eslint-disable-next-line no-undef

export default function ProductList() {
  const [category, setCategory] = useState('all');
  const [material, setMaterial] = useState('all');

  const products = [
    {
      id: 1,
      name: '不锈钢机柜',
      description: '高品质不锈钢机柜，适用于各种电子设备的保护和安装，具有良好的耐腐蚀性和美观的外观。',
      image: '/images/product-placeholder.svg',
      material: '不锈钢',
      category: '机箱机柜'
    },
    {
      id: 2,
      name: '铝合金外壳',
      description: '轻量化铝合金外壳，具有良好的散热性能和美观的外观，适用于电子设备和自动化设备。',
      image: '/images/product-placeholder.svg',
      material: '铝合金',
      category: '外壳配件'
    },
    {
      id: 3,
      name: '镀锌板配件',
      description: '耐腐蚀镀锌板配件，适用于各种机械设备的配套使用，具有良好的防锈性能。',
      image: '/images/product-placeholder.svg',
      material: '镀锌板',
      category: '配件组件'
    },
    {
      id: 4,
      name: '精密钣金件',
      description: '高精度钣金加工件，满足各种复杂形状和严格公差要求，适用于精密设备和仪器。',
      image: '/images/product-placeholder.svg',
      material: '冷轧板',
      category: '精密零件'
    },
    {
      id: 5,
      name: '不锈钢工作台',
      description: '坚固耐用的不锈钢工作台，适用于实验室、医疗设备和工业环境使用。',
      image: '/images/product-placeholder.svg',
      material: '不锈钢',
      category: '工作台类'
    },
    {
      id: 6,
      name: '铝合金支架',
      description: '轻量化铝合金支架，具有良好的强度和稳定性，适用于各种设备的支撑和安装。',
      image: '/images/product-placeholder.svg',
      material: '铝合金',
      category: '支架类'
    },
    {
      id: 7,
      name: '冷轧板外壳',
      description: '经济实用的冷轧板外壳，经过表面处理后具有良好的防护性能和美观度。',
      image: '/images/product-placeholder.svg',
      material: '冷轧板',
      category: '外壳配件'
    },
    {
      id: 8,
      name: '不锈钢防护栏',
      description: '安全可靠的不锈钢防护栏，适用于各种工业设备和自动化生产线的安全防护。',
      image: '/images/product-placeholder.svg',
      material: '不锈钢',
      category: '防护设备'
    }
  ];

  // 过滤产品
  const filteredProducts = products.filter(product => {
    const categoryMatch = category === 'all' || product.category === category;
    const materialMatch = material === 'all' || product.material === material;
    return categoryMatch && materialMatch;
  });

  // 获取唯一的分类和材质列表
  // 使用原生JavaScript的Set对象
  // eslint-disable-next-line no-undef
  const categories = ['all', ...Array.from(new Set(products.map(product => product.category)))];
  // eslint-disable-next-line no-undef
  const materials = ['all', ...Array.from(new Set(products.map(product => product.material)))];

  return (
    <div>
      {/* 筛选器区域 */}
      <div 
        className="filter-section mb-8" 
        style={{
          backgroundColor: 'var(--white)',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: 'var(--shadow)',
          marginBottom: '2rem'
        }}
      >
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <label 
              htmlFor="category-filter" 
              className="form-label mr-2" 
              style={{ color: 'var(--text-color)', marginRight: '0.5rem' }}
            >
              产品分类：
            </label>
            <select 
              id="category-filter" 
              className="form-select" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              style={{
                border: '1px solid #ddd',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--white)',
                cursor: 'pointer'
              }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? '全部分类' : cat}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label 
              htmlFor="material-filter" 
              className="form-label mr-2" 
              style={{ color: 'var(--text-color)', marginRight: '0.5rem' }}
            >
              材质选择：
            </label>
            <select 
              id="material-filter" 
              className="form-select" 
              value={material} 
              onChange={(e) => setMaterial(e.target.value)}
              style={{
                border: '1px solid #ddd',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--white)',
                cursor: 'pointer'
              }}
            >
              {materials.map(mat => (
                <option key={mat} value={mat}>
                  {mat === 'all' ? '全部材质' : mat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 产品列表 */}
      {filteredProducts.length > 0 ? (
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-6">
              <div 
                className="product-item" 
                style={{
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
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
                  <span 
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
                      fontWeight: '600',
                      zIndex: '1'
                    }}
                  >
                    {product.material}
                  </span>
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
                      fontSize: '1.2rem',
                      fontWeight: '600'
                    }}
                  >
                    {product.name}
                  </h3>
                  <p 
                    style={{
                      color: 'var(--text-light)',
                      marginBottom: '1rem',
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      flex: '1'
                    }}
                  >
                    {product.description}
                  </p>
                  <Link 
                    href={`#product-${product.id}`} 
                    className="btn btn-primary" 
                    style={{
                      backgroundColor: 'var(--primary-color)',
                      borderColor: 'var(--primary-color)',
                      color: 'var(--white)',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      textAlign: 'center',
                      display: 'inline-block',
                      fontSize: '0.9rem',
                      alignSelf: 'flex-start'
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
      ) : (
        <div 
          className="no-products" 
          style={{
            textAlign: 'center',
            padding: '3rem',
            backgroundColor: 'var(--white)',
            borderRadius: '8px',
            boxShadow: 'var(--shadow)'
          }}
        >
          <p style={{ color: 'var(--text-light)' }}>没有找到符合条件的产品</p>
          <button 
            className="btn btn-outline-primary mt-2" 
            onClick={() => {setCategory('all'); setMaterial('all');}}
            style={{
              borderColor: 'var(--primary-color)',
              color: 'var(--primary-color)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              fontWeight: '600',
              backgroundColor: 'transparent',
              cursor: 'pointer'
            }}
          >
            重置筛选条件
          </button>
        </div>
      )}
    </div>
  );
}
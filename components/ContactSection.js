export default function ContactSection() {
  return (
    <section 
      className="contact" 
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
            联系我们
          </h2>
          <div 
            style={{
              width: '100px',
              height: '3px',
              backgroundColor: 'var(--primary-color)',
              margin: '0 auto'
            }}
          ></div>
          <p 
            style={{
              color: 'var(--text-light)',
              marginTop: '1rem',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            如有任何问题或需求，请随时与我们联系，我们将尽快回复您
          </p>
        </div>
        
        <div className="row">
          <div className="col-lg-6 mb-6 mb-lg-0">
            <form>
              <div className="mb-4">
                <label htmlFor="contact-name" className="form-label" style={{ color: 'var(--text-color)', marginBottom: '0.5rem', display: 'block' }}>姓名</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="contact-name" 
                  placeholder="请输入您的姓名"
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '0.75rem',
                    width: '100%'
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contact-email" className="form-label" style={{ color: 'var(--text-color)', marginBottom: '0.5rem', display: 'block' }}>邮箱</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="contact-email" 
                  placeholder="请输入您的邮箱"
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '0.75rem',
                    width: '100%'
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contact-message" className="form-label" style={{ color: 'var(--text-color)', marginBottom: '0.5rem', display: 'block' }}>留言</label>
                <textarea 
                  className="form-control" 
                  id="contact-message" 
                  rows="5" 
                  placeholder="请输入您的需求"
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '0.75rem',
                    width: '100%'
                  }}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{
                  backgroundColor: 'var(--primary-color)',
                  borderColor: 'var(--primary-color)',
                  color: 'var(--white)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                发送
              </button>
            </form>
          </div>
          <div className="col-lg-6">
            <div 
              style={{
                backgroundColor: 'var(--white)',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: 'var(--shadow)'
              }}
            >
              <h3 
                style={{
                  color: 'var(--primary-color)',
                  marginBottom: '1.5rem',
                  fontSize: '1.3rem'
                }}
              >
                联系方式
              </h3>
              <div className="mb-4" style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-map-marker-alt text-primary mr-3" style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }}></i>
                <span style={{ color: 'var(--text-color)' }}>中国广东省东莞市XX工业区XX路XX号</span>
              </div>
              <div className="mb-4" style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-phone text-primary mr-3" style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }}></i>
                <span style={{ color: 'var(--text-color)' }}>+86 0769-XXXXXXX</span>
              </div>
              <div className="mb-4" style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-envelope text-primary mr-3" style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }}></i>
                <span style={{ color: 'var(--text-color)' }}>contact@sheetmetal-factory.com</span>
              </div>
              <div className="mb-4" style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-clock text-primary mr-3" style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }}></i>
                <span style={{ color: 'var(--text-color)' }}>周一至周五 8:00-18:00</span>
              </div>
              
              <div 
                style={{
                  marginTop: '2rem',
                  padding: '1rem',
                  backgroundColor: 'var(--bg-color)',
                  borderRadius: '4px'
                }}
              >
                <p style={{ color: 'var(--text-color)', margin: 0, fontSize: '0.9rem' }}>
                  <strong>温馨提示：</strong> 您也可以通过以下社交平台关注我们，获取最新产品和服务信息。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
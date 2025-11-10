import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // 处理表单输入变化
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  
  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')
    
    // 模拟表单提交
    setTimeout(() => {
      console.log('表单数据:', formData)
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1500)
  }
  
  return (
    <div className="page-transition">
      {/* 页面标题 */}
      <section className="page-header" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1>联系我们</h1>
          <p className="mt-2">如需了解更多信息或有任何疑问，请随时与我们联系</p>
        </div>
      </section>

      {/* 联系信息 */}
      <section className="section bg-light py-5">
        <div className="container">
          <div className="row">
            {/* 联系电话 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-box text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="icon-box bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-phone-alt" style={{ fontSize: '1.5rem' }}></i>
                </div>
                <h3>联系电话</h3>
                <p className="mt-2">+86 123 4567 8910</p>
                <p>周一至周五: 9:00 - 18:00</p>
              </div>
            </div>
            
            {/* 电子邮件 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-box text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="icon-box bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-envelope" style={{ fontSize: '1.5rem' }}></i>
                </div>
                <h3>电子邮件</h3>
                <p className="mt-2">info@metalworks.com</p>
                <p>sales@metalworks.com</p>
              </div>
            </div>
            
            {/* 公司地址 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-box text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="icon-box bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-map-marker-alt" style={{ fontSize: '1.5rem' }}></i>
                </div>
                <h3>公司地址</h3>
                <p className="mt-2">上海市浦东新区张江高科技园区博云路2号</p>
                <p>邮编: 201203</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系表单和地图 */}
      <section className="section py-5">
        <div className="container">
          <div className="row">
            {/* 联系表单 */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="contact-form bg-white p-5 rounded shadow-sm">
                <h2>发送消息</h2>
                <p className="mb-4">请填写以下表单，我们将尽快回复您</p>
                
                {status === 'success' && (
                  <div className="alert alert-success mb-4">
                    感谢您的留言！我们将尽快与您联系。
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-4">
                    <label htmlFor="name">姓名</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group mb-4">
                    <label htmlFor="email">电子邮件</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group mb-4">
                    <label htmlFor="subject">主题</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group mb-4">
                    <label htmlFor="message">消息内容</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block py-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? '发送中...' : '发送消息'}
                  </button>
                </form>
              </div>
            </div>
            
            {/* 地图 */}
            <div className="col-lg-6 pl-lg-5">
              <div className="map-container rounded shadow-sm" style={{ height: '100%', minHeight: '500px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.646016140967!2d121.59441971531302!3d31.20488828146481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b267d9710a36ed%3A0x5800851c786a4c73!2z5p2w6YCa6aKY5Li75Yy65p2w5piv6auY6K66!5e0!3m2!1szh-CN!2sus!4v1635706430793!5m2!1szh-CN!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy"
                  title="公司位置"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="section bg-light py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>常见问题</h2>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {/* FAQ 项目 1 */}
                <div className="card mb-3">
                  <div className="card-header bg-white" id="heading1">
                    <button 
                      className="btn btn-link text-left w-100 d-flex justify-content-between align-items-center" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#collapse1" 
                      aria-expanded="true" 
                      aria-controls="collapse1"
                    >
                      <span>你们可以加工哪些材料？</span>
                      <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                  <div id="collapse1" className="collapse show" aria-labelledby="heading1" data-parent="#faqAccordion">
                    <div className="card-body">
                      我们可以加工各种金属材料，包括不锈钢、碳钢、铝板、铜板等。根据客户需求，我们还可以提供特殊材料的加工服务。
                    </div>
                  </div>
                </div>
                
                {/* FAQ 项目 2 */}
                <div className="card mb-3">
                  <div className="card-header bg-white" id="heading2">
                    <button 
                      className="btn btn-link text-left w-100 d-flex justify-content-between align-items-center collapsed" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#collapse2" 
                      aria-expanded="false" 
                      aria-controls="collapse2"
                    >
                      <span>生产周期一般需要多长时间？</span>
                      <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                  <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#faqAccordion">
                    <div className="card-body">
                      生产周期取决于产品的复杂度和订单数量。一般来说，标准产品的生产周期为7-15个工作日，复杂产品可能需要20-30个工作日。我们会根据客户需求，尽可能缩短生产周期。
                    </div>
                  </div>
                </div>
                
                {/* FAQ 项目 3 */}
                <div className="card mb-3">
                  <div className="card-header bg-white" id="heading3">
                    <button 
                      className="btn btn-link text-left w-100 d-flex justify-content-between align-items-center collapsed" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#collapse3" 
                      aria-expanded="false" 
                      aria-controls="collapse3"
                    >
                      <span>你们可以提供哪些表面处理服务？</span>
                      <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                  <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#faqAccordion">
                    <div className="card-body">
                      我们提供多种表面处理服务，包括喷漆、粉末喷涂、电镀、阳极氧化、钝化等。客户可以根据产品需求选择合适的表面处理方式。
                    </div>
                  </div>
                </div>
                
                {/* FAQ 项目 4 */}
                <div className="card mb-3">
                  <div className="card-header bg-white" id="heading4">
                    <button 
                      className="btn btn-link text-left w-100 d-flex justify-content-between align-items-center collapsed" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#collapse4" 
                      aria-expanded="false" 
                      aria-controls="collapse4"
                    >
                      <span>你们是否接受小批量订单？</span>
                      <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                  <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#faqAccordion">
                    <div className="card-body">
                      是的，我们接受小批量订单。无论是样品制作还是小批量生产，我们都可以满足客户的需求。对于小批量订单，我们也会保证产品质量和交期。
                    </div>
                  </div>
                </div>
                
                {/* FAQ 项目 5 */}
                <div className="card mb-3">
                  <div className="card-header bg-white" id="heading5">
                    <button 
                      className="btn btn-link text-left w-100 d-flex justify-content-between align-items-center collapsed" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#collapse5" 
                      aria-expanded="false" 
                      aria-controls="collapse5"
                    >
                      <span>如何获取报价？</span>
                      <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                  <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#faqAccordion">
                    <div className="card-body">
                      您可以通过我们的网站联系表单、电子邮件或电话与我们联系，提供产品的图纸、材质要求、数量等信息，我们会在24小时内为您提供详细的报价。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系CTA */}
      <section className="section py-10" style={{
        backgroundColor: '#2c3e50',
        color: 'white'
      }}>
        <div className="container text-center">
          <h2>准备好开始您的项目了吗？</h2>
          <p className="my-4 max-w-2xl mx-auto">
            无论您需要原型设计、小批量生产还是大批量订单，我们都能满足您的需求。立即联系我们，获取专业的钣金加工解决方案。
          </p>
          <div className="mt-5">
            <a href="#" className="btn btn-primary btn-lg mr-3">
              立即咨询
            </a>
            <a href="#" className="btn btn-outline-light btn-lg">
              了解更多
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
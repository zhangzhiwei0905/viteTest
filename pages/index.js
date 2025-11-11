import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProductsSection from '../components/ProductsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>专业钣金加工服务 | 高品质金属制品定制</title>
        <meta name="description" content="专业提供精密钣金加工服务，包括激光切割、折弯成型、焊接装配等一站式金属制品定制解决方案。" />
        <meta name="keywords" content="钣金加工,金属制品,精密钣金,激光切割,折弯成型" />
        <meta name="author" content="专业钣金厂" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
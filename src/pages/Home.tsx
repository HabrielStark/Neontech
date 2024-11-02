import { ArrowRight, Code, Shield, Cloud, Cpu, Users, Building2, Award, Timer, Mail, Phone, Brain, Rocket, Globe, Newspaper, ChevronRight } from 'lucide-react';
import { StatsCard } from '../components/StatsCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ContactForm } from '../components/ContactForm';
import { ScrollIndicator } from '../components/ScrollIndicator';
import { DynamicText } from '../components/DynamicText';
import { ServiceCard } from '../components/ServiceCard';
import { BlogCard } from '../components/BlogCard';
import { Scene } from '../components/3d/Scene';
import { useInView } from '../hooks/useInView';

export function Home() {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [caseStudyRef, caseStudyInView] = useInView({ threshold: 0.2 });
  const [blogRef, blogInView] = useInView({ threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ threshold: 0.2 });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored solutions that drive business growth and efficiency.',
      features: ['Web Applications', 'Mobile Apps', 'API Integration', 'Legacy System Modernization']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure for modern businesses.',
      features: ['Cloud Migration', 'DevOps', 'Serverless Architecture', 'Cloud Security']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by cutting-edge AI.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Data Mining']
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6 text-white" />, value: "500+", label: "Clients Worldwide" },
    { icon: <Award className="w-6 h-6 text-white" />, value: "98%", label: "Client Satisfaction" },
    { icon: <Timer className="w-6 h-6 text-white" />, value: "15+", label: "Years Experience" },
    { icon: <Globe className="w-6 h-6 text-white" />, value: "30+", label: "Countries Served" }
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Enterprise",
      excerpt: "Exploring how artificial intelligence is reshaping business operations and decision-making processes.",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    },
    {
      title: "Cloud Security Best Practices",
      excerpt: "Essential security measures every organization should implement in their cloud infrastructure.",
      date: "Mar 12, 2024",
      readTime: "4 min read",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9"
    },
    {
      title: "Digital Transformation Success Stories",
      excerpt: "Real-world examples of successful digital transformation initiatives and their impact.",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section with 3D Scene */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8 z-10">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Igniting Innovation
            </span>
            <br />
            with{' '}
            <DynamicText
              words={['Next-Gen Solutions', 'AI Technology', 'Cloud Computing', 'Cybersecurity']}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            />
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your business with cutting-edge technology solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-200 flex items-center gap-2 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-3 border border-gray-700 hover:border-gray-500 rounded-full transition-all duration-200 hover:bg-gray-900/50 transform hover:scale-105">
              Learn More
              <ChevronRight className="inline-block w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* 3D Scene */}
        <div className="absolute inset-0 z-0">
          <Scene className="w-full h-full" />
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Services Section */}
      <section
        id="services"
        ref={servicesRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 transform ${
          servicesInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} Icon={service.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 transform ${
          statsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section
        id="case-studies"
        ref={caseStudyRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20 transition-all duration-700 transform ${
          caseStudyInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Success Stories</h2>
              <p className="text-gray-400">
                Discover how we've helped businesses transform their digital presence and achieve remarkable results.
              </p>
              <div className="space-y-4">
                {['Digital Transformation', 'Cloud Migration', 'AI Implementation'].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item}</h3>
                      <p className="text-sm text-gray-400">View Case Study</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Success Stories"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        ref={blogRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 transform ${
          blogInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest trends and insights in technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 transform ${
          contactInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Get in Touch</h2>
              <p className="text-gray-400">
                Ready to transform your business? Contact us to discuss your project.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'contact@neontech.com' },
                  { icon: Phone, text: '+1 (555) 123-4567' },
                  { icon: Building2, text: 'San Francisco, CA' }
                ].map(({ icon: Icon, text }, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <ScrollIndicator />
    </div>
  );
}
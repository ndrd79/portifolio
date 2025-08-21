import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Settings, ArrowRight, Check } from 'lucide-react';
import { services } from '../../data/services';

const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return Globe;
      case 'Code':
        return Code;
      case 'Settings':
        return Settings;
      default:
        return Code;
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-6">
            <Settings className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Nossos Serviços</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções completas para
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              seu negócio digital
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de desenvolvimento web, 
            desde sites institucionais até aplicações complexas e soluções personalizadas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex justify-center">
                    <button
                      onClick={() => scrollToSection('contato')}
                      className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
                    >
                      <span>Solicitar Orçamento</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 rounded-2xl transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Desenvolvemos soluções personalizadas para atender às necessidades específicas do seu negócio. 
              Entre em contato e vamos conversar sobre seu projeto.
            </p>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Falar com Especialista</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
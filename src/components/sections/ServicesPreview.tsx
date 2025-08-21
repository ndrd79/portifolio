import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Sites Profissionais',
      description: 'Criamos sites modernos, responsivos e otimizados para SEO que convertem visitantes em clientes.',
      features: ['Design Responsivo', 'SEO Otimizado', 'Performance']
    },
    {
      icon: Code,
      title: 'Aplicações Web',
      description: 'Desenvolvemos aplicações web robustas e escaláveis com as tecnologias mais modernas.',
      features: ['React/Vue.js', 'Node.js', 'Banco de Dados']
    },
    {
      icon: Smartphone,
      title: 'Soluções Mobile',
      description: 'Apps nativos e híbridos que oferecem experiência excepcional em dispositivos móveis.',
      features: ['React Native', 'Flutter', 'PWA']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em desenvolvimento web, desde sites institucionais até aplicações complexas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/servicos"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
          >
            Ver Todos os Serviços
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
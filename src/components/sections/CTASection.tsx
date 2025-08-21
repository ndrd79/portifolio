import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Resposta rápida',
      action: 'Conversar Agora',
      href: 'https://wa.me/5544984355545?text=Olá! Gostaria de saber mais sobre os serviços da DevStudio.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Calendar,
      title: 'Agendar Reunião',
      description: 'Consultoria gratuita',
      action: 'Agendar Agora',
      href: '/contato',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Ligar Agora',
      description: 'Atendimento direto',
      action: '(44) 98435-5545',
      href: 'tel:+5544984355545',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para <span className="text-blue-300">Transformar</span> seu Negócio?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Não perca mais tempo com soluções amadoras. Vamos criar algo extraordinário juntos!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-green-400 mr-2">✓</span>
              <span className="text-white text-sm">Consultoria Gratuita</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-green-400 mr-2">✓</span>
              <span className="text-white text-sm">Orçamento sem Compromisso</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-green-400 mr-2">✓</span>
              <span className="text-white text-sm">Suporte Completo</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            const isExternal = option.href.startsWith('http') || option.href.startsWith('tel:');
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {isExternal ? (
                  <a
                    href={option.href}
                    target={option.href.startsWith('http') ? '_blank' : undefined}
                    rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`block bg-gradient-to-r ${option.color} rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                    <p className="text-blue-100 mb-4">{option.description}</p>
                    <div className="text-white font-semibold group-hover:scale-105 transition-transform duration-300">
                      {option.action}
                    </div>
                  </a>
                ) : (
                  <Link
                    to={option.href}
                    className={`block bg-gradient-to-r ${option.color} rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                    <p className="text-blue-100 mb-4">{option.description}</p>
                    <div className="text-white font-semibold group-hover:scale-105 transition-transform duration-300">
                      {option.action}
                    </div>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 group"
          >
            Ver Nosso Portfólio
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
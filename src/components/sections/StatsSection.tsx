import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Award, Clock } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Code,
      number: '150+',
      label: 'Projetos Entregues',
      description: 'Sites e aplicações desenvolvidas com excelência'
    },
    {
      icon: Users,
      number: '120+',
      label: 'Clientes Satisfeitos',
      description: 'Empresas que confiam em nosso trabalho'
    },
    {
      icon: Clock,
      number: '5+',
      label: 'Anos de Experiência',
      description: 'Construindo soluções digitais inovadoras'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Taxa de Satisfação',
      description: 'Clientes que recomendam nossos serviços'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Números que <span className="text-blue-200">Impressionam</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Nossa trajetória é marcada por resultados excepcionais e clientes satisfeitos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-blue-100 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-blue-200 leading-relaxed">
                    {stat.description}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
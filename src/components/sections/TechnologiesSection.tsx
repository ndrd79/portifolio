import React from 'react';
import { motion } from 'framer-motion';

const TechnologiesSection: React.FC = () => {
  const technologies = [
    {
      name: 'React',
      icon: '⚛️',
      description: 'Biblioteca JavaScript para interfaces modernas'
    },
    {
      name: 'TypeScript',
      icon: '🔷',
      description: 'JavaScript tipado para maior segurança'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      description: 'Runtime JavaScript para backend robusto'
    },
    {
      name: 'Next.js',
      icon: '▲',
      description: 'Framework React para aplicações completas'
    },
    {
      name: 'Tailwind CSS',
      icon: '🎨',
      description: 'Framework CSS para design responsivo'
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      description: 'Banco de dados NoSQL flexível'
    },
    {
      name: 'PostgreSQL',
      icon: '🐘',
      description: 'Banco de dados relacional avançado'
    },
    {
      name: 'AWS',
      icon: '☁️',
      description: 'Infraestrutura em nuvem escalável'
    },
    {
      name: 'Docker',
      icon: '🐳',
      description: 'Containerização para deploy eficiente'
    },
    {
      name: 'Git',
      icon: '📝',
      description: 'Controle de versão colaborativo'
    },
    {
      name: 'Figma',
      icon: '🎯',
      description: 'Design de interfaces profissionais'
    },
    {
      name: 'Vercel',
      icon: '🚀',
      description: 'Deploy rápido e confiável'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-purple-600">Tecnologias</span> Modernas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos as ferramentas mais avançadas do mercado para criar soluções de alta qualidade
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {tech.name}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl">
            <span className="text-gray-700 font-medium">
              💡 Sempre atualizados com as últimas tendências tecnológicas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
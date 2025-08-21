import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      position: 'CEO, TechStart',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'A DevStudio transformou nossa presença digital completamente. O site ficou moderno, rápido e nossos clientes adoraram a nova experiência.',
      rating: 5
    },
    {
      name: 'João Santos',
      position: 'Diretor, Inovação Digital',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Profissionalismo excepcional! Entregaram o projeto no prazo e superaram todas as nossas expectativas. Recomendo sem hesitar.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      position: 'Fundadora, EcoSolutions',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'A aplicação web desenvolvida pela equipe revolucionou nossos processos internos. Tecnologia de ponta com design impecável.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos <span className="text-blue-600">Clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de empresas que transformaram seus negócios conosco
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-6 right-6 text-blue-200 group-hover:text-blue-300 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-100"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-full">
            <Star className="w-5 h-5 text-yellow-500 fill-current mr-2" />
            <span className="text-gray-700 font-medium">Avaliação média: 4.9/5 baseada em 120+ projetos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
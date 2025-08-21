import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, Heart, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre buscamos as tecnologias mais modernas e soluções criativas para cada projeto.'
    },
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Amamos o que fazemos e isso se reflete na qualidade e dedicação em cada entrega.'
    },
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Seu sucesso é nosso sucesso. Trabalhamos para superar suas expectativas.'
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Processos otimizados e metodologias ágeis para entregas rápidas e eficientes.'
    }
  ];

  const stats = [
    { number: '5+', label: 'Anos de Experiência' },
    { number: '50+', label: 'Projetos Entregues' },
    { number: '100%', label: 'Clientes Satisfeitos' },
    { number: '24/7', label: 'Suporte Disponível' }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
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
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Sobre Nós</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quem somos e
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              nossa missão
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transformando o digital desde 2019
            </h3>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                A <strong className="text-gray-900">DevStudio</strong> nasceu da paixão por tecnologia e do desejo de 
                ajudar empresas a alcançarem seu potencial máximo no mundo digital. Somos uma equipe 
                de desenvolvedores, designers e estrategistas digitais unidos por um objetivo comum: 
                criar soluções que realmente fazem a diferença.
              </p>
              
              <p>
                Acreditamos que cada projeto é único e merece uma abordagem personalizada. Por isso, 
                trabalhamos em estreita colaboração com nossos clientes, desde a concepção da ideia 
                até a entrega final, garantindo que cada detalhe esteja alinhado com seus objetivos 
                de negócio.
              </p>
              
              <p>
                Nossa experiência abrange desde sites institucionais elegantes até aplicações web 
                complexas e sistemas personalizados. Utilizamos as tecnologias mais modernas do 
                mercado para garantir performance, segurança e escalabilidade em todos os nossos projetos.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Target className="h-6 w-6 text-blue-600 mr-2" />
                Nossa Missão
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Democratizar o acesso a soluções digitais de alta qualidade, ajudando empresas 
                de todos os tamanhos a prosperarem no ambiente digital através de tecnologia 
                inovadora e atendimento excepcional.
              </p>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20software%20development%20team%20working%20together%20office%20computers%20coding%20collaboration%20professional&image_size=square_hd"
                alt="Equipe DevStudio trabalhando"
                className="w-full rounded-2xl shadow-2xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projetos</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nossos Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Números que falam por si
            </h3>
            <p className="text-blue-100 text-lg">
              Resultados que comprovam nossa dedicação e qualidade
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para conhecer nossa equipe?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre seu projeto e descobrir como podemos ajudar 
            sua empresa a alcançar novos patamares no mundo digital.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Falar com Nossa Equipe
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
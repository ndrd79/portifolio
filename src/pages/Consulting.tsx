import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code2, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Target,
  Lightbulb
} from 'lucide-react';

const Consulting: React.FC = () => {
  const consultingServices = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Consultoria em Desenvolvimento Web",
      description: "Análise técnica completa de projetos web, otimização de código, escolha de tecnologias e melhores práticas de desenvolvimento.",
      features: [
        "Auditoria de código e arquitetura",
        "Escolha de stack tecnológico",
        "Implementação de boas práticas",
        "Code review e mentoria técnica"
      ],
      duration: "2-4 semanas",
      deliverables: "Relatório técnico + Plano de ação"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Arquitetura de Sistemas",
      description: "Planejamento e design de arquiteturas escaláveis, microserviços, APIs e integração de sistemas complexos.",
      features: [
        "Design de arquitetura escalável",
        "Planejamento de microserviços",
        "Estratégias de integração",
        "Documentação técnica completa"
      ],
      duration: "3-6 semanas",
      deliverables: "Diagrama de arquitetura + Documentação"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Otimização de Performance",
      description: "Análise detalhada de performance, identificação de gargalos e implementação de soluções para melhorar velocidade e eficiência.",
      features: [
        "Auditoria de performance",
        "Otimização de banco de dados",
        "Melhoria de tempo de carregamento",
        "Monitoramento e métricas"
      ],
      duration: "1-3 semanas",
      deliverables: "Relatório de performance + Implementações"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança e Compliance",
      description: "Avaliação de segurança, implementação de medidas de proteção e adequação a normas de compliance.",
      features: [
        "Auditoria de segurança",
        "Implementação de proteções",
        "Compliance LGPD/GDPR",
        "Testes de penetração"
      ],
      duration: "2-4 semanas",
      deliverables: "Relatório de segurança + Certificações"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consultoria em DevOps",
      description: "Implementação de práticas DevOps, CI/CD, containerização e automação de processos de desenvolvimento.",
      features: [
        "Setup de CI/CD pipelines",
        "Containerização com Docker",
        "Automação de deploys",
        "Monitoramento e logging"
      ],
      duration: "3-5 semanas",
      deliverables: "Pipeline configurado + Documentação"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Estratégia Digital",
      description: "Consultoria estratégica para transformação digital, roadmap tecnológico e alinhamento com objetivos de negócio.",
      features: [
        "Análise de maturidade digital",
        "Roadmap tecnológico",
        "Estratégia de inovação",
        "ROI e métricas de sucesso"
      ],
      duration: "4-8 semanas",
      deliverables: "Estratégia digital + Roadmap"
    }
  ];

  const benefits = [
    "Expertise técnica especializada",
    "Soluções personalizadas para seu negócio",
    "Redução de custos e tempo de desenvolvimento",
    "Melhoria na qualidade e performance",
    "Transferência de conhecimento para sua equipe",
    "Suporte contínuo pós-implementação"
  ];

  return (
    <>
      <Helmet>
        <title>Consultoria Especializada | DevStudio - Soluções Técnicas Avançadas</title>
        <meta 
          name="description" 
          content="Consultoria especializada em desenvolvimento web, arquitetura de sistemas, performance e DevOps. Soluções técnicas personalizadas para seu negócio."
        />
        <meta name="keywords" content="consultoria técnica, arquitetura de sistemas, performance, DevOps, desenvolvimento web, segurança" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                  <Lightbulb className="h-12 w-12 text-yellow-400" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Consultoria <span className="text-yellow-400">Especializada</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Transforme seus desafios técnicos em oportunidades de crescimento com nossa expertise especializada em desenvolvimento e arquitetura de sistemas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contato"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Solicitar Consultoria
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:+5544984355545"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200"
                >
                  (44) 98435-5545
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossos Serviços de Consultoria
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos consultoria especializada em diversas áreas da tecnologia, 
                com foco em resultados mensuráveis e transferência de conhecimento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>Duração: {service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Target className="h-4 w-4" />
                      <span>{service.deliverables}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contato"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Por que escolher nossa consultoria?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nossa abordagem combina expertise técnica profunda com visão estratégica de negócios, 
                  garantindo soluções que realmente impactam seus resultados.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Processo Colaborativo
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Trabalhamos lado a lado com sua equipe, garantindo transferência de conhecimento 
                    e capacitação contínua durante todo o processo.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">100+</div>
                      <div className="text-sm text-gray-500">Projetos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-gray-500">Clientes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">5+</div>
                      <div className="text-sm text-gray-500">Anos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para transformar seus desafios técnicos?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Entre em contato conosco e descubra como nossa consultoria especializada 
              pode acelerar seus projetos e otimizar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Solicitar Consultoria Gratuita
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+5544984355545"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Ligar Agora: (44) 98435-5545
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Consulting;
import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'criacao-sites',
    title: 'Criação de Sites Profissionais',
    description: 'Desenvolvemos sites modernos, responsivos e otimizados para SEO, garantindo uma presença digital impactante para sua empresa.',
    icon: 'Globe',
    features: [
      'Design responsivo e moderno',
      'Otimização para SEO',
      'Integração com redes sociais',
      'Painel administrativo',
      'Certificado SSL incluído',
      'Suporte técnico'
    ],
    priceRange: 'A partir de R$ 2.500'
  },
  {
    id: 'aplicacoes-web',
    title: 'Desenvolvimento de Aplicações Web',
    description: 'Criamos aplicações web robustas e escaláveis, utilizando as mais modernas tecnologias para atender às necessidades do seu negócio.',
    icon: 'Code',
    features: [
      'Tecnologias modernas (React, Node.js)',
      'Banco de dados otimizado',
      'API REST/GraphQL',
      'Autenticação e segurança',
      'Deploy automatizado',
      'Monitoramento e analytics'
    ],
    priceRange: 'A partir de R$ 8.000'
  },
  {
    id: 'solucoes-personalizadas',
    title: 'Soluções Personalizadas',
    description: 'Desenvolvemos sistemas sob medida para necessidades específicas: dashboards, sistemas de agendamento, ERPs e muito mais.',
    icon: 'Settings',
    features: [
      'Análise de requisitos detalhada',
      'Desenvolvimento sob medida',
      'Integração com sistemas existentes',
      'Treinamento da equipe',
      'Suporte e manutenção',
      'Documentação completa'
    ],
    priceRange: 'Sob consulta'
  }
];
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Moda Feminina',
    description: 'Loja virtual completa com catálogo de produtos, carrinho de compras, pagamento integrado e painel administrativo.',
    imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20ecommerce%20website%20fashion%20store%20clean%20design%20purple%20blue%20colors&image_size=landscape_16_9',
    demoUrl: 'https://demo-ecommerce.vercel.app',
    githubUrl: 'https://github.com/empresa/ecommerce-demo',
    technologies: ['React', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Node.js'],
    category: 'website',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Sistema de Agendamento Médico',
    description: 'Aplicação web para clínicas médicas com agendamento online, prontuário eletrônico e dashboard administrativo.',
    imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20appointment%20system%20dashboard%20clean%20interface%20blue%20white%20modern&image_size=landscape_16_9',
    demoUrl: 'https://clinica-demo.vercel.app',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Material-UI'],
    category: 'webapp',
    createdAt: new Date('2024-02-20')
  },
  {
    id: '3',
    title: 'Dashboard Analytics Empresarial',
    description: 'Painel de controle com métricas em tempo real, relatórios personalizados e visualizações interativas.',
    imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=business%20analytics%20dashboard%20charts%20graphs%20modern%20interface%20dark%20theme&image_size=landscape_16_9',
    demoUrl: 'https://analytics-demo.vercel.app',
    technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB', 'Chart.js'],
    category: 'custom',
    createdAt: new Date('2024-03-10')
  },
  {
    id: '4',
    title: 'Site Institucional Advocacia',
    description: 'Website profissional para escritório de advocacia com blog, área de serviços e formulário de contato.',
    imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=law%20firm%20website%20professional%20elegant%20design%20blue%20gold%20colors&image_size=landscape_16_9',
    demoUrl: 'https://advocacia-demo.vercel.app',
    technologies: ['Next.js', 'Tailwind CSS', 'Contentful', 'Vercel'],
    category: 'website',
    createdAt: new Date('2024-04-05')
  },
  {
    id: '5',
    title: 'Guia Digital Interativo',
    description: 'Aplicação web interativa com interface moderna e funcionalidades avançadas para navegação e consulta de informações.',
    imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=interactive%20digital%20guide%20modern%20web%20app%20clean%20interface%20blue%20purple%20gradient&image_size=landscape_16_9',
    demoUrl: 'https://guia-1z4gryx2q-fernandos-projects-1a080236.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    category: 'webapp',
    createdAt: new Date('2024-05-15')
  }
];
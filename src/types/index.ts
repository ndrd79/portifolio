// Tipos para formulário de contato
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: 'criacao-sites' | 'aplicacoes-web' | 'solucoes-personalizadas';
}

// Tipos para projetos do portfólio
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: 'website' | 'webapp' | 'custom';
  createdAt: Date;
}

// Tipos para serviços
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Tipos para resposta da API
export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Tipos para SEO
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}
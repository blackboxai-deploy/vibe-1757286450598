// Translation keys and messages
export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.characters': 'Characters',
    'nav.teams': 'Teams',
    'nav.chat': 'Chat',
    'nav.subscription': 'Subscription',
    'nav.settings': 'Settings',
    'nav.logout': 'Logout',

    // Landing Page
    'landing.hero.title': 'Build Your Dream Team of AI Agents',
    'landing.hero.subtitle': 'Assemble specialized AI characters to collaborate on your projects. Each agent brings unique expertise to deliver exceptional results.',
    'landing.hero.cta': 'Start Building Teams',
    'landing.hero.demo': 'Watch Demo',

    // Features
    'features.title': 'Why Choose TeamAI Chat?',
    'features.collaboration.title': 'Team Collaboration',
    'features.collaboration.description': 'AI agents work together, building on each other\'s ideas and expertise.',
    'features.specialization.title': 'Specialized Expertise',
    'features.specialization.description': 'Each character has unique skills in development, design, project management, and more.',
    'features.multilingual.title': 'Multilingual Support',
    'features.multilingual.description': 'Available in English and Portuguese (Brazil) for global accessibility.',

    // Characters
    'characters.title': 'Meet Your AI Team',
    'characters.subtitle': 'Choose from our diverse roster of specialized AI characters',
    'characters.role': 'Role',
    'characters.specialization': 'Specialization',
    'characters.select': 'Select Character',
    'characters.selected': 'Selected',
    'characters.cost': 'Token Cost',

    // Teams
    'teams.title': 'Your Teams',
    'teams.create': 'Create New Team',
    'teams.edit': 'Edit Team',
    'teams.delete': 'Delete Team',
    'teams.members': 'Members',
    'teams.interactions': 'Interactions',
    'teams.lastActive': 'Last Active',
    'teams.form.name': 'Team Name',
    'teams.form.description': 'Team Description',
    'teams.form.characters': 'Select Characters',
    'teams.form.save': 'Save Team',
    'teams.form.cancel': 'Cancel',

    // Chat
    'chat.title': 'Team Chat',
    'chat.selectTeam': 'Select a team to start chatting',
    'chat.placeholder': 'Type your message...',
    'chat.send': 'Send',
    'chat.typing': 'is typing...',
    'chat.tokenCost': 'Token Cost',
    'chat.newSession': 'New Session',
    'chat.history': 'Chat History',

    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.welcome': 'Welcome back!',
    'dashboard.stats.teams': 'Active Teams',
    'dashboard.stats.messages': 'Messages Today',
    'dashboard.stats.tokens': 'Tokens Remaining',
    'dashboard.stats.usage': 'Monthly Usage',
    'dashboard.quickActions': 'Quick Actions',
    'dashboard.recentActivity': 'Recent Activity',

    // Subscription
    'subscription.title': 'Subscription Plans',
    'subscription.subtitle': 'Choose the plan that fits your needs',
    'subscription.current': 'Current Plan',
    'subscription.upgrade': 'Upgrade',
    'subscription.downgrade': 'Downgrade',
    'subscription.cancel': 'Cancel',
    'subscription.billing': 'Billing History',
    'subscription.usage': 'Usage Analytics',
    'subscription.features': 'Features',
    'subscription.popular': 'Most Popular',
    'subscription.perMonth': 'per month',
    'subscription.tokens': 'tokens included',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.create': 'Create',
    'common.close': 'Close',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.export': 'Export',

    // Validation
    'validation.required': 'This field is required',
    'validation.email': 'Please enter a valid email',
    'validation.minLength': 'Minimum {min} characters required',
    'validation.maxLength': 'Maximum {max} characters allowed',
    'validation.teamName': 'Team name must be between 3 and 50 characters',

    // Errors
    'error.network': 'Network error. Please try again.',
    'error.unauthorized': 'Unauthorized. Please login again.',
    'error.insufficientTokens': 'Insufficient tokens. Please upgrade your plan.',
    'error.teamLimitReached': 'Team limit reached. Please upgrade your plan.',
    'error.characterLimitReached': 'Character limit reached for this team.',
    'error.messageTooLong': 'Message exceeds 2000 characters.',

    // Success
    'success.teamCreated': 'Team created successfully!',
    'success.teamUpdated': 'Team updated successfully!',
    'success.teamDeleted': 'Team deleted successfully!',
    'success.messageSent': 'Message sent successfully!',
    'success.subscriptionUpdated': 'Subscription updated successfully!',
    'success.settingsSaved': 'Settings saved successfully!',
  },
  'pt-BR': {
    // Navigation
    'nav.dashboard': 'Painel',
    'nav.characters': 'Personagens',
    'nav.teams': 'Equipes',
    'nav.chat': 'Chat',
    'nav.subscription': 'Assinatura',
    'nav.settings': 'Configurações',
    'nav.logout': 'Sair',

    // Landing Page
    'landing.hero.title': 'Monte Sua Equipe dos Sonhos de Agentes IA',
    'landing.hero.subtitle': 'Reúna personagens de IA especializados para colaborar em seus projetos. Cada agente traz conhecimento único para entregar resultados excepcionais.',
    'landing.hero.cta': 'Começar a Montar Equipes',
    'landing.hero.demo': 'Ver Demo',

    // Features
    'features.title': 'Por que Escolher TeamAI Chat?',
    'features.collaboration.title': 'Colaboração em Equipe',
    'features.collaboration.description': 'Agentes de IA trabalham juntos, construindo sobre as ideias e conhecimento uns dos outros.',
    'features.specialization.title': 'Expertise Especializada',
    'features.specialization.description': 'Cada personagem tem habilidades únicas em desenvolvimento, design, gestão de projetos e mais.',
    'features.multilingual.title': 'Suporte Multilíngue',
    'features.multilingual.description': 'Disponível em Inglês e Português (Brasil) para acessibilidade global.',

    // Characters
    'characters.title': 'Conheça Sua Equipe de IA',
    'characters.subtitle': 'Escolha entre nosso diverso elenco de personagens de IA especializados',
    'characters.role': 'Função',
    'characters.specialization': 'Especialização',
    'characters.select': 'Selecionar Personagem',
    'characters.selected': 'Selecionado',
    'characters.cost': 'Custo em Tokens',

    // Teams
    'teams.title': 'Suas Equipes',
    'teams.create': 'Criar Nova Equipe',
    'teams.edit': 'Editar Equipe',
    'teams.delete': 'Excluir Equipe',
    'teams.members': 'Membros',
    'teams.interactions': 'Interações',
    'teams.lastActive': 'Última Atividade',
    'teams.form.name': 'Nome da Equipe',
    'teams.form.description': 'Descrição da Equipe',
    'teams.form.characters': 'Selecionar Personagens',
    'teams.form.save': 'Salvar Equipe',
    'teams.form.cancel': 'Cancelar',

    // Chat
    'chat.title': 'Chat da Equipe',
    'chat.selectTeam': 'Selecione uma equipe para começar a conversar',
    'chat.placeholder': 'Digite sua mensagem...',
    'chat.send': 'Enviar',
    'chat.typing': 'está digitando...',
    'chat.tokenCost': 'Custo em Tokens',
    'chat.newSession': 'Nova Sessão',
    'chat.history': 'Histórico do Chat',

    // Dashboard
    'dashboard.title': 'Painel',
    'dashboard.welcome': 'Bem-vindo de volta!',
    'dashboard.stats.teams': 'Equipes Ativas',
    'dashboard.stats.messages': 'Mensagens Hoje',
    'dashboard.stats.tokens': 'Tokens Restantes',
    'dashboard.stats.usage': 'Uso Mensal',
    'dashboard.quickActions': 'Ações Rápidas',
    'dashboard.recentActivity': 'Atividade Recente',

    // Subscription
    'subscription.title': 'Planos de Assinatura',
    'subscription.subtitle': 'Escolha o plano que atende suas necessidades',
    'subscription.current': 'Plano Atual',
    'subscription.upgrade': 'Fazer Upgrade',
    'subscription.downgrade': 'Fazer Downgrade',
    'subscription.cancel': 'Cancelar',
    'subscription.billing': 'Histórico de Cobrança',
    'subscription.usage': 'Análise de Uso',
    'subscription.features': 'Funcionalidades',
    'subscription.popular': 'Mais Popular',
    'subscription.perMonth': 'por mês',
    'subscription.tokens': 'tokens inclusos',

    // Common
    'common.loading': 'Carregando...',
    'common.error': 'Erro',
    'common.success': 'Sucesso',
    'common.save': 'Salvar',
    'common.cancel': 'Cancelar',
    'common.delete': 'Excluir',
    'common.edit': 'Editar',
    'common.create': 'Criar',
    'common.close': 'Fechar',
    'common.back': 'Voltar',
    'common.next': 'Próximo',
    'common.previous': 'Anterior',
    'common.search': 'Buscar',
    'common.filter': 'Filtrar',
    'common.sort': 'Ordenar',
    'common.export': 'Exportar',

    // Validation
    'validation.required': 'Este campo é obrigatório',
    'validation.email': 'Por favor, insira um email válido',
    'validation.minLength': 'Mínimo de {min} caracteres necessários',
    'validation.maxLength': 'Máximo de {max} caracteres permitidos',
    'validation.teamName': 'Nome da equipe deve ter entre 3 e 50 caracteres',

    // Errors
    'error.network': 'Erro de rede. Por favor, tente novamente.',
    'error.unauthorized': 'Não autorizado. Por favor, faça login novamente.',
    'error.insufficientTokens': 'Tokens insuficientes. Por favor, faça upgrade do seu plano.',
    'error.teamLimitReached': 'Limite de equipes atingido. Por favor, faça upgrade do seu plano.',
    'error.characterLimitReached': 'Limite de personagens atingido para esta equipe.',
    'error.messageTooLong': 'Mensagem excede 2000 caracteres.',

    // Success
    'success.teamCreated': 'Equipe criada com sucesso!',
    'success.teamUpdated': 'Equipe atualizada com sucesso!',
    'success.teamDeleted': 'Equipe excluída com sucesso!',
    'success.messageSent': 'Mensagem enviada com sucesso!',
    'success.subscriptionUpdated': 'Assinatura atualizada com sucesso!',
    'success.settingsSaved': 'Configurações salvas com sucesso!',
  },
};

// Helper function to replace placeholders in translations
export function interpolate(text: string, params: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    return params[key]?.toString() || match;
  });
}
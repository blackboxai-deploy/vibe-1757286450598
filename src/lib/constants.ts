import { Character, SubscriptionPlan, SubscriptionTier } from './types';

// Predefined AI Characters with different specializations
export const AI_CHARACTERS: Character[] = [
  {
    id: 'dev-alex',
    name: 'Alex',
    role: 'Senior Full-Stack Developer',
    specialization: ['Frontend Development', 'Backend APIs', 'Database Design', 'DevOps'],
    description: 'Expert in React, Node.js, and cloud architecture. Loves clean code and scalable solutions.',
    personality: 'Analytical, detail-oriented, and always suggests best practices.',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0c242ab3-fc34-4ad9-acde-c24c27f7f2d0.png',
    tokenCostMultiplier: 1.2,
    color: '#3B82F6',
    isActive: true,
  },
  {
    id: 'designer-sophia',
    name: 'Sophia',
    role: 'UX/UI Designer',
    specialization: ['User Experience', 'Interface Design', 'Prototyping', 'Design Systems'],
    description: 'Creative designer focused on user-centered design and beautiful interfaces.',
    personality: 'Creative, empathetic, and always thinks about the user experience first.',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df78fd06-58b5-4ddf-817f-7e1d095b895e.png',
    tokenCostMultiplier: 1.0,
    color: '#EC4899',
    isActive: true,
  },
  {
    id: 'pm-marcus',
    name: 'Marcus',
    role: 'Project Manager',
    specialization: ['Project Planning', 'Team Coordination', 'Risk Management', 'Agile Methodologies'],
    description: 'Experienced PM who keeps projects on track and teams aligned.',
    personality: 'Organized, communicative, and focused on delivering results on time.',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1c096815-3c53-4171-ab21-6a858e7e3aa1.png',
    tokenCostMultiplier: 0.8,
    color: '#10B981',
    isActive: true,
  },
  {
    id: 'qa-elena',
    name: 'Elena',
    role: 'QA Engineer',
    specialization: ['Test Strategy', 'Automation', 'Performance Testing', 'Quality Assurance'],
    description: 'Meticulous QA engineer who ensures high-quality deliverables.',
    personality: 'Detail-oriented, methodical, and always thinks about edge cases.',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fa1b44dd-e6f3-4ffd-97b3-638c0c02941f.png',
    tokenCostMultiplier: 0.9,
    color: '#F59E0B',
    isActive: true,
  },
  {
    id: 'analyst-david',
    name: 'David',
    role: 'Business Analyst',
    specialization: ['Requirements Analysis', 'Process Optimization', 'Data Analysis', 'Business Strategy'],
    description: 'Strategic thinker who bridges business needs with technical solutions.',
    personality: 'Analytical, strategic, and always considers the bigger picture.',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aa8c7a56-425b-4d8f-8d06-8f1ce91056df.png',
    tokenCostMultiplier: 0.9,
    color: '#8B5CF6',
    isActive: true,
  },
  {
    id: 'devops-sara',
    name: 'Sara',
    role: 'DevOps Engineer',
    specialization: ['CI/CD', 'Cloud Infrastructure', 'Monitoring', 'Security'],
    description: 'Infrastructure expert who ensures reliable and scalable deployments.',
    personality: 'Systematic, reliable, and focused on automation and efficiency.',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/13bad76b-bc24-4b4e-98e7-e785bac445ee.png',
    tokenCostMultiplier: 1.1,
    color: '#EF4444',
    isActive: true,
  },
];

// Subscription Plans
export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'standard' as SubscriptionTier,
    name: 'Standard',
    monthlyPrice: 29,
    tokensIncluded: 10000,
    maxTeams: 3,
    maxCharactersPerTeam: 3,
    features: [
      'Access to 6 AI Characters',
      '10,000 tokens/month',
      'Up to 3 teams',
      'Basic chat history',
      'Email support',
    ],
  },
  {
    id: 'pro' as SubscriptionTier,
    name: 'Pro',
    monthlyPrice: 79,
    tokensIncluded: 50000,
    maxTeams: 10,
    maxCharactersPerTeam: 5,
    features: [
      'Access to all AI Characters',
      '50,000 tokens/month',
      'Up to 10 teams',
      'Extended chat history',
      'Team collaboration tools',
      'Priority support',
      'Usage analytics',
    ],
    isPopular: true,
  },
  {
    id: 'enterprise' as SubscriptionTier,
    name: 'Enterprise',
    monthlyPrice: 199,
    tokensIncluded: 200000,
    maxTeams: -1, // Unlimited
    maxCharactersPerTeam: 6,
    features: [
      'Access to all AI Characters',
      '200,000 tokens/month',
      'Unlimited teams',
      'Full chat history & export',
      'Advanced team management',
      'Custom integrations',
      '24/7 priority support',
      'Advanced analytics',
      'Custom AI characters (coming soon)',
    ],
  },
];

// Token costs for different actions
export const TOKEN_COSTS = {
  MESSAGE_BASE: 10,
  CHARACTER_RESPONSE_BASE: 25,
  TEAM_COLLABORATION: 50, // When characters reference each other
  CONTEXT_PROCESSING: 5, // Per message in context
  PREMIUM_CHARACTER: 15, // Additional cost for premium characters
} as const;

// Application constants
export const APP_CONFIG = {
  NAME: 'TeamAI Chat',
  VERSION: '1.0.0',
  DESCRIPTION: 'Collaborative AI team chat application',
  MAX_MESSAGE_LENGTH: 2000,
  MAX_TEAM_NAME_LENGTH: 50,
  MAX_TEAM_DESCRIPTION_LENGTH: 200,
  PAGINATION_LIMIT: 20,
  TYPING_INDICATOR_TIMEOUT: 2000,
  MESSAGE_RETENTION_DAYS: 90, // For standard plan
} as const;

// Language configuration
export const SUPPORTED_LANGUAGES = {
  'en': 'English',
  'pt-BR': 'Português (Brasil)',
} as const;

export const DEFAULT_LANGUAGE = 'en' as const;

// Theme colors for characters (used in chat interface)
export const CHARACTER_COLORS = {
  primary: '#3B82F6',
  secondary: '#EC4899',
  success: '#10B981',
  warning: '#F59E0B',
  purple: '#8B5CF6',
  red: '#EF4444',
} as const;

// Error messages
export const ERROR_MESSAGES = {
  INSUFFICIENT_TOKENS: 'Insufficient tokens. Please upgrade your plan or wait for next month.',
  TEAM_LIMIT_REACHED: 'Team limit reached. Please upgrade your plan.',
  CHARACTER_LIMIT_REACHED: 'Character limit reached for this team.',
  MESSAGE_TOO_LONG: `Message exceeds ${APP_CONFIG.MAX_MESSAGE_LENGTH} characters.`,
  NETWORK_ERROR: 'Network error. Please try again.',
  UNAUTHORIZED: 'Unauthorized. Please login again.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  TEAM_CREATED: 'Team created successfully!',
  MESSAGE_SENT: 'Message sent successfully!',
  SUBSCRIPTION_UPDATED: 'Subscription updated successfully!',
  SETTINGS_SAVED: 'Settings saved successfully!',
} as const;
// Core application types
export interface User {
  id: string;
  name: string;
  email: string;
  subscriptionTier: SubscriptionTier;
  tokensRemaining: number;
  tokensUsed: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  specialization: string[];
  description: string;
  personality: string;
  avatar: string;
  tokenCostMultiplier: number; // Base cost multiplier for this character type
  color: string; // Theme color for the character
  isActive: boolean;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  characters: Character[];
  userId: string;
  createdAt: Date;
  isActive: boolean;
  totalInteractions: number;
}

export interface Message {
  id: string;
  content: string;
  characterId: string | null; // null for user messages
  teamId: string;
  userId: string;
  timestamp: Date;
  tokensCost: number;
  messageType: 'user' | 'character' | 'system';
  referencedMessageIds?: string[]; // For character collaboration
}

export interface ChatSession {
  id: string;
  teamId: string;
  userId: string;
  title: string;
  messages: Message[];
  startedAt: Date;
  lastActivity: Date;
  isActive: boolean;
  totalTokensUsed: number;
}

export interface SubscriptionPlan {
  id: SubscriptionTier;
  name: string;
  monthlyPrice: number;
  tokensIncluded: number;
  maxTeams: number;
  maxCharactersPerTeam: number;
  features: string[];
  isPopular?: boolean;
}

export type SubscriptionTier = 'standard' | 'pro' | 'enterprise';

export type Language = 'en' | 'pt-BR';

export interface TokenUsage {
  userId: string;
  period: string; // YYYY-MM format
  tokensUsed: number;
  tokensIncluded: number;
  overageTokens: number;
  cost: number;
}

export interface CharacterResponse {
  characterId: string;
  message: string;
  tokensCost: number;
  referencedCharacters?: string[];
  suggestions?: string[];
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface CreateTeamForm {
  name: string;
  description: string;
  characterIds: string[];
}

export interface SendMessageForm {
  content: string;
  teamId: string;
}

export interface SubscriptionForm {
  planId: SubscriptionTier;
  paymentMethodId: string;
}

// State management types
export interface AppState {
  user: User | null;
  currentTeam: Team | null;
  activeChatSession: ChatSession | null;
  language: Language;
  theme: 'light' | 'dark';
}

export interface CharacterState {
  isTyping: boolean;
  lastActive: Date;
  currentContext: string[];
}
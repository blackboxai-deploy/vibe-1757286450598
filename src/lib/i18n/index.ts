'use client';

import { createContext, useContext } from 'react';
import { translations, TranslationKey, interpolate } from './translations';
import { Language } from '../types';

// I18n context type
export interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

// Create context
export const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Hook to use i18n
export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Translation function
export function createTranslationFunction(language: Language) {
  return function t(key: TranslationKey, params?: Record<string, string | number>): string {
    const translation = translations[language][key] || translations.en[key] || key;
    return params ? interpolate(translation, params) : translation;
  };
}

// Format currency based on language
export function formatCurrency(amount: number, language: Language): string {
  if (language === 'pt-BR') {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount * 5.5); // Approximate USD to BRL conversion
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

// Format numbers based on language
export function formatNumber(number: number, language: Language): string {
  const locale = language === 'pt-BR' ? 'pt-BR' : 'en-US';
  return new Intl.NumberFormat(locale).format(number);
}

// Format dates based on language
export function formatDate(date: Date, language: Language): string {
  const locale = language === 'pt-BR' ? 'pt-BR' : 'en-US';
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Format relative time based on language
export function formatRelativeTime(date: Date, language: Language): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  
  // Simple relative time formatting
  if (diffInSeconds < 60) {
    return language === 'pt-BR' ? 'agora' : 'now';
  } else if (diffInMinutes < 60) {
    const unit = language === 'pt-BR' ? 
      (diffInMinutes === 1 ? 'minuto atrás' : `${diffInMinutes} minutos atrás`) :
      (diffInMinutes === 1 ? '1 minute ago' : `${diffInMinutes} minutes ago`);
    return unit;
  } else if (diffInHours < 24) {
    const unit = language === 'pt-BR' ? 
      (diffInHours === 1 ? '1 hora atrás' : `${diffInHours} horas atrás`) :
      (diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`);
    return unit;
  } else {
    const unit = language === 'pt-BR' ? 
      (diffInDays === 1 ? '1 dia atrás' : `${diffInDays} dias atrás`) :
      (diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`);
    return unit;
  }
}

// Get browser language preference
export function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language;
  if (browserLang.startsWith('pt')) {
    return 'pt-BR';
  }
  return 'en';
}

// Language storage key
export const LANGUAGE_STORAGE_KEY = 'teamai-language';
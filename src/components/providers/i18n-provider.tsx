'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/lib/types';
import { I18nContext, createTranslationFunction, getBrowserLanguage, LANGUAGE_STORAGE_KEY } from '@/lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get stored language or use browser preference
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    const initialLanguage = storedLanguage || getBrowserLanguage();
    setLanguage(initialLanguage);
    setMounted(true);
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
  };

  const t = createTranslationFunction(language);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/lib/i18n';
import { LanguageToggle } from '@/components/layout/language-toggle';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { AI_CHARACTERS, SUBSCRIPTION_PLANS } from '@/lib/constants';
import { formatCurrency } from '@/lib/i18n';

export default function LandingPage() {
  const { t, language } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-sm font-bold">T</span>
            </div>
            <span className="font-bold">TeamAI Chat</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <Button asChild variant="outline">
              <Link href="/dashboard">{t('nav.dashboard')}</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
              {t('landing.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('landing.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/characters">{t('landing.hero.cta')}</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                {t('landing.hero.demo')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t('features.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('features.collaboration.title')}</h3>
                <p className="text-muted-foreground">{t('features.collaboration.description')}</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('features.specialization.title')}</h3>
                <p className="text-muted-foreground">{t('features.specialization.description')}</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('features.multilingual.title')}</h3>
                <p className="text-muted-foreground">{t('features.multilingual.description')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Characters Preview Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t('characters.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('characters.subtitle')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_CHARACTERS.slice(0, 6).map((character) => (
              <Card key={character.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <img
                      src={character.avatar}
                      alt={`${character.name} avatar`}
                      className="w-20 h-20 rounded-full mx-auto object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{character.name}</h3>
                      <p className="text-sm text-muted-foreground">{character.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {character.specialization.slice(0, 2).map((spec, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/characters">View All Characters</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t('subscription.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('subscription.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.isPopular ? 'border-primary border-2 shadow-lg' : ''}`}>
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="px-3 py-1">{t('subscription.popular')}</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{formatCurrency(plan.monthlyPrice, language)}</span>
                        <span className="text-muted-foreground">/{t('subscription.perMonth')}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {plan.tokensIncluded.toLocaleString()} {t('subscription.tokens')}
                      </p>
                    </div>
                    
                    <ul className="space-y-3 text-sm">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full" 
                      variant={plan.isPopular ? 'default' : 'outline'}
                      asChild
                    >
                      <Link href="/subscription">{t('subscription.upgrade')}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-sm font-bold">T</span>
            </div>
            <span className="font-bold">TeamAI Chat</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 TeamAI Chat. Built with AI collaboration in mind.
          </p>
        </div>
      </footer>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { useI18n } from '@/lib/i18n';
import { LanguageToggle } from '@/components/layout/language-toggle';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { AI_CHARACTERS } from '@/lib/constants';

export default function CharactersPage() {
  const { t } = useI18n();
  const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);

  const handleCharacterSelect = (characterId: string) => {
    setSelectedCharacters(prev => 
      prev.includes(characterId) 
        ? prev.filter(id => id !== characterId)
        : [...prev, characterId]
    );
  };

  const getTokenCostDisplay = (multiplier: number) => {
    return `${Math.round(25 * multiplier)} tokens/msg`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-sm font-bold">T</span>
              </div>
              <span className="font-bold">TeamAI Chat</span>
            </Link>
            <nav className="flex space-x-4">
              <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                {t('nav.dashboard')}
              </Link>
              <span className="text-sm font-medium">{t('nav.characters')}</span>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            {selectedCharacters.length > 0 && (
              <Button asChild>
                <Link href={`/teams/create?characters=${selectedCharacters.join(',')}`}>
                  Create Team ({selectedCharacters.length})
                </Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t('characters.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('characters.subtitle')}
            </p>
            {selectedCharacters.length > 0 && (
              <div className="flex justify-center">
                <Badge variant="secondary" className="text-sm">
                  {selectedCharacters.length} characters selected
                </Badge>
              </div>
            )}
          </div>

          {/* Characters Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_CHARACTERS.map((character) => {
              const isSelected = selectedCharacters.includes(character.id);
              
              return (
                <Card 
                  key={character.id} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    isSelected ? 'ring-2 ring-primary shadow-md' : ''
                  }`}
                  onClick={() => handleCharacterSelect(character.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={character.avatar}
                          alt={`${character.name} avatar`}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">{character.name}</h3>
                          <p className="text-sm text-muted-foreground">{character.role}</p>
                        </div>
                      </div>
                      <Checkbox
                        checked={isSelected}
                        onChange={() => handleCharacterSelect(character.id)}
                        className="mt-1"
                      />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {character.description}
                    </p>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">{t('characters.specialization')}:</p>
                      <div className="flex flex-wrap gap-1">
                        {character.specialization.map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground">{t('characters.cost')}</p>
                        <p className="text-sm font-medium">{getTokenCostDisplay(character.tokenCostMultiplier)}</p>
                      </div>
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: character.color }}
                        title="Character theme color"
                      />
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        variant={isSelected ? "default" : "outline"} 
                        size="sm" 
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCharacterSelect(character.id);
                        }}
                      >
                        {isSelected ? t('characters.selected') : t('characters.select')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/dashboard">{t('common.back')}</Link>
            </Button>
            {selectedCharacters.length > 0 && (
              <Button asChild>
                <Link href={`/teams/create?characters=${selectedCharacters.join(',')}`}>
                  {t('teams.create')} ({selectedCharacters.length} {selectedCharacters.length === 1 ? 'character' : 'characters'})
                </Link>
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useI18n, formatNumber, formatRelativeTime } from '@/lib/i18n';
import { LanguageToggle } from '@/components/layout/language-toggle';
import { ThemeToggle } from '@/components/layout/theme-toggle';

export default function DashboardPage() {
  const { t, language } = useI18n();

  // Mock user data - in real app this would come from API/database
  const mockUser = {
    name: 'John Doe',
    subscriptionTier: 'pro' as const,
    tokensRemaining: 35000,
    tokensUsed: 15000,
    tokensIncluded: 50000,
  };

  const mockStats = {
    activeTeams: 3,
    messagesThisMonth: 248,
    totalInteractions: 1247,
  };

  const mockTeams = [
    {
      id: '1',
      name: 'Web Development Team',
      description: 'Building modern web applications',
      members: 3,
      lastActivity: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      totalInteractions: 156,
    },
    {
      id: '2', 
      name: 'Mobile App Team',
      description: 'Cross-platform mobile development',
      members: 4,
      lastActivity: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      totalInteractions: 89,
    },
    {
      id: '3',
      name: 'Data Analytics Team',
      description: 'Business intelligence and analytics',
      members: 2,
      lastActivity: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      totalInteractions: 234,
    },
  ];

  const tokenUsagePercentage = (mockUser.tokensUsed / mockUser.tokensIncluded) * 100;

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
              <span className="text-sm font-medium">{t('nav.dashboard')}</span>
              <Link href="/characters" className="text-sm text-muted-foreground hover:text-foreground">
                {t('nav.characters')}
              </Link>
              <Link href="/teams" className="text-sm text-muted-foreground hover:text-foreground">
                {t('nav.teams')}
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <Button variant="outline" asChild>
              <Link href="/subscription">{t('nav.subscription')}</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-3xl font-bold">{t('dashboard.welcome')}</h1>
              <p className="text-muted-foreground mt-1">
                Manage your AI teams and track your usage
              </p>
            </div>
            <div className="flex space-x-2">
              <Button asChild>
                <Link href="/characters">{t('teams.create')}</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/chat">{t('nav.chat')}</Link>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('dashboard.stats.teams')}</CardTitle>
                <span className="text-2xl">👥</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.activeTeams}</div>
                <p className="text-xs text-muted-foreground">
                  Active and ready to collaborate
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('dashboard.stats.messages')}</CardTitle>
                <span className="text-2xl">💬</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatNumber(mockStats.messagesThisMonth, language)}</div>
                <p className="text-xs text-muted-foreground">
                  Messages sent this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('dashboard.stats.tokens')}</CardTitle>
                <span className="text-2xl">🪙</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatNumber(mockUser.tokensRemaining, language)}</div>
                <p className="text-xs text-muted-foreground">
                  Of {formatNumber(mockUser.tokensIncluded, language)} included
                </p>
                <Progress value={100 - tokenUsagePercentage} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('dashboard.stats.usage')}</CardTitle>
                <span className="text-2xl">📊</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{Math.round(tokenUsagePercentage)}%</div>
                <p className="text-xs text-muted-foreground">
                  {formatNumber(mockUser.tokensUsed, language)} tokens used
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>{t('dashboard.quickActions')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2" asChild>
                  <Link href="/characters">
                    <span className="text-2xl">🤖</span>
                    <span className="text-sm font-medium">Browse Characters</span>
                    <span className="text-xs text-muted-foreground text-center">
                      Explore our AI specialists
                    </span>
                  </Link>
                </Button>

                <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2" asChild>
                  <Link href="/teams/create">
                    <span className="text-2xl">➕</span>
                    <span className="text-sm font-medium">Create Team</span>
                    <span className="text-xs text-muted-foreground text-center">
                      Assemble your AI team
                    </span>
                  </Link>
                </Button>

                <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2" asChild>
                  <Link href="/chat">
                    <span className="text-2xl">💭</span>
                    <span className="text-sm font-medium">Start Chat</span>
                    <span className="text-xs text-muted-foreground text-center">
                      Begin collaboration
                    </span>
                  </Link>
                </Button>

                <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2" asChild>
                  <Link href="/subscription">
                    <span className="text-2xl">⚡</span>
                    <span className="text-sm font-medium">Upgrade Plan</span>
                    <span className="text-xs text-muted-foreground text-center">
                      Unlock more features
                    </span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Teams */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Your Active Teams</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/teams">View All</Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockTeams.map((team) => (
                <div key={team.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">{team.name}</h3>
                    <p className="text-sm text-muted-foreground">{team.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>{team.members} members</span>
                      <span>•</span>
                      <span>{team.totalInteractions} interactions</span>
                      <span>•</span>
                      <span>{formatRelativeTime(team.lastActivity, language)}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/chat?team=${team.id}`}>Chat</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/teams/${team.id}`}>Settings</Link>
                    </Button>
                  </div>
                </div>
              ))}
              
              {mockTeams.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">You haven't created any teams yet.</p>
                  <Button asChild>
                    <Link href="/characters">Create Your First Team</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
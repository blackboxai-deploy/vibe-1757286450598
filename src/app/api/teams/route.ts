import { NextRequest, NextResponse } from 'next/server';
import { AI_CHARACTERS } from '@/lib/constants';
import { Team, ApiResponse } from '@/lib/types';

// Mock database - in real app this would be a proper database
const mockTeams: Team[] = [
  {
    id: 'team-1',
    name: 'Web Development Team',
    description: 'Full-stack web application development',
    characters: AI_CHARACTERS.slice(0, 3),
    userId: 'user-1',
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    isActive: true,
    totalInteractions: 342,
  },
  {
    id: 'team-2',
    name: 'Mobile App Team', 
    description: 'Cross-platform mobile development',
    characters: AI_CHARACTERS.slice(1, 5),
    userId: 'user-1',
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    isActive: true,
    totalInteractions: 189,
  },
];

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId') || 'user-1';

    // Filter teams by user
    const userTeams = mockTeams.filter(team => team.userId === userId);

    const response: ApiResponse<Team[]> = {
      success: true,
      data: userTeams,
      message: 'Teams retrieved successfully',
    };

    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: 'Internal server error',
    };

    return NextResponse.json(response, { status: 500 });
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { name, description, characterIds, userId = 'user-1' } = body;

    // Validate input
    if (!name || !characterIds || characterIds.length === 0) {
      const response: ApiResponse = {
        success: false,
        error: 'Team name and characters are required',
      };
      return NextResponse.json(response, { status: 400 });
    }

    if (characterIds.length > 5) {
      const response: ApiResponse = {
        success: false,
        error: 'Maximum 5 characters allowed per team',
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Get selected characters
    const selectedCharacters = AI_CHARACTERS.filter(char => 
      characterIds.includes(char.id)
    );

    if (selectedCharacters.length !== characterIds.length) {
      const response: ApiResponse = {
        success: false,
        error: 'Invalid character IDs provided',
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Create new team
    const newTeam: Team = {
      id: `team-${Date.now()}`,
      name: name.trim(),
      description: description?.trim() || '',
      characters: selectedCharacters,
      userId,
      createdAt: new Date(),
      isActive: true,
      totalInteractions: 0,
    };

    // Add to mock database
    mockTeams.push(newTeam);

    const response: ApiResponse<Team> = {
      success: true,
      data: newTeam,
      message: 'Team created successfully',
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: 'Internal server error',
    };

    return NextResponse.json(response, { status: 500 });
  }
}
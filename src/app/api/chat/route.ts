import { NextRequest, NextResponse } from 'next/server';
import { AI_CHARACTERS, TOKEN_COSTS } from '@/lib/constants';
import { CharacterResponse, ApiResponse } from '@/lib/types';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { message, teamId, characterIds } = body;

    // Validate input
    if (!message || !teamId || !characterIds || characterIds.length === 0) {
      const response: ApiResponse = {
        success: false,
        error: 'Message, team ID, and character IDs are required',
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Get team characters
    const teamCharacters = AI_CHARACTERS.filter(char => 
      characterIds.includes(char.id)
    );

    if (teamCharacters.length === 0) {
      const response: ApiResponse = {
        success: false,
        error: 'No valid characters found for this team',
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Generate AI responses
    const responses: CharacterResponse[] = [];
    
    // Limit to 3 characters responding to avoid overwhelming user
    const respondingCharacters = teamCharacters.slice(0, 3);

    for (const character of respondingCharacters) {
      const characterResponse = await generateCharacterResponse(
        message, 
        character.id, 
        teamCharacters
      );
      responses.push(characterResponse);
    }

    const response: ApiResponse<CharacterResponse[]> = {
      success: true,
      data: responses,
      message: 'Chat responses generated successfully',
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Chat API error:', error);
    const response: ApiResponse = {
      success: false,
      error: 'Internal server error',
    };

    return NextResponse.json(response, { status: 500 });
  }
}

async function generateCharacterResponse(
  userMessage: string, 
  characterId: string, 
  teamCharacters: typeof AI_CHARACTERS
): Promise<CharacterResponse> {
  const character = AI_CHARACTERS.find(char => char.id === characterId);
  
  if (!character) {
    throw new Error(`Character ${characterId} not found`);
  }

  // Generate contextual response based on character role and specialization
  let responseContent = '';
  const tokenCost = Math.round(TOKEN_COSTS.CHARACTER_RESPONSE_BASE * character.tokenCostMultiplier);

  // Character-specific response templates
  switch (character.id) {
    case 'dev-alex':
      responseContent = generateDeveloperResponse(userMessage);
      break;
    case 'designer-sophia':
      responseContent = generateDesignerResponse(userMessage);
      break;
    case 'pm-marcus':
      responseContent = generateProjectManagerResponse(userMessage, teamCharacters);
      break;
    case 'qa-elena':
      responseContent = generateQAResponse(userMessage);
      break;
    case 'analyst-david':
      responseContent = generateAnalystResponse(userMessage);
      break;
    case 'devops-sara':
      responseContent = generateDevOpsResponse(userMessage);
      break;
    default:
      responseContent = `I'll help with the ${character.role.toLowerCase()} aspects of your request. Let me analyze this and provide my expertise.`;
  }

  return {
    characterId,
    message: responseContent,
    tokensCost: tokenCost,
    referencedCharacters: teamCharacters.filter(c => c.id !== characterId).map(c => c.id).slice(0, 2),
    suggestions: [`Ask ${character.name} for more details`, `Request implementation guidance`],
  };
}

function generateDeveloperResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('frontend') || lowerMessage.includes('ui') || lowerMessage.includes('react')) {
    return "From a frontend perspective, I'd recommend using React with TypeScript for type safety. We should also consider component architecture, state management, and responsive design patterns.";
  } else if (lowerMessage.includes('backend') || lowerMessage.includes('api') || lowerMessage.includes('database')) {
    return "For the backend implementation, I suggest using Node.js with Express or Next.js API routes. We'll need to design proper database schemas, API endpoints, and authentication flows.";
  } else {
    return "I can help architect and implement the technical solution. Let me break down the requirements and suggest the best approach using modern technologies and best practices.";
  }
}

function generateDesignerResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('design') || lowerMessage.includes('ui') || lowerMessage.includes('ux')) {
    return "From a design perspective, I'll focus on creating an intuitive user experience. We should start with user research, create wireframes, and develop a cohesive design system.";
  } else {
    return "I'll help create a beautiful and functional user interface. Let's discuss the user journey, visual hierarchy, and how we can make this experience delightful for users.";
  }
}

function generateProjectManagerResponse(message: string, team: any[]): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('timeline') || lowerMessage.includes('deadline')) {
    return `Great discussion, team! I'll create a detailed timeline with milestones. Based on our team of ${team.length} specialists, I estimate we can deliver this efficiently with proper sprint planning.`;
  } else {
    return `Building on the team's expertise, I'll coordinate our efforts and ensure clear communication. Let's define success metrics and establish a workflow that maximizes our collective strengths.`;
  }
}

function generateQAResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('test') || lowerMessage.includes('quality')) {
    return "I'll develop a comprehensive testing strategy covering unit tests, integration tests, and end-to-end scenarios. We should also consider edge cases and error handling.";
  } else {
    return "I'll ensure high quality throughout development. Let me create test cases, establish QA processes, and define acceptance criteria to guarantee a reliable product.";
  }
}

function generateAnalystResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('business') || lowerMessage.includes('requirement')) {
    return "From a business analysis perspective, let's define clear requirements and success metrics. I'll help translate business needs into technical specifications.";
  } else {
    return "I'll provide strategic insights and ensure alignment with business objectives. Let's analyze market trends, competitive landscape, and identify opportunities for differentiation.";
  }
}

function generateDevOpsResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('deployment') || lowerMessage.includes('infrastructure')) {
    return "For deployment and infrastructure, I'll set up CI/CD pipelines, containerization with Docker, and cloud infrastructure. We'll ensure scalable and reliable deployments.";
  } else {
    return "I'll handle the infrastructure and deployment automation. Let's discuss scalability requirements, backup strategies, and disaster recovery planning for a robust system.";
  }
}
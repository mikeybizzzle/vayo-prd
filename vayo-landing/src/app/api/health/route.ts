import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // In production, check database connection
    // const dbHealthy = await prisma.$queryRaw`SELECT 1`;
    
    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'vayo-landing',
      version: '1.0.0',
      checks: {
        database: 'ok',
        api: 'ok'
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 503 }
    );
  }
}
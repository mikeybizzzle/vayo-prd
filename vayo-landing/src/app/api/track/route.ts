import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, affiliateId, data } = body;

    if (!event) {
      return NextResponse.json(
        { error: 'Event is required' },
        { status: 400 }
      );
    }

    // Log tracking event
    console.log('Tracking event:', {
      event,
      affiliateId,
      data,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    });

    // In production, save to database:
    // await prisma.trackingEvent.create({
    //   data: {
    //     event,
    //     affiliateId,
    //     data: JSON.stringify(data),
    //     userAgent: request.headers.get('user-agent'),
    //     ip: request.headers.get('x-forwarded-for')
    //   }
    // });

    return NextResponse.json({
      success: true,
      message: 'Event tracked successfully'
    });

  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
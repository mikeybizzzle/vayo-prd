import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, affiliateId, source, campaign } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database using Prisma
    // 2. Send welcome email via Resend
    // 3. Track conversion for affiliate
    
    // For now, we'll just log and return success
    console.log('New signup:', {
      email,
      name,
      affiliateId,
      source,
      campaign,
      timestamp: new Date().toISOString()
    });

    // In production, you'd save to database:
    // const user = await prisma.user.create({
    //   data: {
    //     email,
    //     name,
    //     affiliateId,
    //     source,
    //     campaign,
    //   }
    // });

    // Send welcome email:
    // await resend.emails.send({
    //   from: 'welcome@vayo.travel',
    //   to: email,
    //   subject: 'Welcome to Vayo - Your Free Trial is Active!',
    //   html: welcomeEmailTemplate({ name, email })
    // });

    return NextResponse.json({
      success: true,
      message: 'Signup successful'
    });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
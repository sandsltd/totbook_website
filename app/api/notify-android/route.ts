import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // In production, you would send this to an email service
    // For now, we'll log it and return success
    console.log('Android interest notification request for:', email)
    
    // You could integrate with services like SendGrid, Resend, or nodemailer here
    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: 'nick@totbook.co.uk',
    //   subject: 'Android App Interest',
    //   text: `User interested in Android app: ${email}`
    // })

    return NextResponse.json(
      { success: true, message: 'Notification request received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing notification request:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
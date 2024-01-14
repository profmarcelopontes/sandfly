import { NextRequest, NextResponse } from 'next/server'
import { Resend } from "resend"

export async function POST(req: NextRequest){
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, email, subject, text } = await req.json()
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: "prof.marcelopontes@gmail.com",
            subject: `${subject}`,
            html: `<strong>${name} - ${email}</strong>\n<p>${text}</p>`,
        })
        //console.log("Dados do email: ", data)
        return NextResponse.json({ data })
    } catch (err) {
        return NextResponse.json({err})
    }
}

//https://dev.to/mayorstacks/sending-react-emails-using-nextjs-and-the-resend-sdk-sdk-19bd
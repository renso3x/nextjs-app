import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    resend.emails.send({ 
        from: '', // add your domain here
        to: 'enso123456@gmail.com',
        subject: '...',
        react: <WelcomeTemplate name="Romeo" />
    })

    return NextResponse.json({})
}
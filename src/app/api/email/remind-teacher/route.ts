import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';
import RemindTeacherToUseAppEmail  from '@/emails/remind-teacher-to-use-app'

const resend = new Resend(process.env.RESEND_API_KEY);


import { z } from "zod";



export async function POST(request: Request) {
  const requestBoday = await request.json();
  const schema = z.object({
    mail_subject: z.string(),
    send_to: z.union([z.string(), z.array(z.string())]),
    send_cc: z.union([z.string(), z.array(z.string())]).optional(),
    send_bcc: z.union([z.string(), z.array(z.string())]).optional(),
    header_preview: z.string(),
    teacher_name: z.string()
  });
  const validation = schema.safeParse(requestBoday);

  if (!validation.success) {
    const errors = validation.error.format();

    return Response.json({
      errors,
      success: false,
      message: "Invalid request",
    });
  }


  const { mail_subject, send_to, send_cc, send_bcc, header_preview, teacher_name } = validation.data;
  const results = await resend.emails.send({
    from: `${process.env.FROM_EMAIL}`,
    to: send_to,
    subject: mail_subject,
    cc: send_cc,
    bcc: send_bcc,
    react:  RemindTeacherToUseAppEmail({
      header_preview,
      name: teacher_name
    })
  });

  if(results?.error) {
    return Response.json({
      success: false,
      message: "Mail Send Fail!",
      results
    });

  }
  return Response.json({
    success: true,
    message: "Mail Send Successfully!"
  });
}
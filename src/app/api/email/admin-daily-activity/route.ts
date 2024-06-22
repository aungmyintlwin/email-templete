import { headers } from 'next/headers'
import { Resend } from 'resend';
import AdminActivityReport  from '@/emails/admin-daily-activity'

const resend = new Resend(process.env.RESEND_API_KEY);


import { z } from "zod";



export async function POST(request: Request) {

  const headersList = headers()
  const token = headersList.get('Authorization')
  if(!token) {
    return Response.json({
      success: false,
      message: 'Auth Token Required'
    })
  }
  let response = await fetch(`${process.env.AUTH_BACKEND_URL}/user/check`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      'Authorization': token
    }
  })

  response = await response.json();
  //@ts-ignore
  if(response?.status === 'OK'){
    const requestBoday = await request.json();
    const schema = z.object({
      mail_subject: z.string(),
      send_to: z.union([z.string(), z.array(z.string())]),
      send_cc: z.union([z.string(), z.array(z.string())]).optional(),
      send_bcc: z.union([z.string(), z.array(z.string())]).optional(),
      header_preview: z.string(),
      header_name: z.string(),
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
    const { mail_subject, send_to, send_cc, send_bcc, header_preview, header_name } = validation.data;
    const results = await resend.emails.send({
      from: `${process.env.FROM_EMAIL}`,
      to: send_to,
      subject: mail_subject,
      cc: send_cc,
      bcc: send_bcc,
      react:  AdminActivityReport({
        header_preview,
        header_name,
        Now: `${new Date()}`,
        Last1DayUsers: [],
        Last3DaysUsers: [],
        Last7DaysUsers: [],
        Last14DaysUsers: []
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
  }else{
    return Response.json({
      success: false,
      message: 'Auth Fail'
    })
  }

}
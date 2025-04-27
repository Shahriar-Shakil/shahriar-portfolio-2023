import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend"; // Correct import for resend@4.x

type sheetForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// Initialize the Resend client
const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests are allowed" });
  }

  const body = req.body as sheetForm;
  try {
    const email = {
      from: process.env.RESEND_CONTACT_EMAIL!,
      to: process.env.RESEND_CONTACT_EMAIL!,
      subject: "New Contact Form Portfolio Site",
      html: `
        <h3>New message from ${body.name}</h3>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    };

    const response = await resend.emails.send(email);  

    return res.status(201).json({
      status: "success",
      message: "Message sent successfully",
      data: response,
    });
  } catch (e: any) {
    return res.status(500).json({ status: "error", message: e.message });
  }
}

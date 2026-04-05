import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true, // Port 465 = SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Untuk shared hosting
  },
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"CND Logistic" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "sales@cndlogistic.com",
      replyTo: email,
      subject: subject
        ? `[Website CND] ${subject}`
        : `[Website CND] Pesan dari ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 10px;">
          <div style="background: #0e1630; padding: 20px 28px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">📬 Pesan Baru dari Website CND Logistic</h2>
            <p style="color: #94a3b8; margin: 4px 0 0; font-size: 13px;">PT Cahaya Nusantara Dunia</p>
          </div>
          <div style="background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; overflow: hidden;">
            <table style="width:100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 14px 20px; font-weight: 600; color: #6b7280; width: 100px; background: #f8fafc; border-bottom: 1px solid #f1f5f9;">Nama</td>
                <td style="padding: 14px 20px; color: #111827; border-bottom: 1px solid #f1f5f9;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 14px 20px; font-weight: 600; color: #6b7280; background: #f8fafc; border-bottom: 1px solid #f1f5f9;">Email</td>
                <td style="padding: 14px 20px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              ${subject ? `
              <tr>
                <td style="padding: 14px 20px; font-weight: 600; color: #6b7280; background: #f8fafc; border-bottom: 1px solid #f1f5f9;">Subjek</td>
                <td style="padding: 14px 20px; color: #111827; border-bottom: 1px solid #f1f5f9;">${subject}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 14px 20px; font-weight: 600; color: #6b7280; background: #f8fafc; vertical-align: top;">Pesan</td>
                <td style="padding: 14px 20px; color: #111827; white-space: pre-wrap; line-height: 1.6;">${message}</td>
              </tr>
            </table>
          </div>
          <p style="color: #9ca3af; font-size: 11px; text-align: center; margin-top: 16px;">
            Dikirim melalui form kontak website CND Logistic &bull; ${new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })} WIB
          </p>
        </div>
      `,
    });

    return Response.json(
      { success: true, message: "Pesan berhasil dikirim!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Gagal mengirim pesan. Silakan coba lagi atau hubungi kami via WhatsApp." },
      { status: 500 }
    );
  }
}

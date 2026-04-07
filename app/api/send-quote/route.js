import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, service, message } = data;

    // Provide default messages if fields are empty
    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ error: "Mohon lengkapi semua *field wajib pada form." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // SMTP Configuration using provided credentials
    // Seringkali port 465 diblokir oleh provider internet (ISP) lokal di Indonesia
    // Jadi kita gunakan port alternatif STARTTLS yaitu 587
    const transporter = nodemailer.createTransport({
      host: "mail.cndlogistic.com",
      port: 587,
      secure: false, // false untuk port 587 (menggunakan STARTTLS)
      auth: {
        user: "sales@cndlogistic.com",
        pass: "rumahrumahan",
      },
      tls: {
        rejectUnauthorized: false // Membantu melewati sertifikat SSL yang belum terbaca sistem lokal
      }
    });

    const mailOptions = {
      from: `"CND Logistics Website" <sales@cndlogistic.com>`, 
      to: "sales@cndlogistic.com", // Sent to the sales team itself
      replyTo: email, // Reply will go directly to the customer's email
      subject: `[Penawaran Baru] Permintaan Quotation dari ${name}`,
      text: `Anda mendapat permintaan penawaran baru dari Website.\n\nDetail:\nNama: ${name}\nNo HP/WA: ${phone}\nEmail: ${email}\nLayanan: ${service}\n\nPesan/Rincian:\n${message}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0b51a1;">Permintaan Quotation (Penawaran) Baru</h2>
          <p>Anda baru saja mendapatkan kiriman formulir penawaran via sistem Notifikasi Web CND Logistics.</p>
          <hr />
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; width: 130px; font-weight: bold;">Nama Klien</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">No. WhatsApp</td>
              <td style="padding: 10px; border: 1px solid #ddd;">
                <a href="https://wa.me/${phone.replace(/^0/, '62')}" target="_blank" style="color: #25d366; text-decoration: none;">
                  ${phone} (Chat WA)
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Layanan Tujuan</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><span style="background-color: #f1f5f9; padding: 4px 8px; border-radius: 4px;">${service}</span></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Pesan / Rincian Barang</td>
              <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="font-size: 12px; color: #777; margin-top: 30px;">
            Email ini dikirim secara otomatis oleh Website PT Cahaya Nusantara Dunia. Balas email ini untuk langsung terhubung dengan pengirim (Reply-To).
          </p>
        </div>
      `,
    };

    // Make the backend wait until the email is sent
    const info = await transporter.sendMail(mailOptions);
    console.log("Email tersent: %s", info.messageId);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Nodemailer Error:", error);
    return new Response(JSON.stringify({ error: "Terjadi kesalahan sistem saat mengirim email SMTP.", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

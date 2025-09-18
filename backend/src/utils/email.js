import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendEmail = async (options) => {
  try {
    const message = {
      from: process.env.EMAIL_FROM,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html
    };

    const info = await transporter.sendMail(message);
    console.log('✅ Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    throw error;
  }
};

export const sendVerificationEmail = async (user, token) => {
  const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #22c55e; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🌱 India Carbon Registry</h1>
                <h2>Email Verification Required</h2>
            </div>
            <div class="content">
                <p>Dear ${user.name},</p>
                <p>Thank you for registering with India Carbon Registry! To complete your registration and start using our platform, please verify your email address.</p>
                <p>Click the button below to verify your email:</p>
                <a href="${verificationUrl}" class="button">Verify Email Address</a>
                <p>Or copy and paste this link in your browser:</p>
                <p style="word-break: break-all; color: #666;">${verificationUrl}</p>
                <p><strong>This link will expire in 24 hours.</strong></p>
                <p>If you didn't create an account with us, please ignore this email.</p>
                <p>Best regards,<br>India Carbon Registry Team</p>
            </div>
            <div class="footer">
                <p>© 2024 India Carbon Registry. All rights reserved.</p>
                <p>This is an automated email. Please do not reply.</p>
            </div>
        </div>
    </body>
    </html>
  `;

  await sendEmail({
    to: user.email,
    subject: '🌱 Verify your India Carbon Registry account',
    html
  });
};

export const sendPasswordResetEmail = async (user, token) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #ef4444; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🔐 India Carbon Registry</h1>
                <h2>Password Reset Request</h2>
            </div>
            <div class="content">
                <p>Dear ${user.name},</p>
                <p>We received a request to reset your password for your India Carbon Registry account.</p>
                <p>Click the button below to reset your password:</p>
                <a href="${resetUrl}" class="button">Reset Password</a>
                <p>Or copy and paste this link in your browser:</p>
                <p style="word-break: break-all; color: #666;">${resetUrl}</p>
                <p><strong>This link will expire in 1 hour.</strong></p>
                <p>If you didn't request a password reset, please ignore this email. Your password will remain unchanged.</p>
                <p>Best regards,<br>India Carbon Registry Team</p>
            </div>
            <div class="footer">
                <p>© 2024 India Carbon Registry. All rights reserved.</p>
                <p>This is an automated email. Please do not reply.</p>
            </div>
        </div>
    </body>
    </html>
  `;

  await sendEmail({
    to: user.email,
    subject: '🔐 Reset your India Carbon Registry password',
    html
  });
};

export const sendWelcomeEmail = async (user) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #22c55e; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎉 Welcome to India Carbon Registry!</h1>
            </div>
            <div class="content">
                <p>Dear ${user.name},</p>
                <p>Congratulations! Your email has been successfully verified and your account is now active.</p>
                <p>You can now access all features of the India Carbon Registry platform:</p>
                <ul>
                    <li>🏗️ Register carbon credit projects</li>
                    <li>📊 Track project progress and emissions</li>
                    <li>💱 Trade carbon credits in the marketplace</li>
                    <li>📈 View analytics and reports</li>
                    <li>🤝 Connect with other stakeholders</li>
                </ul>
                <a href="${process.env.FRONTEND_URL}/dashboard" class="button">Go to Dashboard</a>
                <p>Thank you for joining India's journey towards carbon neutrality!</p>
                <p>Best regards,<br>India Carbon Registry Team</p>
            </div>
            <div class="footer">
                <p>© 2024 India Carbon Registry. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;

  await sendEmail({
    to: user.email,
    subject: '🎉 Welcome to India Carbon Registry!',
    html
  });
};

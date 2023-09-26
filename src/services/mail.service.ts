import Mail from 'nodemailer/lib/mailer';
import transporter from '../config/smtp.config';

class MailService {
  public sendMail = async (mailOptions: Mail.Options) => {
    console.log('Sending email...', mailOptions);
    transporter.sendMail(mailOptions);
  };
}
const mailService = new MailService();

export { mailService };

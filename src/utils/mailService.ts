import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SendEmailDto } from 'src/modules/user/dto/send-mail.dto';
import * as Mailgen from 'mailgen';

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Mototors Shop',
    link: 'https://localhost:3001',
    logo: 'https://live.staticflickr.com/65535/52991067244_2c033406c3_t.jpg',
  },
});

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail({ to, subject, text }: SendEmailDto) {
    await this.mailerService
      .sendMail({
        to,
        subject,
        html: text,
      })
      .then(() => {
        console.log('Email sent successfully');
      })
      .catch((err) => {
        console.log(err);
        throw new InternalServerErrorException('Failed to send email');
      });
  }

  resetPasswordtemplate(
    userEmail: string,
    userName: string,
    resetToken: string,
  ) {
    const email = {
      body: {
        name: `${userName}`,
        intro:
          'Você recebeu este e-mail porque uma solicitação de redefinição de senha para sua conta foi recebida.',
        action: {
          instructions: 'Clique no botão abaixo para redefinir sua senha:',
          button: {
            color: '#4529E6',
            text: 'Redefinir senha.',
            link: `http://localhost:3000/resetPassword/${resetToken}`,
          },
          outro: 'Se você não fez esta solicitação, ignore este e-mail.',
        },
      },
    };

    const emailBody = mailGenerator.generate(email);

    const emailTemplate = {
      to: userEmail,
      subject: 'Reset Password Motors Shop',
      text: emailBody,
    };

    return emailTemplate;
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { NotificationStrategy } from 'src/notifications/interfaces/notification-strategy.interface';


@Injectable()
export class EmailService implements NotificationStrategy{
    constructor(private configService: ConfigService, private readonly mailerService: MailerService) {}

    

    async send(description: string) {
        try {
            await this.mailerService.sendMail({
                to:'cesar.b@landbot.io',
                from: 'cbanchio5@gmail.com',
                subject: "testing",
                text: description
            })

        } catch(e) {
            console.log(e)
        }
        

        console.log("Email sent")
        return "done"
        
    }

   
}

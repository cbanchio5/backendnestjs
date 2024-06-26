import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NotificationStrategy } from "../interfaces/notification-strategy.interface"; 
import { EmailService } from 'src/email/email.service';


@Injectable()
export class EmailNotification implements NotificationStrategy {
 
 
  
 
  send(description: string): void {
  
    
  

    // Implement Slack notification logic here
    console.log(`Sending Email notification: ${description}`);
  }
}


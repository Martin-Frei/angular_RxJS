// angular_RxJS\src\app\components\sender\sender.ts

import { Component } from '@angular/core';
import { Service } from '../../service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sender',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './sender.html',
  styleUrls: ['./sender.css'],
})
export class Sender {
  message = '';
  constructor(private events: Service) {}

send() {
  if (this.message.trim()) { 
    this.events.sendUserData(this.message);
    this.message = '';
  }
}
}

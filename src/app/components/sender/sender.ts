// angular_RxJS\src\app\components\sender\sender.ts


import { UserFormData } from './../../service';
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

  name= '';
  email = '';
  age: number | null = null;


  constructor(private events: Service) {}

  submitForm(){
    if(!this.name || !this.email || !this.age) return
    const formData: UserFormData = {
      name: this.name,
      email: this.email,
      age: this.age
    }
    this.events.addFormData(formData);
    this.name = ''
    this.email = ''
    this.age = null
  }

send() {
  if (this.message.trim()) { 
    this.events.sendUserData(this.message);
    this.message = '';
  }
}
}

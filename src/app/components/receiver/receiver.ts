// angular_RxJS\src\app\components\receiver\receiver.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Service } from '../../service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receiver',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './receiver.html',
  styleUrls: ['./receiver.css'],
})
export class Receiver implements OnInit, OnDestroy {
  receivedMessage = '';
  private subscription?: Subscription;

  constructor(private events: Service) {}

  ngOnInit() {
    this.subscription = this.events.message$.subscribe({
      next: (message) => {
        this.receivedMessage = message;
      },
      error: (err) => {
        console.error('Error:', err);
      },
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
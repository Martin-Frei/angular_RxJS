// src\app\components\receiver-form-data\receiver-form-data.ts


import { Component, OnInit, OnDestroy } from '@angular/core';
import { Service } from '../../service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receiver-form-data',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './receiver-form-data.html',
  styleUrls: ['./receiver-form-data.css'],
})
export class ReceiverFormData implements OnInit, OnDestroy {
  formDataList: { name: string; email: string; age: number }[] = [];
  private subscription?: Subscription;  

  constructor(private service: Service) {}

  ngOnInit() {
    this.subscription = this.service.FormData$.subscribe({
      next: (data) => {
        this.formDataList = data;
      },
      error: (err) => {
        console.error('Error fetching form data:', err);
      },
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}

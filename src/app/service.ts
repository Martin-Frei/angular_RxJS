// \angular_RxJS\src\app\service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root',
})


export class Service {
  private messageSource = new BehaviorSubject<string>('');
  message$ = this.messageSource.asObservable();

  sendUserData(data: string) {
    this.messageSource.next(data);
  }
}

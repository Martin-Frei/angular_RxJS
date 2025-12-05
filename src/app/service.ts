// \angular_RxJS\src\app\service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


export interface UserFormData{
  name: string;
  email: string;
  age: number;
}
  
  
  @Injectable({
  providedIn: 'root',
})


export class Service {
  // Holds the Array of FormData
  private FormDataSubjects = new BehaviorSubject<UserFormData[]>([])
 // Puplic observable
 FormData$ = this.FormDataSubjects.asObservable();

 // add Form Info befor any components subcribes
  addFormData(data: UserFormData){
    const currentData = this.FormDataSubjects.value
    const updated = [...currentData, data]
    this.FormDataSubjects.next(updated)
  }

  private messageSource = new BehaviorSubject<string>('');
  message$ = this.messageSource.asObservable();

  sendUserData(data: string) {
    this.messageSource.next(data);
  }
}



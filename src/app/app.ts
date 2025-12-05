import { Component, signal } from '@angular/core';
import { Sender } from './components/sender/sender';
import { Receiver } from './components/receiver/receiver';
import { ReceiverFormData } from './components/receiver-form-data/receiver-form-data';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-root',
  imports: [ Sender, Receiver, ReceiverFormData, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_RxJS');
}
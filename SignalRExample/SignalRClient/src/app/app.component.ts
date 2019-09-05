import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SignalRClient';
  numberValue: Number = 0;

  /**
   *
   */
  constructor(public signalRService: SignalRService) {
        
  }

  ngOnInit(): void {
    this.signalRService.startConnection();
    this.signalRService.addBroadcastNumberListener();
    this.signalRService.addBroadcastNumberByItemId1Listener();
    this.signalRService.addBroadcastNumberByItemId2Listener();
  }

  broadcastNumber(): void {
    this.signalRService.broadcastNumber(this.numberValue);
    console.log(this.numberValue);
  }

  broadcastNumberByItemId(itemId: Number): void {
    this.signalRService.broadcastNumberByItemId(this.numberValue, itemId);
    console.log(this.numberValue);
  }
}

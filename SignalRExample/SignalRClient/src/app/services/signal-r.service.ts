import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection

  public bradcastedNumber: Number;
  public bradcastedNumberItemId1: Number;
  public bradcastedNumberItemId2: Number;

  constructor() { }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/chart')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public broadcastNumber = (number: Number) => {
    this.hubConnection.invoke('broadcastnumber', number) //broadcastnumber is the method name on the server
      .catch(err => console.error(err));
  }

  public addBroadcastNumberListener = () => {
    //broadcastnumberchannel is the name of the method on the server
    this.hubConnection.on('broadcastnumberchannel', (data) => {
      this.bradcastedNumber = data;
    })
  } 

  public broadcastNumberByItemId = (itemId: Number, number: Number) => {
    this.hubConnection.invoke('BroadcastNumberByItemId', number, itemId) //broadcastnumber is the method name on the server
      .catch(err => console.error(err));
  }

  public addBroadcastNumberByItemId1Listener = () => {
    //broadcastnumberchannel is the name of the method on the server
    this.hubConnection.on('1', (data) => {
      this.bradcastedNumberItemId1 = data;
    })
  } 

  public addBroadcastNumberByItemId2Listener = () => {
    //broadcastnumberchannel is the name of the method on the server
    this.hubConnection.on('2', (data) => {
      this.bradcastedNumberItemId2 = data;
    })
  } 
} 

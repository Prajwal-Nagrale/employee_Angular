import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  getMessage(){
    return this.messageService.messages;
  }

  reset(){
    this.messageService.clear();
  }

  ngOnInit(): void {
    this.messageService.messages=[];
    this.messageService.addMessage('Employees Initiated');
    this.messageService.addMessage("Getting all Employees")
  }

}

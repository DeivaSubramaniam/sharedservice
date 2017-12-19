import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
message: string;
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.currentMessage.subscribe(message => this.message = message);
  }
  newMessage() {
    this.ds.changeMessage('Hello Infinijith');
  }

}

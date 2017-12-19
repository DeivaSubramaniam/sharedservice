import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

message: string;
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.currentMessage.subscribe(message => this.message = message);
  }

}

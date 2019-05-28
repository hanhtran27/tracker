import { Component, OnInit, HostBinding, Input } from '@angular/core';
// import class Goal from goal.model.ts
import { Goal } from './goal.model';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row'; 

  //configure goal with input
  // Goal is from app component
  @Input() goal: Goal; 

  constructor() {
  }

  ngOnInit() {
  }
}


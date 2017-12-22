import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
@Input() contestAnswer: string;
@Output() buttonClicked = new EventEmitter();
usersAnswer: String;

  constructor() { }

  //toLowercase does not like undefined and I didn't like empty strings. SO I came up with this extra check to resolve both items.
  isPopulated() {
    if (this.usersAnswer == undefined || this.usersAnswer == "") {
      alert("Please populate entry field");
    }
    else {
      this.buttonClicked.emit(this.usersAnswer);
      this.usersAnswer = "";
    }
  }

  

  ngOnInit() {
  }

}

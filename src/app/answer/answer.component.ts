import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() questionInfo;
  @Output() nextQuestion = new EventEmitter();
  usersAnswer: String;
  usersScore: number = 0;


  constructor() { }

  //toLowercase does not like undefined and I didn't like empty strings. SO I came up with this extra check to resolve both items.
  isPopulated() {
    if (this.usersAnswer == undefined || this.usersAnswer == "") {
      alert("Please populate entry field");
    }
    this.checkAnswer();
  }

  checkAnswer(): void {
    if (this.usersAnswer.toLowerCase() == this.questionInfo.answer.toLowerCase()) {
      this.usersScore += this.questionInfo.value;
    }
    this.usersAnswer = "";
    this.nextQuestion.emit();


  }


  ngOnInit() {

  }
}



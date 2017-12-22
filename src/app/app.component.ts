import { Component, OnInit, Input } from '@angular/core';
import {JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  questionInfo;
  serviceAnswer: String;
   usersAnswer: String;
   userScore: number = 0;

  
  constructor(private jeopardyService: JeopardyService){}

  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
          this.serviceAnswer = this.questionInfo.answer;
          
        }
      )
  }

  //toLowercase does not like undefined and I didn't like empty strings. SO I came up with this extra check to resolve both items.
  isPopulated(){
    if(this.usersAnswer == undefined||this.usersAnswer == ""){
      alert("Please populate entry field");
    }
    else{
      this.checkAnswer();
    }
  }
  
  checkAnswer(){
    if(this.usersAnswer.toLowerCase()==this.questionInfo.answer.toLowerCase()){
      this.userScore += this.questionInfo.value;
     
    }
    this.usersAnswer= "";
    this.getDataFromService();
  }

  ngOnInit(){
    this.getDataFromService()
  }

}

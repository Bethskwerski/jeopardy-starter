import { Component, OnInit, Input } from '@angular/core';
import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  questionInfo;
  serviceAnswer: String;
  userScore: number = 0;


  constructor(private jeopardyService: JeopardyService) { }

  getDataFromService() {
    this.jeopardyService.getQuestionInfo()
      .subscribe(
      questionInfo => {
        this.questionInfo = questionInfo[0];
        this.serviceAnswer = this.questionInfo.answer;

      }
      )
  }

  checkAnswer(usersAnswer) {
    if (usersAnswer.toLowerCase() == this.questionInfo.answer.toLowerCase()) {
      this.userScore += this.questionInfo.value;

    }
    
    this.getDataFromService();
  }

  ngOnInit() {
    this.getDataFromService()
  }

}

import { HomeService } from 'src/services/home.service';
import { Component, OnInit } from '@angular/core';
import { EnglishWords } from 'src/utils/interfaces/englishWords';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  englishWords: EnglishWords[];
  choosedWord: any;
  mp3SpeachWord: any;
  history: any;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getAllEnglishWords().then(words => {
      this.englishWords = words
    })
    this.history = JSON.parse(localStorage.getItem("history"))
  }

  searchWord(englishWord: string) {
    this.mp3SpeachWord = ''
    return this.homeService.getOneEnglishWord(englishWord).then(words => {
      this.choosedWord = words
      words.map((arrayspeachWord) => {
        arrayspeachWord.phonetics.map((singleSpeachWord) => {
          if (singleSpeachWord.audio.length > 2)
            this.mp3SpeachWord = singleSpeachWord.audio
        })
      })
      if (!localStorage.getItem("history")) {
        localStorage.setItem("history", "[]");
      }
      const history = JSON.parse(localStorage.getItem("history"));
      history.push({ ["word"]: englishWord });
      localStorage.setItem("history", JSON.stringify(history));
    }).then(() => {
      this.history = JSON.parse(localStorage.getItem("history"))
      console.log(this.history)
    })
  }

}

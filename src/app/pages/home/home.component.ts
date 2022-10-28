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
  choosedWord: string;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getAllEnglishWords().then(words =>{ 
    this.englishWords = words
    console.log(this.englishWords)
    })
    }

    searchWord(id:number){
      return  this.homeService.getOneEnglishWord(id).then(words => {
        this.choosedWord = words.atributo
      })
    }

}

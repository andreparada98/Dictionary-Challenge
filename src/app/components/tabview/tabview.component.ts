import { EnglishWords } from './../../../utils/interfaces/englishWords';
import { HomeService } from 'src/services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss']
})
export class TabviewComponent implements OnInit {

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


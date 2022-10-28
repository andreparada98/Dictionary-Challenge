import { Store } from '@ngrx/store';
import { IAppState, choosedWord } from './../../store/app.state';
import { EnglishWords } from './../../../utils/interfaces/englishWords';
import { HomeService } from 'src/services/home.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss']
})
export class TabviewComponent implements OnInit {

  englishWords: EnglishWords[];
  constructor(
    private homeService: HomeService,
    private store: Store<{app: IAppState}>
  ) { }


  ngOnInit() {
  this.homeService.getAllEnglishWords().then(words =>{ 
  this.englishWords = words
  })
  }
  choosedWord$ = this.store.select('app').pipe(map(e => e.atributo))

  choseedWord(choosedWord: any){
    this.choosedWord$ = choosedWord
  }
}


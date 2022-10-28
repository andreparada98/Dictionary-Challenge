import { map } from 'rxjs';
import { choosedWord, IAppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { HomeService } from 'src/services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private store: Store<{app: IAppState}>) { }

  ngOnInit(): void {}

  choosedWord$ = this.store.select('app').pipe(map(e => e.atributo))

  changeWord(teste){
    this.store.dispatch(choosedWord())
  }
}

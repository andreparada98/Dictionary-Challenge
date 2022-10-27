import { EnglishWords } from './../utils/interfaces/englishWords';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { } 

  getAllEnglishWords() {
    return this.http.get('http://localhost:3002/english/').toPromise().then(res => <EnglishWords[]> res ).then(data => {return data})
  }

  getOneEnglishWord(id: number) {
    return this.http.get(`http://localhost:3002/english/${id}`).toPromise().then(res => <EnglishWords> res).then(data => {return data})
  }
}

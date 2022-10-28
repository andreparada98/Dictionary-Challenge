import { BaseComponent } from './base-component';
import { BaseModel } from '../interfaces/base.model';
import { Component, OnInit } from '@angular/core';

@Component({
  template: ''
})

export class AbstractComponent<T extends BaseModel> extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}

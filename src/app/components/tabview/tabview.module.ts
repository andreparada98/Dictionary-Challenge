import { HomeService } from 'src/services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { TabviewComponent } from './tabview.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollerModule} from 'primeng/scroller';



@NgModule({
  declarations: [TabviewComponent],
  imports: [
    CommonModule,
    TabViewModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    ScrollerModule
  ],
  exports: [
    TabviewComponent
  ],
  providers: [
    HomeService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TabviewModule { }

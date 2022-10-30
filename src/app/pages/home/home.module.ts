import { ButtonModule } from 'primeng/button';
import { ScrollerModule } from 'primeng/scroller';
import { CardModule } from 'primeng/card';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeService } from 'src/services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    HttpClientModule,
    TabViewModule,
    ScrollerModule,
    ButtonModule,
    InputTextModule
    
  ],
  providers: [
    HomeService,
  ]
})
export class HomeModule { }

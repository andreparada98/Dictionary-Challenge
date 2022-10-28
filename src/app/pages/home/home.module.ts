import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeService } from 'src/services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { TabviewModule } from 'src/app/components/tabview/tabview.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    HttpClientModule,
    TabviewModule,
    ButtonModule
  ],
  providers: [
    HomeService,
  ]
})
export class HomeModule { }

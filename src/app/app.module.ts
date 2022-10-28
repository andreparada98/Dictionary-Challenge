import { appReducer } from './store/app.state';
import { TabviewModule } from './components/tabview/tabview.module';
import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';
import { FooterComponent } from './components/footer/footer.component';
import { FooterModule } from './components/footer/footer.module';
import { TabviewComponent } from './components/tabview/tabview.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    StoreModule.forRoot({ app: appReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

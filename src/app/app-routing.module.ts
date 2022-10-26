import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rotas } from 'src/utils/routes';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path: rotas.home, component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

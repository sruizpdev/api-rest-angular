import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageDataComponent } from './components/page-data/page-data.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page-data', component: PageDataComponent },
  { path: 'detail-page/:id', component: DetailPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

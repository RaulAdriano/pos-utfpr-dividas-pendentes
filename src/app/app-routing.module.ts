import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DividaCrudComponent } from  './views/divida-crud/divida-crud.component'


const routes: Routes = [
  {
    path: "",
     component: HomeComponent
   },
   {
    path:"dividas",
   component: DividaCrudComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

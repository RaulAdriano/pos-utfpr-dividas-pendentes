import { DividaDeleteComponent } from './components/divida/divida-delete/divida-delete.component';
import { DividaUpdateComponent } from './components/divida/divida-update/divida-update.component';
import { DividaCreateComponent } from './components/divida/divida-create/divida-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DividaCrudComponent } from  './views/divida-crud/divida-crud.component'


const routes: Routes = [
  {
    path: "",
    component : HomeComponent
  },
  {
    path: "dividas",
    component : DividaCrudComponent
  },
  {
    path :"dividas/create",
    component : DividaCreateComponent
  },
  {
    path :"dividas/update/:id",
    component : DividaUpdateComponent
  },
  {
    path :"dividas/delete/:id",
    component : DividaDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

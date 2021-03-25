import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  /* Eğer router belirlemeseydik, app.component içerisinde ProductComponent yerine router-outlet koyduğumuz için boş gelirdi */
  {path:'', component:ProductComponent, pathMatch:'full'}, /* Eğer anasayfa URL i açıksa ProductComponent i getir.Angular ın yeni versiyonlarında pathMatch e gerek yok, ama ilerleyen sürümlere tedbiren eklendi */
  {path:'products', component:ProductComponent}, /* URL e products yazıldıysa yine ProductComponent i getir. */
  {path:'products/category/:categoryId', component:ProductComponent}, // URL de products/category/3 şeklinde bir yol görürsen, categoryID=3 olanları getir.
  {path:'products/add' , component:ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

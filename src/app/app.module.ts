import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; // farklı projelerden ekleyebileceğimiz modülleri burada import etmeliyiz.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ // Kendik yazdıklarımız - Bir component i kullanacaksak, buraya eklememiz gerekiyor. Ancak @angular/cli bizim yerimize otomatik ekliyor.
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent
  ],
  imports: [ // Dışarıdan aldıklarımız - Backend tarafındaki Autofac injection ları gibi, burada da enjekte etmemiz gerekiyor. 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // eğer bu modülü buraya eklemezsek(bunu bizim eklememiz gerekiyor.) httpClient instance ı karşılığını bulamıyor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

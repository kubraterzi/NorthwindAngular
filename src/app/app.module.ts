import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'; // farklı projelerden ekleyebileceğimiz modülleri burada import etmeliyiz.
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

import{ToastrModule} from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import {AuthInterceptor} from './interceptors/auth.interceptor';


@NgModule({
  declarations: [ // Kendi yazdıklarımız - Bir component i kullanacaksak, buraya eklememiz gerekiyor. Ancak @angular/cli bizim yerimize otomatik ekliyor.
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    ProductFilterPipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent
  ],

  imports: [ // Dışarıdan aldıklarımız - Backend tarafındaki Autofac injection ları gibi, burada da enjekte etmemiz gerekiyor.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // eğer bu modülü buraya eklemezsek(bunu bizim eklememiz gerekiyor.) httpClient instance ı karşılığını bulamıyor
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

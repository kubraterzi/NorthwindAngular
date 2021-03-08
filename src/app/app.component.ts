import { Component } from '@angular/core'; //@component deklarasyonunun kullanılabilmesi için angular/core dan import ediyoruz.

@Component({ //İlgili class a bir component olduğunu bildiren deklarasyondur. (Attribute gibi) Çalışma anında ona bir anlam yükler.(Class sın ama bir componentsin aynı zamanda)
  selector: 'app-root', // index.html e bu isimle dahil edileceğini bildiriyor.
  templateUrl: './app.component.html', //class a app.component.html in datasını yönetecek olan component olduğunu,  bu satır ile bildiriyor.
  styleUrls: ['./app.component.css']//ilgili html in css kodlarının adresini verir.
}) // buradaki süslü parante object demektir.(User, Product,Category..)
export class AppComponent {
  
}

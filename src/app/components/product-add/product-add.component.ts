import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import{FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {


  productAddForm : FormGroup;

  constructor(private formBuilder:FormBuilder, private productService: ProductService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName : ['', Validators.required], // productName içerisinde default bir değer tanımlamak istersen '' içerisine yazıyorsun.
      categoryId : ['', Validators.required], // validators içerisindeki hazır birçok metot işimizi görecektir.(email, tel, password..)
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required]
    })
  }


  addProduct(){
    let productModel = Object.assign({}, this.productAddForm.value)
    if(this.productAddForm.valid){ // eğer productAddForm verileri dolu ise aşağıdakai işlemleri yap
    this.productService.addProduct(productModel).subscribe(response=> {
      this.toastrService.success(response.message, 'Added!')
    }, responseError=>{
      //responseError -> httpresponseerror, .error ise içerisinde error nesnesi, onun içerisinde de bizim hata mesajımız var.
      if(responseError.error.Errors.length>0){
        for (let i=0; i<responseError.error.Errors.length; i++){
        this.toastrService.error(responseError.error.Errors[i].ErrorMessage, 'Validation Exception')
        }
      }



    })

  }else{
    this.toastrService.error("Form is invalid.");
  }

  }



}

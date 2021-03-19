import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[] = [];
  currentCategory : Category; // menüden seçtiğimiz(click) bir kategoriyi ekranda görebilmek için içini dolduracağımız bir değişken tanımladık.

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response =>{
      this.categories = response.data;
    });
  }

  setCurrentCategory(category: Category){
    this.currentCategory=category;
  }

  getCurrentCategoryClass(category:Category){ // html tarafında class css ini[] içine alarak, üzerinde etkileşim gerçekleşeceğini bildirdik.
    if(category == this.currentCategory){
      return "list-group-item active" // eğer döngüdeki bir category tıklandıysa, o category nin bilgisini set edip currentCategory ye aktardık.
    }  // daha sonra currentCategory içerisindeki nesneyi get metoduna parametre olarak gelen category ile kıyasladık ve eşleşiyorsa active ettik.
    else{ // yani click bilgisini set metodundan aldık, aldığımız yanıta göre css class ımızı get metodumuz ile şekillendirdik.
      return "list-group-item"
    }
  }

  getAllInMenuClass(){
    if(!this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}

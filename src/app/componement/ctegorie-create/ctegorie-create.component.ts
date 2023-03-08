import { Component } from '@angular/core';
import { Categoriesss } from 'src/app/model/tutorial.model';
import { CategoriesssService } from 'src/app/_services/categ.service';

@Component({
  selector: 'app-ctegorie-create',
  templateUrl: './ctegorie-create.component.html',
  styleUrls: ['./ctegorie-create.component.css']
})
export class CtegorieCreateComponent {


categories: Categoriesss = {
  nom: '',
  image:undefined,
  
};
submitted = false;
constructor(private categoryservice:CategoriesssService) { }
saveTutorial(): void {
  const data = {
    nom:this.categories.nom,
    image:this.categories.image,

  };

  this.categoryservice.create(data);
  this.submitted = true;


}
newCategorie(): void {
  this.submitted = false;
  this.categories = {
    nom: '',
    image: undefined,
    
  };
}
}
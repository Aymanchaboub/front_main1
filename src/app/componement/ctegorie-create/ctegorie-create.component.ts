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

  this.categoryservice.create(data) .subscribe({
    next: (res) => {
      console.log("bibjihdfi");
      this.submitted = true;
    },
    error: (e) => console.error(e)
  });


}
newCategorie(): void {
  this.submitted = false;
  this.categories = {
    nom: '',
    image: undefined,
    
  };
}
onFileSelected(event: Event) {
  const fileInput = event.target as HTMLInputElement;
  if (fileInput.files && fileInput.files[0]) {
    this.categories.image = fileInput.files[0];
  }
}
}
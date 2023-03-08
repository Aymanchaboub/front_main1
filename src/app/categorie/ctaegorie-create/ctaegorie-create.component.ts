import { Component } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-ctaegorie-create',
  templateUrl: './ctaegorie-create.component.html',
  styleUrls: ['./ctaegorie-create.component.css']
})
export class CtaegorieCreateComponent {
  categoryName!: string;
  categoryImage!: File;
  form: any = {
    nom: null,
    image: null,
    
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private categoryService: CategoryService) { }

  onSubmit() {
    const formData = new FormData();
    formData.append('nom', this.categoryName);
    formData.append('image', this.categoryImage);
    console.log(formData);
    this.categoryService.addCategory(formData)
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.categoryImage = fileInput.files[0];
    }
  }
  onSubmit1(): void {
    const { nom, image } = this.form;

    this.categoryService.register(nom, image).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}

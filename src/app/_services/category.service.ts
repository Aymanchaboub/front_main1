import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

const apiUrl = 'http://localhost:8080/api/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    const options = {
      withCredentials: true,
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    console.log(this.http.get(apiUrl, options));

    return this.http.get(apiUrl, options);
  }
  
  getCategory(id: number): Observable<any> {
    
    const url = `${apiUrl}/${id}`;
    return this.http.get(url);
  }
  
  addCategory(formData: FormData): Observable<Category> {
    console.log(formData.get('name'));
    return this.http.post<Category>(apiUrl, formData);
  }

  updateCategory(id: number, category: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, category);
  }
  
  deleteCategory(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url);
  }
  
}

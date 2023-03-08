import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoriesss } from '../model/tutorial.model'; 

const baseUrl = 'http://localhost:8080/api/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesssService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoriesss[]> {
    return this.http.get<Categoriesss[]>(baseUrl);
  }

  get(id: any): Observable<Categoriesss> {
    return this.http.get<Categoriesss>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
     

    return  this.http.post(baseUrl, data);

  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Categoriesss[]> {
    return this.http.get<Categoriesss[]>(`${baseUrl}?title=${title}`);
  }
}
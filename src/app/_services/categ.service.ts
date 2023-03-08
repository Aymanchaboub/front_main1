import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoriesss } from '../model/tutorial.model'; 

const apiUrl = 'http://localhost:8080/api/categories';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriesssService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoriesss[]> {
    return this.http.get<Categoriesss[]>(apiUrl);
  }

  get(id: any): Observable<Categoriesss> {
    return this.http.get<Categoriesss>(`${apiUrl}/${id}`);
  }

  create(data: any): Observable<any> {
     

    return  this.http.post(apiUrl,Headers, data);

  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${apiUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${apiUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(apiUrl);
  }

  findByTitle(title: any): Observable<Categoriesss[]> {
    return this.http.get<Categoriesss[]>(`${apiUrl}?title=${title}`);
  }
}
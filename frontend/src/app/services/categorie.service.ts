import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategorie } from './categorie.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private reqHeader$: HttpHeaders; 
   
  constructor(private http:HttpClient){
    this.reqHeader$ = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser') as string).token
    });
  }

  getAllCategories():Observable<any>{
    return this.http.get(`${environment.BASE_API_URI}/categories`, { headers: this.reqHeader$ }) as Observable<any>
  }

  addCategorie(article:ICategorie):Observable<any>{
      return this.http.post(`${environment.BASE_API_URI}/categorie/ajouter`, article) as Observable<any>
  }

  removeCategorie(article:ICategorie): Observable<any>{
     return this.http.delete(`${environment.BASE_API_URI}/categorie/supprimer/${article._id}`)
  }

  updateCategorie(article:ICategorie):Observable<any>{
    return this.http.put(`${environment.BASE_API_URI}/categorie/modifier/${article._id}`, article)
  }
}

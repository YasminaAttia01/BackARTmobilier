import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from './article.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // private reqHeader$: HttpHeaders; 
   
  constructor(private http:HttpClient){
    /* this.reqHeader$ = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser') as string).token
    }); */ 
  }

  getAllArticles():Observable<any>{
    return this.http.get(`${environment.BASE_API_URI}/articles`) as Observable<any>
  }

  addArticle(article:IArticle):Observable<any>{
      return this.http.post(`${environment.BASE_API_URI}/article/ajouter`, article) as Observable<any>
  }

  removeArticle(article:IArticle): Observable<any>{
     return this.http.delete(`${environment.BASE_API_URI}/article/supprimer/${article._id}`)
  }

  updateArticle(article:IArticle):Observable<any>{
    return this.http.put(`${environment.BASE_API_URI}/articles/modifier/${article._id}`, article)
  }
}

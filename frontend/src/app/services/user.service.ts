import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private reqHeader$: HttpHeaders; 
   
  constructor(private http:HttpClient){
    this.reqHeader$ = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser') as string).token
    }); 
  }

  registerUser(user:IUser):Observable<any> {
    return this.http.post(`${environment.BASE_API_URI}/auth/register`, user) as Observable<any>;
  }

  getAllUsers():Observable<any>{
    return this.http.get(`${environment.BASE_API_URI}/backoffice/users`, { headers: this.reqHeader$ }) as Observable<any>
  }

}

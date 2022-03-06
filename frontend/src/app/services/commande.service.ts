import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IArticle } from '../models/article.model';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  placeholder: Array<IArticle>=[];
  cartItems$: BehaviorSubject<IArticle[]>;
  reqHeader$?: HttpHeaders
  
  constructor(
    private http:HttpClient,
    private authenticationService: AuthenticateService) { 
    this.cartItems$ = new BehaviorSubject<IArticle[]>([]);

    const ls = this.getCartData();
    if(ls) this.cartItems$.next(ls);
  }

  addItem(article: IArticle){
    const ls = this.getCartData();
    let exist: any;

    if (ls) {
      exist = ls.find((item: IArticle) => {
        return item._id === article._id
      });
    }
    if (exist) {
      exist.qt++;
      this.setCartData(ls)
    }
    else {
      if (ls) {
        const newData = [...ls, article];
        this.setCartData(newData)
        this.cartItems$.next(this.getCartData());
      }
      this.placeholder.push(article);
      this.setCartData(this.placeholder)
      this.cartItems$.next(this.getCartData());
    }
  
  }

  setCartData(data: any){
    localStorage.setItem('cart', JSON.stringify(data));
  }

  getCartData(){
    return JSON.parse(localStorage.getItem('cart') as string)
  }

  cancelCartData(){
    const ls = this.getCartData();

    if (ls) {
      localStorage.removeItem('cart');
      this.cartItems$.next(this.getCartData());
    }
  }

  removeItem(article: IArticle){
    const ls = this.getCartData().filter((item: any) => {
      return item._id != article._id
    });

    this.setCartData(ls)
    this.cartItems$.next(this.getCartData());
  }

  addQtItem(article: IArticle){
    const ls = this.getCartData();
    let exist: any;

    if (ls) {
      exist = ls.find((item: IArticle) => {
        return item._id === article._id
      });
    }
    if (exist) {
      exist.qt++;
      this.setCartData(ls)
      this.cartItems$.next(this.getCartData());
    }
  }

  minusQtItem(article: IArticle){
    const ls = this.getCartData();
    let exist: any;

    if (ls) {
      exist = ls.find((item: IArticle) => {
        return item._id === article._id
      });
    }
    if (exist && exist.qt > 1) {
      exist.qt--;
      this.setCartData(ls)
      this.cartItems$.next(this.getCartData());
    }
  }


  addCommande():Observable<any>{
    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      this.reqHeader$ =  new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser') as string).token
      });
    }
    this.reqHeader$ =  new HttpHeaders({ 
      'Content-Type': 'application/json',
    });
    var totalCart = 0;
    const data = {
      total: this.getCartData().map((item: any) => {
        return totalCart += item.qt * item.prix
      }),
      user: currentUser,
      commandeDetail: this.getCartData()
    }
    return this.http.post(`${environment.BASE_API_URI}/commande/ajouter`, data, { headers: this.reqHeader$ }) as Observable<any>
}

}

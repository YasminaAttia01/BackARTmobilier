import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/article.model';
import { CommandeService } from 'src/app/services/commande.service';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  articles?: any;

  constructor(
    private articleService: ArticleService,
    private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(data => {
      if(data.status==="error"){
        this.articles=[];
      }
      else{
        this.articles=data.message.articles
      }
    })
  }

  addToCart(article:IArticle){
    this.commandeService.addItem(article);
  }

}

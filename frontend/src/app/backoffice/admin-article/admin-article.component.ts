import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.css']
})
export class AdminArticleComponent implements OnInit {
  articles?: any;

  constructor(private articleService: ArticleService) { }

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

}

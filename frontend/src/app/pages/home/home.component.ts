import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

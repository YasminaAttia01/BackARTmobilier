import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.css']
})
export class AdminArticleComponent implements OnInit {
  articles?: any;

  constructor(
    private articleService: ArticleService,
    private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(data => {
      if(data.status==="Error"){
        this.articles=[];
      }
      else{
        this.articles=data.message.articles
      }
    })
  }

  onDelete(currentArticle:IArticle) {
    this.articleService.removeArticle(currentArticle).subscribe(data => {
      if(data.status==="Error"){
        this.notifyService.showError("Message erreur", "Erreur")
      }
      else{
        this.notifyService.showSuccess("Message success", "Succes")
        window.location.reload();   
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-admin-categorie',
  templateUrl: './admin-categorie.component.html',
  styleUrls: ['./admin-categorie.component.css']
})
export class AdminCategorieComponent implements OnInit {
  categories?: any;

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.categorieService.getAllCategories().subscribe(data => {
      if(data.status==="Error"){
        this.categories=[];
      }
      else{
        this.categories=data.message.categories
      }
    })
  }

}

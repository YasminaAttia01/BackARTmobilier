import { Component, Input, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() userInfo:any;
  
  constructor(
    private authenticateService:AuthenticateService) {}

  ngOnInit(): void {
  }

  logout(){
    this.authenticateService.logout();
    window.location.reload();       
  }

}

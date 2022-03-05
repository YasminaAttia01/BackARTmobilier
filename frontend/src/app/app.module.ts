import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/jwt.interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PasswordComponent } from './pages/password/password.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AdminDashboardComponent } from './backoffice/admin-dashboard/admin-dashboard.component';
import { AdminArticleComponent } from './backoffice/admin-article/admin-article.component';
import { AdminCategorieComponent } from './backoffice/admin-categorie/admin-categorie.component';
import { AdminUserComponent } from './backoffice/admin-user/admin-user.component';
import { AdminCommandeComponent } from './backoffice/admin-commande/admin-commande.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ArticlesComponent,
    AproposComponent,
    CommandesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PasswordComponent,
    PanierComponent,
    AdminDashboardComponent,
    AdminArticleComponent,
    AdminCategorieComponent,
    AdminUserComponent,
    AdminCommandeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 300000,
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: JwtInterceptor, 
      multi: true 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

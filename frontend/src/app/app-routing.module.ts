import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticleComponent } from './backoffice/admin-article/admin-article.component';
import { AdminCategorieComponent } from './backoffice/admin-categorie/admin-categorie.component';
import { AdminCommandeComponent } from './backoffice/admin-commande/admin-commande.component';
import { AdminDashboardComponent } from './backoffice/admin-dashboard/admin-dashboard.component';
import { AdminUserComponent } from './backoffice/admin-user/admin-user.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PanierComponent } from './pages/panier/panier.component';
import { PasswordComponent } from './pages/password/password.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "auth/login",
    component: LoginComponent
  },
  {
    path: "auth/register",
    component: RegisterComponent
  },
  {
    path: "auth/password",
    component: PasswordComponent
  },
  {
    path: "articles",
    component: ArticlesComponent
  },
  {
    path: "apropos",
    component: AproposComponent
  },
  {
    path: "panier",
    component: PanierComponent
  },
  {
    path: "admin/dashboard",
    component: AdminDashboardComponent
  },
  {
    path: "admin/users",
    component: AdminUserComponent
  },
  {
    path: "admin/articles",
    component: AdminArticleComponent
  },
  {
    path: "admin/categories",
    component: AdminCategorieComponent
  },
  {
    path: "admin/commandes",
    component: AdminCommandeComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

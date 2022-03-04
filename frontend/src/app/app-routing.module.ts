import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
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
  /* {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

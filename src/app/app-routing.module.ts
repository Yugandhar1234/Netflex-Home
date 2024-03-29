import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CalenderComponent } from './calender/calender.component';

const routes: Routes = [
  { path:'' , component:LoginComponent },
  { path:'home' , component:HomeComponent },
  {path :'calender', component:CalenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

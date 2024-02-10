import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
declare var google:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  private router=inject(Router)
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '402711972686-0nc6r6ctqtupbh94plha0044eabdid90.apps.googleusercontent.com',
      callback: (res:any)=>{
        //this.login(res);
        if(res){
          let payload=JSON.parse(atob(res.credential.split(".")[1]));
          localStorage.setItem("token",JSON.stringify(payload));
          this.router.navigate(['/home']);
        }
      }
    });
    google.accounts.id.renderButton(document.getElementById("button"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'recatngle',
      //logo_alignment:'left'
    })
  }
  // login(res:any){
  //   if(res){
  //     let payload=JSON.parse(atob(res.credential.split('.')[1]));
  //     localStorage.setItem('token',JSON.stringify(payload))
  //   }
  //   // if(res){
  //   //   let payload=this.getToken(res.credential);
  //   //   localStorage.setItem('token',JSON.stringify(payload));
  //   // }
  // }
  // // getToken(token:any){
  // //   return JSON.parse(atob((token.split(".")[1])));
  // // }
}

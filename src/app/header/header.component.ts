
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../service/share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public nav: string[] = ['Home', 'News & Popular', 'MyList', 'TvShows', 'Popular by language'];
  public user: any;
  constructor(private router: Router, private share:ShareService) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('token')!);
  
  }
  signout(){
    debugger
    this.share.signOut();
    this.router.navigateByUrl('/')
  }

}

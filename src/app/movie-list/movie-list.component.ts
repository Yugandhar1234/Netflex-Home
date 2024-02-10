import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { IVideoContent } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, AfterViewInit {
  @Input() title:string='Title'
  @Input() movieList:IVideoContent[]=[];
 // @ViewChild('swiper-wrapper') swiperContainer!: ElementRef;
  constructor() { }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.swiperIntial();
  }
  swiperIntial() {
  //   return new Swiper(this.swiperContainer.nativeElement, {
  //     slidesPerView: 3,
  //     slidesPerGroup: 2,
  //     centeredSlides: true,
  //     loop: true,
      
  //   })
  }
}

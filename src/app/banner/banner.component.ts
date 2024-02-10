import { ConditionalExpr } from '@angular/compiler';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnChanges {
  @Input() bannerInfo: any;
  @Input() key = '8ixwyQmYseY';
  private sanitizer = inject(DomSanitizer)
  videoUrl: any = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`);

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['key']) {
      console.log(this.key)
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../service/share.service';
import { IVideoContent } from '../movie';
import { Observable, combineLatest, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  //ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];
  previewInfo$=new Observable<any>()
  previewVideo$=new Observable<any>()
  source = [
    this.share.getMovies(),
    this.share.getTvShows(),
    this.share.getNowPlayingMovies(),
    this.share.getPopularMovies(),
    this.share.getTopRated(),
    this.share.getUpcomingMovies()
  ]
  constructor(private router: Router, private share: ShareService) { }
  ngOnInit(): void {
    combineLatest(this.source).pipe(map(([movies, tvShows, nowPlaying, popular, topRated, upComing]) => {
      this.previewInfo$=this.share.getBannerDetail(movies.results[0].id);
      this.previewVideo$=this.share.getBannerVideo(movies.results[0].id);
      return { movies, tvShows, nowPlaying, popular, topRated, upComing };
    })).subscribe((res: any) => {
      this.movies = res.movies.results;
      this.tvShows = res.tvShows.results;
      this.nowPlayingMovies = res.nowPlaying.results;
      this.popularMovies = res.popular.results;
      this.topRatedMovies = res.topRated.results;
      //this.getMovieKey();
      //console.log(this.movies)
    })
  }
  logout() {
    this.share.signOut()
    this.router.navigateByUrl('/');
    localStorage.removeItem('token')
  }
  getMovieKey(){
    this.share.getBannerDetail(this.movies[0].id).subscribe(res=>{
      console.log(res);
    });
  }
}

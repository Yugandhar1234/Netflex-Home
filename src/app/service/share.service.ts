import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EndPOINTS } from '../movie';

declare var google: any;
@Injectable({
  providedIn: 'root'
})
export class ShareService {

  //https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=08cc33bd5ae3a747598ce2ad84376e66
  Options={
    params: {
      include_adult: 'false',
      include_video: 'true',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc',
      api_key: environment.movieAPIKEY
    },
  }
  constructor(private http: HttpClient) { }
 
  signOut() {
    google.accounts.id.disableAutoSelect();
    localStorage.removeItem('token');
  }

  getMovies() {
    return this.http.get<any>(environment.movieApi+EndPOINTS.DISCOVER_MOVIES,{
      params: this.Options.params,
    });
  }
  getTvShows() {
    return this.http.get(environment.movieApi+EndPOINTS.DISCOVER_TV_SHOWS, {
      params:this.Options.params
    })
  }

  // getRatedMovies() {
  //   return this.http.get(environment.movieApi+EndPOINTS.GET_RATED_MOVIES, {
  //     params:this.Options.params
  //   })
  // }

  getBannerImage(id: number) {
    return this.http.get(`${environment.movieApi}${EndPOINTS.MOVIE_INFO}/${id}/images`, {
      params:this.Options.params
    })
  }

  getBannerVideo(id: number) {
    return this.http.get(`${environment.movieApi}${EndPOINTS.MOVIE_INFO}/${id}/videos`, {
      params:this.Options.params
    });
  }

  getBannerDetail(id: number) {
    return this.http.get(`${environment.movieApi}${EndPOINTS.MOVIE_INFO}/${id}`, {
      params:this.Options.params
    });
  }

  getNowPlayingMovies() {
    return this.http.get(environment.movieApi+EndPOINTS.MOVIE_INFO+'/now_playing', {
      params:this.Options.params
    })
  }

  getPopularMovies() {
    return this.http.get(environment.movieApi+EndPOINTS.MOVIE_INFO+'/popular', {
      params:this.Options.params
    })
  }

  getTopRated() {
    return this.http.get(environment.movieApi+EndPOINTS.MOVIE_INFO+'/top_rated', {
      params:this.Options.params
    })
  }

  getUpcomingMovies() {
    return this.http.get(environment.movieApi+EndPOINTS.MOVIE_INFO+'/upcoming', {
      params:this.Options.params
    })
  }
}

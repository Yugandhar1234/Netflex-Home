export const EndPOINTS={
    DISCOVER_MOVIES:'/discover/movie',
    DISCOVER_TV_SHOWS:'/discover/tv',
    GET_RATED_MOVIES:'guest_session/guest_session_id/rated/movies',
    MOVIE_INFO:'/movie'
}
export interface IVideoContent {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    name: string
  }
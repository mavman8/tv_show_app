import axios from 'axios';
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from './fake_data';
import {
  BASE_URL,
  API_KEY_PARAM,
  BACKDROP_BASE_URL,
  BASE_RECOMMEND_URL,
  SEARCH_URL,
} from './config';

// https://api.themoviedb.org/3/tv/popular?api_key=2cc613ecbe7059f10ec8ead36cf01a7e

export class TVShowAPI {
  static async fetchPopulars() {
    const url = `${BASE_URL}${API_KEY_PARAM}`;
    console.log('baseurl', url);
    const response = await axios.get(url);

    console.log(response.data.results);

    return response.data.results;

    // return FAKE_POPULARS;
  }

  static async fetchByTitle(title) {
    //https://api.themoviedb.org/3/search/tv?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    const url_fetchByTitle = `${SEARCH_URL}${API_KEY_PARAM}&query=${title}`;
    console.log('URL_fetch:', url_fetchByTitle);
    const response = await axios.get(url_fetchByTitle);
    return response.data.results;
  }
  static async fetchRecommendations(tvShowId) {
    const url_recommendations = `${BASE_RECOMMEND_URL}/${tvShowId}/recommendations${API_KEY_PARAM}`;
    console.log('url_recommendation:', url_recommendations);
    const response = await axios.get(url_recommendations);

    console.log(response.data.results);
    return response.data.results;
    // return FAKE_RECOMMENDATIONS;
  }
}

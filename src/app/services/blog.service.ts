import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public baseUrl = 'localhost';
  public baseUrlRest = '/es/rest/';

  constructor(
      private httpClient: HttpClient
  ) {
  }

  get_blogs() {
    return this.httpClient.get(this.baseUrl + this.baseUrlRest + 'blogs');
  }
}

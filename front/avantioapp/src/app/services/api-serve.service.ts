import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class ApiServeService {
  headers: any = [
    { "id": "title", "value": "Title" },
    { "id": "Body", "value": "Content" },
    { "id": "Source", "value": "Link" },
    { "id": "Publisher", "value": "Publisher" },
    { "id": "pubDate", "value": "Last updated" },
    { "id": "author", "value": "Author" }
  ];
  publishers = {
    elpais: 'elPais',
    elmundo: 'elMundo'
  };
  constructor(private _Restangular: Restangular, private http: HttpClient) { }
  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

  getFeeds(page?: Number) {
    if (page == null) page = 1
    //return this.http.get(this.rssToJsonServiceBaseUrl + 'https://elpais.com')
    let response = this._Restangular.all('feeds').get(page);

    return response.getList().toPromise().then((feeds) => {

      console.log('feeds' + feeds.toString())
      return feeds;
    })
  }
  getPublisherList(){
    let response = this._Restangular.get('publishers');

    return response.getList().toPromise().then((publisher) => {

      //console.log('feeds' + feeds.toString())
      this.publishers=publisher;
    })
  }

  getHeaders() { return this.headers }
  getPublishers() { return this.publishers }

  updateFeed(row) {
    this._Restangular.put('feed').one(row.id).toPromise().then((err, success) => {

    });
  }

  deleteFeed(row) {
    this._Restangular.remove('feed').one(row.id).toPromise().then((err, success) => {

    });
  }
}

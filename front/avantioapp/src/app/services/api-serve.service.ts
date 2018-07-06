import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { puts } from 'util';


@Injectable({
  providedIn: 'root'
})
export class ApiServeService {
  headers: any = [
    { 'id': 'title', 'value': 'Title' },
    { 'id': 'Body', 'value': 'Content' },
    { 'id': 'Source', 'value': 'Link' },
    { 'id': 'Publisher', 'value': 'Publisher' },
    { 'id': 'pubDate', 'value': 'Last updated' },
    { 'id': 'author', 'value': 'Author' }
  ];
  publishers = {
    elpais: 'elPais',
    elmundo: 'elMundo'
  };
  constructor(private _Restangular: Restangular, private http: HttpClient) { }
  private rssToJsonServiceBaseUrl: String = 'https://rss2json.com/api.json?rss_url=';

  getFeeds(page?: Number) {
    if (page == null) { page = 1; }

    // return this.http.get(this.rssToJsonServiceBaseUrl + 'https://elpais.com')
    const response = this._Restangular.one('feeds', page).get();

    return response.toPromise().then((feeds) => {
      return feeds;
    });
  }

  getFeed(id: String) {


    // return this.http.get(this.rssToJsonServiceBaseUrl + 'https://elpais.com')
    const response = this._Restangular.one('feed', id).get();

    return response.toPromise().then((feed) => {

      console.log(feed);
      return feed;
    });
  }
  getPublisherList() {
    const response = this._Restangular.one('publishers').get();

    return response.toPromise().then((publisher) => {

      console.log('publisher' + publisher);
      this.publishers = publisher;
    });
  }

  getHeaders() { return this.headers; }
  getPublishers() { return this.publishers; }

  newFeed(row) {
    const response = this._Restangular.one('feed', row._id).customPOST(JSON.stringify(row), null, null, { 'Content-Type': undefined });
    return response.toPromise().then((err, success) => {
      return err;
      /*if(err) return {status:false, value:err};
      else return {status:true, value:success};*/
    });
  }

  updateFeed(row) {
    const response = this._Restangular.one('feed', row._id).customPUT(JSON.stringify(row), null, null, { 'Content-Type': undefined });
    return response.toPromise().then((err, success) => {
      return err;
      /*if(err) return {status:false, value:err};
      else return {status:true, value:success};*/
    });
  }

  deleteFeed(row) {
    const response = this._Restangular.one('feed', row._id).remove();
    return response.toPromise().then((err, success) => {
      return err;
      /*if(err) return {status:false, value:err};
      else return {status:true, value:success};*/
    });
  }
}

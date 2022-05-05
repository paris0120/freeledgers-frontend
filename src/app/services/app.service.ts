import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Cookie} from "ng2-cookies";
import {map, Observable} from "rxjs";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private clientId: string = "anonymous";
  private url: string = "localhost";
  private token: string = "";
  private apiVersion = "v1";
  private apiLink = "restapi/";
  public authenticated = false;

  constructor(private _http: HttpClient) {

  }

  logout(){
    let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
    this._http.post(this.apiLink + 'user/logout', {}).subscribe(null, null, this.unauthenticate);
    Cookie.delete('access_token');
    window.location.reload();
  }


  login() {
    Cookie.delete('access_token');
    window.location.reload();
  }


  unauthenticate(){
    this.authenticated = false;
  }


  authenticate(credentials: { username: string; password: string; }, callback: () => any) {

    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
/*
    this.http.get('user', {headers: headers}).subscribe(response => {
      if (response['name']!=null) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });
*/
  }

  retrieveToken(code: string) {
    let params = new URLSearchParams();
    params.append('grant_type','authorization_code');
    params.append('client_id', this.clientId);
    params.append('client_secret', 'newClientSecret');
    params.append('redirect_uri', this.url);
    params.append('code',code);

    let headers =
      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

    this._http.post('http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/token',
      params.toString(), { headers: headers })
      .subscribe(
        data => this.saveToken(data),
        err => alert('Invalid Credentials'));
  }


  saveToken(token: any) {
    Cookie.set("access_token", token.access_token, new Date().getTime() + (1000 * token.expires_in));
    console.log('Obtained Access token');
    window.location.href = 'http://localhost:8089';
  }

  getResource(resourceUrl: string) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + Cookie.get('access_token')
    });
    let output = this._http.get(resourceUrl, {headers: headers});
    output.subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });
    return output;
  }

  checkCredentials(): boolean {
    return Cookie.check('access_token');
  }

}

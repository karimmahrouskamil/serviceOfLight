// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MakhdominProvider, ChamasLevel } from "../makhdomin/makhdomin";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/timeout";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
/*
  Generated class for the MakhdominServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MakhdominServiceProvider {
  makhdouminList: [MakhdominProvider];

  constructor(public http: Http, public httpClient: HttpClient) {}


  getMakhdouminData() {
    return new Promise(resolve => {
      this.http
        .get("assets/data.json")
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
        );
    });
  }
}

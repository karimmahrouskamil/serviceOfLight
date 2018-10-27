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
  dataDummy: any;
  films: any;
  constructor(public http: Http, public httpClient: HttpClient) {
    this.films = this.makeGetRequest();
  }
  public makeGetRequest() {
    let data: Observable<any> = this.httpClient.get("assets/data.json");
    data.subscribe(result => {
      console.log(result);
    });
  }
  getMakhdominData(): [MakhdominProvider] {
    const data: [MakhdominProvider] = [
      {
        name: "youssef",
        phone: "123123",
        zone: "A",
        street: "Habib shalaby",
        numberOfBuilding: 12,
        flatNumber: 5,
        HomePhone: "213",
        Birthdate: "new Date()",
        FatherOfConfess: "fr youseef samir",
        servantFollowing: "bassem makram",
        ChomosyaLevel: "ChamasLevel.ebsaltos"
      }
    ];
    this.makhdouminList = data;
    this.getMyData();
    return this.makhdouminList;
  }
  getMyData() {
    this.http
      .get("assets/data.json")
      .map(res => res.json())
      .subscribe(data => {
        this.dataDummy = data;
      });
  }
}

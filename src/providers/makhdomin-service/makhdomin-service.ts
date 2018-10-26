// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MakhdominProvider, ChamasLevel } from "../makhdomin/makhdomin";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/timeout";
/*
  Generated class for the MakhdominServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MakhdominServiceProvider {
  makhdouminList: [MakhdominProvider];
  dataDummy : any;
  constructor(public http: Http) {
    console.log("Hello MakhdominServiceProvider Provider");
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
        Birthdate: new Date(),
        FatherOfConfess: "fr youseef samir",
        servantFollowing: "bassem makram",
        ChomosyaLevel: ChamasLevel.ebsaltos
      },
      {
        name: "Ayman",
        phone: "123123",
        zone: "B",
        street: "Daher",
        numberOfBuilding: 4,
        flatNumber: 5,
        HomePhone: "213",
        Birthdate: new Date(),
        FatherOfConfess: "fr youseef Angelos",
        servantFollowing: "Ossama samir",
        ChomosyaLevel: ChamasLevel.ebsaltos
      },
      {
        name: "Mina",
        phone: "123123",
        zone: "B",
        street: "Daher",
        numberOfBuilding: 4,
        flatNumber: 5,
        HomePhone: "213",
        Birthdate: new Date(),
        FatherOfConfess: "fr youseef Angelos",
        servantFollowing: "Ossama samir",
        ChomosyaLevel: ChamasLevel.ebsaltos
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

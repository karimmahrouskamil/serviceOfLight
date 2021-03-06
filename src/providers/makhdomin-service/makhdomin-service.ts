// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MakhdominProvider } from "../makhdomin/makhdomin";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/timeout";
// import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
/*
  Generated class for the MakhdominServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MakhdominServiceProvider {
  makhdouminList: [MakhdominProvider];

  constructor(public http: Http, public httpClient: HttpClient) { }

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
  getMakhdouminDataFiltered(val, filterClassVal) {
    return new Promise(resolve => {
      this.http
        .get("assets/data.json")
        .map(res => res.json())
        .subscribe(
        data => {
          if (filterClassVal != "") {
            data = data.filter(eachMakhdoum => {
              return eachMakhdoum.churchAndSpiritualInfo.class === filterClassVal;
            });
          }
          if (val && val.trim() != "" && filterClassVal != "") {
            data = data.filter(eachMakhdoum => {
              return (
                eachMakhdoum.personalInfo.name.toLowerCase().indexOf(val.toLowerCase()) >
                -1
              );
            });

            resolve(data);
          } else if (val && val.trim() != "" && filterClassVal == "") {
            data = data.filter(eachMakhdoum => {
              return (
                eachMakhdoum.personalInfo.name.toLowerCase().indexOf(val.toLowerCase()) >
                -1
              );
            });

            resolve(data);
          } else if (val == "" && filterClassVal != "") {
            data = data.filter(eachMakhdoum => {
              return eachMakhdoum.churchAndSpiritualInfo.class === filterClassVal;
            });
            resolve(data);
          } else if (val == "" && filterClassVal == "") {
            this.getMakhdouminData().then(data => {
              resolve(data);
            });
          }
        },
        err => {
          console.log(err);
        }
        );
    });
  }
}

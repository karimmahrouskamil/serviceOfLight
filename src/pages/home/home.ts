import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MakhdominServiceProvider } from "../../providers/makhdomin-service/makhdomin-service";
import { MakhdominProvider } from "../../providers/makhdomin/makhdomin";
import { MakhdoumDetailsPage } from "../makhdoum-details/makhdoum-details";
import { CallNumber } from "@ionic-native/call-number";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  _mahdouminService: any;
  makhdouminList: [MakhdominProvider];
  _makhdouminList: any;
  searchQuery: string = "";
 
  constructor(
    public navCtrl: NavController,
    mahdouminService: MakhdominServiceProvider,
    private callNumber: CallNumber,
    public http: Http
  ) {
    this._mahdouminService = mahdouminService;

    this.initializeData();
  }

  initializeData() {
    this.http
      .get("assets/data.json")
      .map(res => res.json())
      .subscribe(data => {
        this.makhdouminList = data;
      });
  }

  passDetailOfMakhdoum(oneMakhdoum): void {
    this.navCtrl.push(MakhdoumDetailsPage, oneMakhdoum);
  }

  getItems(ev: any) {
    this.initializeData();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this._makhdouminList = this.makhdouminList.filter(eachMakhdoum => {
        return eachMakhdoum.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });

      this.makhdouminList = this._makhdouminList;
    }
  }
  callCurrentMakhdoum(ev: any, oneMakhdoum) {
    ev.stopPropagation();
    const calledNumber = oneMakhdoum.phone.toString();

    this.callNumber
      .callNumber(calledNumber, false)
      .then(res => console.log("Launched dialer!", res))
      .catch(err => console.log("Error launching dialer", err));
  }
}

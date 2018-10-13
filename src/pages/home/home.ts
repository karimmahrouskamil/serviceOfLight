import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MakhdominServiceProvider } from "../../providers/makhdomin-service/makhdomin-service";
import { MakhdominProvider } from "../../providers/makhdomin/makhdomin";
import { MakhdoumDetailsPage } from "../makhdoum-details/makhdoum-details";
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
    mahdouminService: MakhdominServiceProvider
  ) {
    this._mahdouminService = mahdouminService;
    this.initializeData();
  }

  initializeData() {
    this.makhdouminList = this._mahdouminService.getMakhdominData();
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
}

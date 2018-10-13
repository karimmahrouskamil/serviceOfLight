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
 
  makhdouminList: [MakhdominProvider];
  constructor(
    public navCtrl: NavController,
    mahdouminService: MakhdominServiceProvider
  ) {
    this.makhdouminList = mahdouminService.getMakhdominData();
    //console.log(this.makhdouminList);
  }
  passDetailOfMakhdoum(oneMakhdoum): void {
    this.navCtrl.push(MakhdoumDetailsPage, oneMakhdoum);
  }
}

import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { MakhdominProvider  } from '../../providers/makhdomin/makhdomin';
/**
 * Generated class for the MakhdoumDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-makhdoum-details",
  templateUrl: "makhdoum-details.html"
})
export class MakhdoumDetailsPage {
  detailData: MakhdominProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detailData = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MakhdoumDetailsPage");
  }
}

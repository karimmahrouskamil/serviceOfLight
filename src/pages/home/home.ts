import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MakhdominServiceProvider } from "../../providers/makhdomin-service/makhdomin-service";
import { MakhdominProvider } from "../../providers/makhdomin/makhdomin";
import { MakhdoumDetailsPage } from "../makhdoum-details/makhdoum-details";
import { CallNumber } from "@ionic-native/call-number";
// import { Observable } from "rxjs/Observable";
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
  filterClassVal: string = "";
  filterQueryString: string = "";
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
    this._mahdouminService.getMakhdouminData().then(data => {
      this.makhdouminList = data;
      console.log(data);
    });
  }

  passDetailOfMakhdoum(oneMakhdoum): void {
    this.navCtrl.push(MakhdoumDetailsPage, oneMakhdoum);
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    this.filterQueryString = ev.target.value;

    // if the value is an empty string don't filter the items
    this._mahdouminService
      .getMakhdouminDataFiltered(this.filterQueryString, this.filterClassVal)
      .then(data => {
        this.makhdouminList = data;
      });
  }

  callCurrentMakhdoum(ev: any, oneMakhdoum) {
    ev.stopPropagation();
    const calledNumber = oneMakhdoum.phone.toString();

    this.callNumber
      .callNumber(calledNumber, false)
      .then(res => console.log("Launched dialer!", res))
      .catch(err => console.log("Error launching dialer", err));
  }

  filterPerClass(classGrade) {
    this.filterClassVal = classGrade;
    // if the value is an empty string don't filter the items
    this._mahdouminService
      .getMakhdouminDataFiltered(this.filterQueryString, this.filterClassVal)
      .then(data => {
        this.makhdouminList = data;
      });
  }
}

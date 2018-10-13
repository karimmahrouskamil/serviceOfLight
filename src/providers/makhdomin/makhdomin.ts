// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the MakhdominProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MakhdominProvider implements MakhdominProviderinterface {
  name: string;
  phone: number;
  zone: string;
  street: string;
  numberOfBuilding: number;
  flatNumber: number;
  HomePhone: number;
  Birthdate: Date;
  FatherOfConfess: string;
  servantFollowing: string;
  ChomosyaLevel: ChamasLevel.ebsaltos;

  constructor() {
    console.log("Hello MakhdominProvider Provider");
  }
}

export interface MakhdominProviderinterface {
  name: string;
  phone: any;
  zone: string;
  street: string;
  numberOfBuilding: number;
  flatNumber: number;
  HomePhone: any;
  Birthdate: Date;
  FatherOfConfess: string;
  servantFollowing: string;
  ChomosyaLevel: ChamasLevel.ebsaltos;
}
export enum ChamasLevel {
  ebsaltos = "ebsaltos"
}

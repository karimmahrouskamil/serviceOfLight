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
  phone: string;
  zone: string;
  street: string;
  numberOfBuilding: number;
  flatNumber: number;
  HomePhone: string;
  Birthdate: string;
  FatherOfConfess: string;
  servantFollowing: string;
  ChomosyaLevel: string;

  constructor() {
    console.log("Hello MakhdominProvider Provider");
  }
}

export interface MakhdominProviderinterface {
  name: string;
  phone: string;
  zone: string;
  street: string;
  numberOfBuilding: number;
  flatNumber: number;
  HomePhone: string;
  Birthdate: string;
  FatherOfConfess: string;
  servantFollowing: string;
  ChomosyaLevel: string;
}
export enum ChamasLevel {
  ebsaltos = "ebsaltos"
}

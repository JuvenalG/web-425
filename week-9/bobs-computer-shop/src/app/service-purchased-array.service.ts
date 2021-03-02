import { Injectable } from '@angular/core';
import { IServices } from "./services.interface";

@Injectable({
  providedIn: 'root'
})
export class ServicePurchasedArrayService {

  servicesPurchased: Array<IServices> = [];


  getArray(){

    return this.servicesPurchased;

}
}

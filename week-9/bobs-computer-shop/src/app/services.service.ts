import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { of } from "rxjs"
import { map } from "rxjs/operators";
import { IServices } from "./services.interface";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  services: Array<IServices>;

  constructor() {
    this.services = [
      {
        _id: 1,
        Service_name: "Password Reset",
        Service_price: 39.99
    },
    {
        _id: 2,
        Service_name: "Spyware Removal",
        Service_price: 99.99
    },
    {
        _id: 3,
        Service_name: "RAM UPgrade",
        Service_price: 129.99
    },
    {
        _id: 4,
        Service_name: "Software Installation",
        Service_price: 49.99
    },
    {
        _id:5,
        Service_name: "Tune-Up",
        Service_price: 89.99
    },
    {
        _id: 6,
        Service_name: "Keyboard Cleaning",
        Service_price: 45
    },
    {
        _id: 7,
        Service_name: "Disk Clean-Up",
        Service_price: 149.99
    },
    {
        _id: 8,
        Service_name: "Labor",
        Service_price: 50
    }
  ]
}

  getServices(): Observable<IServices[]> {
     return of(this.services);
  }

   getService(_id: number): IServices {
     for (let services of this.services) {
       if (services._id === _id){
         return services;
       }
     }
   }



}


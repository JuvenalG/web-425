import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IServices } from "../services.interface";
import { ServicesService } from "../services.service";



@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {

  services: Observable<IServices[]>;
  header: Array<string> = ["_id", "Service_name", "Service_price"];
  serv: IServices;
  serviceArray: IServices;
  servicePurchased: IServices;
  servicesPurchased: Array<IServices> = [];



  constructor(private servicesService: ServicesService) {
    this.services = this.servicesService.getServices();
    this.servicePurchased = {} as IServices;
  }


  ngOnInit(): void {

  }


    /**
     * Writes the selected objects to the browsers console window.
     */





}

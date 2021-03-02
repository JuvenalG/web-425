import { Component, OnInit } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { IServices } from "../services.interface"
import { ServicePurchasedArrayService } from "../service-purchased-array.service";
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss']
})
export class InvoiceDialogComponent implements OnInit {

  servicesPurchased: Array<IServices>;

  constructor(arrayService : ServicePurchasedArrayService) {
    this.servicesPurchased = arrayService.getArray();
  }

  ngOnInit(): void {
  }



}

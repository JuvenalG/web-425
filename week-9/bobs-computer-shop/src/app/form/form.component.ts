import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { IServices } from "../services.interface";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InvoiceDialogComponent } from "../invoice-dialog/invoice-dialog.component";
import { ServicePurchasedArrayService } from "../service-purchased-array.service";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  serviceArray: Array<IServices>;
  servicesPurchased: Array<IServices>;
  serviceForm: FormGroup;


  constructor(private fb: FormBuilder, public dialog: MatDialog, arrayService : ServicePurchasedArrayService) {
    this.serviceArray = [
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

  this.servicesPurchased = arrayService.getArray();

   }



   get serviceFormArray(): FormArray {
    return this.serviceForm.controls.serviceOptions as FormArray;
  }

   private addServiceCheckboxes(): void {
    this.serviceArray.forEach(() => this.serviceFormArray.push(new FormControl(false)));
  }

  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      serviceOptions: new FormArray([])
    })


    this.addServiceCheckboxes();
  }


  saveEntry() {
    this.servicesPurchased = this.serviceForm.value.serviceOptions
    .map((checked, index) => checked ? this.serviceArray[index] : null)
    .filter(v => v !== null);

    this.openDialog();


  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      width: '250px',
    });

}


}

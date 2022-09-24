import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  constructor(private service:AppService , public router:Router) { }

  ngOnInit(): void {
  
  }
 
  vendorGroup = new FormGroup({
   vendorName : new FormControl('',[Validators.minLength(3), Validators.required]),
   vendorNumber : new FormControl('',[ Validators.required])
  });
  addVendor(){
    console.log(this.vendorGroup)
    this.service.addvendor(this.vendorGroup.value).subscribe(
      res=>{console.log(this.vendorGroup);}
      )
      //this.router.navigate(['/list']);
      this.router.navigateByUrl('/list');
  }
}

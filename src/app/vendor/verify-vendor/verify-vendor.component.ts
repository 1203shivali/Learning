import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-verify-vendor',
  templateUrl: './verify-vendor.component.html',
  styleUrls: ['./verify-vendor.component.css']
})
export class VerifyVendorComponent implements OnInit {

constructor(private routes: ActivatedRoute, private service : AppService, private router : Router) { }
flag = false  
vendor : any
vendorGroup = new FormGroup({
vendorName : new FormControl('',[Validators.required]),
vendorNumber : new FormControl('',[Validators.required])
});
name : any = this.vendorGroup.value.vendorName
number : any = this.vendorGroup.value.vendorNumber
  ngOnInit(): void {
   
  }

  verifyVendor()
  {
     this.service.verifyVendor(this.vendorGroup.value.vendorName, this.vendorGroup.value.vendorNumber).subscribe(res=>{this.flag=res;})
     
 
     
    if(this.flag==true)
    {
      
      this.router.navigateByUrl('/list')
    }
    else 
    { 
      this.router.navigateByUrl('/verify')
    }
  
  }
  
    
}

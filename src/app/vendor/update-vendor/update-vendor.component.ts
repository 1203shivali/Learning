import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.css']
})
export class UpdateVendorComponent implements OnInit {

  constructor(private routes:ActivatedRoute, private service : AppService, private router : Router) { }
 Id:number=0;
  vendor:any
  
  vendorGroup = new FormGroup({    vendorName: new FormControl('',[Validators.required]),
  vendorNumber: new FormControl('',[Validators.required]
  )
  
}
);
  ngOnInit(): void {
    this.Id = this.routes.snapshot.params['id'];
    this.service.viewvendor(this.Id).subscribe(res=>{this.vendor=res;  console.log(this.vendorGroup.value.vendorName)})
    
  }
  updateVendor()
  {
    this.vendor['vendorName'] = this.vendorGroup.value.vendorName
    this.vendor['vendorNumber'] = this.vendorGroup.value.vendorNumber
    this.service.updatevendor(this.vendor).subscribe(res=>{console.log(this.vendor)})
    this.router.navigateByUrl('/list')
  }
}

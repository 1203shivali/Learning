import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-search-vendor',
  templateUrl: './search-vendor.component.html',
  styleUrls: ['./search-vendor.component.css']
})
export class SearchVendorComponent implements OnInit {

  constructor( private service:AppService, private routes : ActivatedRoute) { }
  vendors:any[]=[]
  vendorName : any
  ngOnInit(): void {
    this.vendorName = this.routes.snapshot.params['vendorName']
    console.log(this.routes.snapshot.params['vendorName'])
    this.service.viewAllVendor(this.vendorName).subscribe(res=>{this.vendors=res; console.log(res)})
  }
  

}

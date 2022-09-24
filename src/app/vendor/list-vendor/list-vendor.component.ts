import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.css']
})
export class ListVendorComponent implements OnInit {

  constructor(private service:AppService) { }
  vendors : any[] = []
  ngOnInit(): void {
    this.service.listVendor().subscribe(res=>{console.log(res); this.vendors = res})
  }
  deleteVendor(vendorId: any)
  {
    this.service.deleteVendor(vendorId).subscribe(res=>{console.log(res);this.ngOnInit();})
    
  }
}

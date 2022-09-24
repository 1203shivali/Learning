import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrls: ['./vendor-view.component.css']
})
export class VendorViewComponent implements OnInit {

  constructor(private routes: ActivatedRoute, private service : AppService) {}
  vendorId:number = 0
  vendor:any
  ngOnInit(): void {
    
    console.log("routes",this.routes);
    this.vendorId = this.routes.snapshot.params['id'];
    this.service.viewvendor(this.vendorId).subscribe(res=>{this.vendor=res; console.log(res);})
  }
  
}



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
  searchGroup = new FormGroup({
    vendorName : new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
  }
  redirectVendors()
  {
    this.router.navigateByUrl('/search/'+this.searchGroup.value.vendorName)
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-m',
  templateUrl: './sign-m.component.html',
  styleUrls: ['./sign-m.component.css']
})
export class SignMComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addMOM()
  {
    this.router.navigateByUrl('/dashboard');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-u',
  templateUrl: './sign-u.component.html',
  styleUrls: ['./sign-u.component.css']
})
export class SignUComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  addUser()
  {
   this.router.navigateByUrl('/dashboard');   
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor() { }
  id : any
  value:any
  tempGroup = new FormGroup({
    id : new FormControl(),
    value : new FormControl()
  });
  ngOnInit(): void {
  }
  set()
  {
    localStorage.setItem('id', this.tempGroup.value.id)
    sessionStorage.setItem('value', this.tempGroup.value.value)
  }
  get()
  {
    this.id = localStorage.getItem('id')
    this.value = sessionStorage.getItem('value')
  }
  delete()
  {
    localStorage.removeItem('id')
    sessionStorage.removeItem('value')
  }
}

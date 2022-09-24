import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  constructor(private service:AppService) {
     }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    
    }

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import lan from './_files/lan.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title = 'json-file-read-angular';
  public lanList:{notat:String}[]=lan;

  clickCounter: number = 0; 
  name: string = '';
  
  constructor(private _http: HttpService) { }

  ngOnInit() {

  }
  
  countClick(){
    this.clickCounter += 1;
  }

}


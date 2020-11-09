import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  template: `<ul>
  <li *ngFor="let lan of lans">
  </li>
  </ul>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'json-file-read-angular';
  lans: any = [];

  constructor (private httpClient: HttpClient){} // Works in the console.
  ngOnInit(){
    this.httpClient.get("assets/json/lan.json").subscribe(data =>{
      console.log(data);
      this.lans = data;
    })
  }
}



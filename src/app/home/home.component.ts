import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  lans: Object;

  clickCounter: number = 0; 
  name: string = '';
  
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getLans().subscribe(data => {
      this.lans = data
      console.log(this.lans);
    }
    );
  }
  
  countClick(){
    this.clickCounter += 1;
  }

}


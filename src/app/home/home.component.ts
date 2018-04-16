import { Component, OnInit } from '@angular/core';
import { InterlinkService } from './../interlink.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userArea: object 
  area:object
  areaStreets:Array<Object>

  constructor(private _interlinkService: InterlinkService) {
    this.areaStreets = []
    this.userArea = {
      area:""
    }
    this.area = {
      street:"",
      time:""
    }
  }

  getArea() {
    this._interlinkService.getArea(this.userArea,(res) => {
      this.userArea = res;
      this.areaStreets = res;
      console.log("here is your area object:", this.userArea)
    })
  }

  ngOnInit() {

  }

}

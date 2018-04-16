import { Component, OnInit } from '@angular/core';
import { InterlinkService } from './../interlink.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myData: Array<any>;
  userArea: object 

  constructor(private _interlinkService: InterlinkService) {
    this.myData = []
    this.userArea = {
      area:""
    }
  }

  find_data() {
    // console.log("hey gurl")
    this._interlinkService.find_data((res) => {
      this.myData.push(res)
      // console.log(this.myData)
    })
  }

  getArea() {
    // console.log("hi im getting the area")
    this._interlinkService.getArea(this.userArea,(res) => {
      this.userArea = res
      console.log("here is your area object:", this.userArea)
    })
  }

  ngOnInit() {

  }

}

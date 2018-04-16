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
  parkingSpots:Array<any>
  answer: Object

  constructor(private _interlinkService: InterlinkService) {
    this.areaStreets = []
    this.userArea = {
      area:""
    }
    this.area = {
      street:"",
      time:""
    }
    this.parkingSpots = []
    this.answer = {
      // street:"",
      // time:"",
      total: 0,
      taken: 0,
      open: 0
    }
  }

  getArea() {
    this._interlinkService.getArea(this.userArea,(res) => {
      this.userArea = res;
      this.areaStreets = res;
      console.log("here is your area object:", this.userArea)
    })
  }

  findParking() {
    console.log("component", this.area)
    this._interlinkService.findParking(this.area, (res) => {
      this.parkingSpots = res;
      this.answer['taken'] = Number(this.parkingSpots[0]['total_vehicle_count']) + Number(this.parkingSpots[1]['total_vehicle_count']);
      this.answer['total'] = Number(this.parkingSpots[0]['parking_spaces']) + Number(this.parkingSpots[1]['parking_spaces']);
      this.answer['open'] = this.answer['total'] - this.answer['taken'];
      // console.log('total', Number(this.parkingSpots[0]['total_vehicle_count']))
      // console.log('taken', this.parkingSpots[0]['parking_spaces'])
    })
  }

  

  ngOnInit() {

  }

}

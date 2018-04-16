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
  finalString:String
  errMsg: String
  stealth: Boolean

  constructor(private _interlinkService: InterlinkService) {
    this.stealth = true;
    this.finalString = ""
    this.errMsg = ""
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
  isAnswer(){
    if(this.finalString.length > 0){
      return true;
    }else{
      return false;
    }
  }
  getArea() {
    this._interlinkService.getArea(this.userArea,(res) => {
      this.userArea = res;
      this.areaStreets = res;
      this.stealth = false;
    })
  }

  findParking() {
    this._interlinkService.findParking(this.area, (res) => {
      this.parkingSpots = res;
      if(res.length == 0){
        return this.errMsg= "No data available, please chose another time";
      }
      if(this.parkingSpots.length > 1){
        this.answer['taken'] = Number(this.parkingSpots[0]['total_vehicle_count']) + Number(this.parkingSpots[1]['total_vehicle_count']);
        this.answer['total'] = Number(this.parkingSpots[0]['parking_spaces']) + Number(this.parkingSpots[1]['parking_spaces']);
      }else{
        this.answer['taken'] = Number(this.parkingSpots[0]['total_vehicle_count']);
        this.answer['total'] = Number(this.parkingSpots[0]['parking_spaces']);
      }
      this.answer['open'] = this.answer['total'] - this.answer['taken'];
      if(this.answer['open'] < 0){
        this.answer['open'] = 0;
      }
      this.errMsg = ""
      this.finalString = `There are an average of ${this.answer['open']} spot(s) open out of ${this.answer['total']} at ${this.area['street'].toLowerCase()} around ${this.area['time']}`;
      this.isAnswer();
    })
  }
  ngOnInit() {

  }

}

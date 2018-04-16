import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InterlinkService {
  area = "";

  constructor(private _http: Http) { 
    this.area = ""
  }

  find_data(cb){
    // console.log("hi from service")
    this._http.get('http://data.seattle.gov/resource/fdax-a9ur.json?study_year=2017&study_area=Ballard&study_time=12:00 PM').subscribe((res)=>{
        cb(res.json())
      })
  }

  getArea(area, cb){
    // console.log("hi getting area from service")
    console.log("area:", area.area,"string:",'http://data.seattle.gov/resource/fdax-a9ur.json?study_year=2017&study_area='+area.area+'&study_time=12:00 PM')
    this._http.get('http://data.seattle.gov/resource/fdax-a9ur.json?study_year=2017&study_area=' + area.area + '&study_time=12:00 PM').subscribe((res)=>{
      console.log("area on the way back:", res.json())
        this.area = area.area
        cb(res.json())
      })
  }

  // firstCall(v,cb){
  //   this._http.get('http://data.seattle.gov/resource/fdax-a9ur.json?study_year=2017&study_area=${{v}}&study_time=12:00 PM')
  // }
}

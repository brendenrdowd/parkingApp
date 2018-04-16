import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InterlinkService {
  area = "";

  constructor(private _http: Http) { 
    this.area = ""
  }

  getArea(area, cb){
    this._http.get('http://data.seattle.gov/resource/fdax-a9ur.json?study_year=2017&study_area=' + area.area + '&study_time=12:00 PM').subscribe((res)=>{
        this.area = area.area
        cb(res.json())
      })
  }

  findParking(area, cb){
    this._http.get('http://data.seattle.gov/resource/fdax-a9ur.json?Unitdesc=' + area.street + '&study_year=2017&study_time=' + area.time).subscribe((res)=>{
      console.log("parking spot info:", res.json())  
      cb(res.json())
      })
  }

  // firstCall(v,cb){
  //   this._http.get('http://data.seattle.gov/resource/fdax-a9ur.json?study_year=2017&study_area=${{v}}&study_time=12:00 PM')
  // }
}

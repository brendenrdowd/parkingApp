import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InterlinkService {

  constructor(private _http: Http) { 

  }

  find_data(cb){
    console.log("hi from service")
    this._http.get('http://data.seattle.gov/resource/fdax-a9ur.json?study_year=2017&study_area=Ballard&study_time=12:00 PM').subscribe((res)=>{
        cb(res.json())
      })
  }
}

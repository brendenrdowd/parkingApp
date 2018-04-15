import { Component, OnInit } from '@angular/core';
import { InterlinkService } from './../interlink.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myData: Array<any>;

  constructor(private _interlinkService:InterlinkService) { 
    this.myData = []
  }

  find_data(){
    console.log("hey gurl")
    this._interlinkService.find_data((res)=>{
        this.myData.push(res)
        console.log(this.myData)
    })
  }

  ngOnInit() {
   
  }

}

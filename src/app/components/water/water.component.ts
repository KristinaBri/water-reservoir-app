import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent implements OnInit {
  public capacity:number|null=null;
  public speed:number|null=null;
  public duration:number|null=null;
  public water:number|null=null;

  constructor() { }

  ngOnInit(): void {
  }

  public calculate(){
    if (this.capacity!=null && this.speed!=null && this.duration!=null){
      this.water=Number( (this.capacity/((this.duration*this.speed)*100)));
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
public items: Array<any> = [];
  constructor() { }
clicked() {
console.log ("pow");
this.items.push ()

}
  ngOnInit() {
    this.items = [
{
    town: 'Kharkov',
    temp: '-2'
                   },
{
  town: 'Poltava',
  temp: '0'
                   },
{
  town: 'Kiev',
  temp: '1'
                   }
      ]

  }

}

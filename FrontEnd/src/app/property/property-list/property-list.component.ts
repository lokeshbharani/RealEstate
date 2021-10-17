import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Name": "Lokesh's House",
      "Id": 1,
      "Type": "House",
      "Price": 12000
    },
    {
      "Name": "Dhana's House",
      "Id": 2,
      "Type": "House",
      "Price": 12000
    },
    {
      "Name": "Town House",
      "Id": 3,
      "Type": "House",
      "Price": 12000
    },
    {
      "Name": "Villa",
      "Id": 4,
      "Type": "House",
      "Price": 12000
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}

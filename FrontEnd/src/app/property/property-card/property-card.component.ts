import { Component } from "@angular/core";

@Component({
  selector: 'app-property-component',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
})

export class PropertyCardComponent{
  Property: any = {
    "Name": "Lokesh's House",
    "Id": 1,
    "Type": "House",
    "Price": 12000
  }
}

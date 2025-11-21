import { Component } from '@angular/core';
import { NavComponent } from "../nav-component/nav-component";
import { CardsComponent } from "../cards-component/cards-component";

@Component({
  selector: 'app-header',
  imports: [NavComponent, CardsComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}

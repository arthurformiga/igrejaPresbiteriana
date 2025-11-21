import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { NavComponent } from "../../components/nav-component/nav-component";
import { CardsComponent } from "../../components/cards-component/cards-component";

@Component({
  selector: 'app-home',
  imports: [Header, NavComponent, CardsComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

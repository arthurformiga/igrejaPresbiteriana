import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { NavComponent } from "../../components/nav-component/nav-component";

@Component({
  selector: 'app-boletins',
  imports: [Header, NavComponent],
  templateUrl: './boletins.html',
  styleUrl: './boletins.css',
})
export class Boletins {

}

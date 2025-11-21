import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { NavComponent } from "../../components/nav-component/nav-component";
import { LinkComponent } from "../../components/link-component/link-component";

@Component({
  selector: 'app-hinos',
  imports: [Header, NavComponent, LinkComponent],
  templateUrl: './hinos.html',
  styleUrl: './hinos.css',
})
export class Hinos {

}

import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { NavComponent } from "../../components/nav-component/nav-component";
import { LinkComponent } from "../../components/link-component/link-component";

@Component({
  selector: 'app-liturgias',
  imports: [Header, NavComponent, LinkComponent],
  templateUrl: './liturgias.html',
  styleUrl: './liturgias.css',
})
export class Liturgias {

}

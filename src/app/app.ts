import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headerr } from "./headerr/headerr";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headerr],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('igreja-presbiteriana');
}

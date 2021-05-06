import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import puhelinData from 'src/assets/phones/phones.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuoteluettelo';
  faCoffee = faCoffee;
  puhelimet: any = puhelinData;
}

import { Component } from '@angular/core';
import puhelinData from 'src/assets/phones/phones.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuoteluettelo';
  suodatus = '';
  suodatetut = [];
  lajitellut = [];
  puhelimet: any = puhelinData;
  haku(event) {
    const arvo = event.target.value;
    this.puhelimet = this.suodata(puhelinData, arvo);
  }
  suodatin(e) {
    if (e.target.value === "alphabetical") {
      this.alphabetical();
    } else if (e.target.value === "newest") {
      this.newest();
    }
  }

  suodata(suodatettava, termi) {
    if (termi) {
      for (let puhelin of suodatettava) {
        if (puhelin.name.toUpperCase().includes(termi.toUpperCase())) {
          if (!this.suodatetut.includes(puhelin)) {
            this.suodatetut.push(puhelin)
          } else {
            this.suodatetut.splice(0, this.suodatetut.indexOf(puhelin))
          }
        }

      }
      return this.suodatetut.sort();
    } else {
      return puhelinData;
    }
  }

  newest() {
    this.puhelimet = puhelinData.slice(0).sort(function (a, b) {
      return a.age - b.age;


    });
  }

  alphabetical() {
    this.puhelimet = puhelinData.slice(0).sort(function (a, b) {
      var x = a.id.toLowerCase();
      var y = b.id.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
}

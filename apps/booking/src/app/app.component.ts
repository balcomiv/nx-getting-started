import { Component } from '@angular/core';
import { unicornRocket } from '@nx-getting-started/utilities'

@Component({
  selector: 'nx-getting-started-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `${unicornRocket} Booking App!`;
}

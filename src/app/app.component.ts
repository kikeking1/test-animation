import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterLink, RouterOutlet],
  animations: [slideInAnimation],
  standalone: true
})
export class AppComponent {
  
}
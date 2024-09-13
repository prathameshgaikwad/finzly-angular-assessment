import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  bgColor: string = '#2b2b2b';

  toggleColor() {
    this.bgColor = this.bgColor === '#2b2b2b' ? 'darkslateblue' : '#2b2b2b';
  }
}

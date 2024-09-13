import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name: string = '';

  updateName(event: any): void {
    this.name = event.target.value;
  }

  greetUser() {
    alert(`Hello, ${this.name}!`);
  }
}

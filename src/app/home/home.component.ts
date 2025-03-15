import { Component } from '@angular/core';
import { ThreeRendererComponent } from '../three-renderer/three-renderer.component'; // Import ThreeRendererComponent

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ThreeRendererComponent],
})
export class HomeComponent { }
import { Component } from '@angular/core';
import { ThreeRendererComponent } from '../three-renderer/three-renderer.component';

@Component({
  selector: 'app-threejs-container',
  standalone: true,
  imports: [ThreeRendererComponent], // Import the standalone component here
  templateUrl: './threejs-container.component.html',
  styleUrls: ['./threejs-container.component.css']
})
export class ThreejsContainerComponent { }
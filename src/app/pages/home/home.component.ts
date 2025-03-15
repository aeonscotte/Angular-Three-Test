import { Component } from '@angular/core';
import { ThreejsContainerComponent } from '../../components/threejs-container/threejs-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThreejsContainerComponent], // Import the container component
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
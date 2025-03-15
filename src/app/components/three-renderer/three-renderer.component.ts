import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-renderer',
  standalone: true,
  templateUrl: './three-renderer.component.html',
  styleUrls: ['./three-renderer.component.less'],
})
export class ThreeRendererComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { static: true }) containerRef!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private cube!: THREE.Mesh;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ alpha: true });

    // Append canvas to the container div instead
    this.containerRef.nativeElement.appendChild(this.renderer.domElement);

    // Scene objects
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;
  }

  ngAfterViewInit() {
    this.onResize();
    this.animate();
  }

  @HostListener('window:resize')
  onResize() {
    const container = this.containerRef.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
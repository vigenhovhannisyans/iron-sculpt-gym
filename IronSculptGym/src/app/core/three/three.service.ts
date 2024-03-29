import { Injectable, Signal, WritableSignal, effect, input, signal, ɵunwrapWritableSignal } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as Three from 'three';

@Injectable({
  providedIn: 'root'
})
export class ThreeService {
  public scene!: Three.Scene;
  public renderer!: Three.WebGLRenderer;
  public camera!: Three.Camera;
  public controls!: any;
  public width: WritableSignal<number> = signal<number>(600);
  public height: WritableSignal<number> = signal<number>(500);

  constructor(
  ){
    effect(() => {
      console.log(this.width(), 'width from three');
      
    },{allowSignalWrites:true})
  }

  public setupCamera(): void {
      this.camera = new Three.PerspectiveCamera(70, this.width() / this.height());
      this.camera.position.z = 20;
      this.camera.position.x = 20;
      this.camera.position.y = 20;
      this.scene.add(this.camera);
  }

  public setupLights(): void {
      const topLight = new Three.DirectionalLight(0xffffff, 15);
      const bottomLight = new Three.DirectionalLight(0xffffff, 15);
      const topRightLight = new Three.DirectionalLight(0xffffff, 15);
      const topLeftLight = new Three.DirectionalLight(0xffffff, 15);

      topLight.position.set(0, 10, 0);
      bottomLight.position.set(0, -10, 0);
      topRightLight.position.set(10, 10, 0);
      topLeftLight.position.set(-10, 10, -10);

      this.scene.add(topLight);
      this.scene.add(bottomLight);
      this.scene.add(topRightLight);
      this.scene.add(topLeftLight);
  }


  public setupControls(canvas: HTMLCanvasElement): void {
      this.controls = new OrbitControls(this.camera, canvas)
      this.controls.enableDamping = true;
      this.controls.enablePan = false;
      this.controls.enableZoom = false;
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 2
  }

  public animate(): void {
      const loop = () => {
          if (this.renderer) {
              this.controls.update()
              this.renderer.render(this.scene, this.camera)
              requestAnimationFrame(loop)
          }
      }
      loop()
  }

  public rendererCreator(canvas: HTMLCanvasElement): void {
      this.renderer = new Three.WebGLRenderer({ canvas })
      this.renderer.setSize(this.width(), this.height());
      this.renderer.render(this.scene, this.camera)
      this.renderer.setClearColor(0xffffff, 0)
  }
}

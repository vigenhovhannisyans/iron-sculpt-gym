import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, effect, inject } from '@angular/core';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as Three from 'three';
import { ThreeOptions } from '../../Three/three';
import { WindowService } from '../../core/window/window.service';
import { ThreeService } from '../../core/three/three.service';

@Component({
  selector: 'app-dumbell',
  standalone: true,
  imports: [],
  templateUrl: './dumbell.component.html',
  styleUrl: './dumbell.component.scss'
})
export class DumbellComponent implements AfterViewInit, OnInit {
  @ViewChild('dumbell')
  public canvas!: ElementRef;
  public width: number = 600;
  public height: number = 500;

  private readonly windowService: WindowService = inject(WindowService);
  private readonly threeService: ThreeService = inject(ThreeService);

  constructor() {
    effect(() => {
      if (this.windowService.laptop()) {
        this.threeService.width.set(500);
        this.threeService.height.set(387);
        this.createContent(this.canvas.nativeElement)
      } else if (this.windowService.mobile()) {
        this.threeService.width.set(600);
        this.threeService.height.set(500);
        this.createContent(this.canvas.nativeElement)
      } else if (this.windowService.mobileSM()) {
        this.threeService.width.set(500);
        this.threeService.height.set(350);
        this.createContent(this.canvas.nativeElement)
      } else if (this.windowService.mobileXS()) {
        this.threeService.width.set(480);
        this.threeService.height.set(430);
        this.createContent(this.canvas.nativeElement)
      } else if (this.windowService.mobileS()) {
        console.log('aa');
        this.threeService.width.set(350);
        this.threeService.height.set(300);
        this.createContent(this.canvas.nativeElement)
      } else {
        this.threeService.width.set(600);
        this.threeService.height.set(500);
        this.createContent(this.canvas.nativeElement)
      }
    }, {allowSignalWrites: true})
  }

  public ngOnInit(): void {
  
  }

  public ngAfterViewInit(): void {
    this.createContent(this.canvas.nativeElement)
    this.threeService.animate()
  }

  private createContent(canvas: HTMLCanvasElement): void {
    this.createModel();
    this.threeService.setupCamera();
    this.threeService.setupLights();
    this.threeService.setupControls(canvas)
    this.threeService.rendererCreator(canvas)
  }

  private createModel(): void {
    this.threeService.scene = new Three.Scene();
    const modelLoader = new GLTFLoader();
    modelLoader.load('../../../assets/models/dumbell.gltf', (gltf: GLTF) => {
      const model = gltf.scene;
      const group = new Three.Group();
      group.add(model);
      const boundingBox = new Three.Box3().setFromObject(model);
      const center = new Three.Vector3();
      boundingBox.getCenter(center);
      model.position.sub(center);
      this.threeService.scene.add(group);
      group.scale.set(13, 13, 13);
    });
  }
}

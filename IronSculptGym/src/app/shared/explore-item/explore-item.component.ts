import { Component, Input } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-explore-item',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './explore-item.component.html',
  styleUrl: './explore-item.component.scss'
})
export class ExploreItemComponent {
  @Input()
  public title!: string;
  @Input()
  public description!: string;
  @Input()
  public icon!: string;
}

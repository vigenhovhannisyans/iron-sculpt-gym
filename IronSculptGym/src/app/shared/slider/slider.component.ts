import { Component, Input } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderConfigI } from '../../core/interfaces/slider-config';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input()
  public slideConfig!: SliderConfigI;
}

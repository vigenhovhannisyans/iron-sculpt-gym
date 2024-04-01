import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DumbellComponent } from '../../shared/dumbell/dumbell.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { SliderComponent } from '../../shared/slider/slider.component';
import { ExploreItemComponent } from '../../shared/explore-item/explore-item.component';
import { ExploreItemsI } from '../../core/interfaces/explore-items';
import { exploreItems } from '../../core/constants/explore-items';
import { ImageComponent } from '../../shared/image/image.component';
import { SliderConfigI } from '../../core/interfaces/slider-config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    DumbellComponent,
    ButtonComponent,
    SliderComponent,
    ExploreItemComponent,
    ImageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChild('prev', { static: true })
  public prevButton!: ElementRef;

  @ViewChild('next', { static: true })
  public nextButton!: ElementRef;

  public readonly exploreItems: ExploreItemsI[] = exploreItems;

  public slideConfig: SliderConfigI = {
    slidesToShow: 3.7,
    slidesToScroll: 1,
    infinite: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2.7,
            slidesToScroll: 1,
        }
    },
      {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    ]
  };

  public ngOnInit(): void {
    this.slideConfig.prevArrow = this.prevButton.nativeElement;
    this.slideConfig.nextArrow = this.nextButton.nativeElement;
  }
}

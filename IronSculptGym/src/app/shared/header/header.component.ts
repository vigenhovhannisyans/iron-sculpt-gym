import { Component } from '@angular/core';
import { RouteI } from '../../core/interfaces/routes';
import { routers } from '../../core/constants/routes';
import { ImageComponent } from '../image/image.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ImageComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public readonly routers: RouteI[] = routers;
  public showNavbar: boolean = false;

  public handleNavbarToggle(): void {
    this.showNavbar = !this.showNavbar
  }
}

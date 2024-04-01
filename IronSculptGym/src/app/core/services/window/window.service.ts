import { Injectable, WritableSignal, signal, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  public laptop: WritableSignal<boolean> = signal(false);
  public mobile: WritableSignal<boolean> = signal(false);
  public mobileSM: WritableSignal<boolean> = signal(false);
  public mobileXS: WritableSignal<boolean> = signal(false);
  public mobileS: WritableSignal<boolean> = signal(false);

  constructor() {
    fromEvent(window, 'resize')
      .pipe(
        takeUntilDestroyed(),
      )
      .subscribe({
        next: (event: Event) => {
          const evt = (event.target as Window);
          this.handleWindowSize(evt)
        }
      });
      this.handleWindowSize(window)
  }

  private handleWindowSize(target: Window): void {
    const evt = target || Window
    this.laptop.set(evt.innerWidth <= 1100 && evt.innerWidth >= 992);
    this.mobile.set(evt.innerWidth <= 991 && evt.innerWidth >= 768);
    this.mobileSM.set(evt.innerWidth <= 767 && evt.innerWidth >= 575);
    this.mobileXS.set(evt.innerWidth <= 575 && evt.innerWidth >= 493);
    this.mobileS.set(evt.innerWidth <= 493 && evt.innerWidth >= 320);
  }
}

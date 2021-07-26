import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class GlobalService {

  loader = new BehaviorSubject(false);
  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  showLoader = function () {
    this.loader.next(true)
  }

  hideLoader = function () {
    this.loader.next(false)
  }

  getNativeWindow() {
    if (isPlatformBrowser(this.platformId)) {
      return window;
    } else {
      return null;
    }
  }

}

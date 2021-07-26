import {Subject} from 'rxjs/internal/Subject';

export class LoaderService {
  loaderEvent$ = new Subject();

  stopLoading() {
    this.loaderEvent$.next(false);
  }

  stopLoadingForce() {
    this.stopLoading()
  }

  startLoading() {
    this.loaderEvent$.next(true);
  }

  startLoadingForce() {
    this.startLoading();
  }

}

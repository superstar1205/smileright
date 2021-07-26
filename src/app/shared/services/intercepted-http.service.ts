
import { throwError as observableThrowError, Observable, scheduled, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Inject, Injectable, PLATFORM_ID, Optional } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { UtilsClass } from '../components/classes/utils';
import { isPlatformBrowser } from '@angular/common';
import { NotifyAppCompnent } from '../components/classes/notify-app-compnent';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Injectable()
export class InterceptedHttp implements HttpInterceptor {
  protected pendingReq = 0;

  constructor(@Optional() @Inject(REQUEST) protected request: Request, @Inject(PLATFORM_ID) private platformId) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!isPlatformBrowser(this.platformId)) {
      return EMPTY;
    }

    const authReq = req.clone({
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });



    this.startLoading();



    return next
      .handle(authReq).pipe(map((event: HttpEvent<any>) => {




        if (event instanceof HttpResponse) {
          this.finishTreament();
        }

        return event;
      }),
        catchError(this.catchErrors()))
  }



  public stopLoading() {

    this.pendingReq = 0;
    UtilsClass.stopLoadingInterceptor()
  }

  public editResponse() {
    return (res: HttpResponse<any>) => {
      const body: any = res;
      if (body.success === false) {
        this.stopLoading();

        return observableThrowError(res);
      }
    };
  }

  startLoading() {

    this.pendingReq++;
    UtilsClass.startLoadingInterceptor()
  }

  public catchErrors() {
    // let error = new Error();

    return (res: any) => {
      this.stopLoading();

      if (res.status !== 400) {
        if (res.status === 404) {
          const result: any = res;
          UtilsClass.displayError(result.error, 404, null);
        } else if (res.status === 403) {
          const result: any = res;
          UtilsClass.displayError(result.error.message, 403, null);
        } else if (res.status === 401) {
          const result: any = res;
          if (result.success === false) {
            UtilsClass.displayError(result.error.message, 401, null);
          } else {
            UtilsClass.displayError('Authentication failed', 401, null);
          }
        } else if (res.status >= 500 || res.status < 600) {
          const result: any = res.error;
          if (result.success === false) {
            UtilsClass.displayError(
              result.error.message,
              result.error.code,
              null
            );
          } else {
            if (isPlatformBrowser(this.platformId)) {
              window.location.href = 'something-wrong';
            }
          }
        } else {
          const result: any = res.error;
          if (result.success === false) {
            UtilsClass.displayError(
              result.error.message,
              result.error.code,
              null
            );

            if (result.status === 402) {
              if (isPlatformBrowser(this.platformId)) {
                window.location.href = '/';
              }
            }
          }
        }

        return observableThrowError(res);
      } else {
        const result: any = res.error;
        if (result.success === false) {
          UtilsClass.displayError(
            result.error.message,
            result.error.code,
            null
          );
        }
      }
      return observableThrowError(res);
    };


  }
  public finishTreament() {

    this.pendingReq--;
    if (this.pendingReq <= 0) {
      UtilsClass.stopLoadingInterceptor()
    }

  }
}

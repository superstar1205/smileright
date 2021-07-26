
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class UtilsService {
  constructor(private http: HttpClient) {}

  public getAddressess(term): Observable<any> {
    return this.http
      .get(environment.nodeUrl + '/kleber/address/search/' + term).pipe(
      map((res: HttpResponse<any>) => res['data']));
  }

  public getAddressDetails(recordID): Observable<any> {
    return this.http
      .get(`${environment.nodeUrl}/kleber/address/${recordID}`).pipe(
      map((res: any) => res.data));
  }

  public verifyPhone(prefix, phoneNumber) {
    return this.http
      .get(`${environment.nodeUrl}/kleber/phone/verify/${prefix}/${phoneNumber}`);
  }

  public verifyEmail(email) {
    return this.http
      .get(`${environment.nodeUrl}/kleber/email/verify/${email}`);
  }

  getEpdocument(id) {

    return this.http
      .get(`${environment.nodeUrl}/EPDocument/` + id).pipe(
      map((res: HttpResponse<any>) => res['data']));
  }
}

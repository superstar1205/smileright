import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsClass } from 'app/shared/components/classes/utils';
import { AppState } from 'app/app.service';

@Component({
  selector: 'app-marketing-redirection',
  templateUrl: './marketing-redirection.component.html',
  styleUrls: ['./marketing-redirection.component.css']
})
export class MarketingRedirectionComponent implements OnInit {

  settings = AppState.Settings;
  linkCode
  linkID
  isPromoterOrAdmin = false;

  utils = new UtilsClass()

  constructor(
    private router: Router,
    private appService: AppState,
    private activeRouter: ActivatedRoute,
  ) {



  }


  ngOnInit() {

    this.activeRouter.params.subscribe(params => {

      if (params['linkCode']) {
        this.linkCode = params['linkCode'];
      }

      if (params['linkID']) {
        this.linkID = params['linkID'];
      }

      if (this.linkID) {

        if (this.linkCode == "m") {


          this.appService.getMarketingTemplatePromoterCode(this.linkID).subscribe(code => {

            if (code) {

              this.router.navigate(['/product/', { outlets: { 'page': ['main',code,this.linkID] } }]);


            }
            else {
              this.router.navigate(['']);
            }
          })

        }
        else if (this.linkCode == 'l') {

          this.appService.getShortcutLink(this.linkID).subscribe(res => {
            if (res && res['link']) {
              window.location.href = res['link'];
            }
            else {
              this.router.navigate(['']);
            }
          })


        }
        else {
          this.router.navigate(['']);
        }
      }
      else {
        this.router.navigate(['']);
      }
    })

  }

}

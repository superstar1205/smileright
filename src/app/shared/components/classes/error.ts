import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { ErrorModalComponent } from "../error-modal/error-modal.component";


export class Error {
  constructor(private dialog: MatDialog, private router: Router) {}

  public displayError(error, code, link) {
    code = code || 400;

    if (code < 500 && code >= 400) {
      const ref = this.dialog.open(ErrorModalComponent, {
        data: {
          link: link,
          title: error,
          content: ""
        },
        width: "70%",
        height: "70%"
      });
      // const sub = ref.componentInstance.closeModal.subscribe(data => {
      //   ref.close();
      // });
    } else {
      this.router.navigate(["/500", { code: code, error: error }]);
    }
  }
}

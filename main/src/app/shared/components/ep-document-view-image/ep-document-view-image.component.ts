
import {fromEvent as observableFromEvent,  Observable } from 'rxjs';

import {debounceTime} from 'rxjs/operators';
import {Component, ViewChild, ElementRef, OnInit, Inject, Optional, Input, NgZone, SimpleChanges, PLATFORM_ID} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilsService } from "../../services/utils.service";

import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: "app-ep-document-view-image",
  templateUrl: "./ep-document-view-image.component.html",
  styleUrls: ["./ep-document-view-image.component.css"],
  animations: [
    trigger('ngIfAnimation', [
      transition('void => *', [
        query('.row', style({ opacity: 0 }), { optional: true }),
        query('.row', stagger('100ms', [
          animate('0.8s ease-out', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true }),
      ]),
      transition('* => void', [
        query('.row', style({ opacity: 1 }), { optional: true }),
        query('.row', stagger('100ms', [
          animate('0.8s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
          ]))]), { optional: true }),
      ])
    ])
  ]
})

export class EpDocumentViewImageComponent implements OnInit {

  @Input()
  document;

  @Input()
  defaultPicture = 'url(/assets/img/img.png)';

  @Input()
  loadingImg = 'url(/assets/img/ep-loader.gif)';

  @Input()
  loading = false;

  doc;

  isLoaded = true;


  fileURL: any;
  scroll$: any;

  @ViewChild("iframe", { static: false }) iframe: ElementRef;
  constructor(
    private domSanitizer: DomSanitizer,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    @Inject(NgZone) private zone: NgZone,
    private utilsService: UtilsService,
    @Inject(PLATFORM_ID) private platformId
  ) {
    if (data) {
      this.doc = data;
    }
  }

  ngOnInit() {


    this.setup();


  }

  ngOnChanges(changes: SimpleChanges) {

    this.setup();

  }

  setup() {

    if (this.document && typeof this.document == "object") {

      this.doc = this.document;
      this.displayDoc();
    }
    else if (this.document && typeof this.document == "string") {
      this.isLoaded = false;
      this.utilsService.getEpdocument(this.document).subscribe(res => {
        if (res) {
          this.isLoaded = true;
          this.document = res;
          this.doc = this.document;
        }

      })
    }
    else {
      this.doc = null;
    }
  }



  displayDoc() {
    let tmpFileUrl = null;
    if (this.doc && this.doc.Extension === "png") {
      const file = this.base64toBlob(this.doc.PhysicalFileInBLOB, "image/png");
      if (isPlatformBrowser(this.platformId)) {
        tmpFileUrl = window.URL.createObjectURL(file)
      }
      this.fileURL = this.domSanitizer.bypassSecurityTrustStyle('url(' + tmpFileUrl + ')');
    } else {
      if (this.doc && (this.doc.Extension === "jpeg" || this.doc.Extension === "jpg")) {
        const file = this.base64toBlob(this.doc.PhysicalFileInBLOB, "image/jpeg");
        if (isPlatformBrowser(this.platformId)) {
          tmpFileUrl = window.URL.createObjectURL(file);
        }
        this.fileURL = this.domSanitizer.bypassSecurityTrustStyle('url(' + tmpFileUrl + ')');
      }
    }
    // console.log(this.fileURL)
  }

  // makeTrustedImage(item) {
  //   const fileURL =  JSON.stringify(item).replace(/\\n/g, '');
  //   const style = 'url(' + fileURL + ')';
  //   return this.domSanitizer.bypassSecurityTrustStyle(style);
  // }



  onFrameLoad(evt) {
    if (this.iframe && this.iframe.nativeElement && this.iframe.nativeElement.PhysicalFileInBLOBWindow) {
      this.iframe.nativeElement.PhysicalFileInBLOBWindow.addEventListener(
        "onscroll",
        function (event) {
          ;
          alert("scroll!!");
          this.zone.run(() => {
            alert("scroll!!");
          });

        },
        false
      );

      this.scroll$ = observableFromEvent(
        this.iframe.nativeElement.PhysicalFileInBLOBWindow,
        "scroll"
      ).pipe(
        debounceTime(200))
        .subscribe((evt: any) => {
          ;
          if (
            this.iframe.nativeElement.contentWindow.scrollY >
            this.iframe.nativeElement.contentWindow.innerHeight
          ) {
            alert("scroll bottom");
            this.zone.run(() => {
              alert("scroll!!");
            });
          }
        });
    }
  }

  base64toBlob(base64Data, contentType) {
    contentType = contentType || "";
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);

      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  }
}

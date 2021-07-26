import {
  Component,
  OnInit,
  Inject,
  Optional,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";

import { DeviceDetectorService } from "ngx-device-detector";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: "app-document-url-view",
  templateUrl: "./document-url-view.component.html",
  styleUrls: ["./document-url-view.component.css"]
})
export class DocumentUrlViewComponent implements OnInit {


  @Input() title;
  @Input() description;

  @Input() documentUrl;





  browser;
  isMicrosoftEdge = false;
  isModal = false;
  type;
  vimeoHtml;


  safeVideoURL: SafeResourceUrl;

  @Output() closeModal = new EventEmitter();


  accountType = "guest"


  constructor(
    private deviceDetectorService: DeviceDetectorService,
    private activeRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer,

    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {
    if (data) {





      if (data.documentUrl) {

        this.documentUrl = data.documentUrl;
      }


      if (data.title) {

        this.title = data.title;
      }


      if (data.description) {

        this.description = data.description;
      }




      this.isModal = true;

    }

  }

  ngOnInit() {




    this.browser = this.deviceDetectorService.browser;

    if (this.browser == "ms-edge") {
      this.isMicrosoftEdge = true;
    }




    this.setup();




  }

  setup() {

    this.browser = this.deviceDetectorService.browser;

    if (this.browser == "ms-edge") {
      this.isMicrosoftEdge = true;
    }

    this.activeRoute.params.subscribe(params => {
      if (params["documentUrl"]) {
        this.documentUrl = params["documentUrl"];
      }

      if (params["title"]) {
        this.title = params["title"];
      }


      if (params["description"]) {
        this.description = params["description"];
      }

      this.setupURl();


    });



  }




  setupURl() {

    if (this.documentUrl) {



      let url = this.documentUrl;

      

      if (url.indexOf('vimeo.com') != -1) {
        

        let id = url.replace('https://vimeo.com/', '');
        id = id.replace('https://player.vimeo.com/video/', '');
        id = id.replace('vimeo.com/', '');

        
        id = id.split('/')[0]
        if (id) {

          url = 'https://player.vimeo.com/video/' + id;


          url = url.replace('.png', '')
          this.type = 'video';


          this.safeVideoURL = this._sanitizer.bypassSecurityTrustResourceUrl(url);

        }

      }

      else if (url.indexOf('youtube.com')) {
        url = url.replace("watch?v=", "embed/");
        url = url.replace("watch/?v=", "embed/");


        url = url.replace('.png', '')
        this.type = 'video';


        this.safeVideoURL = this._sanitizer.bypassSecurityTrustResourceUrl(url);


      }

      else {

        let extension = url.split('.').pop();

        if (
          String(extension).toLocaleLowerCase() == 'png'
          || String(extension).toLocaleLowerCase() == 'gif'
          || String(extension).toLocaleLowerCase() == 'jpg'
          || String(extension).toLocaleLowerCase() == 'jpeg'
        ) {

          this.safeVideoURL = this._sanitizer.bypassSecurityTrustResourceUrl(url);
          this.type = "image"



        }

        else if (
          String(extension).toLocaleLowerCase() == 'pdf'
        ) {


          this.safeVideoURL = this._sanitizer.bypassSecurityTrustResourceUrl(url);
          this.type = "pdf"


        }

      }


    }
  }





  closeModalEvent() {
    this.closeModal.emit(true)
  }



}

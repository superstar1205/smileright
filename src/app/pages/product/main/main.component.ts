import { ChangeDetectorRef, Component, OnInit, Inject, HostListener, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { WINDOW } from 'app/shared/services/window.service';
import { DOCUMENT } from '@angular/common';
import * as smoothscroll from "smoothscroll-polyfill";

import * as AOS from 'aos';
import { AppState } from 'app/app.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  type: String = "partners";

  merchant = {
    "ID": "F6164E0E29C94FECB264AD2A1B828644",
    "LastModified_Human": "2021-03-13 12:40:10",
    "IsPromoter": "1",
    "ShortName": "Leading Edge Dental",
    "Name": "St George Dental Pty Ltd",
    "Salutation": "Dr",
    "FirstName": "Brett",
    "MiddleName": "Econnect",
    "PreferredName": "",
    "TradingAs": "Leading Edge Dental",
    "TrusteeFor": "",
    "CalculatedName": "St George Dental Pty Ltd, trading as Leading Edge Dental",
    "Dear": "Dear Sir/Madam",
    "Occupation": "",
    "CardType": "Commercial - Company",
    "ABN": "601445041",
    "DateTimeCreated": "",
    "ACN": "601445041",
    "CompanyType": "",
    "phones.Number": "1300793989",
    "phones.Extension": "",
    "mobiles.Send": "0",
    "mobiles.Number": "",
    "faxes.Send": "0",
    "faxes.Number": "",
    "emails.Send": "1",
    "emails.Email": "Steve@ipventures.com.au",
    "email.ReplyTo": "steve@ipventures.com.au",
    "addresses.Send": "0",
    "addresses.Calculated": "580 Hay St \rPerth WA 6000",
    "addresses.Suburb": "Perth",
    "addresses.State": "WA",
    "addresses.Postcode": "6000",
    "addresses.Country.Code": "au",
    "addresses.Country.Label": "Australia",
    "addresses.Unit": "",
    "addresses.Property": "",
    "addresses.Street Nr": "580",
    "addresses.Street Name": "Hay",
    "addresses.Street Type": "St",
    "PreferredMessageType.Code": "E",
    "PreferredMessageType.Label": "Email",
    "URL": "http://leadingedgedental.com.au",
    "PreferredContactMethod.Code": "",
    "PreferredContactMethod.Label": "",
    "Address.Latitude": "-31.9546333",
    "Address.Longitude": "115.8609102",
    "OverheadPercentage.Overridden": "5",
    "OverheadPercentage.Effective": "5",
    "CashDiscount.Offered": "1",
    "CashDiscount.AllowOverride": "0",
    "CashDiscount.Percentage": "6",
    "CashDiscount.Expiry.Days": "7",
    "CashDiscount.MinInvoiceValue": "400",
    "ThirdPartyBooking_URL": "",
    "InformedConsent_Declaration": "<h2>Informed Consent: Dental &amp; Oral Health</h2><p>I acknowledge the doctor / clinician has explained:</p><p><br></p><ul><li>my / the patient's medical condition and the proposed procedure / treatment / investigation may require and include additional treatment if the doctor / clinician finds something unexpected. I understand the risks and benefits, including the risks specific to me;</li><li>my / the patient's requirement for anesthetic for this procedure / treatment / investigation - I understand the risks associated with anesthetic, including the risks specific to me (see Anesthetic information sheet);</li><li>my / the patient has alternative procedure / treatment / investigation options;</li><li>my / the patient's prognosis, and the risks of not having the procedure / treatment / investigation;</li><li>no guarantee has been made that the procedure / treatment / investigation will improve my / the patient's condition even though it has been carried out with due professional care;</li><li>my / the patient's procedure / treatment / investigation may include a blood transfusion;</li><li>my / the patient's tissues / blood may be removed and be used for diagnosis / management of my condition, stored and disposed of sensitively by the hospital;</li><li>if an immediate life-threatening event happens during my / the patient's procedure / treatment / investigation, I / the patient will be treated based on my discussions with the doctor / clinician or Acute Resuscitation Plan;</li><li>a doctor / clinician other than the consultant / specialist may conduct the procedure / treatment / investigation. I understand this could be a doctor undergoing further training who will be supervised according to relevant professional body guidelines;</li><li>I / the patient was able to ask questions and raise concerns with the doctor / clinician about my / the patient's condition, the proposed procedure / treatment and its risks, and my / the patient's treatment options. My questions and concerns have been discussed and answered to my satisfaction;</li><li>I / the patient understand I have the right to change my mind at any time, including after I have signed this form but, preferably following a discussion with a doctor / clinician;</li><li>I / the patient understand image(s) or video footage may be recorded as part of and during my procedure and that these image(s) or video(s) will assist the doctor / clinician to provide appropriate treatment.</li></ul>",
    "Description": "<h2><span style=\"background-color: transparent;\">Leading Edge Dental's Story</span></h2><p><br></p><p><br></p><p>Our practice was established in Penshurst in the late 1800s by William Crawford. In 1919 his son, John Sydney Crawford, qualified (after serving an apprenticeship) and joined his father's practice. Sometime in the mid-1920s John Sydney Crawford set up his own practice in the main street of Penshurst (see cool old photo).</p><p>In 1953 his son, John Robert Crawford (below right), graduated from the University of Sydney and joined his father practising in Penshurst.</p><p>Young John established his own practice in 1957, building on the vacant site at 16 The Strand. In 1962 John Snr moved into 16 The Strand and practiced there until his retirement in the mid 60's. On March 28, 2001 young John (John Robert Crawford) retired after 48 years of practice.</p><p>The Crawford family can thus proudly, and uniquely, lay claim to treating local people in three separate centuries. The present owner, Brett Lucas Taylor (thats me, below left looking ridiculously young), joined the practice in 1985. He can claim to have treated the locals in two separate centuries, but is not particularly confident of making it three.</p><p>Currently our most loyal active patient is Coral Roberts, who has just clocked up 75 years of continuous care in our practice. Coral first attended as an an 8 year old. I dont want to reveal a ladys age, but you can probably figure the maths out for yourself. Shes still got a few years to go to catch Les Riley, who had been attending for just over 80 years when he passed away at age 97 in 2015. Both have/had a full set of teeth thanks to the good work of Johns Jr and Sr (and me in later years).</p><p>Here is John junior the day he retired in 2001. Sadly he passed away on January 22nd 2016 at the age of 87.</p><p><br></p><p>\"Young Mr Crawford\" is still fondly remembered by many of his old patients who still regularly come in. Apart from the good times with John, this photo helps me fondly remember how much hair I used to have. RIP John. We miss you</p>",
    "Facebook": "",
    "Instagram": "",
    "Twitter": "",
    "LinkedIn": "",
    "Pinterest": "",
    "Tumblr": "",
    "Vimeo": "",
    "YouTube": "",
    "Colour.Primary": "#0088b1",
    "Colour.Accent": "#e20000",
    "Appointment_Cancelling_Hours": "48",
    "Appointment_Cancelling_Policy": "<h2>OUR POLICY ON CANCELLATIONS, FAILURE TO ATTEND AND PRACTICE ETIQUETTE.</h2><p><br></p><p>Here at <strong> {{PracticeName}} </strong> we make every effort to be on time for our patients and ask that you extend the same courtesy to us. If you cannot attend an appointment, you will need us to provide at least<strong> {{Hours}} </strong> <strong>hours</strong> notice.</p><p><br></p><p>This courtesy, on your part, will make it possible for us to give yourappointment to another patient. We understand that situations may arise that would make it impossible for you to give <strong> {{Hours}} hours</strong> notice. Each incident will be considered based upon your appointment history. Missed or cancelled appointments <u>without notice</u> will be charged to your account. Our missed appointment fee is <strong> {{Fee}}</strong></p><p><br></p><p><strong> {{PracticeName}} </strong> reserves the right to request patients who continually;</p><p><br></p><ol><li>Cancel appointments at short notice</li><li>Fail to attendArrive late</li><li>Are rude to our staff</li></ol><p><br></p><p>Respectfully source another dental practice.</p><p><br></p><p><strong> {{PracticeName}} </strong> strives to provide the best care possible for our patients, and keeping to a schedule is the only way we can continue to offer a quality of service to all patients.</p>",
    "SMS_ConfirmAppointment": "1",
    "SMS_AppointmentReminder": "0",
    "AppointmentPageURL": "appointment/F6164E0E29C94FECB264AD2A1B828644?pageTitle=Request%20an%20Appointment&pageDescription=Let%20your%20dentist%20know%20what%20time%20might%20suit%20you%20best%20for%20an%20appointment.%20The%20%20practice%20will%20then%20contact%20you%20to%20arrange%20a%20suitable%20appointment%20date.&showBackground=true&showContact=true&showHeader=true&showPracticeName=true&contactColor=ffffff&contactBackgroundColor=1b8bdd",
    "Default_Buffers_Pre": "0",
    "Default_Buffers_Post": "0",
    "Appointment_Time_Step": "15",
    "Appointment_Limit_To_Days": "10",
    "Appointment_Cancelling_Fee": "12",
    "AssistBrrowerAtPOS_List": "018E6A3E875D44B78043D31ADE8AD174|0E55AC9123CA4D60A30B30BE58625C80|6D55D700BA92014EAD572E48628E6AC7|CC0DA1D9B295664A9F5BED2A1D3335B3|1E23D0F0A443314CB0714973D7A4F0E9|D30962837448644287582000DD474A4B|16D00B9E0622D94A9C4A49724ABF6CA7|E08C8C4F3BD4574C8FF03884A1B130F1|486777CE07E4D14FA759C2A9EEDCD603",
    "Allow_AssistBrrowerAtPOS": "1",
    "TimeZoneCode": "Australia/Perth",
    "TimeZoneValue": "8",
    "Terminal_Code": "SMIL",
    "HealthHistoryEnabled.Inherited": "N",
    "HealthHistoryEnabled.Overridden": "Y",
    "HealthHistoryEnabled.Effective": "N",
    "Health_History_Update_Duration": "100",
    "Health_History_Auto_Update": "1"
  };

  mobileQuery: MediaQueryList;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  private _mobileQueryListener: () => void;

  private fragment: string;

  public navIsFixed: boolean = false;



  static header = new EventEmitter();

  constructor(
    @Inject(DOCUMENT) private document: any, @Inject(WINDOW) private window,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private _router: Router,
    private route: ActivatedRoute
  ) {
    smoothscroll.polyfill();

    _router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = _router.parseUrl(_router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView({ block: "start", behavior: "smooth" }); }
        }
      }
    });

    this.mobileQuery = media.matchMedia('(max-width: 1500px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  ngOnInit() {
    AppState.setDrift.emit('consumerPublicDrift')
    AOS.init();

    MainComponent.header.subscribe(res => {
      if (res) {
        this.merchant = res;
      }
    })
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollPos = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (scrollPos > 80) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && scrollPos < 10) {
      this.navIsFixed = false;
    }
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}

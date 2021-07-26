import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {


  codes = [
    {
      "code": "angel-align",
      "label": "Angel Aligner",
      "path": "src/app/pages/product/landing-pages/angel-aligner"
    },
    {
      "code": "boutique",
      "label": "Boutique",
      "path": "src/app/pages/product/landing-pages/boutique"
    },
    {
      "code": "clear-correct",
      "label": "Clear Correct",
      "path": "src/app/pages/product/landing-pages/clear-correct"
    },
    {
      "code": "clear-path",
      "label": "Clear Path",
      "path": "src/app/pages/product/landing-pages/clear-path"
    },
    {
      "code": "coronavirus-dos-and-donts",
      "label": "Coronavirus dos and donts",
      "path": "src/app/pages/product/landing-pages/coronavirus-dos-and-donts"
    },
    {
      "code": "getting-started-coordinator",
      "label": "Getting Started -Coordinator",
      "path": "src/app/pages/product/landing-pages/getting-started-coordinator"
    },
    {
      "code": "getting-started-home",
      "label": "Getting Started -start page",
      "path": "src/app/pages/product/landing-pages/getting-started-home"
    },

    {
      "code": "getting-started-dental",
      "label": "Getting Started -Dental",
      "path": "src/app/pages/product/landing-pages/getting-started-dental"
    },
    {
      "code": "getting-started-marketing",
      "label": "Getting Started -Marketing",
      "path": "src/app/pages/product/landing-pages/getting-started-marketing"
    },
    {
      "code": "getting-started-practice-manager",
      "label": "Getting Started -Practice manager",
      "path": "src/app/pages/product/landing-pages/getting-started-practice-manager"
    },

    {
      "code": "inman",
      "label": "Inman",
      "path": "src/app/pages/product/landing-pages/inman"
    },
    {
      "code": "invisalign",
      "label": "Invisalign",
      "path": "src/app/pages/product/landing-pages/invisalign"
    },

    {
      "code": "infectioncontrol",
      "label": "Consumer - Coronavirus information",
      "path": "src/app/pages/product/landing-pages/invisalign"
    },
    

    {
      "code": "iveritakehome",
      "label": "Iveri take home",
      "path": "src/app/pages/product/landing-pages/iveri-take-home"
    },
    {
      "code": "kortakehome",
      "label": "Kor take home",
      "path": "src/app/pages/product/landing-pages/kor-take-home"
    },
    {
      "code": "lanap",
      "label": "Lanap protocol",
      "path": "src/app/pages/product/landing-pages/lanap-protocol"
    },
    {
      "code": "opalescence",
      "label": "Opalescence",
      "path": "src/app/pages/product/landing-pages/opalescence"
    },

    {
      "code": "oventus",
      "label": "Oventus",
      "path": "src/app/pages/product/landing-pages/oventus"
    },
    {
      "code": "philipszoominoffice",
      "label": "Philips zoom in office",
      "path": "src/app/pages/product/landing-pages/philips-zoom-in-office"
    },

    {
      "code": "pola",
      "label": "Pola",
      "path": "src/app/pages/product/landing-pages/pola"
    },


    {
      "code": "simpli5",
      "label": "Simpli ",
      "path": "src/app/pages/product/landing-pages/simpli5"
    },
    {
      "code": "smilestyler",
      "label": "Smile styler",
      "path": "src/app/pages/product/landing-pages/smilestyler"
    },
    {
      "code": "somnodent",
      "label": "Somnodent",
      "path": "src/app/pages/product/landing-pages/somnodent"
    },
    {
      "code": "suresmile",
      "label": "Sure smile",
      "path": "src/app/pages/product/landing-pages/suresmile"
    },

    {
      "code": "spark",
      "label": "Spark Aligner",
      "path": "src/app/pages/product/landing-pages/spark"
    },



    {
      "code": "truline",
      "label": "Truline",
      "path": "src/app/pages/product/landing-pages/truline"
    },

    

    {
      "code": "partner-let-get-started",
      "label": "Partner Page - Let get started",
      "path": "src/app/pages/product/landing-pages/partner-let-get-started"
    },

    

    {
      "code": "partner-pricing-calculator",
      "label": "Partner Page - Pricing - Calculator",
      "path": "src/app/pages/product/landing-pages/partner-pricing-calculator"
    },
    {
      "code": "partner-pricing-free",
      "label": "Partner Page - Pricing - Free",
      "path": "src/app/pages/product/landing-pages/partner-pricing-free"
    },
    {
      "code": "partner-pricing-general",
      "label": "Partner page - Pricing",
      "path": "src/app/pages/product/landing-pages/partner-pricing-general"
    },
    {
      "code": "partner-pricing-plans",
      "label": "Partner Page - Pricing - Compare Plans",
      "path": "src/app/pages/product/landing-pages/partner-pricing-plans"
    },
    {
      "code": "consumer-communication-introduction",
      "label": "Consumer-Communication introduction",
      "path": "src/app/pages/product/landing-pages/consumer-communication-introduction"
    },
    {
      "code": "consumer-smile-right",
      "label": "Consumer-Getting your smile right",
      "path": "src/app/pages/product/landing-pages/consumer-smile-right"
    },
    {
      "code": "consumer-we-listened",
      "label": "Consumer-We listened",
      "path": "src/app/pages/product/landing-pages/consumer-we-listened"
    },



    {
      "code": "dentist-general-info",
      "label": "Dentist general info",
      "path": "src/app/pages/product/landing-pages/dentist-general-info"
    },
    {
      "code": "hygiene-bad-breath",
      "label": "Hygiene Bad breath",
      "path": "src/app/pages/product/landing-pages/hygiene-bad-breath"
    },
    {
      "code": "hygiene-confirmation",
      "label": "Hygiene Confirmation",
      "path": "src/app/pages/product/landing-pages/hygiene-confirmation"
    },
    {
      "code": "hygiene-dental-tips",
      "label": "Hygiene-Dental tips",
      "path": "src/app/pages/product/landing-pages/hygiene-dental-tips"
    },
    {
      "code": "hygiene-periodontist",
      "label": "Hygiene Periodontist",
      "path": "src/app/pages/product/landing-pages/hygiene-periodontist"
    },
    {
      "code": "hygiene-recal1",
      "label": "Hygiene Recal1",
      "path": "src/app/pages/product/landing-pages/hygiene-recal1"
    },
    {
      "code": "hygiene-recal2",
      "label": "Hygiene Recal2",
      "path": "src/app/pages/product/landing-pages/hygiene-recal2"
    },
    
  ]

  filter

  constructor() { }

  ngOnInit() {

  }

}

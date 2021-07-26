import { Component, EventEmitter, Optional, Inject, Input, OnInit, Output, SimpleChanges } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UtilsClass } from "../../shared/components/classes/utils";
import { AppState } from "app/app.service";
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { NotifyAppCompnent } from "app/shared/components/classes/notify-app-compnent";
import { ProductModalComponent } from "../product-modal";

@Component({
	selector: "app-product-calculator",
	templateUrl: "./product-calculator.component.html",
	styleUrls: ["./product-calculator.component.css"],
	animations: [
		trigger('ngIfAnimation', [
			transition('void => *', [
				query('.animate', style({ opacity: 0 }), { optional: true }),
				query('.animate', stagger('100ms', [
					animate('0.4s ease-out', keyframes([
						style({ opacity: 0, offset: 0, height: 0 }),
						// style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
						style({ opacity: 1, offset: 1.0, height: '*' }),
					]))]), { optional: true }),
			]),
			transition('* => void', [
				query('.animate', style({ opacity: 1 }), { optional: true }),
				query('.animate', stagger('100ms', [
					animate('0.4s ease-in', keyframes([
						style({ opacity: 1, offset: 0, height: '*' }),
						// style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
						style({ opacity: 0, offset: 1.0, height: 0 }),
					]))]), { optional: true }),
			])
		])
	]
})
export class ProductCalculatorComponent implements OnInit {
	@Input()
	ProductID="111";

	@Input()
	amount = null;

	@Input()
	fixedAmount = null;

	@Input()
	duration = null;

	durationInput = null;
	amountInput = null;

	@Input()
	isLandingPage = false;

	@Input()
	frequency = null;


	@Input()
	frequencyOld = null;


	@Input()
	promoCode = null;

	@Input()
	patientContribution = null;

	@Output()
	estimation: EventEmitter<any> = new EventEmitter()

	@Output()
	close: EventEmitter<any> = new EventEmitter()

	@Output()
	proceedEvent: EventEmitter<any> = new EventEmitter()


	@Input()
	isTop = false;

	@Input()
	retailInfo = false;

	isProceedButton = false;

	@Input()
	textVisible = true;

	@Input()
	dentalInfo = false;

	_retailInfo = false;
	_dentalInfo = false;
	_moreInfo = false;

	@Input()
	moreInfo = false;


	@Input()
	displayTerms = false;

	@Input()
	displayDeposit = false;



	@Input()
	dynamicAmount = true;

	@Input()
	isPatientContribution = true;

	@Input()
	isFrequency = true;

	@Input()
	displayDescription = true;

	@Input()
	viewProduct = false;

	isPaymentPlan = false;

	depositInc = false;
	isModal = false;

	util = new UtilsClass();

	productObject;
	durationObject = null;
	estimateObject = null;

	frequencys = [];

	minDuration = 0;
	maxDuration = 0;
	defaultDuration = 0;

	payLoad;
	constructor(
		private appService: AppState,
		private dialog: MatDialog,
		@Optional()
		@Inject(MAT_DIALOG_DATA)
		public data: any
	) {
		if (data) {

			this.isModal = true;

			this.ProductID = data.ProductID

			if (data.amount)
				this.amount = data.amount

			if (data.duration)
				this.duration = data.duration

			if (data.frequency) {
				this.frequency = data.frequency
				this.frequencyOld = this.frequency;


			}


			if (data.promoCode)
				this.promoCode = data.promoCode

			if (data.patientContribution)
				this.patientContribution = data.patientContribution

			if (data.isProceedButton != null)
				this.isProceedButton = data.isProceedButton

			if (data.isTop != null)
				this.isTop = data.isTop

			if (data.retailInfo != null)
				this.retailInfo = data.retailInfo

			if (data.dentalInfo != null)
				this.dentalInfo = data.dentalInfo

			if (data.textVisible != null)
				this.textVisible = data.textVisible


			if (data.moreInfo != null)
				this.moreInfo = data.moreInfo

			if (data.dynamicAmount != null)
				this.dynamicAmount = data.dynamicAmount

			if (data.displayTerms != null)
				this.displayTerms = data.displayTerms

			if (data.isFrequency != null)
				this.displayTerms = data.isFrequency



			if (data.displayDeposit != null)
				this.displayDeposit = data.displayDeposit


			if (data.isPatientContribution != null)
				this.isPatientContribution = data.isPatientContribution

			if (data.displayDescription != null)
				this.displayDescription = data.displayDescription

			if (data.viewProduct != null)
				this.viewProduct = data.viewProduct

			if (data.fixedAmount)
				this.fixedAmount = data.fixedAmount


			this.checkContribution();

			this.applyCalculator();
			this.validateMoreInfo();
		}
	}

	ngOnInit() {



		if (this.ProductID) {
			this.appService.getProdDetails(this.ProductID).subscribe(res => {
				if (res) {
					this.productObject = res;

					if (!this.amount && !this.fixedAmount) {
						this.amount = this.productObject['Parameter.MinLoanValue']
					}

					this.checkContribution();

					this.applyCalculator();
					this.validateMoreInfo();
				}



			})
		}

	}
	applyCalculator() {


		if (Number(this.frequency) == 0) {
			this.frequency = null;
			this.frequencyOld = this.frequency;
		}

		if (Number(this.duration) == 0) {
			this.duration = null;
		}

		if (Number(this.amount) == 0) {
			this.amount = null;
		}

		if (this.amount && !this.duration)
			this.calculate("amount")
		else if (this.amount && this.duration)
			this.calculate("duration")
		else
			this.calculate("amount")


	}
	checkContribution() {
		if (this.fixedAmount) {
			this.amount = this.fixedAmount;
		}
		if (this.isPatientContribution == true && this.patientContribution && this.patientContribution != 0) {
			this.depositInc = true
		}
	}

	ngOnChanges(changes: SimpleChanges) {




		if (changes.fixedAmount && changes.fixedAmount.previousValue != this.fixedAmount && !changes.fixedAmount.firstChange) {
			this.amount = this.fixedAmount;
			if (Number(this.frequency) == 0) {
				this.frequency = null;
				this.frequencyOld = this.frequency;
			}

			if (Number(this.duration) == 0) {
				this.duration = null;
			}

			this.calculate("amount")
			this.validateMoreInfo();

		}

		else if (
			changes.ProductID && changes.ProductID.previousValue != this.ProductID && !changes.ProductID.firstChange

		) {


			this.appService.getProdDetails(this.ProductID).subscribe(res => {
				if (res) {
					this.productObject = res;

					if (!this.amount) {
						this.amount = Number(this.productObject['Parameter.MinLoanValue'])
					}

				}

				if (Number(this.frequency) == 0) {
					this.frequency = null;
					this.frequencyOld = this.frequency;
				}

				if (Number(this.duration) == 0) {
					this.duration = null;
				}


				this.calculate("product")
				this.validateMoreInfo();

			})
		}
		else if (
			(changes.amount && changes.amount.previousValue != this.amount && !changes.amount.firstChange)
			|| (changes.patientContribution && changes.patientContribution.previousValue != this.patientContribution
				&& !changes.patientContribution.firstChange
			)
		) {
			if (Number(this.frequency) == 0) {
				this.frequency = null;
				this.frequencyOld = this.frequency;
			}

			if (Number(this.duration) == 0) {
				this.duration = null;
			}

			this.calculate("amount")
			this.validateMoreInfo();

		}
	}

	openProductViewDialog() {
		let ref = this.dialog.open(ProductModalComponent, {
			data: this.ProductID,
			width: "750px",
			//panelClass: "noCard"
		});
		ref.componentInstance.close.subscribe((res) => {
			if (res == true) {
				ref.close();
			}
		});
	}

	selectAmount(amount) {
		if (amount) {
			this.amount = amount;
			this.patientContribution = 0;

			if (this.productObject) {
				if (
					this.productObject["Parameter.MinLoanValue"] &&
					this.productObject["Parameter.MaxLoanValue"] &&
					(this.amount > Number(this.productObject["Parameter.MaxLoanValue"]) ||
						this.amount < Number(this.productObject["Parameter.MinLoanValue"]))
				) {
					NotifyAppCompnent.displayToastr(
						"warning",
						"Warning",
						"The " +
						this.productObject["MarketingLabel"] +
						" Product supports only an Amount between " +
						Number(this.productObject["Parameter.MinLoanValue"]) +
						" And " +
						Number(this.productObject["Parameter.MaxLoanValue"]) +
						" <br> Please choose another product from the list"
					);
					this.amount = this.productObject['Parameter.MinLoanValue']
				} else if (
					this.productObject["Parameter.MinLoanValue"] &&
					this.productObject["Parameter.MaxLoanValue"] &&
					(this.amount <= Number(this.productObject["Parameter.MaxLoanValue"]) ||
						this.amount >= Number(this.productObject["Parameter.MinLoanValue"]))
				) {
					this.calculate("amount");
				}
			}
		}
	}

	changeFrequency() {

		if (!this.frequencyOld) {
			this.frequencyOld = this.frequency;
		}

		if (this.frequencyOld) {

			this.appService.calculDuration(this.duration, this.frequencyOld, this.frequency).subscribe(res => {
				if (res) {
					this.frequencyOld = this.frequency;


					if (this.frequency == 1) {

						if (this.durationObject && this.durationObject["Weeks.Min"] && res < this.durationObject["Weeks.Min"]) {

							this.duration = Number(this.durationObject["Weeks.Min"]);
						}
						else if (this.durationObject && this.durationObject["Weeks.Max"] && res > this.durationObject["Weeks.Max"]) {
							this.duration = Number(this.durationObject["Weeks.Max"]);
						}
						else {
							this.duration = res;
						}
					}
					else if (this.frequency == 2) {

						if (this.durationObject && this.durationObject["Fortnights.Min"] && res < this.durationObject["Fortnights.Min"]) {

							this.duration = Number(this.durationObject["Fortnights.Min"]);
						}
						else if (this.durationObject && this.durationObject["Fortnights.Max"] && res > this.durationObject["Fortnights.Max"]) {
							this.duration = Number(this.durationObject["Fortnights.Max"]);
						}
						else {
							this.duration = res;
						}
					}
					else if (this.frequency == 4) {

						if (this.durationObject && this.durationObject["Months.Min"] && res < this.durationObject["Months.Min"]) {

							this.duration = Number(this.durationObject["Months.Min"]);
						}
						else if (this.durationObject && this.durationObject["Months.Max"] && res > this.durationObject["Months.Max"]) {
							this.duration = Number(this.durationObject["Months.Max"]);
						}
						else {
							this.duration = res;
						}
					}
					else {
						this.duration = res;
					}




					this.calculate("duration");
				}
				else {
					this.frequencyOld = this.frequency
					this.calculate("freq");
				}

			})

		}
		else {
			this.frequencyOld = this.frequency
			this.calculate("freq");
		}

	}

	selectDuration(duration) {
		if (duration) {


			this.duration = duration;
			this.calculate("duration");
		}

	}

	changePatientContribution() {
		this.calculate("amount");
	}

	moreInfoEvent() {
		if (this._moreInfo == true) {
			this.retailInfo = true;
			this.dentalInfo = true;
		}
		else {

			this.retailInfo = this._retailInfo;
			this.dentalInfo = this._dentalInfo;
		}

	}

	validateMoreInfo() {


		if (this.dentalInfo == true && this.retailInfo == true) {
			this.moreInfo = false
		}
		else {
			this._moreInfo = false;
		}

		this._retailInfo = this.retailInfo;
		this._dentalInfo = this.dentalInfo;





	}
	changeInterestRate() {
		this.calculate("rate");
	}

	calculate(type) {
		let payLoad;


		if (type == "amount")
			payLoad = {
				amount: this.amount,
				frequency: this.frequency || null,
				promoCode: this.promoCode,
				patientContribution: this.patientContribution || null
			}

		else if (type == "product")
			payLoad = {
				amount: this.amount,
				frequency: this.frequency || null,
				promoCode: this.promoCode,
				patientContribution: this.patientContribution || null
			}
		else if (type == "freq") {
			payLoad = {
				amount: this.amount,
				frequency: this.frequency || 4,
				promoCode: this.promoCode,
				patientContribution: this.patientContribution || null
			}
		}
		else if (type == "duration") {
			payLoad = {
				amount: this.amount,
				duration: this.duration,
				frequency: this.frequency || 4,
				promoCode: this.promoCode,
				patientContribution: this.patientContribution || null
			}
		}


		else if (type == "rate") {
			payLoad = {
				amount: this.amount,
				duration: this.duration,
				frequency: this.frequency || 4,
				promoCode: this.promoCode,
				interestRate: null,
				patientContribution: this.patientContribution || null
			}
		}


		if (this.depositInc == true && this.patientContribution) {
			payLoad.patientContribution = this.patientContribution;
		}
		else if (this.depositInc == false) {
			payLoad.patientContribution = null;
		}




		if (payLoad.amount && this.ProductID && (JSON.stringify(payLoad) != JSON.stringify(this.payLoad) || type == "product")) {


			this.payLoad = payLoad;
			this.appService.getCalculatorCustomer(this.ProductID, payLoad).subscribe((res) => {

				if (res && res.product && res.duration && res.estimate) {
					this.productObject = res.product;
					this.durationObject = res.duration;
					this.estimateObject = res.estimate;

					if (this.frequencys.length <= 0)
						this.frequencys = this.productObject["Parameter.PaymentFrequencies"].split("-");

					if (!this.frequency)
						this.frequency = this.durationObject["DefaultFrequency.Code"];

					this.frequencyOld = this.frequency;

					if (this.frequency == 1) {
						this.minDuration = Number(this.durationObject["Weeks.Min"]);
						this.maxDuration = Number(this.durationObject["Weeks.Max"]);
						if (!this.duration || type != "duration" || this.duration < this.minDuration || this.duration > this.maxDuration)
							this.duration = Number(this.durationObject["Weeks.Default"]);

					}
					else if (this.frequency == 2) {
						this.minDuration = Number(this.durationObject["Fortnights.Min"]);
						this.maxDuration = Number(this.durationObject["Fortnights.Max"]);
						if (!this.duration || type != "duration" || this.duration < this.minDuration || this.duration > this.maxDuration)
							this.duration = Number(this.durationObject["Fortnights.Default"]);

					}
					else if (this.frequency == 4) {
						this.minDuration = Number(this.durationObject["Months.Min"]);
						this.maxDuration = Number(this.durationObject["Months.Max"]);
						if (!this.duration || type != "duration" || this.duration < this.minDuration || this.duration > this.maxDuration)
							this.duration = Number(this.durationObject["Months.Default"]);

					}



					this.isPaymentPlan = false;

					if (this.productObject && this.productObject["SubType"] && this.productObject["SubType"] == "Payment Plan") {
						this.isPaymentPlan = true;
					}


					this.amountInput = this.amount;
					this.durationInput = this.duration;
					this.proceed();

				}

			})
		}
	}
	durationLabel(value) {
		// let value = this.frequency;

		if (value == 1) {
			return "Weekly"
		}

		if (value == 2) {
			return "Fortnightly"
		}

		if (value == 4) {
			return "Monthly"
		}
	}

	timeLabel() {

		let value = this.frequency;

		if (value == 1) {
			return "Week(s)"
		}

		if (value == 2) {
			return "Fortnight(s)"
		}

		if (value == 4) {
			return "Month(s)"
		}
	}

	formatTermsAndConditions(text) {
		let formattedText = "";

		formattedText = this.util.formatTermsAndConditions(text);
		return formattedText;
	}

	toNumber(s) {
		if (s)
			return Number(s)
		else
			return 0
	}

	proceed() {

		if (this.amount && this.ProductID && this.duration) {

			this.estimation.emit({
				ProductID: this.ProductID,
				amount: this.amount,
				isPaymentPlan: this.isPaymentPlan,
				duration: this.duration,
				frequency: this.frequency,
				promoCode: this.promoCode,
				patientContribution: this.patientContribution,
			})
		}

	}

	closePage() {

		this.close.emit(true)
	}

	changeContribution() {

		this.calculate("duration")
	}

	proceedButton() {


		if (this.amount && this.ProductID && this.duration) {

			this.proceedEvent.emit({
				ProductID: this.ProductID,
				amount: this.amount,
				isPaymentPlan: this.isPaymentPlan,
				duration: this.duration,
				frequency: this.frequency,
				promoCode: this.promoCode,
				patientContribution: this.patientContribution,
			})
		}

	}
}

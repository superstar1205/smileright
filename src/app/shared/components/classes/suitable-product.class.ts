export class SuitableProductClass {
    amount: number;
    merchantKey: string;
    maxDuration: number;
    minDuration: number;
    maxDurationFrequency: number;
    minDurationFrequency: number;
    fields: string;
    invitation_id: string;
  
    constructor(amount, merchantKey = null) {
      this.amount = amount;
      this.merchantKey = merchantKey;
    }
  }
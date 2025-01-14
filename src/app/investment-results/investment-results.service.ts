import { Injectable, signal } from '@angular/core';
import {
  type AnnualData,
  type CalculateData,
} from './investment-results.module';

@Injectable({ providedIn: 'root' })
export class InvestmentResultsService {
  private annualData = signal<AnnualData[]>([]);

  calculateData({
    annualInvestment,
    duration,
    expectedReturn,
    initialInvestment,
  }: CalculateData) {
    const newAnnualData: AnnualData[] = [];

    let currentInvestment = initialInvestment;
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = currentInvestment * (expectedReturn / 100);
      currentInvestment += interestEarnedInYear + annualInvestment;
      totalInterest += interestEarnedInYear;

      newAnnualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: currentInvestment,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.annualData.set(newAnnualData);
  }

  get getData() {
    return this.annualData.asReadonly();
  }
}

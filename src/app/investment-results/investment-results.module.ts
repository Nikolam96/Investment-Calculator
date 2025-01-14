export type AnnualData = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};

export type CalculateData = {
  duration: number;
  initialInvestment: number;
  expectedReturn: number;
  annualInvestment: number;
};

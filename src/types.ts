export interface PersonalData {
  annualSalary: number;
  businessIncome: number;
  savingsInterest: number;
  otherInterest: number;
  otherIncome: number;
  rentalIncome: number;
  rentalLoanInterest: number;
}

export interface DeductionsData {
  taxSavingInvestment: number;
  selfOccupiedLoanInterest: number;
  educationLoanInterest: number;
  annualRent: number;
  annualBasicDA: number;
  healthInsuranceSelf: number;
  healthInsuranceParents: number;
  npsContribution: number;
  employerNpsContribution: number;
  donations: number;
}

export interface TaxSummary {
  totalIncome: number;
  deductions: number;
  taxableIncome: number;
  taxDue: number;
}
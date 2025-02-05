import { PersonalData, DeductionsData, TaxSummary } from '../types';

export const calculateTax = (
  personalData: PersonalData,
  deductionsData: DeductionsData,
  regime: 'old' | 'new'
): TaxSummary => {
  const totalIncome =
    personalData.annualSalary +
    personalData.businessIncome +
    personalData.savingsInterest +
    personalData.otherInterest +
    personalData.otherIncome +
    personalData.rentalIncome;

  let deductions = 0;
  let taxableIncome = totalIncome;

  if (regime === 'old') {
    // Calculate deductions for old regime
    deductions =
      Math.min(deductionsData.taxSavingInvestment, 150000) +
      Math.min(deductionsData.selfOccupiedLoanInterest, 200000) +
      deductionsData.educationLoanInterest +
      Math.min(
        Math.min(deductionsData.annualRent - 0.1 * deductionsData.annualBasicDA, 60000),
        deductionsData.annualRent
      ) +
      Math.min(deductionsData.healthInsuranceSelf, 25000) +
      Math.min(deductionsData.healthInsuranceParents, 50000) +
      Math.min(deductionsData.npsContribution, 50000) +
      Math.min(deductionsData.employerNpsContribution, 0.1 * personalData.annualSalary) +
      Math.min(deductionsData.donations, 10000);

    taxableIncome = Math.max(totalIncome - deductions, 0);
  }

  let tax = 0;

  if (regime === 'old') {
    // Old regime tax calculation
    if (taxableIncome > 1000000) {
      tax += (taxableIncome - 1000000) * 0.3;
      tax += 500000 * 0.2;
      tax += 250000 * 0.05;
    } else if (taxableIncome > 500000) {
      tax += (taxableIncome - 500000) * 0.2;
      tax += 250000 * 0.05;
    } else if (taxableIncome > 250000) {
      tax += (taxableIncome - 250000) * 0.05;
    }
  } else {
    // New regime tax calculation
    if (taxableIncome > 1500000) {
      tax += (taxableIncome - 1500000) * 0.3;
      tax += 300000 * 0.2;
      tax += 300000 * 0.15;
      tax += 300000 * 0.1;
      tax += 300000 * 0.05;
    } else if (taxableIncome > 1200000) {
      tax += (taxableIncome - 1200000) * 0.2;
      tax += 300000 * 0.15;
      tax += 300000 * 0.1;
      tax += 300000 * 0.05;
    } else if (taxableIncome > 900000) {
      tax += (taxableIncome - 900000) * 0.15;
      tax += 300000 * 0.1;
      tax += 300000 * 0.05;
    } else if (taxableIncome > 600000) {
      tax += (taxableIncome - 600000) * 0.1;
      tax += 300000 * 0.05;
    } else if (taxableIncome > 300000) {
      tax += (taxableIncome - 300000) * 0.05;
    }
  }

  // Add 4% cess
  tax += tax * 0.04;

  return {
    totalIncome,
    deductions,
    taxableIncome,
    taxDue: Math.round(tax),
  };
};
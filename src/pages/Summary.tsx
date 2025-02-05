import React from 'react';
import { PersonalData, DeductionsData, TaxSummary } from '../types';
import { calculateTax } from '../utils/taxCalculator';

interface SummaryProps {
  personalData: PersonalData;
  deductionsData: DeductionsData;
}

const Summary: React.FC<SummaryProps> = ({ personalData, deductionsData }) => {
  const oldRegimeTax = calculateTax(personalData, deductionsData, 'old');
  const newRegimeTax = calculateTax(personalData, deductionsData, 'new');

  const betterRegime = oldRegimeTax.taxDue <= newRegimeTax.taxDue ? 'old' : 'new';

  // Calculate potential tax savings for each category
  const potential80CSavings = Math.max(0, 150000 - deductionsData.taxSavingInvestment);
  const potentialHealthSavings = Math.max(0, 25000 - deductionsData.healthInsuranceSelf);
  const potentialParentHealthSavings = Math.max(0, 50000 - deductionsData.healthInsuranceParents);
  const potentialNPSSavings = Math.max(0, 50000 - deductionsData.npsContribution);

  // Calculate approximate tax benefit (assuming 30% tax bracket)
  const estimatedTaxBenefit = (potential80CSavings + potentialHealthSavings + potentialParentHealthSavings + potentialNPSSavings) * 0.3;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Tax Summary</h1>
      
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left py-2">COMPONENT</th>
              <th className="text-right py-2">OLD TAX REGIME</th>
              <th className="text-right py-2">NEW TAX REGIME</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Total Income</td>
              <td className="text-right">₹{oldRegimeTax.totalIncome.toLocaleString()}</td>
              <td className="text-right">₹{newRegimeTax.totalIncome.toLocaleString()}</td>
            </tr>
            <tr>
              <td className="py-2">Exemptions & Deductions</td>
              <td className="text-right">₹{oldRegimeTax.deductions.toLocaleString()}</td>
              <td className="text-right">₹{newRegimeTax.deductions.toLocaleString()}</td>
            </tr>
            <tr>
              <td className="py-2">Taxable Income</td>
              <td className="text-right">₹{oldRegimeTax.taxableIncome.toLocaleString()}</td>
              <td className="text-right">₹{newRegimeTax.taxableIncome.toLocaleString()}</td>
            </tr>
            <tr className="font-bold">
              <td className="py-2">Tax Due</td>
              <td className="text-right">₹{oldRegimeTax.taxDue.toLocaleString()}</td>
              <td className="text-right">₹{newRegimeTax.taxDue.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Recommendation</h2>
        <p className="text-lg">
          Based on your income and deductions, the{' '}
          <span className="font-bold text-indigo-600">
            {betterRegime.toUpperCase()} TAX REGIME
          </span>{' '}
          is more beneficial for you.
        </p>
        <p className="mt-2">
          You can save ₹
          {Math.abs(oldRegimeTax.taxDue - newRegimeTax.taxDue).toLocaleString()} by
          choosing the {betterRegime} regime.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Investment Recommendations</h2>
        <p className="text-indigo-600 font-semibold mb-4">
          Potential Additional Tax Savings: ₹{Math.round(estimatedTaxBenefit).toLocaleString()}
        </p>
        
        <div className="space-y-6">
          {potential80CSavings > 0 && (
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-lg mb-2">Section 80C Investment Opportunities</h3>
              <p className="mb-2">
                You can still invest ₹{potential80CSavings.toLocaleString()} under section 80C.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Recommended Options:</h4>
                <ul className="list-disc pl-6">
                  <li>
                    <span className="font-medium">PPF (Public Provident Fund)</span>
                    <p className="text-sm text-gray-600">15-year scheme with 7.1% interest rate, completely tax-free returns</p>
                  </li>
                  <li>
                    <span className="font-medium">ELSS Mutual Funds</span>
                    <p className="text-sm text-gray-600">3-year lock-in period, potential for higher returns through equity markets</p>
                  </li>
                  <li>
                    <span className="font-medium">Tax-Saving Fixed Deposits</span>
                    <p className="text-sm text-gray-600">5-year lock-in period, guaranteed returns around 6.5-7%</p>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {potentialHealthSavings > 0 && (
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-lg mb-2">Health Insurance (Section 80D)</h3>
              <p className="mb-2">
                Increase your health insurance coverage by ₹{potentialHealthSavings.toLocaleString()} to maximize deductions.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Benefits:</h4>
                <ul className="list-disc pl-6">
                  <li>Tax deduction up to ₹25,000 for self and family</li>
                  <li>Additional coverage for critical illnesses</li>
                  <li>No-claim bonus and cumulative bonus benefits</li>
                </ul>
              </div>
            </div>
          )}

          {potentialNPSSavings > 0 && (
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold text-lg mb-2">National Pension Scheme (NPS)</h3>
              <p className="mb-2">
                Additional investment potential: ₹{potentialNPSSavings.toLocaleString()}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc pl-6">
                  <li>Additional tax benefit under Section 80CCD(1B)</li>
                  <li>Professional fund management with diverse investment options</li>
                  <li>Low-cost retirement solution with market-linked returns</li>
                </ul>
              </div>
            </div>
          )}

          <div className="p-4 border rounded-lg">
            <h3 className="font-bold text-lg mb-2">Government Schemes</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Sukanya Samriddhi Yojana</h4>
                <p className="text-sm text-gray-600">For girl child, current interest rate: 7.6% p.a., tax-free returns</p>
              </div>
              <div>
                <h4 className="font-semibold">Senior Citizens Savings Scheme</h4>
                <p className="text-sm text-gray-600">For ages 60+, current interest rate: 8.2% p.a., quarterly payouts</p>
              </div>
              <div>
                <h4 className="font-semibold">Post Office Monthly Income Scheme</h4>
                <p className="text-sm text-gray-600">Regular income option, current interest rate: 7.1% p.a.</p>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-bold text-lg mb-2">Recommended Articles</h3>
            <div className="space-y-2">
              <a href="https://cleartax.in/s/80c-80-deductions" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:underline">
                Complete Guide to Section 80C Deductions
              </a>
              <a href="https://www.valueresearchonline.com/stories/50759/elss-vs-ppf-which-is-better/" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:underline">
                ELSS vs PPF: Making the Right Choice
              </a>
              <a href="https://www.livemint.com/money/personal-finance/nps-vs-mutual-funds-which-is-better-for-retirement/" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:underline">
                NPS vs Mutual Funds for Retirement Planning
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
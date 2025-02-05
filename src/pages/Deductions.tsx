import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import { DeductionsData } from '../types';

interface DeductionsProps {
  data: DeductionsData;
  setData: (data: DeductionsData) => void;
}

const Deductions: React.FC<DeductionsProps> = ({ data, setData }) => {
  const navigate = useNavigate();

  const handleChange = (field: keyof DeductionsData) => (value: number) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Deductions & Exemptions</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <InputField
          label="Tax Saving Investment (80C)"
          value={data.taxSavingInvestment}
          onChange={handleChange('taxSavingInvestment')}
          name="taxSavingInvestment"
        />
        <InputField
          label="Interest paid on self occupied home loan"
          value={data.selfOccupiedLoanInterest}
          onChange={handleChange('selfOccupiedLoanInterest')}
          name="selfOccupiedLoanInterest"
        />
        <InputField
          label="Interest paid on Educational Loan"
          value={data.educationLoanInterest}
          onChange={handleChange('educationLoanInterest')}
          name="educationLoanInterest"
        />
        <InputField
          label="Annual Rent Paid"
          value={data.annualRent}
          onChange={handleChange('annualRent')}
          name="annualRent"
        />
        <InputField
          label="Annual Basic + DA"
          value={data.annualBasicDA}
          onChange={handleChange('annualBasicDA')}
          name="annualBasicDA"
        />
        <InputField
          label="Health Insurance Self"
          value={data.healthInsuranceSelf}
          onChange={handleChange('healthInsuranceSelf')}
          name="healthInsuranceSelf"
        />
        <InputField
          label="Health Insurance Parents"
          value={data.healthInsuranceParents}
          onChange={handleChange('healthInsuranceParents')}
          name="healthInsuranceParents"
        />
        <InputField
          label="NPS Contribution 80CCD(1)"
          value={data.npsContribution}
          onChange={handleChange('npsContribution')}
          name="npsContribution"
        />
        <InputField
          label="Employer contribution to NPS Section 80CCD(2)"
          value={data.employerNpsContribution}
          onChange={handleChange('employerNpsContribution')}
          name="employerNpsContribution"
        />
        <InputField
          label="Donations"
          value={data.donations}
          onChange={handleChange('donations')}
          name="donations"
        />
        
        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => navigate('/')}
            className="w-1/2 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Back to Income
          </button>
          <button
            onClick={() => navigate('/summary')}
            className="w-1/2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deductions;
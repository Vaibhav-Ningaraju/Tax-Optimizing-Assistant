import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import { PersonalData } from '../types';

interface IncomeProps {
  data: PersonalData;
  setData: (data: PersonalData) => void;
}

const Income: React.FC<IncomeProps> = ({ data, setData }) => {
  const navigate = useNavigate();

  const handleChange = (field: keyof PersonalData) => (value: number) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Personal Income Details</h1>
      <div className="bg-white shadow rounded-lg p-6">
      <InputField
          label="Annual Salary"
          value={data.annualSalary}
          onChange={handleChange('annualSalary')}
          name="annualSalary"
        />
        <InputField
          label="Business Income"
          value={data.businessIncome}
          onChange={handleChange('businessIncome')}
          name="businessIncome"
        />
        <InputField
          label="Savings A/C Interest"
          value={data.savingsInterest}
          onChange={handleChange('savingsInterest')}
          name="savingsInterest"
        />
        <InputField
          label="Other Interest Income"
          value={data.otherInterest}
          onChange={handleChange('otherInterest')}
          name="otherInterest"
        />
        <InputField
          label="Other Income"
          value={data.otherIncome}
          onChange={handleChange('otherIncome')}
          name="otherIncome"
        />
        <InputField
          label="Annual Rental Income"
          value={data.rentalIncome}
          onChange={handleChange('rentalIncome')}
          name="rentalIncome"
        />
        <InputField
          label="Interest paid for loans on houses on rent"
          value={data.rentalLoanInterest}
          onChange={handleChange('rentalLoanInterest')}
          name="rentalLoanInterest"
        />
        
        <div className="mt-6">
          <button
            onClick={() => navigate('/deductions')}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Next: Deductions & Exemptions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Income;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Income from './pages/Income';
import Deductions from './pages/Deductions';
import Summary from './pages/Summary';
import TaxInfo from './pages/TaxInfo';
import { PersonalData, DeductionsData } from './types';

function App() {
  const [personalData, setPersonalData] = useState<PersonalData>({
    annualSalary: 0,
    businessIncome: 0,
    savingsInterest: 0,
    otherInterest: 0,
    otherIncome: 0,
    rentalIncome: 0,
    rentalLoanInterest: 0,
  });

  const [deductionsData, setDeductionsData] = useState<DeductionsData>({
    taxSavingInvestment: 0,
    selfOccupiedLoanInterest: 0,
    educationLoanInterest: 0,
    annualRent: 0,
    annualBasicDA: 0,
    healthInsuranceSelf: 0,
    healthInsuranceParents: 0,
    npsContribution: 0,
    employerNpsContribution: 0,
    donations: 0,
  });

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Income data={personalData} setData={setPersonalData} />}
          />
          <Route
            path="/deductions"
            element={<Deductions data={deductionsData} setData={setDeductionsData} />}
          />
          <Route
            path="/summary"
            element={
              <Summary personalData={personalData} deductionsData={deductionsData} />
            }
          />
          <Route path="/tax-info" element={<TaxInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
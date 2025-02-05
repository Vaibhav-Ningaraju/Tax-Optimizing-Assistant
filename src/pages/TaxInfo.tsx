import React from 'react';

const TaxInfo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Taxation Information</h1>
      
      <div className="space-y-6">
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Old Tax Regime Slabs (FY 2023-24)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left py-2">Income Range</th>
                  <th className="text-right py-2">Tax Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Up to ₹2,50,000</td>
                  <td className="text-right">Nil</td>
                </tr>
                <tr>
                  <td>₹2,50,001 to ₹5,00,000</td>
                  <td className="text-right">5%</td>
                </tr>
                <tr>
                  <td>₹5,00,001 to ₹10,00,000</td>
                  <td className="text-right">20%</td>
                </tr>
                <tr>
                  <td>Above ₹10,00,000</td>
                  <td className="text-right">30%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">New Tax Regime Slabs (FY 2023-24)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left py-2">Income Range</th>
                  <th className="text-right py-2">Tax Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Up to ₹3,00,000</td>
                  <td className="text-right">Nil</td>
                </tr>
                <tr>
                  <td>₹3,00,001 to ₹6,00,000</td>
                  <td className="text-right">5%</td>
                </tr>
                <tr>
                  <td>₹6,00,001 to ₹9,00,000</td>
                  <td className="text-right">10%</td>
                </tr>
                <tr>
                  <td>₹9,00,001 to ₹12,00,000</td>
                  <td className="text-right">15%</td>
                </tr>
                <tr>
                  <td>₹12,00,001 to ₹15,00,000</td>
                  <td className="text-right">20%</td>
                </tr>
                <tr>
                  <td>Above ₹15,00,000</td>
                  <td className="text-right">30%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Key Deductions Available (Old Regime)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Section 80C (₹1.5 lakh)</h3>
              <p>PPF, ELSS, Life Insurance, EPF, NPS, etc.</p>
            </div>
            <div>
              <h3 className="font-bold">Section 80D (Health Insurance)</h3>
              <p>Up to ₹25,000 for self and family, additional ₹25,000 for parents</p>
            </div>
            <div>
              <h3 className="font-bold">Section 80E</h3>
              <p>Education loan interest deduction (no upper limit)</p>
            </div>
            <div>
              <h3 className="font-bold">Section 24</h3>
              <p>Home loan interest deduction up to ₹2 lakh for self-occupied property</p>
            </div>
          </div>
        </section>

        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Important Notes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Health and Education Cess of 4% is applicable on the tax amount</li>
            <li>New Tax Regime is the default regime from FY 2023-24</li>
            <li>Switching between regimes is allowed every financial year</li>
            <li>Most deductions and exemptions are not available in the New Tax Regime</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TaxInfo;
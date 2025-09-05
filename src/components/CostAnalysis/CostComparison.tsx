import React from 'react';
import { DollarSign, TrendingDown, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const CostComparison: React.FC = () => {
  const traditionalERP = {
    name: 'Traditional ERP System',
    setupCost: 7500000,
    annualCost: 1500000,
    features: [
      { name: 'Student Management', included: true },
      { name: 'Fee Collection', included: true },
      { name: 'Hostel Management', included: true },
      { name: 'Examination System', included: true },
      { name: 'Real-time Dashboard', included: true },
      { name: 'Mobile Access', included: false },
      { name: 'Cloud Storage', included: false },
      { name: 'Automatic Backups', included: false },
      { name: 'Third-party Integrations', included: false },
      { name: 'Custom Workflows', included: false },
    ],
    drawbacks: [
      'High upfront investment',
      'Long implementation time (6-12 months)',
      'Vendor lock-in',
      'Limited customization',
      'Expensive maintenance',
      'Training requirements'
    ]
  };

  const cloudSolution = {
    name: 'Cloud-Integrated ERP',
    setupCost: 200000,
    annualCost: 300000,
    features: [
      { name: 'Student Management', included: true },
      { name: 'Fee Collection', included: true },
      { name: 'Hostel Management', included: true },
      { name: 'Examination System', included: true },
      { name: 'Real-time Dashboard', included: true },
      { name: 'Mobile Access', included: true },
      { name: 'Cloud Storage', included: true },
      { name: 'Automatic Backups', included: true },
      { name: 'Third-party Integrations', included: true },
      { name: 'Custom Workflows', included: true },
    ],
    benefits: [
      'Minimal upfront investment',
      'Quick deployment (2-4 weeks)',
      'Use existing subscriptions',
      'Highly customizable',
      'Automatic updates',
      'Familiar interfaces'
    ]
  };

  const fiveYearSavings = (traditionalERP.setupCost + (traditionalERP.annualCost * 5)) - 
                         (cloudSolution.setupCost + (cloudSolution.annualCost * 5));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cost Analysis & ROI</h1>
        <p className="text-gray-600">Compare traditional ERP systems with our cloud-integrated solution</p>
      </div>

      {/* Savings Highlight */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-8 mb-8 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">💰 Potential Savings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-green-100 text-sm">5-Year Total Cost Savings</p>
              <p className="text-4xl font-bold">₹{(fiveYearSavings / 10000000).toFixed(1)}Cr</p>
            </div>
            <div>
              <p className="text-green-100 text-sm">Setup Cost Reduction</p>
              <p className="text-4xl font-bold">97%</p>
            </div>
            <div>
              <p className="text-green-100 text-sm">Annual Savings</p>
              <p className="text-4xl font-bold">₹{((traditionalERP.annualCost - cloudSolution.annualCost) / 100000).toFixed(0)}L</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Traditional ERP */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-red-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">{traditionalERP.name}</h3>
            <div className="text-red-600">
              <XCircle className="w-6 h-6" />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Setup Cost</span>
              <span className="text-2xl font-bold text-red-600">₹{(traditionalERP.setupCost / 1000000).toFixed(1)}Cr</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Annual Cost</span>
              <span className="text-xl font-bold text-red-600">₹{(traditionalERP.annualCost / 100000).toFixed(0)}L</span>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>5-Year Total:</strong> ₹{((traditionalERP.setupCost + (traditionalERP.annualCost * 5)) / 10000000).toFixed(1)}Cr
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Features</h4>
            <div className="space-y-2">
              {traditionalERP.features.map((feature, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{feature.name}</span>
                  {feature.included ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Challenges</h4>
            <div className="space-y-2">
              {traditionalERP.drawbacks.map((drawback, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{drawback}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cloud Solution */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">{cloudSolution.name}</h3>
            <div className="text-green-600">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Setup Cost</span>
              <span className="text-2xl font-bold text-green-600">₹{(cloudSolution.setupCost / 100000).toFixed(0)}L</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Annual Cost</span>
              <span className="text-xl font-bold text-green-600">₹{(cloudSolution.annualCost / 100000).toFixed(0)}L</span>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>5-Year Total:</strong> ₹{((cloudSolution.setupCost + (cloudSolution.annualCost * 5)) / 1000000).toFixed(1)}Cr
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Features</h4>
            <div className="space-y-2">
              {cloudSolution.features.map((feature, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{feature.name}</span>
                  {feature.included ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Benefits</h4>
            <div className="space-y-2">
              {cloudSolution.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Implementation Timeline Comparison</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-red-600 mb-4">Traditional ERP: 6-12 Months</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-sm">1</div>
                <div>
                  <p className="font-medium">Requirements Analysis</p>
                  <p className="text-sm text-gray-500">2-3 months</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-sm">2</div>
                <div>
                  <p className="font-medium">System Development</p>
                  <p className="text-sm text-gray-500">3-4 months</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-sm">3</div>
                <div>
                  <p className="font-medium">Testing & Training</p>
                  <p className="text-sm text-gray-500">2-3 months</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-sm">4</div>
                <div>
                  <p className="font-medium">Deployment</p>
                  <p className="text-sm text-gray-500">1-2 months</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-green-600 mb-4">Cloud Solution: 2-4 Weeks</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">1</div>
                <div>
                  <p className="font-medium">Service Integration</p>
                  <p className="text-sm text-gray-500">3-5 days</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">2</div>
                <div>
                  <p className="font-medium">Workflow Setup</p>
                  <p className="text-sm text-gray-500">1 week</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">3</div>
                <div>
                  <p className="font-medium">Testing & Training</p>
                  <p className="text-sm text-gray-500">3-5 days</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">4</div>
                <div>
                  <p className="font-medium">Go Live</p>
                  <p className="text-sm text-gray-500">1-2 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Return on Investment</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <TrendingDown className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-blue-800">Cost Reduction</h4>
            <p className="text-2xl font-bold text-blue-600">95%</p>
            <p className="text-sm text-gray-600">vs Traditional ERP</p>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-semibold text-green-800">Payback Period</h4>
            <p className="text-2xl font-bold text-green-600">3 months</p>
            <p className="text-sm text-gray-600">Break-even point</p>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <ArrowRight className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h4 className="font-semibold text-purple-800">Implementation</h4>
            <p className="text-2xl font-bold text-purple-600">15x</p>
            <p className="text-sm text-gray-600">Faster deployment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostComparison;
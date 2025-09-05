import React, { useState } from 'react';
import { 
  Cloud, 
  CheckCircle, 
  AlertCircle, 
  RefreshCw, 
  Plus, 
  ExternalLink,
  Zap,
  FileText,
  Database,
  Settings
} from 'lucide-react';
import { mockCloudIntegrations, mockAutomatedWorkflows, mockFormTemplates } from '../../data/mockData';

const IntegrationDashboard: React.FC = () => {
  const [integrations] = useState(mockCloudIntegrations);
  const [workflows] = useState(mockAutomatedWorkflows);
  const [forms] = useState(mockFormTemplates);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'syncing':
        return <RefreshCw className="w-5 h-5 text-blue-500 animate-spin" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'google-sheets':
      case 'google-forms':
      case 'google-drive':
        return '🟢'; // Google
      case 'microsoft-excel':
      case 'microsoft-forms':
      case 'onedrive':
        return '🔵'; // Microsoft
      default:
        return '☁️';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'google-forms':
        return 'bg-green-100 text-green-800';
      case 'microsoft-forms':
        return 'bg-blue-100 text-blue-800';
      case 'typeform':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cloud Integration Hub</h1>
        <p className="text-gray-600">Leverage existing cloud services to create a unified ERP system</p>
      </div>

      {/* Cost Savings Banner */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">💰 Cost-Effective Solution</h3>
            <p className="text-green-100 mb-4">
              Save ₹50L+ annually by using existing Google Workspace & Microsoft 365 subscriptions
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-semibold">Traditional ERP:</span>
                <br />₹75L+ setup + ₹15L/year
              </div>
              <div>
                <span className="font-semibold">Our Solution:</span>
                <br />₹2L setup + ₹3L/year
              </div>
              <div>
                <span className="font-semibold">Savings:</span>
                <br />95% cost reduction
              </div>
            </div>
          </div>
          <Cloud className="w-16 h-16 text-white opacity-80" />
        </div>
      </div>

      {/* Integration Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Active Integrations</h3>
            <Database className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{integrations.filter(i => i.status === 'connected').length}</p>
          <p className="text-sm text-gray-500">of {integrations.length} services</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Automated Workflows</h3>
            <Zap className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{workflows.filter(w => w.status === 'active').length}</p>
          <p className="text-sm text-gray-500">running smoothly</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Online Forms</h3>
            <FileText className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{forms.length}</p>
          <p className="text-sm text-gray-500">collecting data</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Success Rate</h3>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">98.2%</p>
          <p className="text-sm text-gray-500">automation success</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Cloud Services Integration */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Connected Services</h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Add Service</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {integrations.map((integration) => (
              <div key={integration.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getServiceIcon(integration.service)}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">{integration.name}</h4>
                    <p className="text-sm text-gray-500 capitalize">{integration.dataType} data</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {getStatusIcon(integration.status)}
                  <button className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Automated Workflows */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Automated Workflows</h3>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Create Workflow</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {workflows.map((workflow) => (
              <div key={workflow.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800">{workflow.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    workflow.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {workflow.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Trigger: {workflow.trigger}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{workflow.actions.length} actions</span>
                  <span className="text-sm font-medium text-green-600">{workflow.successRate}% success</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Online Forms */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Online Forms & Data Collection</h3>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Create Form</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {forms.map((form) => (
            <div key={form.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">{form.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPlatformColor(form.platform)}`}>
                  {form.platform}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3 capitalize">{form.type.replace('-', ' ')}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{form.responses} responses</span>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Guide */}
      <div className="mt-8 bg-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Quick Implementation Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">1. Connect Existing Services</h4>
            <p className="text-sm text-gray-700">Link your Google Workspace or Microsoft 365 accounts to centralize data</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">2. Set Up Automation</h4>
            <p className="text-sm text-gray-700">Create workflows using Zapier, Power Automate, or Google Apps Script</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">3. Deploy & Monitor</h4>
            <p className="text-sm text-gray-700">Launch your unified system and track performance in real-time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationDashboard;
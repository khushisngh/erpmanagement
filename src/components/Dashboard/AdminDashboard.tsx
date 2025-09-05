import React from 'react';
import { Users, GraduationCap, DollarSign, Building, TrendingUp, Clock } from 'lucide-react';
import { mockDashboardStats, mockQueueCounters } from '../../data/mockData';

const AdminDashboard: React.FC = () => {
  const stats = mockDashboardStats;
  const queues = mockQueueCounters;

  const StatCard = ({ title, value, icon: Icon, color, change }: {
    title: string;
    value: string | number;
    icon: any;
    color: string;
    change?: string;
  }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p className="text-green-600 text-sm mt-1 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const QueueCard = ({ counter }: { counter: any }) => (
    <div className="bg-white rounded-lg p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-800">{counter.name}</h4>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          counter.status === 'active' ? 'bg-green-100 text-green-800' :
          counter.status === 'break' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {counter.status}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Current Token:</span>
          <span className="font-medium">{counter.currentToken}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Pending:</span>
          <span className="font-medium">{counter.totalTokens - counter.currentToken}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Avg Wait:</span>
          <span className="font-medium">{counter.averageWaitTime}min</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Administrator Dashboard</h1>
        <p className="text-gray-600">Real-time institutional overview and management</p>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">💡 Smart ERP Solution</h3>
            <p className="text-green-100 mb-2">
              Leveraging Google Workspace & Microsoft 365 for 95% cost savings
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span>✅ No vendor lock-in</span>
              <span>✅ Familiar interfaces</span>
              <span>✅ Quick deployment</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-green-100 text-sm">Annual Savings</p>
            <p className="text-3xl font-bold">₹12L+</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Students"
          value={stats.totalStudents.toLocaleString()}
          icon={Users}
          color="bg-blue-500"
          change="+5.2% from last month"
        />
        <StatCard
          title="Total Teachers"
          value={stats.totalTeachers}
          icon={GraduationCap}
          color="bg-green-500"
          change="+2 new hires"
        />
        <StatCard
          title="Total Revenue"
          value={`₹${(stats.totalRevenue / 1000000).toFixed(1)}M`}
          icon={DollarSign}
          color="bg-yellow-500"
          change="+12.5% from last semester"
        />
        <StatCard
          title="Pending Fees"
          value={`₹${(stats.pendingFees / 1000000).toFixed(1)}M`}
          icon={DollarSign}
          color="bg-red-500"
        />
        <StatCard
          title="Hostel Occupancy"
          value={`${stats.hostelOccupancy}%`}
          icon={Building}
          color="bg-purple-500"
          change="Near capacity"
        />
        <StatCard
          title="Active Queues"
          value={stats.activeQueues}
          icon={Clock}
          color="bg-indigo-500"
        />
      </div>

      {/* Queue Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Queue Status</h3>
          <div className="space-y-4">
            {queues.map(counter => (
              <QueueCard key={counter.id} counter={counter} />
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">New student admission</p>
                <p className="text-xs text-gray-500">John Doe - CS Department - 2 min ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Fee payment received</p>
                <p className="text-xs text-gray-500">Alice Johnson - ₹70,000 - 5 min ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-purple-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Hostel room allocated</p>
                <p className="text-xs text-gray-500">Room A-301 assigned - 8 min ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Exam results published</p>
                <p className="text-xs text-gray-500">Semester 6 Finals - 15 min ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Fee Collection Trend</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart visualization would be implemented here</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Department-wise Enrollment</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart visualization would be implemented here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
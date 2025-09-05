import React from 'react';
import { 
  Users, 
  GraduationCap, 
  DollarSign, 
  Building, 
  FileText, 
  BarChart3, 
  Settings, 
  Clock,
  UserCheck,
  BookOpen,
  Cloud,
  Calculator
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const { user } = useAuth();

  const getMenuItems = () => {
    const commonItems = [
      { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    ];

    switch (user?.role) {
      case 'admin':
        return [
          ...commonItems,
          { id: 'students', label: 'Students', icon: Users },
          { id: 'teachers', label: 'Teachers', icon: GraduationCap },
          { id: 'admissions', label: 'Admissions', icon: UserCheck },
          { id: 'fees', label: 'Fee Management', icon: DollarSign },
          { id: 'hostels', label: 'Hostel Management', icon: Building },
          { id: 'examinations', label: 'Examinations', icon: FileText },
          { id: 'queues', label: 'Queue Management', icon: Clock },
          { id: 'integrations', label: 'Cloud Integration', icon: Cloud },
          { id: 'cost-analysis', label: 'Cost Analysis', icon: Calculator },
          { id: 'settings', label: 'Settings', icon: Settings },
        ];
      case 'teacher':
        return [
          ...commonItems,
          { id: 'students', label: 'My Students', icon: Users },
          { id: 'examinations', label: 'Examinations', icon: FileText },
          { id: 'subjects', label: 'Subjects', icon: BookOpen },
        ];
      case 'student':
        return [
          ...commonItems,
          { id: 'profile', label: 'My Profile', icon: Users },
          { id: 'fees', label: 'Fee Status', icon: DollarSign },
          { id: 'hostel', label: 'Hostel Info', icon: Building },
          { id: 'examinations', label: 'Results', icon: FileText },
        ];
      default:
        return commonItems;
    }
  };

  const menuItems = getMenuItems();

  const getRoleColor = () => {
    switch (user?.role) {
      case 'admin':
        return 'from-blue-600 to-blue-700';
      case 'teacher':
        return 'from-green-600 to-green-700';
      case 'student':
        return 'from-purple-600 to-purple-700';
      default:
        return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <div className={`w-64 bg-gradient-to-b ${getRoleColor()} text-white min-h-screen shadow-lg`}>
      <div className="p-6 border-b border-white/10">
        <h1 className="text-xl font-bold">ERP System</h1>
        <p className="text-sm opacity-80 mt-1 capitalize">{user?.role} Portal</p>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 hover:bg-white/10 ${
                isActive ? 'bg-white/20 border-r-3 border-white' : ''
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
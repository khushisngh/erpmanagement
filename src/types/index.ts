export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  avatar?: string;
}

export interface Student {
  id: string;
  rollNo: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  semester: number;
  admissionDate: string;
  status: 'active' | 'inactive' | 'graduated';
  hostelRoom?: string;
  feeStatus: 'paid' | 'pending' | 'overdue';
}

export interface Teacher {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  subjects: string[];
  qualification: string;
  joiningDate: string;
}

export interface FeeRecord {
  id: string;
  studentId: string;
  studentName: string;
  rollNo: string;
  semester: number;
  tuitionFee: number;
  hostelFee: number;
  miscFee: number;
  totalAmount: number;
  paidAmount: number;
  dueAmount: number;
  dueDate: string;
  status: 'paid' | 'partial' | 'pending' | 'overdue';
  lastPaymentDate?: string;
}

export interface HostelRoom {
  id: string;
  roomNumber: string;
  building: string;
  capacity: number;
  occupied: number;
  students: string[];
  amenities: string[];
  rent: number;
}

export interface ExamRecord {
  id: string;
  studentId: string;
  studentName: string;
  rollNo: string;
  subject: string;
  examType: 'midterm' | 'final' | 'assignment' | 'quiz';
  maxMarks: number;
  obtainedMarks: number;
  grade: string;
  examDate: string;
  semester: number;
}

export interface QueueCounter {
  id: string;
  name: string;
  type: 'admission' | 'fees' | 'hostel' | 'examination' | 'general';
  currentToken: number;
  totalTokens: number;
  averageWaitTime: number;
  status: 'active' | 'closed' | 'break';
}

export interface DashboardStats {
  totalStudents: number;
  totalTeachers: number;
  totalRevenue: number;
  pendingFees: number;
  hostelOccupancy: number;
  activeQueues: number;
}

export interface CloudIntegration {
  id: string;
  service: 'google-sheets' | 'microsoft-excel' | 'google-forms' | 'microsoft-forms' | 'google-drive' | 'onedrive';
  name: string;
  url: string;
  lastSync: string;
  status: 'connected' | 'disconnected' | 'syncing' | 'error';
  dataType: 'students' | 'fees' | 'admissions' | 'hostels' | 'examinations';
}

export interface AutomatedWorkflow {
  id: string;
  name: string;
  trigger: string;
  actions: string[];
  status: 'active' | 'inactive';
  lastRun: string;
  successRate: number;
}

export interface FormTemplate {
  id: string;
  name: string;
  type: 'admission' | 'fee-payment' | 'hostel-application' | 'exam-registration';
  platform: 'google-forms' | 'microsoft-forms' | 'typeform';
  url: string;
  responses: number;
  lastUpdated: string;
}
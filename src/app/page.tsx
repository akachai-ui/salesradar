"use client";

import { Building2, TrendingUp, Users, AlertCircle, Database } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">ภาพรวมระบบ (Overview)</h1>
            <p className="text-slate-500 mt-1">ข้อมูลสรุปฐานข้อมูลนิติบุคคลจาก DBD ล่าสุด (รอกู้คืนข้อมูลจาก Supabase)</p>
          </div>
          
          <button 
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium opacity-50 cursor-not-allowed"
          >
            <Database size={20} />
            ซิงค์ข้อมูล (รอเชื่อมต่อ Supabase)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="นิติบุคคลในระบบ" value="-" trend="รอการเชื่อมต่อ" icon={<Building2 size={24} className="text-blue-600" />} color="bg-blue-100"
          />
          <StatCard 
            title="รายได้ > 10 ล้าน" value="-" trend="เป้าหมายหลัก" icon={<TrendingUp size={24} className="text-green-600" />} color="bg-green-100"
          />
          <StatCard 
            title="เซลส์ที่ใช้งาน" value="-" trend="รอทำระบบ Auth" icon={<Users size={24} className="text-purple-600" />} color="bg-purple-100"
          />
          <StatCard 
            title="สถานะ Database" value="กำลังเชื่อมต่อ..." trend="Supabase (PostgreSQL)" icon={<AlertCircle size={24} className="text-orange-600" />} color="bg-orange-100"
          />
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mt-6">
          <div className="p-12 text-center">
            <Database size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-medium text-slate-900">กำลังสลับไปใช้สถาปัตยกรรมแบบ Big Data</h3>
            <p className="mt-2 text-slate-500">รอการเชื่อมต่อกับ Supabase เพื่อรองรับข้อมูล 800,000+ บริษัท</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatCard({ title, value, trend, icon, color }: { title: string, value: string, trend: string, icon: React.ReactNode, color: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-2">{value}</h3>
        <p className="text-sm text-slate-500 mt-1">{trend}</p>
      </div>
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center`}>{icon}</div>
    </div>
  );
}
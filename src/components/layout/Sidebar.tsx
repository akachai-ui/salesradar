import Link from 'next/link';
import { LayoutDashboard, Users, Building2, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen hidden md:flex flex-col sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-slate-200">
        <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">S</span>
          </div>
          SalesRadar
        </div>
      </div>
      
      <nav className="flex-1 py-6 px-4 space-y-2">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-md font-medium">
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md font-medium transition-colors">
          <Building2 size={20} />
          บริษัท (DBD)
        </Link>
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md font-medium transition-colors">
          <Users size={20} />
          ทีมเซลส์
        </Link>
      </nav>

      <div className="p-4 border-t border-slate-200">
        <Link href="#" className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md font-medium transition-colors">
          <Settings size={20} />
          ตั้งค่า
        </Link>
      </div>
    </aside>
  );
}
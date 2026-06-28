import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SalesRadar | B2B Sales Platform',
  description: 'เครื่องมือสแกนหาลูกค้าเชิงรุก',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
import Link from "next/link";

export default function DdddddNavbar() {
  return (
    <nav className="bg-slate-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-slate-300 transition-colors">
          作业平台
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-slate-300 transition-colors">首页</Link>
          <Link href="/archive" className="hover:text-slate-300 transition-colors">归档</Link>
        </div>
      </div>
    </nav>
  );
} 
import Link from 'next/link';
import Image from 'next/image';
import StudyPlanDemo from "../study-plan-demo";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDEwIDEwIGggNTAgdiA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODdDRUVCIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 z-0"></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-sky-600 hover:text-sky-500 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>
        
        <section className="max-w-4xl mx-auto mb-10 bg-white/80 backdrop-blur-md rounded-xl border border-sky-200 shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <Image 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="公务员备考计划" 
                width={300} 
                height={200} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-sky-700 mb-4">个性化备考计划系统</h1>
              <p className="text-slate-600 mb-4 leading-relaxed">
                基于React组件化架构构建的公务员考试备考计划制定系统，提供科学合理的学习进度安排和复习计划。
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded text-sm font-mono border border-sky-200">React</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-mono border border-blue-200">计划管理</span>
                <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded text-sm font-mono border border-cyan-200">备考系统</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-xl border border-sky-200 shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-8 text-sky-700 text-center">
            智能备考组件展示
          </h2>
          <div className="space-y-8">
            <StudyPlanDemo />
          </div>
        </section>
      </main>
    </div>
  );
} 
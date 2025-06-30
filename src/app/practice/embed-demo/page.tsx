"use client";
import Link from 'next/link';

export default function EmbedDemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 text-slate-800 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDEwIDEwIGggNTAgdiA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODdDRUVCIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 z-0"></div>
      <main className="flex-grow w-full h-full relative z-10">
        <div className="fixed top-0 left-0 w-full z-20 bg-white/90 backdrop-blur-md border-b border-sky-200 shadow-lg">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sky-600 hover:text-sky-500 text-xl font-bold transition-colors">← 返回首页</Link>
              <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent drop-shadow">QAnything 问答服务嵌套演示</span>
            </div>
            <span className="text-slate-500 text-sm hidden md:block">第三方服务集成案例</span>
          </div>
        </div>

        <iframe
          src="https://ai.youdao.com/saas/qanything/#/home"
          title="QAnything 问答服务"
          width="100%"
          height="100%"
          className="fixed left-0 w-full z-10 border-none"
          style={{
            top: 112, // 标题+说明高度
            height: 'calc(100vh - 112px)',
          }}
          allowFullScreen
        />
      </main>
    </div>
  );
} 
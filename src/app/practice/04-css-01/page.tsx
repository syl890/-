import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 text-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDEwIDEwIGggNTAgdiA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODdDRUVCIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-sky-600 hover:text-sky-500 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-600 mb-4">
            公务员制度概览
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            全面了解中国公务员制度体系、职级晋升路径和管理机制
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* 制度体系 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                制度框架体系
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-4 border border-sky-200">
                    <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-sky-700 mb-2">公务员法</h3>
                  <p className="text-sm text-slate-600">国家公务员制度的基本法律依据</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-200">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-blue-700 mb-2">配套法规</h3>
                  <p className="text-sm text-slate-600">实施细则、管理办法等具体规定</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-200">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-purple-700 mb-2">实施监督</h3>
                  <p className="text-sm text-slate-600">人事部门和纪检监察机关</p>
                </div>
              </div>
            </div>
          </section>

          {/* 职级体系 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                职级晋升体系
              </h2>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-4">领导职务</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="font-medium text-slate-700">国家级正职</span>
                        <span className="text-green-600 text-sm">一级</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="font-medium text-slate-700">国家级副职</span>
                        <span className="text-green-600 text-sm">二级</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="font-medium text-slate-700">省部级正职</span>
                        <span className="text-green-600 text-sm">三级</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="font-medium text-slate-700">省部级副职</span>
                        <span className="text-green-600 text-sm">四级</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="font-medium text-slate-700">厅局级正职</span>
                        <span className="text-green-600 text-sm">五级</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">非领导职务</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="font-medium text-slate-700">巡视员</span>
                        <span className="text-blue-600 text-sm">厅局级</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="font-medium text-slate-700">副巡视员</span>
                        <span className="text-blue-600 text-sm">副厅局级</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="font-medium text-slate-700">调研员</span>
                        <span className="text-blue-600 text-sm">处级</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="font-medium text-slate-700">副调研员</span>
                        <span className="text-blue-600 text-sm">副处级</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="font-medium text-slate-700">主任科员</span>
                        <span className="text-blue-600 text-sm">正科级</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 管理机制 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                核心管理机制
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-200">
                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-red-600 mb-2">招录制度</h3>
                  <p className="text-sm text-slate-600">公开公正的考试录用机制</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-200">
                    <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-orange-600 mb-2">薪酬体系</h3>
                  <p className="text-sm text-slate-600">职务与职级并行的工资制度</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-200">
                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-amber-600 mb-2">考核制度</h3>
                  <p className="text-sm text-slate-600">年度考核与聘期考核相结合</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-green-600 mb-2">培训发展</h3>
                  <p className="text-sm text-slate-600">终身学习与能力提升机制</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 
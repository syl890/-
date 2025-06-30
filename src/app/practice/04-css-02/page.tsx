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
            考试时间规划
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            掌握科学的时间分配策略，提升答题效率和考试成绩
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* 考试时间分配 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                行测时间分配标准
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
                    <h3 className="text-lg font-semibold text-sky-700 mb-3">言语理解与表达</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">题目数量</span>
                        <span className="font-semibold text-sky-600">40题</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">建议时间</span>
                        <span className="font-semibold text-sky-600">35分钟</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">平均每题</span>
                        <span className="font-semibold text-sky-600">0.9分钟</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="text-lg font-semibold text-purple-700 mb-3">数量关系</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">题目数量</span>
                        <span className="font-semibold text-purple-600">15题</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">建议时间</span>
                        <span className="font-semibold text-purple-600">20分钟</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">平均每题</span>
                        <span className="font-semibold text-purple-600">1.3分钟</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">判断推理</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">题目数量</span>
                        <span className="font-semibold text-green-600">40题</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">建议时间</span>
                        <span className="font-semibold text-green-600">35分钟</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">平均每题</span>
                        <span className="font-semibold text-green-600">0.9分钟</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h3 className="text-lg font-semibold text-red-700 mb-3">资料分析</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">题目数量</span>
                        <span className="font-semibold text-red-600">20题</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">建议时间</span>
                        <span className="font-semibold text-red-600">25分钟</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">平均每题</span>
                        <span className="font-semibold text-red-600">1.3分钟</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-semibold text-amber-700 mb-2">总计时间</h4>
                    <p className="text-2xl font-bold text-amber-600">115分钟</p>
                    <p className="text-sm text-slate-600 mt-1">预留5分钟检查涂卡</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 答题节奏 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                答题节奏控制
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-green-600 mb-2">快速突破</h3>
                  <p className="text-sm text-slate-600">优先完成有把握的题目，建立信心</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-blue-600 mb-2">时间监控</h3>
                  <p className="text-sm text-slate-600">定时检查进度，避免某一模块用时过长</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-200">
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-purple-600 mb-2">灵活调整</h3>
                  <p className="text-sm text-slate-600">根据实际情况调整各模块时间分配</p>
                </div>
              </div>
            </div>
          </section>

          {/* 时间管理技巧 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                时间管理技巧
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-4">做题策略</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <h4 className="font-medium text-purple-700">先易后难</h4>
                        <p className="text-sm text-slate-600">优先完成有把握的题目</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <h4 className="font-medium text-blue-700">合理跳题</h4>
                        <p className="text-sm text-slate-600">遇到难题不要纠结，及时跳过</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <h4 className="font-medium text-green-700">及时回填</h4>
                        <p className="text-sm text-slate-600">完成一轮后回头处理跳过的题目</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">涂卡技巧</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>建议做完一个模块立即涂卡</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>保持答题卡整洁，避免涂错</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>最后5分钟专门检查涂卡</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>使用2B铅笔，涂满涂黑</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 时间分配可视化 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                时间分配可视化
              </h2>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-24 text-sm font-medium text-slate-600">言语理解</div>
                  <div className="flex-1 bg-slate-200 rounded-full h-6 relative">
                    <div className="bg-gradient-to-r from-sky-400 to-sky-500 h-6 rounded-full" style={{ width: '30.4%' }}></div>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">35分钟</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm font-medium text-slate-600">数量关系</div>
                  <div className="flex-1 bg-slate-200 rounded-full h-6 relative">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-6 rounded-full" style={{ width: '17.4%' }}></div>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">20分钟</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm font-medium text-slate-600">判断推理</div>
                  <div className="flex-1 bg-slate-200 rounded-full h-6 relative">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 h-6 rounded-full" style={{ width: '30.4%' }}></div>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">35分钟</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm font-medium text-slate-600">资料分析</div>
                  <div className="flex-1 bg-slate-200 rounded-full h-6 relative">
                    <div className="bg-gradient-to-r from-red-400 to-red-500 h-6 rounded-full" style={{ width: '21.7%' }}></div>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">25分钟</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 
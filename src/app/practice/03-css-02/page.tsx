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
            申论写作技巧与评分标准
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            掌握申论写作的核心要点，了解评分标准，提升文章质量和得分效果
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* 申论题型概览 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                申论题型结构
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3 border border-sky-200">
                    <span className="text-2xl font-bold text-sky-600">1</span>
                  </div>
                  <h3 className="font-semibold text-sky-700">归纳概括</h3>
                  <p className="text-sm text-slate-600 mt-1">15-20分</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 border border-blue-200">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold text-blue-700">综合分析</h3>
                  <p className="text-sm text-slate-600 mt-1">15-20分</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 border border-purple-200">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="font-semibold text-purple-700">解决问题</h3>
                  <p className="text-sm text-slate-600 mt-1">20-25分</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 border border-green-200">
                    <span className="text-2xl font-bold text-green-600">4</span>
                  </div>
                  <h3 className="font-semibold text-green-700">文章写作</h3>
                  <p className="text-sm text-slate-600 mt-1">35-40分</p>
                </div>
              </div>
            </div>
          </section>

          {/* 评分标准详解 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                评分标准解析
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-4">内容评分要点</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-700 mb-2">立意准确 (35%)</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• 主题明确，观点正确</li>
                        <li>• 符合题意，角度适当</li>
                        <li>• 见解深刻，有说服力</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-700 mb-2">结构完整 (25%)</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• 层次清晰，逻辑严密</li>
                        <li>• 开头结尾呼应</li>
                        <li>• 段落过渡自然</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-sky-50 rounded-lg border border-sky-200">
                      <h4 className="font-semibold text-sky-700 mb-2">语言表达 (25%)</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• 语言流畅，用词准确</li>
                        <li>• 句式多样，表达生动</li>
                        <li>• 符合公文语言规范</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">写作技巧指导</h3>
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">📝 开头技巧</h4>
                        <p className="text-sm text-slate-600">引言式开头，直接点题，简洁有力</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">📖 论证方法</h4>
                        <p className="text-sm text-slate-600">事实论证+理论论证+对比论证相结合</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">🎯 结尾升华</h4>
                        <p className="text-sm text-slate-600">总结观点，展望未来，呼吁行动</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 高分备考策略 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                高分备考策略
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-200">
                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-red-600 mb-2">大量阅读</h3>
                  <p className="text-sm text-slate-600">人民日报、求是杂志、政府工作报告</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-200">
                    <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-orange-600 mb-2">勤加练习</h3>
                  <p className="text-sm text-slate-600">每周2-3篇，限时训练，模拟考试</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-200">
                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-amber-600 mb-2">反复修改</h3>
                  <p className="text-sm text-slate-600">逐字逐句推敲，力求精准表达</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 
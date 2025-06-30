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
            面试准备要点
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            全面掌握公务员面试流程、评分细则和应答技巧，提升面试成功率
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* 面试流程 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                面试基本流程
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-sky-200 relative">
                    <span className="text-2xl font-bold text-sky-600">1</span>
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-sky-300 hidden lg:block">→</div>
                  </div>
                  <h3 className="font-semibold text-sky-700 mb-2">资格审查</h3>
                  <p className="text-sm text-slate-600">核验身份证件和相关材料</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200 relative">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-blue-300 hidden lg:block">→</div>
                  </div>
                  <h3 className="font-semibold text-blue-700 mb-2">抽签排序</h3>
                  <p className="text-sm text-slate-600">确定面试顺序和考场分组</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-200 relative">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-purple-300 hidden lg:block">→</div>
                  </div>
                  <h3 className="font-semibold text-purple-700 mb-2">正式面试</h3>
                  <p className="text-sm text-slate-600">结构化面试或无领导小组讨论</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200">
                    <span className="text-2xl font-bold text-green-600">4</span>
                  </div>
                  <h3 className="font-semibold text-green-700 mb-2">成绩公布</h3>
                  <p className="text-sm text-slate-600">当场或统一公布面试成绩</p>
                </div>
              </div>
            </div>
          </section>

          {/* 评分标准 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                评分标准详解
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">核心评分要素</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-2">综合分析能力 (25%)</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• 问题理解的准确性</li>
                        <li>• 分析思路的清晰性</li>
                        <li>• 观点论述的逻辑性</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-700 mb-2">语言表达能力 (25%)</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• 语言表达的流畅性</li>
                        <li>• 用词的准确性</li>
                        <li>• 语调的感染性</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600 mb-4">其他重要要素</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-700 mb-2">应变能力 (20%)</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• 思维的敏捷性</li>
                        <li>• 情绪的稳定性</li>
                        <li>• 反应的得体性</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-700 mb-2">举止仪表 (30%)</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• 仪容仪表的端庄性</li>
                        <li>• 行为举止的得体性</li>
                        <li>• 精神状态的饱满度</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 题型分析 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                常见题型解析
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-4">结构化面试题型</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-sky-50 rounded-lg border border-sky-200">
                      <h4 className="font-medium text-sky-700">综合分析题</h4>
                      <p className="text-sm text-slate-600 mt-1">对社会现象、政策措施等进行分析评价</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-medium text-green-700">组织管理题</h4>
                      <p className="text-sm text-slate-600 mt-1">考查活动组织和协调管理能力</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-700">人际沟通题</h4>
                      <p className="text-sm text-slate-600 mt-1">处理与同事、领导、群众的关系</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-medium text-purple-700">应急应变题</h4>
                      <p className="text-sm text-slate-600 mt-1">处理突发事件和应急情况</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">答题万能模板</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                        <div>
                          <h4 className="font-medium text-orange-700">破题表态</h4>
                          <p className="text-sm text-slate-600">明确表达对问题的基本看法</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                        <div>
                          <h4 className="font-medium text-orange-700">分析论证</h4>
                          <p className="text-sm text-slate-600">从多个角度深入分析问题</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                        <div>
                          <h4 className="font-medium text-orange-700">对策建议</h4>
                          <p className="text-sm text-slate-600">提出具体可行的解决方案</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                        <div>
                          <h4 className="font-medium text-orange-700">总结升华</h4>
                          <p className="text-sm text-slate-600">升华主题，体现价值观</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 备考建议 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                面试备考建议
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-200">
                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-red-600 mb-2">理论学习</h3>
                  <p className="text-sm text-slate-600">系统学习面试理论和答题技巧</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-200">
                    <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-orange-600 mb-2">模拟练习</h3>
                  <p className="text-sm text-slate-600">多参加模拟面试，提升实战能力</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-200">
                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-amber-600 mb-2">仪态训练</h3>
                  <p className="text-sm text-slate-600">注重仪容仪表和言行举止的训练</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-700 mb-3 text-center">💡 面试成功三原则</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-medium text-sky-600 mb-1">自信从容</div>
                    <p className="text-slate-600">保持良好的精神状态和自信心</p>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-green-600 mb-1">思路清晰</div>
                    <p className="text-slate-600">逻辑清楚，层次分明，重点突出</p>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-purple-600 mb-1">表达流畅</div>
                    <p className="text-slate-600">语言准确，表达自然，感染力强</p>
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
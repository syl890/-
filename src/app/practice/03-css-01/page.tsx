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
            行测题型深度解析
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            系统梳理行政职业能力测验各大题型的核心知识点、解题技巧和备考策略
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* 言语理解与表达 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                言语理解与表达
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-sky-700">核心题型</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-slate-600">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                      逻辑填空 (20题)
                    </li>
                    <li className="flex items-center text-slate-600">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                      阅读理解 (20题)
                    </li>
                    <li className="flex items-center text-slate-600">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                      语句表达 (0题)
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">解题要点</h3>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      • 把握语境，理解作者意图<br/>
                      • 注意词语搭配和语体风格<br/>
                      • 抓住关键词句和逻辑关系<br/>
                      • 培养快速阅读和信息筛选能力
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 数量关系 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                数量关系
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-600 mb-3">高频题型</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-50 p-2 rounded text-purple-700 border border-purple-200">工程问题</div>
                    <div className="bg-purple-50 p-2 rounded text-purple-700 border border-purple-200">行程问题</div>
                    <div className="bg-purple-50 p-2 rounded text-purple-700 border border-purple-200">利润问题</div>
                    <div className="bg-purple-50 p-2 rounded text-purple-700 border border-purple-200">排列组合</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sky-600 mb-3">解题策略</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-sky-50 p-2 rounded text-sky-700 border border-sky-200">代入排除法</div>
                    <div className="bg-sky-50 p-2 rounded text-sky-700 border border-sky-200">特值设定法</div>
                    <div className="bg-sky-50 p-2 rounded text-sky-700 border border-sky-200">方程法</div>
                    <div className="bg-sky-50 p-2 rounded text-sky-700 border border-sky-200">图表分析法</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-600 mb-3">时间分配</h3>
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <p className="text-slate-600 text-sm">
                      建议控制在<span className="font-bold">15-20分钟</span>内完成
                      <br/>每题平均<span className="font-bold">1-1.5分钟</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 判断推理 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                判断推理
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-4">四大模块</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-700">图形推理</h4>
                      <p className="text-sm text-slate-600 mt-1">空间想象能力考查</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-700">逻辑判断</h4>
                      <p className="text-sm text-slate-600 mt-1">逻辑思维能力测试</p>
                    </div>
                    <div className="p-3 bg-sky-50 rounded-lg border border-sky-200">
                      <h4 className="font-semibold text-sky-700">类比推理</h4>
                      <p className="text-sm text-slate-600 mt-1">词语关系类推</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-700">定义判断</h4>
                      <p className="text-sm text-slate-600 mt-1">概念理解能力</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">备考建议</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• 图形推理重点训练观察能力</li>
                      <li>• 逻辑判断掌握推理规则</li>
                      <li>• 类比推理积累常见关系</li>
                      <li>• 定义判断提取关键要素</li>
                      <li>• 多做真题培养题感</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 资料分析 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                资料分析
              </h2>
            </div>
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-red-50 px-6 py-3 rounded-lg border border-red-200">
                  <p className="text-red-700 font-semibold">
                    💡 得分率最高的模块，务必全力争取！
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-3">核心概念</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded border border-red-200">
                      <span className="text-slate-600">增长量</span>
                      <span className="text-red-600 text-sm">现期值-基期值</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded border border-red-200">
                      <span className="text-slate-600">增长率</span>
                      <span className="text-red-600 text-sm">增长量/基期值</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded border border-red-200">
                      <span className="text-slate-600">比重</span>
                      <span className="text-red-600 text-sm">部分/整体</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-600 mb-3">计算技巧</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• 首数法快速估算</li>
                      <li>• 尾数法验证答案</li>
                      <li>• 特征数字法简化计算</li>
                      <li>• 同比环比要分清</li>
                    </ul>
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
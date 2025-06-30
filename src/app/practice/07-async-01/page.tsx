'use client';
import Link from 'next/link';
import { useState } from 'react';

type ExamResult = {
  id: string;
  name: string;
  score: number;
  status: 'passed' | 'failed';
  subject: string;
  date: string;
};

export default function Page() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ExamResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchType, setSearchType] = useState<'name' | 'id'>('name');

  // 模拟考试成绩数据库
  const mockDatabase: ExamResult[] = [
    { id: '2024001', name: '张三', score: 88, status: 'passed', subject: '行政职业能力测验', date: '2024-01-15' },
    { id: '2024002', name: '李四', score: 92, status: 'passed', subject: '申论', date: '2024-01-15' },
    { id: '2024003', name: '王五', score: 76, status: 'passed', subject: '面试', date: '2024-02-20' },
    { id: '2024004', name: '赵六', score: 58, status: 'failed', subject: '行政职业能力测验', date: '2024-01-15' },
    { id: '2024005', name: '钱七', score: 85, status: 'passed', subject: '申论', date: '2024-01-15' },
    { id: '2024006', name: '孙八', score: 91, status: 'passed', subject: '面试', date: '2024-02-20' },
    { id: '2024007', name: '周九', score: 67, status: 'failed', subject: '行政职业能力测验', date: '2024-01-15' },
    { id: '2024008', name: '吴十', score: 89, status: 'passed', subject: '申论', date: '2024-01-15' },
  ];

  // 模拟异步查询API
  const searchExamResults = async (searchQuery: string, type: 'name' | 'id'): Promise<ExamResult[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.1) { // 10% 概率模拟网络错误
          reject(new Error('网络连接失败，请重试'));
          return;
        }

        const filteredResults = mockDatabase.filter(result => {
          if (type === 'name') {
            return result.name.includes(searchQuery);
          } else {
            return result.id.includes(searchQuery);
          }
        });

        resolve(filteredResults);
      }, 1000 + Math.random() * 2000); // 1-3秒随机延迟
    });
  };

  const handleSearch = async () => {
    if (!query.trim()) {
      setError('请输入查询内容');
      return;
    }

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const searchResults = await searchExamResults(query.trim(), searchType);
      setResults(searchResults);
      if (searchResults.length === 0) {
        setError('未找到相关成绩记录');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '查询失败');
    } finally {
      setLoading(false);
    }
  };

  const resetSearch = () => {
    setQuery('');
    setResults([]);
    setError(null);
    setLoading(false);
  };

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
            公务员考试成绩查询系统
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            演示异步编程在成绩查询系统中的应用，包含Promise、async/await和错误处理
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 查询表单 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 p-8">
            <h2 className="text-2xl font-bold text-sky-700 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              成绩查询
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <label className="text-sm font-medium text-slate-600">查询方式：</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="name"
                      checked={searchType === 'name'}
                      onChange={(e) => setSearchType(e.target.value as 'name' | 'id')}
                      className="mr-2 text-sky-600"
                    />
                    <span className="text-slate-700">按姓名查询</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="id"
                      checked={searchType === 'id'}
                      onChange={(e) => setSearchType(e.target.value as 'name' | 'id')}
                      className="mr-2 text-sky-600"
                    />
                    <span className="text-slate-700">按考号查询</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchType === 'name' ? '请输入考生姓名' : '请输入考号'}
                  className="flex-1 px-4 py-3 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  disabled={loading}
                />
                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-lg hover:from-sky-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      查询中...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      查询
                    </>
                  )}
                </button>
                <button
                  onClick={resetSearch}
                  className="px-6 py-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
                >
                  重置
                </button>
              </div>
            </div>
          </section>

          {/* 错误提示 */}
          {error && (
            <section className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-700 font-medium">{error}</span>
              </div>
            </section>
          )}

          {/* 查询结果 */}
          {results.length > 0 && (
            <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  查询结果 ({results.length} 条记录)
                </h2>
              </div>
              <div className="p-8">
                <div className="grid gap-4">
                  {results.map((result) => (
                    <div
                      key={result.id}
                      className={`p-6 rounded-lg border-2 ${
                        result.status === 'passed'
                          ? 'bg-green-50 border-green-200'
                          : 'bg-red-50 border-red-200'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-800">{result.name}</h3>
                          <p className="text-slate-600">考号：{result.id}</p>
                        </div>
                        <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                          result.status === 'passed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {result.status === 'passed' ? '✅ 通过' : '❌ 未通过'}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-slate-500">考试科目：</span>
                          <span className="font-medium text-slate-700">{result.subject}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">考试成绩：</span>
                          <span className={`font-bold ${
                            result.score >= 80 ? 'text-green-600' :
                            result.score >= 60 ? 'text-amber-600' : 'text-red-600'
                          }`}>
                            {result.score} 分
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500">考试日期：</span>
                          <span className="font-medium text-slate-700">{result.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 技术说明 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 p-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              异步编程技术要点
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-4">核心概念</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-medium text-purple-700">Promise</h4>
                    <p className="text-sm text-slate-600 mt-1">处理异步操作的承诺对象</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-700">async/await</h4>
                    <p className="text-sm text-slate-600 mt-1">同步风格编写异步代码</p>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <h4 className="font-medium text-amber-700">错误处理</h4>
                    <p className="text-sm text-slate-600 mt-1">try/catch捕获异步错误</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-4">实现特点</h3>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• 模拟真实网络延迟（1-3秒）</li>
                    <li>• 随机网络错误处理（10%概率）</li>
                    <li>• 加载状态指示器</li>
                    <li>• 支持按姓名/考号查询</li>
                    <li>• 优雅的错误提示</li>
                    <li>• 响应式结果展示</li>
          </ul>
                </div>
              </div>
            </div>
        </section>
        </div>
      </main>
    </div>
  );
} 
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
            HTML学习教程
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            全面的HTML基础教程，包含标签介绍、代码示例、表格和表单等核心概念
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 学习步骤 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl border border-sky-200 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-sky-700 mb-6 border-l-4 border-sky-400 pl-4">学习步骤</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-sm font-bold mt-0.5 border border-sky-200">1</span>
                <span className="text-slate-700">了解HTML基础概念</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-sm font-bold mt-0.5 border border-sky-200">2</span>
                <span className="text-slate-700">学习常用HTML标签</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-sm font-bold mt-0.5 border border-sky-200">3</span>
                <span className="text-slate-700">实践编写HTML代码</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-sm font-bold mt-0.5 border border-sky-200">4</span>
                <span className="text-slate-700">参考优秀的HTML案例</span>
              </li>
            </ul>
          </section>

          {/* 推荐资源 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl border border-sky-200 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-600 mb-6 border-l-4 border-green-400 pl-4">推荐资源</h2>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold border border-green-200">1</span>
                <div>
                  <a 
                    href="https://www.w3schools.com/html/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-500 font-semibold underline decoration-wavy"
                  >
                    W3Schools HTML教程
                  </a>
                  <p className="text-slate-600 text-sm mt-1">全面的HTML基础教程，适合初学者</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold border border-green-200">2</span>
                <div>
                  <a 
                    href="https://developer.mozilla.org/zh-CN/docs/Web/HTML" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-500 font-semibold underline decoration-wavy"
                  >
                    MDN Web Docs HTML文档
                  </a>
                  <p className="text-slate-600 text-sm mt-1">权威的HTML参考文档和深入指南</p>
                </div>
              </li>
            </ol>
          </section>

          {/* HTML代码示例 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl border border-sky-200 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-6 border-l-4 border-purple-400 pl-4">HTML代码示例</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-3">基础HTML结构</h3>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-slate-700"><code>{`<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题</title>
</head>
<body>
    <h1>欢迎来到我的网站</h1>
    <p>这是一个段落。</p>
</body>
</html>`}</code></pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-3">常用标签示例</h3>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-slate-700"><code>{`<!-- 标题标签 -->
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>

<!-- 段落和文本格式 -->
<p>这是一个段落。</p>
<p>这是<strong>粗体</strong>和<em>斜体</em>文本。</p>

<!-- 链接和图片 -->
<a href="https://example.com">链接文本</a>
<img src="image.jpg" alt="图片描述">

<!-- 列表 -->
<ul>
    <li>无序列表项1</li>
    <li>无序列表项2</li>
</ul>

<ol>
    <li>有序列表项1</li>
    <li>有序列表项2</li>
</ol>`}</code></pre>
                </div>
              </div>
            </div>
          </section>

          {/* 表格示例 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl border border-sky-200 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-6 border-l-4 border-orange-400 pl-4">表格示例</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-700 mb-4"><code>{`<table border="1">
    <thead>
        <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>城市</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>张三</td>
            <td>25</td>
            <td>北京</td>
        </tr>
        <tr>
            <td>李四</td>
            <td>30</td>
            <td>上海</td>
        </tr>
    </tbody>
</table>`}</code></pre>
              </div>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-sky-100">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-sky-700">姓名</th>
                      <th className="px-4 py-2 text-left font-semibold text-sky-700">年龄</th>
                      <th className="px-4 py-2 text-left font-semibold text-sky-700">城市</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-slate-200">
                      <td className="px-4 py-2 text-slate-700">张三</td>
                      <td className="px-4 py-2 text-slate-700">25</td>
                      <td className="px-4 py-2 text-slate-700">北京</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <td className="px-4 py-2 text-slate-700">李四</td>
                      <td className="px-4 py-2 text-slate-700">30</td>
                      <td className="px-4 py-2 text-slate-700">上海</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 表单示例 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl border border-sky-200 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-red-600 mb-6 border-l-4 border-red-400 pl-4">表单示例</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-700 mb-4"><code>{`<form action="/submit" method="post">
    <label for="name">姓名：</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">邮箱：</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">留言：</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <input type="submit" value="提交">
</form>`}</code></pre>
              </div>
              <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="demo-name" className="block text-sm font-medium text-slate-700 mb-1">姓名：</label>
                    <input type="text" id="demo-name" name="name" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500" required />
                  </div>
                  <div>
                    <label htmlFor="demo-email" className="block text-sm font-medium text-slate-700 mb-1">邮箱：</label>
                    <input type="email" id="demo-email" name="email" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500" required />
                  </div>
                  <div>
                    <label htmlFor="demo-message" className="block text-sm font-medium text-slate-700 mb-1">留言：</label>
                    <textarea id="demo-message" name="message" rows={4} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-2 rounded-md hover:from-sky-600 hover:to-blue-600 transition-all duration-200">
                      提交
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* 学习建议 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl border border-sky-200 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-emerald-600 mb-6 border-l-4 border-emerald-400 pl-4">学习建议</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-emerald-700 mb-3">实践要点</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    多写代码，熟练掌握标签用法
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    注意HTML语义化编写
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    学会使用浏览器开发者工具
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    了解HTML5新特性
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-3">学习路径</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    HTML基础 → CSS样式 → JavaScript交互
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    响应式设计和移动端适配
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    前端框架学习（React、Vue等）
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    项目实战和作品集建设
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 
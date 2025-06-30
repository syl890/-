'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FeedbackForm {
  name: string;
  email: string;
  message: string;
  rating: string;
}

export default function Page() {
  const [feedbackForm, setFeedbackForm] = useState<FeedbackForm>({
    name: '',
    email: '',
    message: '',
    rating: '5'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FeedbackForm, value: string) => {
    setFeedbackForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedbackForm.name && feedbackForm.email && feedbackForm.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFeedbackForm({
          name: '',
          email: '',
          message: '',
          rating: '5'
        });
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-slate-100">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.05] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 mb-4">
            贵州酸汤鱼
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            舌尖上的贵州风情
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* 介绍部分 */}
          <section className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                贵州酸汤鱼是贵州饮食文化中的一颗璀璨明珠，它融合了贵州独特的地理环境与人文风情。酸汤鱼，是苗侗族的一道传统菜肴，据考证此菜肴最早源于黎平县雷洞镇牙双一带。制作原料主要有鱼肉、酸汤、山仓子等香料。成菜后，略带酸味、幽香沁人、鲜嫩爽口开胃，是贵州"黔系"菜肴的代表作之一。
              </p>
              <p className="text-slate-300">
                如果你想要了解更多贵州美食文化，可访问{' '}
                <a 
                  href="https://www.xiangha.com/xiaochi/guizhousheng/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 underline decoration-wavy"
                >
                  贵州美食网
                </a>
                。
              </p>
            </div>
          </section>

          {/* SVG 鱼形图标 */}
          <section className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-emerald-300 mb-6 text-center border-l-4 border-emerald-400 pl-4">
              美食图标
            </h2>
            <div className="flex justify-center">
              <svg width="150" height="150" viewBox="0 0 150 150" className="drop-shadow-lg">
                <defs>
                  <linearGradient id="fishGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#ea580c" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
                <path 
                  d="M15,75 Q75,15 135,75 Q75,135 15,75" 
                  fill="url(#fishGradient)" 
                  className="animate-pulse"
                />
                <circle cx="45" cy="60" r="4" fill="#1f2937" />
                <path d="M25,75 Q35,70 45,75 Q35,80 25,75" fill="#059669" opacity="0.7" />
              </svg>
            </div>
          </section>

          {/* 酸汤鱼图片 */}
          <section className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-orange-300 mb-6 border-l-4 border-orange-400 pl-4">
              美食展示
            </h2>
            <div className="flex justify-center">
              <Image 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=600&auto=format&fit=crop"
                alt="贵州酸汤鱼图片" 
                width={500} 
                height={300}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </section>

          {/* 独特魅力 */}
          <section className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-cyan-300 mb-6 border-l-4 border-cyan-400 pl-4">
              独特魅力
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold">✦</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">独特酸汤</h3>
                  <p className="text-slate-300">采用贵州本地红酸汤，酸辣浓郁。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold">✦</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">新鲜食材</h3>
                  <p className="text-slate-300">选用当地活鱼，肉质鲜嫩。</p>
                </div>
              </li>
            </ul>
          </section>

          {/* 制作步骤 */}
          <section className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-green-300 mb-6 border-l-4 border-green-400 pl-4">
              制作步骤
            </h2>
            <ol className="space-y-4">
              {[
                '准备食材：西红柿2个、凯里红酸汤100ml、米酸汤50ml、木姜子油5ml、木姜子20粒左右、贵州蘸水椒少许、蒜片、姜片、盐4勺、料酒、白胡椒粉少许、鸡精少许、小葱2棵（切段）、鱼腥草、金针菇、腐竹（泡好）等。',
                '把剖膛洗净的鲶鱼切成大段，加1勺盐、少许料酒腌10分钟左右，西红柿切块，备用。',
                '炒锅油热后，爆香姜片和蒜片，倒入凯里红酸汤和米酸汤，翻炒出香味。',
                '加入木姜子翻炒，加入西红柿块翻炒。',
                '倒入清水，根据口味调入盐，倒入木姜子油，加入少许白胡椒粉、鸡精，加入贵州蘸水椒。',
                '大火烧开后，把汤倒入火锅中，放入涮的菜和腌好的鲶鱼段，烧开后再煮几分钟即可食用。'
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="text-slate-300 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* 营养成分表 */}
          <section className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-yellow-300 mb-6 border-l-4 border-yellow-400 pl-4">
              营养成分表
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="border border-slate-600 p-4 text-left text-yellow-300 font-semibold">营养成分</th>
                    <th className="border border-slate-600 p-4 text-left text-yellow-300 font-semibold">含量</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="border border-slate-600 p-4 text-slate-300">蛋白质</td>
                    <td className="border border-slate-600 p-4 text-slate-300">20g</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="border border-slate-600 p-4 text-slate-300">脂肪</td>
                    <td className="border border-slate-600 p-4 text-slate-300">5g</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="border border-slate-600 p-4 text-slate-300">碳水化合物</td>
                    <td className="border border-slate-600 p-4 text-slate-300">3g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 嵌入视频 */}
          <section className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-red-300 mb-6 border-l-4 border-red-400 pl-4">
              制作视频教程
            </h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                src="https://www.bilibili.com/video/BV1eL411X76L?t=7.1" 
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>

          {/* 反馈表单 */}
          <section className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-pink-300 mb-6 border-l-4 border-pink-400 pl-4">
              你的酸汤鱼体验 - 留下你的反馈
            </h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">感谢您的反馈！</h3>
                <p className="text-slate-300">您的评价已成功提交</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    姓名:
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    value={feedbackForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    邮箱:
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    value={feedbackForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    留言:
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={feedbackForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    placeholder="分享您的酸汤鱼体验..."
                  />
                </div>
                
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-slate-300 mb-2">
                    评分:
                  </label>
                  <select 
                    id="rating" 
                    value={feedbackForm.rating}
                    onChange={(e) => handleInputChange('rating', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="1">1星</option>
                    <option value="2">2星</option>
                    <option value="3">3星</option>
                    <option value="4">4星</option>
                    <option value="5">5星</option>
                  </select>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  提交反馈
                </button>
              </form>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
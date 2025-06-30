'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Movie {
  id: string;
  title: string;
  description: string;
  highlight: string;
  rating: string;
  review: string;
  imageUrl: string;
}

interface UserRating {
  rating: string;
  comment: string;
}

const movies: Record<string, Movie[]> = {
  'sci-fi': [
    {
      id: 'interstellar',
      title: '《星际穿越》',
      description: '故事设定在未来，地球面临严重的粮食危机，人类生存岌岌可危。前NASA宇航员库珀，在一次意外中发现神秘的引力异常点，从而被卷入一场拯救人类的星际穿越任务。他穿越虫洞，前往遥远星系寻找新家园，期间遭遇了各种超乎想象的宇宙奇观与致命危机，像时间膨胀导致的一小时七年、令人胆寒的黑洞卡冈图雅。库珀与女儿墨菲之间跨越时空的情感羁绊，成为推动故事发展的情感内核，父女俩虽远隔浩瀚星河，却通过引力传递着爱与希望，最终库珀依靠爱的力量，在高维空间给过去的自己传递关键信息，完成拯救人类的使命。',
      highlight: '片中库珀对女儿墨菲说的那句 "不要温和地走进那个良夜" 自称经典，它传递出人类面对绝境时的不屈与抗争精神，激励着人们哪怕身处黑暗，也要勇敢地追寻光明。',
      rating: '9.4分',
      review: '与其说《星际穿越》是一部科幻电影，不如说它是一部探讨爱与希望、人类命运与宇宙奥秘的哲学史诗。影片中，爱被赋予了超越时空的力量，打破了维度的限制，让观众深刻领悟到，爱是人类最强大的武器，也是跨越一切艰难险阻的动力源泉。同时，影片也引发了人们对科技、人类未来以及宇宙探索的深刻思考。',
      imageUrl: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=2072&auto=format&fit=crop'
    }
  ],
  'romance': [
    {
      id: 'titanic',
      title: '《泰坦尼克号》',
      description: '1912 年 4 月 10 日，泰坦尼克号首航，贵族少女露丝与母亲及未婚夫卡尔登船，穷画家杰克赢下等舱船票。露丝厌倦上流社会，欲投海被杰克救下相识。杰克吸引露丝，两人感情升温。卡尔送"海洋之心"，露丝不为所动，让杰克画素描。4 月 14 日晚，船撞冰山沉没，杰克被陷害，露丝救出他，生死关头露丝放弃救生艇与杰克相拥。船沉，杰克将露丝推上木板，自己离世。多年后，年老露丝回忆点滴，抛"海洋之心"纪念爱情。',
      highlight: '杰克和露丝在船头感受海风的片段。',
      rating: '9.2分',
      review: '《泰坦尼克号》是一部跨越时间和空间的经典之作。它不仅仅是一部爱情片，更是一部关于人性、生命和希望的电影。影片中，杰克和露丝的爱情故事令人动容，他们跨越了阶级的差异，勇敢地追求自己的爱情，即使面临生死考验，也毫不退缩。这种纯粹的爱情，在当今社会显得尤为珍贵。同时，电影对泰坦尼克号沉没的场景还原得极其逼真，让观众仿佛身临其境，感受到了那场灾难的恐怖和无情。在灾难面前，人性的善恶也展现得淋漓尽致，有像卡尔这样自私自利的人，也有像杰克和露丝这样不离不弃的情侣，还有那些坚守岗位、舍己为人的船员。',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop'
    }
  ],
  'mystery': [
    {
      id: 'inception',
      title: '《盗梦空间》',
      description: '道姆·柯布是一位经验老道的窃贼，他能够潜入人们的梦境中，窃取潜意识中有价值的秘密。在一次任务中，柯布不仅要面对强大的竞争对手，还要面对自己内心的愧疚和痛苦。他被要求执行一项极具挑战性的任务——在他人的梦境中植入一个想法，从而改变这个人的行为。柯布带领着他的团队，深入层层梦境，遭遇了各种意想不到的危险和挑战。',
      highlight: '梦境中城市折叠的片段。',
      rating: '9.3分',
      review: '《盗梦空间》绝对是一部让人惊叹不已的神作！从剧情上来说，它复杂而又精妙，层层嵌套的梦境让人仿佛置身于一个神秘而又充满挑战的世界。每一次进入新的梦境，都让人充满期待，不知道接下来会发生什么。影片的视觉效果也非常出色，各种奇幻的梦境场景让人目不暇接。从颠倒的城市到无尽的走廊，每一个画面都充满了想象力。',
      imageUrl: 'https://images.unsplash.com/photo-1489599904632-8421fd054cdd?q=80&w=2070&auto=format&fit=crop'
    }
  ]
};

const categories = [
  { id: 'sci-fi', name: '科幻', bgClass: 'from-blue-600 via-purple-600 to-indigo-600' },
  { id: 'romance', name: '爱情', bgClass: 'from-pink-500 via-red-500 to-rose-600' },
  { id: 'mystery', name: '悬疑', bgClass: 'from-gray-600 via-slate-600 to-zinc-600' }
];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState('sci-fi');
  const [userRatings, setUserRatings] = useState<Record<string, UserRating>>({});
  const [ratingForms, setRatingForms] = useState<Record<string, { rating: string; comment: string }>>({});

  const handleRatingSubmit = (movieId: string) => {
    const form = ratingForms[movieId];
    if (form?.rating && form?.comment) {
      setUserRatings(prev => ({
        ...prev,
        [movieId]: {
          rating: form.rating,
          comment: form.comment
        }
      }));
      setRatingForms(prev => ({
        ...prev,
        [movieId]: { rating: '', comment: '' }
      }));
    }
  };

  const updateRatingForm = (movieId: string, field: 'rating' | 'comment', value: string) => {
    setRatingForms(prev => ({
      ...prev,
      [movieId]: {
        ...prev[movieId],
        [field]: value
      }
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-slate-100">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.05] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-4">
            电影推荐
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            探索精彩的电影世界，发现属于你的观影体验
          </p>
        </header>

        {/* 分类导航 */}
        <nav className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-full p-2 border border-slate-700">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 mx-1 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.bgClass} text-white shadow-lg transform scale-105`
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </nav>

        {/* 电影内容 */}
        <section className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-8 animate-pulse">
              {categories.find(cat => cat.id === activeCategory)?.name}电影
            </h2>
          </div>

          {movies[activeCategory]?.map((movie) => (
            <div
              key={movie.id}
              className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700 shadow-2xl mb-8 overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{movie.title}</h3>
                  <span className="text-yellow-400 text-xl font-semibold">⭐ {movie.rating}</span>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-300 mb-3">剧情简介</h4>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      {movie.description}
                    </p>
                    
                    <h4 className="text-xl font-semibold text-green-300 mb-3">精彩片段</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {movie.highlight}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-purple-300 mb-3">影评</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {movie.review}
                    </p>
                  </div>
                </div>

                {/* 用户评分区域 */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h4 className="text-xl font-semibold text-yellow-300 mb-4">你的评分与评价</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          评分 (1-10分)
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={ratingForms[movie.id]?.rating || ''}
                          onChange={(e) => updateRatingForm(movie.id, 'rating', e.target.value)}
                          className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          你的评价
                        </label>
                        <textarea
                          rows={3}
                          value={ratingForms[movie.id]?.comment || ''}
                          onChange={(e) => updateRatingForm(movie.id, 'comment', e.target.value)}
                          className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                          placeholder="分享你的观影感受..."
                        />
                      </div>
                      
                      <button
                        onClick={() => handleRatingSubmit(movie.id)}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        提交评价
                      </button>
                    </div>

                    {/* 显示用户评价 */}
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      {userRatings[movie.id] ? (
                        <div>
                          <h5 className="text-lg font-semibold text-cyan-300 mb-2">你的评价</h5>
                          <p className="text-yellow-400 mb-2">
                            用户评分：{userRatings[movie.id].rating} 分
                          </p>
                          <p className="text-slate-300">
                            用户评价：{userRatings[movie.id].comment}
                          </p>
                        </div>
                      ) : (
                        <div className="text-center text-slate-400 py-8">
                          <p>还没有评价，快来分享你的观影感受吧！</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 制作者信息 */}
        <footer className="text-center text-slate-400 text-sm mt-16">
          制作者：邵奕琳
        </footer>
      </main>
    </div>
  );
} 
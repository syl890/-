'use client';
import exercisesData from './exercises.json';
import { useState } from "react";
import WakaTimeClient from './wakatime-client';
import ExerciseCard from './exercise-card';

export default function Page() {
  // 分离主要练习和特殊练习
  const mainExercises = exercisesData.slice(0, 10);
  const specialExercises = exercisesData.slice(10);
  
  const [filteredExercises, setFilteredExercises] = useState(mainExercises);
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const allowedTags = [
    'React', 'CSS', 'JavaScript', 'API', '推荐'
  ];
  let allTags = Array.from(new Set(mainExercises.flatMap(exercise => exercise.tags))).filter(tag => allowedTags.includes(tag));
  // 让API始终排在第一个
  allTags = allTags.filter(tag => tag !== 'API');
  allTags = ['API', ...allTags];

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag);
    if (tag === 'all') {
      setFilteredExercises(mainExercises);
    } else {
      setFilteredExercises(mainExercises.filter(exercise => exercise.tags.includes(tag)));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDEwIDEwIGggNTAgdiA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODdDRUVCIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-gradient-to-r from-sky-100/80 to-blue-100/80 backdrop-blur-md shadow-lg border-b border-sky-200">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
                公务员考试
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent ml-2">
                  学习平台
                </span>
              </h1>
              <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
                为广大考生提供全面、系统的公务员考试备考资源和在线学习工具
              </p>
              <p className="text-slate-500 text-base max-w-2xl mx-auto mt-2">
                本学期的平时作业练习通过融合公务员考试的相关内容来展现
              </p>
              <div className="mt-8 inline-flex items-center space-x-2 bg-sky-500 text-white px-6 py-3 rounded-full shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">已完成 {mainExercises.length} 个学习模块</span>
              </div>
            </div>
          </div>
        </header>

        {/* Filter Navigation */}
        <nav className="bg-white/70 backdrop-blur-md py-6 border-b border-sky-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => handleTagFilter('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedTag === 'all'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-white/80 text-slate-600 hover:bg-sky-100 hover:text-sky-700 border border-sky-200'
                }`}
              >
                全部
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagFilter(tag)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg transform scale-105'
                      : 'bg-white/80 text-slate-600 hover:bg-sky-100 hover:text-sky-700 border border-sky-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content - 公务员考试练习 */}
        <main className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                explanation={exercise.explanation}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </main>

        {/* Special Section - 基础学习模块 */}
        <section className="bg-gradient-to-r from-slate-50 to-sky-50 border-t border-sky-200 py-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                基础学习模块
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                这些模块专注于前端开发的基础知识和实践技能
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialExercises.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  id={exercise.id}
                  title={exercise.title}
                  description={exercise.description}
                  explanation={exercise.explanation}
                  imageUrl={exercise.imageUrl}
                  link={exercise.link}
                  tags={exercise.tags}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-50 to-sky-50 border-t border-sky-200 mt-16">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">学习资源</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• 行测专项训练</li>
                  <li>• 申论写作指导</li>
                  <li>• 面试技巧分享</li>
                  <li>• 政策解读分析</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">考试服务</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• 在线模拟考试</li>
                  <li>• 成绩查询系统</li>
                  <li>• 岗位匹配推荐</li>
                  <li>• 备考计划制定</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">联系我们</h3>
                <div className="text-slate-600 space-y-2">
                  <p>📧 contact@gkstudyplatform.com</p>
                  <p>📞 400-123-4567</p>
                  <p>🏢 北京市朝阳区学习大厦</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-sky-200 mt-8 pt-6 text-center">
              <p className="text-slate-500 mb-4">
                © 2024 公务员考试学习平台. 为考生提供优质的学习资源和备考指导.
              </p>
              <WakaTimeClient />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

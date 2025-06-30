export default function StudyPlanDemo() {
  return (
    <div className="bg-gradient-to-r from-blue-700/40 to-blue-800/60 backdrop-blur-md border border-blue-600/50 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        智能学习计划
      </h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-blue-200">行政职业能力测验</span>
          <span className="text-cyan-400 font-semibold">每日2小时</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-blue-200">申论写作练习</span>
          <span className="text-cyan-400 font-semibold">每日1.5小时</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-blue-200">面试技巧训练</span>
          <span className="text-cyan-400 font-semibold">每周3次</span>
        </div>
        <div className="mt-4 p-3 bg-blue-900/40 rounded-lg">
          <p className="text-sm text-blue-200">
            💡 根据您的基础水平和目标分数，系统为您定制了专属的学习计划
          </p>
        </div>
      </div>
    </div>
  );
} 
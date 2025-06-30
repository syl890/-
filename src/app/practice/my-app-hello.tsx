export default function ExamSchedule() {
  return (
    <div className="bg-gradient-to-r from-slate-700/40 to-blue-800/60 backdrop-blur-md border border-blue-600/50 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        重要考试日程
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
          <h4 className="font-semibold text-blue-200 mb-2">国家公务员考试</h4>
          <p className="text-sm text-blue-300">报名时间：10月15日-24日</p>
          <p className="text-sm text-blue-300">笔试时间：11月26日</p>
          <div className="mt-2 px-2 py-1 bg-orange-600/20 text-orange-300 text-xs rounded">
            距离考试还有 42 天
          </div>
        </div>
        <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
          <h4 className="font-semibold text-blue-200 mb-2">省考联考</h4>
          <p className="text-sm text-blue-300">报名时间：2月份</p>
          <p className="text-sm text-blue-300">笔试时间：3月份</p>
          <div className="mt-2 px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded">
            提前准备中
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
        <p className="text-sm text-cyan-200">
          📅 系统会及时提醒您重要的考试节点和报名时间
        </p>
      </div>
    </div>
  );
} 
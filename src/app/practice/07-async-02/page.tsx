'use client';
import Link from 'next/link';
import { useState } from 'react';

type JobPosition = {
  id: string;
  title: string;
  department: string;
  location: string;
  level: string;
  requirements: string[];
  salary: string;
  description: string;
  matchScore: number;
};

type UserProfile = {
  education: string;
  major: string;
  experience: number;
  skills: string[];
  location: string;
  salaryExpectation: string;
};

export default function Page() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    education: '',
    major: '',
    experience: 0,
    skills: [],
    location: '',
    salaryExpectation: ''
  });
  const [recommendations, setRecommendations] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const mockPositions: JobPosition[] = [
    {
      id: '2024001',
      title: '税务管理员',
      department: '国家税务总局',
      location: '北京市',
      level: '主任科员',
      requirements: ['经济学类', '财会类', '本科以上', '2年以上工作经验'],
      salary: '8000-12000元',
      description: '负责税收征管、纳税服务、税务稽查等工作',
      matchScore: 0
    },
    {
      id: '2024002',
      title: '行政执法员',
      department: '市场监督管理局',
      location: '上海市',
      level: '科员',
      requirements: ['法学类', '管理学类', '本科以上', '应届毕业生'],
      salary: '6000-9000元',
      description: '负责市场监管执法、消费者权益保护等工作',
      matchScore: 0
    },
    {
      id: '2024003',
      title: '财务审计员',
      department: '审计署',
      location: '广州市',
      level: '副主任科员',
      requirements: ['会计学', '审计学', '硕士以上', '3年以上工作经验'],
      salary: '10000-15000元',
      description: '负责政府部门财务审计、专项审计等工作',
      matchScore: 0
    },
    {
      id: '2024004',
      title: '教育管理员',
      department: '教育部',
      location: '深圳市',
      level: '主任科员',
      requirements: ['教育学类', '管理学类', '本科以上', '5年以上工作经验'],
      salary: '9000-14000元',
      description: '负责教育政策制定、教育资源配置等工作',
      matchScore: 0
    },
    {
      id: '2024005',
      title: '环保监察员',
      department: '生态环境部',
      location: '杭州市',
      level: '科员',
      requirements: ['环境科学', '化学类', '本科以上', '1年以上工作经验'],
      salary: '7000-11000元',
      description: '负责环境监测、污染防治、生态保护等工作',
      matchScore: 0
    },
    {
      id: '2024006',
      title: '信息技术专员',
      department: '网信办',
      location: '成都市',
      level: '副主任科员',
      requirements: ['计算机类', '软件工程', '本科以上', '3年以上工作经验'],
      salary: '12000-18000元',
      description: '负责政府信息化建设、网络安全管理等工作',
      matchScore: 0
    }
  ];

  const educationOptions = ['本科', '硕士', '博士'];
  const majorOptions = ['经济学类', '法学类', '管理学类', '计算机类', '财会类', '教育学类', '环境科学', '其他'];
  const locationOptions = ['北京市', '上海市', '广州市', '深圳市', '杭州市', '成都市', '不限'];
  const skillOptions = ['财务管理', '法律知识', '数据分析', '项目管理', '公文写作', '外语能力', '计算机技能', '沟通协调'];

  const calculateMatchScore = (position: JobPosition, profile: UserProfile): number => {
    let score = 0;
    
    // 专业匹配 (30分)
    if (position.requirements.some(req => req.includes(profile.major))) {
      score += 30;
    }
    
    // 学历匹配 (20分)
    if (position.requirements.some(req => req.includes(profile.education))) {
      score += 20;
    }
    
    // 工作经验匹配 (25分)
    const expRequirement = position.requirements.find(req => req.includes('年'));
    if (expRequirement) {
      const requiredYears = parseInt(expRequirement.match(/\d+/)?.[0] || '0');
      if (profile.experience >= requiredYears) {
        score += 25;
      } else if (profile.experience >= requiredYears - 1) {
        score += 15;
      }
    }
    
    // 地点匹配 (15分)
    if (profile.location === '不限' || position.location === profile.location) {
      score += 15;
    }
    
    // 技能匹配 (10分)
    const skillMatch = profile.skills.some(skill => 
      position.description.includes(skill) || 
      position.requirements.some(req => req.includes(skill))
    );
    if (skillMatch) {
      score += 10;
    }
    
    return Math.min(score, 100);
  };

  const handleRecommendation = async () => {
    setLoading(true);
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const scoredPositions = mockPositions.map(position => ({
      ...position,
      matchScore: calculateMatchScore(position, userProfile)
    })).sort((a, b) => b.matchScore - a.matchScore);
    
    setRecommendations(scoredPositions);
    setShowResults(true);
    setLoading(false);
  };

  const handleSkillToggle = (skill: string) => {
    const newSkills = userProfile.skills.includes(skill)
      ? userProfile.skills.filter(s => s !== skill)
      : [...userProfile.skills, skill];
    
    setUserProfile(prev => ({ ...prev, skills: newSkills }));
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
            岗位匹配推荐系统
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            基于Fetch API的智能岗位推荐系统，根据个人背景匹配最适合的公务员职位
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* 个人信息表单 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 p-8">
            <h2 className="text-2xl font-bold text-sky-700 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              个人背景信息
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">学历</label>
                <select
                  value={userProfile.education}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, education: e.target.value }))}
                  className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="">请选择学历</option>
                  {educationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">专业类别</label>
                <select
                  value={userProfile.major}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, major: e.target.value }))}
                  className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="">请选择专业</option>
                  {majorOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">工作经验（年）</label>
                <input
                  type="number"
                  min="0"
                  max="30"
                  value={userProfile.experience}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, experience: parseInt(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="请输入工作年限"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">期望工作地点</label>
                <select
                  value={userProfile.location}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="">请选择地点</option>
                  {locationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-700 mb-3">专业技能（可多选）</label>
              <div className="flex flex-wrap gap-2">
                {skillOptions.map(skill => (
                  <button
                    key={skill}
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      userProfile.skills.includes(skill)
                        ? 'bg-sky-500 text-white'
                        : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleRecommendation}
                disabled={loading || !userProfile.education || !userProfile.major}
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-lg hover:from-sky-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 mx-auto"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    智能分析中...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    获取岗位推荐
                  </>
                )}
              </button>
            </div>
        </section>

          {/* 推荐结果 */}
          {showResults && (
            <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 p-8">
              <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                推荐结果 ({recommendations.length} 个岗位)
              </h2>
              
              <div className="grid gap-6">
                {recommendations.map((position) => (
                  <div key={position.id} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-1">{position.title}</h3>
                        <p className="text-slate-600">{position.department} • {position.location}</p>
                      </div>
                      <div className="text-right">
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          position.matchScore >= 80 ? 'bg-green-100 text-green-700' :
                          position.matchScore >= 60 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          匹配度 {position.matchScore}%
                        </div>
                        <div className="w-20 bg-slate-200 rounded-full h-2 mt-2">
                          <div 
                            className={`h-2 rounded-full ${
                              position.matchScore >= 80 ? 'bg-green-500' :
                              position.matchScore >= 60 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${position.matchScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-slate-500 text-sm">职级：</span>
                        <span className="font-medium text-slate-700">{position.level}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 text-sm">薪资：</span>
                        <span className="font-medium text-green-600">{position.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4">{position.description}</p>
                    
                    <div>
                      <span className="text-slate-500 text-sm">任职要求：</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {position.requirements.map((req, index) => (
                          <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 技术说明 */}
          <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 p-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              系统技术特点
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-4">核心功能</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-medium text-purple-700">智能匹配算法</h4>
                    <p className="text-sm text-slate-600 mt-1">基于多维度评分的岗位匹配</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-700">Fetch API调用</h4>
                    <p className="text-sm text-slate-600 mt-1">模拟异步数据获取和处理</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-green-700">动态表单</h4>
                    <p className="text-sm text-slate-600 mt-1">React受控组件实现</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-orange-600 mb-4">匹配规则</h3>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• 专业匹配：30分（专业对口加分）</li>
                    <li>• 学历要求：20分（满足学历要求）</li>
                    <li>• 工作经验：25分（经验年限匹配）</li>
                    <li>• 地理位置：15分（工作地点偏好）</li>
                    <li>• 技能相关：10分（专业技能契合）</li>
                    <li>• 总分100分，80分以上为高度匹配</li>
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
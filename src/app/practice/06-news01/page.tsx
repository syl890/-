'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30分钟 = 1800秒

  const questions = [
    {
      id: 1,
      question: "根据我国宪法，下列关于公民基本权利的表述，正确的是：",
      options: [
        "A. 公民在法律面前一律平等",
        "B. 公民享有绝对的言论自由",
        "C. 公民的财产权不受任何限制",
        "D. 公民有义务参加一切政治活动"
      ],
      correctAnswer: "A",
      explanation: "根据宪法第33条，中华人民共和国公民在法律面前一律平等。"
    },
    {
      id: 2,
      question: "我国的根本政治制度是：",
      options: [
        "A. 民族区域自治制度",
        "B. 人民代表大会制度",
        "C. 中国共产党领导的多党合作制度",
        "D. 基层群众自治制度"
      ],
      correctAnswer: "B",
      explanation: "人民代表大会制度是我国的根本政治制度。"
    },
    {
      id: 3,
      question: "下列关于行政处罚的说法，错误的是：",
      options: [
        "A. 行政处罚必须有法律依据",
        "B. 设定行政处罚必须公布",
        "C. 不满14周岁的人不予行政处罚",
        "D. 行政处罚可以适用追溯原则"
      ],
      correctAnswer: "D",
      explanation: "行政处罚不得追溯既往，不能适用追溯原则。"
    },
    {
      id: 4,
      question: "公文的主要特点不包括：",
      options: [
        "A. 由法定机关或组织制发",
        "B. 具有法定效力和规范体式",
        "C. 用于处理公务",
        "D. 可以随意修改内容"
      ],
      correctAnswer: "D",
      explanation: "公文具有严肃性，不可随意修改内容。"
    },
    {
      id: 5,
      question: "依据《公务员法》，公务员的义务不包括：",
      options: [
        "A. 忠于国家，忠于人民",
        "B. 模范遵守法律法规",
        "C. 保守国家秘密和工作秘密",
        "D. 可以从事营利性活动"
      ],
      correctAnswer: "D",
      explanation: "公务员不得从事营利性活动，这是法律明确禁止的。"
    }
  ];

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitExam = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return (correct / questions.length) * 100;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
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

        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-600 mb-4">
            在线模拟考试
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            公务员考试模拟练习系统，涵盖行测和申论核心知识点
          </p>
        </header>

        {!showResults ? (
          <div className="max-w-4xl mx-auto">
            {/* 考试状态栏 */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 p-6 mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="text-sm text-slate-600">
                    题目进度: <span className="font-semibold text-sky-600">{currentQuestion + 1}</span> / {questions.length}
                  </div>
                  <div className="w-32 bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-sky-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm text-slate-600">
                  剩余时间: <span className="font-mono text-orange-600 text-lg">{formatTime(timeLeft)}</span>
                </div>
              </div>
            </div>

            {/* 题目区域 */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 p-8 mb-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-slate-800 mb-4">
                  第 {currentQuestion + 1} 题
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {questions[currentQuestion].question}
                </p>
              </div>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option.charAt(0))}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                      selectedAnswers[currentQuestion] === option.charAt(0)
                        ? 'bg-sky-100 border-sky-500 text-sky-700'
                        : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* 导航按钮 */}
            <div className="flex justify-between items-center">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className="px-6 py-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                上一题
              </button>

              <div className="flex gap-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                      index === currentQuestion
                        ? 'bg-sky-500 text-white'
                        : selectedAnswers[index]
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleSubmitExam}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200"
                >
                  提交考试
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-lg hover:from-sky-600 hover:to-blue-600 transition-all duration-200"
                >
                  下一题
                </button>
              )}
            </div>
          </div>
        ) : (
          /* 考试结果 */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 p-8 mb-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-sky-700 mb-4">考试结果</h2>
                <div className="text-6xl font-bold mb-4">
                  <span className={`${calculateScore() >= 60 ? 'text-green-600' : 'text-red-600'}`}>
                    {calculateScore()}%
                  </span>
                </div>
                <p className="text-lg text-slate-600">
                  您答对了 {questions.filter((q, i) => selectedAnswers[i] === q.correctAnswer).length} 道题，共 {questions.length} 道题
                </p>
                <div className={`inline-block px-4 py-2 rounded-full text-white font-semibold mt-4 ${
                  calculateScore() >= 60 ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {calculateScore() >= 60 ? '✅ 通过' : '❌ 未通过'}
                </div>
              </div>

              {/* 答题详情 */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-700 mb-4">答题详情</h3>
                {questions.map((question, index) => (
                  <div key={index} className="border border-slate-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-slate-800">第 {index + 1} 题</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedAnswers[index] === question.correctAnswer
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {selectedAnswers[index] === question.correctAnswer ? '正确' : '错误'}
                      </span>
                    </div>
                    <p className="text-slate-700 mb-3">{question.question}</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-slate-500">您的答案：</span>
                        <span className={`font-medium ${
                          selectedAnswers[index] === question.correctAnswer
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}>
                          {selectedAnswers[index] || '未作答'}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500">正确答案：</span>
                        <span className="font-medium text-green-600">{question.correctAnswer}</span>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-blue-700 text-sm font-medium">解析：</span>
                      <span className="text-blue-600 text-sm">{question.explanation}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setSelectedAnswers([]);
                    setShowResults(false);
                    setTimeLeft(1800);
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-lg hover:from-sky-600 hover:to-blue-600 transition-all duration-200"
                >
                  重新考试
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 考试说明 */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-sky-200 p-6">
            <h3 className="text-lg font-semibold text-sky-700 mb-4">考试说明</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600">
              <div>
                <h4 className="font-medium text-slate-700 mb-2">考试规则</h4>
                <ul className="space-y-1">
                  <li>• 考试时间：30分钟</li>
                  <li>• 题目数量：5道选择题</li>
                  <li>• 及格分数：60分</li>
                  <li>• 可以返回修改答案</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-700 mb-2">技术特点</h4>
                <ul className="space-y-1">
                  <li>• React状态管理</li>
                  <li>• 实时计时功能</li>
                  <li>• 交互式答题界面</li>
                  <li>• 详细的结果分析</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
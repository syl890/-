'use client';

import { useState, useEffect } from 'react';

export default function WakaTimeClient() {
  const [stats, setStats] = useState<string>('正在加载编码时长...');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/wakatime');
        if (response.ok) {
          const data = await response.json();
          setStats(data.stats);
        } else {
          setStats('无法获取数据');
        }
      } catch (error) {
        console.error('Failed to fetch WakaTime stats:', error);
        setStats('获取失败');
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="text-center">
      <p className="text-slate-600">
        总编码时长: <span className="font-semibold text-sky-600">{stats}</span>
      </p>
    </div>
  );
} 
import { Suspense } from 'react';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API Key Not Configured";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WakaTime API request failed with status: ${response.status}`);
      console.error(`WakaTime API error response: ${errorText}`);
      return "Error Fetching Data";
    }

    const stats = await response.json();
    return stats.data?.text || "No activity yet";
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return "Server Error";
  }
}

async function WakaTimeData() {
    const stats = await getWakaTimeStats();
    return (
        <p className="text-slate-600">总编码时长: <span className="font-semibold text-sky-600">{stats}</span></p>
    );
}

export default function WakaTimeStats() {
  return (
    <div className="text-center">
      <Suspense fallback={<p className="text-slate-500">正在加载编码时长...</p>}>
        <WakaTimeData />
      </Suspense>
    </div>
  );
} 
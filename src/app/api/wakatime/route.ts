import { NextResponse } from 'next/server';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API Key Not Configured";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(url, {
      next: {
        revalidate: 3600, // 每小时重新获取一次数据
      },
    });

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

export async function GET() {
  const stats = await getWakaTimeStats();
  return NextResponse.json({ stats });
} 
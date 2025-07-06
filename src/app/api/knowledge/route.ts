// 基础CRUD接口示例
import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

// 创建知识条目
export async function POST(request: Request) {
  const data = await request.json();
  const entry = await prisma.knowledgeEntry.create({ data });
  return NextResponse.json(entry);
}

// 获取知识条目
export async function GET() {
  const entries = await prisma.knowledgeEntry.findMany();
  return NextResponse.json(entries);
}
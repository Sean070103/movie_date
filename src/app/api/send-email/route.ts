import { NextResponse } from 'next/server';

export async function POST() {
  // Only simulate sending, do not send any email
  return NextResponse.json({ message: 'Email (simulated) sent successfully' }, { status: 200 });
} 
"use client";

export const dynamic = "force-dynamic";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

export default function DeclineInvitePageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DeclineInvite />
    </Suspense>
  );
}

function DeclineInvite() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    const updateStatus = async () => {
      try {
        // Call API to record the 'no' answer
        await fetch('/api/response', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, answer: 'no' }),
        });
        setStatus('success');
      } catch {
        setStatus('error');
      }
    };
    if (email) updateStatus();
  }, [email]);

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232347] to-[#2d295c]">
        <div className="text-center bg-[#232347] border-4 border-[#ffe066] rounded-2xl p-8 max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-[#ffe066] mb-2 font-cinzel">Invalid Invitation</h1>
          <p className="text-lg text-white">No email address provided.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232347] to-[#2d295c]">
      <div className="text-center bg-[#232347] border-4 border-[#ffe066] rounded-2xl p-8 max-w-lg mx-auto shadow-2xl">
        <div className="text-5xl mb-2">🧙‍♂️</div>
        <h1 className="text-3xl font-bold text-[#ffe066] mb-2 font-cinzel">Hogwarts Movie Night</h1>
        <p className="text-lg text-white mb-4">Thank you for letting us know!<br/>Maybe next time, Muggle duties call. 🪄</p>
        <div className="bg-[#3a384d] border border-[#ffe066] rounded-lg p-4 mb-6 text-left text-white">
          <div><b>🎬 Movie:</b> Harry Potter and the Sorcerer&apos;s Stone</div>
          <div><b>📅 Date:</b> Saturday, May 11, 2024</div>
          <div><b>⏰ Time:</b> 9:00 PM</div>
          <div><b>🏰 Location:</b> jie jie maganda Discord server</div>
        </div>
        {status === 'loading' && <p className="text-[#ffe066]">Processing your RSVP...</p>}
        {status === 'success' && <p className="text-red-400 font-bold">Your answer: NO</p>}
        {status === 'error' && <p className="text-red-400 font-bold">Something went wrong. Please try again later.</p>}
      </div>
    </div>
  );
} 
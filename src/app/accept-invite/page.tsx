"use client";

export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

export default function AcceptInvitePageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AcceptInvite />
    </Suspense>
  );
}

function AcceptInvite() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const setStatus = useState<"loading" | "success" | "error">("loading")[1];

  useEffect(() => {
    const updateStatus = async () => {
      try {
        // Call API to record the 'yes' answer
        await fetch("/api/response", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, answer: "yes" }),
        });
        setStatus("success");
      } catch {
        setStatus("error");
      }
    };
    if (email) updateStatus();
  }, [email]);

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232347] to-[#2d295c]">
        <div className="text-center bg-[#232347] border-4 border-[#ffe066] rounded-2xl p-8 max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-[#ffe066] mb-2 font-cinzel">
            Invalid Invitation
          </h1>
          <p className="text-lg text-white">No email address provided.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232347] to-[#2d295c]">
      <div className="relative w-full h-full">
        <div className="pointer-events-none select-none absolute inset-0 w-full h-full z-0">
          <span className="absolute left-8 top-8 text-yellow-200 text-2xl animate-float-slow">
            ⭐
          </span>
          <span className="absolute right-8 top-12 text-white text-3xl animate-float-medium">
            ��
          </span>
          <span className="absolute left-1/4 bottom-10 text-yellow-300 text-xl animate-float-fast">
            🪄
          </span>
          <span className="absolute right-1/3 bottom-1/4 text-2xl animate-float-slow">
            🧙‍♂️
          </span>
          <span className="absolute left-1/2 top-1/3 text-xl animate-float-medium">
            ✨
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-lg bg-[#232347]/90 border-4 border-yellow-300 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
          <span className="text-5xl mb-2">🧙‍♂️</span>
          <h1 className="text-yellow-300 font-extrabold text-3xl sm:text-4xl mb-2 font-cinzel text-center drop-shadow-lg">
            Hogwarts Movie Night
          </h1>
          <p className="text-white text-lg text-center mb-2">
            Thank you for accepting the invitation!
            <br />
            Your magical RSVP has been received. 🦉 ✨
          </p>
          <div
            className="w-full bg-[#232347]/80 border-2 border-yellow-300 rounded-xl mb-6 p-4 text-left text-white shadow-lg flex flex-col gap-1"
            style={{ fontSize: "1rem" }}
          >
            <div>
              <b className="text-yellow-300">🎬 Movie:</b> Harry Potter and the
              Sorcerer&apos;s Stone
            </div>
            <div>
              <b className="text-yellow-300">📅 Date:</b> Sunday, May 11, 2025
            </div>
            <div>
              <b className="text-yellow-300">⏰ Time:</b> 9:00 PM
            </div>
            <div>
              <b className="text-yellow-300">🏰 Location:</b> jie jie maganda
              Discord server
            </div>
          </div>
          <div className="text-green-400 font-bold text-xl mb-4 animate-glow">
            Your answer: YES
          </div>
          <div className="text-pink-400 font-bold text-lg italic mt-2 flex items-center gap-2">
            See you, lovie!{" "}
            <span role="img" aria-label="love">
              💖
            </span>
            <span role="img" aria-label="wand">
              🪄
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

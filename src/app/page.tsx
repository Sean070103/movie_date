"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMediaQuery } from './use-media-query';

const magicalIcons = [
  { icon: '🦉', style: 'left-10 top-1/4', size: 'text-4xl', anim: 'fly-diag-1', delay: '0s' },
  { icon: '⚡', style: 'left-1/4 top-1/3', size: 'text-3xl', anim: 'fly-diag-2', delay: '1s' },
  { icon: '⭐', style: 'right-10 top-1/2', size: 'text-2xl', anim: 'fly-horiz', delay: '2s' },
  { icon: '🪄', style: 'right-1/4 bottom-1/4', size: 'text-3xl', anim: 'fly-diag-3', delay: '1.5s' },
  { icon: '🕶️', style: 'left-1/3 bottom-10', size: 'text-3xl', anim: 'fly-vert', delay: '2.5s' },
  { icon: '⏰', style: 'right-1/2 top-10', size: 'text-3xl', anim: 'fly-circle', delay: '0.5s' },
  { icon: '🧙‍♂️', style: 'left-1/2 top-1/6', size: 'text-4xl', anim: 'fly-diag-4', delay: '1.2s' },
  { icon: '🧹', style: 'right-1/3 bottom-1/6', size: 'text-3xl', anim: 'fly-diag-5', delay: '2.2s' },
  { icon: '🕯️', style: 'left-1/5 bottom-1/5', size: 'text-2xl', anim: 'fly-horiz', delay: '1.7s' },
  { icon: '🦁', style: 'right-1/5 top-1/5', size: 'text-2xl', anim: 'fly-diag-6', delay: '2.7s' },
  { icon: '🐍', style: 'left-1/6 top-1/2', size: 'text-2xl', anim: 'fly-vert', delay: '1.9s' },
  { icon: '🦅', style: 'right-1/6 bottom-1/2', size: 'text-2xl', anim: 'fly-circle', delay: '2.4s' },
  { icon: '🦡', style: 'left-1/5 top-1/5', size: 'text-2xl', anim: 'fly-diag-7', delay: '1.4s' },
];

export default function Home() {
  const router = useRouter();
  const [showWizards, setShowWizards] = useState(false);

  // shadcn/ui-style breakpoints
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1023px)');

  // Responsive magical icons
  const magicalIconSize = isMobile ? 'text-xl' : isTablet ? 'text-2xl' : 'text-3xl';
  const magicalIconOpacity = isMobile ? 'opacity-70' : isTablet ? 'opacity-80' : 'opacity-85';

  return (
    <main className="min-h-screen h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#232347] to-[#2d295c] relative overflow-hidden font-sans">
      {/* Animated Magical Harry Potter Effects */}
      <div className="pointer-events-none select-none absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-[#232347]/80" />
        {magicalIcons.map((item, i) => (
          <span
            key={i}
            className={`magical-float ${item.style} ${magicalIconSize} ${item.anim} ${magicalIconOpacity}`}
            style={{ animationDelay: item.delay }}
          >
            {item.icon}
          </span>
        ))}
      </div>
      <style jsx global>{`
        .magical-float {
          position: absolute;
          opacity: 0.85;
          filter: drop-shadow(0 2px 8px #0008);
        }
        .left-10 { left: 2.5rem; }
        .top-1\/4 { top: 25%; }
        .left-1\/4 { left: 25%; }
        .top-1\/3 { top: 33%; }
        .right-10 { right: 2.5rem; }
        .top-1\/2 { top: 50%; }
        .right-1\/4 { right: 25%; }
        .bottom-1\/4 { bottom: 25%; }
        .left-1\/3 { left: 33%; }
        .bottom-10 { bottom: 2.5rem; }
        .right-1\/2 { right: 50%; }
        .top-10 { top: 2.5rem; }
        .left-1\/2 { left: 50%; }
        .top-1\/6 { top: 16.6%; }
        .right-1\/3 { right: 33%; }
        .bottom-1\/6 { bottom: 16.6%; }
        .left-1\/5 { left: 20%; }
        .bottom-1\/5 { bottom: 20%; }
        .right-1\/5 { right: 20%; }
        .top-1\/5 { top: 20%; }
        .left-1\/6 { left: 16.6%; }
        .top-1\/2 { top: 50%; }
        .right-1\/6 { right: 16.6%; }
        .bottom-1\/2 { bottom: 50%; }
        /* Unique continuous animations */
        @keyframes fly-diag-1 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(80px, -120px) scale(1.1) rotate(12deg); }
        }
        @keyframes fly-diag-2 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(-100px, 100px) scale(1.1) rotate(-10deg); }
        }
        @keyframes fly-diag-3 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(120px, 80px) scale(1.1) rotate(8deg); }
        }
        @keyframes fly-diag-4 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(-120px, -80px) scale(1.1) rotate(-8deg); }
        }
        @keyframes fly-diag-5 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(100px, -100px) scale(1.1) rotate(10deg); }
        }
        @keyframes fly-diag-6 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(-80px, 120px) scale(1.1) rotate(-12deg); }
        }
        @keyframes fly-diag-7 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(60px, 60px) scale(1.1) rotate(6deg); }
        }
        @keyframes fly-horiz {
          0% { transform: translateX(0) scale(1) rotate(0deg); }
          100% { transform: translateX(120px) scale(1.05) rotate(8deg); }
        }
        @keyframes fly-vert {
          0% { transform: translateY(0) scale(1) rotate(0deg); }
          100% { transform: translateY(-120px) scale(1.05) rotate(-8deg); }
        }
        @keyframes fly-circle {
          0% { transform: rotate(0deg) translateX(0) scale(1); }
          25% { transform: rotate(90deg) translateX(30px) scale(1.1); }
          50% { transform: rotate(180deg) translateX(0) scale(1.05); }
          75% { transform: rotate(270deg) translateX(-30px) scale(0.95); }
          100% { transform: rotate(360deg) translateX(0) scale(1); }
        }
        .fly-diag-1 { animation: fly-diag-1 12s linear infinite alternate; }
        .fly-diag-2 { animation: fly-diag-2 13s linear infinite alternate; }
        .fly-diag-3 { animation: fly-diag-3 11s linear infinite alternate; }
        .fly-diag-4 { animation: fly-diag-4 14s linear infinite alternate; }
        .fly-diag-5 { animation: fly-diag-5 10s linear infinite alternate; }
        .fly-diag-6 { animation: fly-diag-6 12s linear infinite alternate; }
        .fly-diag-7 { animation: fly-diag-7 13s linear infinite alternate; }
        .fly-horiz { animation: fly-horiz 15s linear infinite alternate; }
        .fly-vert { animation: fly-vert 14s linear infinite alternate; }
        .fly-circle { animation: fly-circle 16s linear infinite alternate; }
        /* Wizards pop modal */
        .wizard-pop {
          animation: wizard-pop 0.5s cubic-bezier(.68,-0.55,.27,1.55) both;
        }
        @keyframes wizard-pop {
          0% { transform: scale(0) translateY(100px); opacity: 0; }
          80% { transform: scale(1.1) translateY(-10px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
      {/* Main Content Container */}
      <div className="container mx-auto px-2 sm:px-4 lg:px-8 flex items-center justify-center min-h-screen">
        {/* Card */}
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border-4 border-[#ffe066] rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row my-12" style={{borderRadius: '1.25rem'}}>
          {/* Left Side - Decorative */}
          <div className="relative flex flex-col items-center justify-center flex-1 p-4 bg-[#232347]/60 border-b-2 lg:border-b-0 lg:border-r-2 border-[#ffe066] min-h-[220px] overflow-hidden">
            {/* Magical Swirl Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute left-1/4 top-1/4 w-40 h-40 bg-gradient-to-tr from-yellow-200/30 via-purple-400/20 to-blue-400/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute right-1/4 bottom-1/4 w-32 h-32 bg-gradient-to-br from-yellow-300/20 via-pink-400/20 to-blue-300/10 rounded-full blur-2xl animate-pulse delay-500" />
            </div>
            {/* Floating Magical Icons */}
            <span className="absolute left-6 top-8 text-yellow-200 text-xl animate-float-slow z-10">⭐</span>
            <span className="absolute right-8 top-16 text-white text-2xl animate-float-medium z-10">🦉</span>
            <span className="absolute left-10 bottom-10 text-yellow-300 text-xl animate-float-fast z-10">🪄</span>
            {/* Floating Wizards */}
            <span className="absolute left-8 top-1/3 text-2xl animate-float-slow z-10">🧙‍♂️</span>
            <span className="absolute right-10 bottom-1/4 text-xl animate-float-medium z-10">🧙‍♂️</span>
            <span className="absolute left-1/2 bottom-8 text-3xl animate-float-fast z-10">🧙‍♂️</span>
            {/* Castle Emoji with Glow */}
            <div className="relative z-10 mb-2 mt-8 flex items-center justify-center">
              <span className="text-[2.5rem] drop-shadow-[0_0_16px_rgba(255,224,102,0.7)] animate-glow">🏰</span>
            </div>
            <h2 className="text-yellow-300 text-xl sm:text-2xl font-cinzel font-bold mb-1 text-center z-10">Hogwarts Castle</h2>
            <p className="text-white text-xs sm:text-sm text-center z-10">Where Magic Happens</p>
            <p className="text-yellow-100 text-xs italic mt-2 z-10">Let the magic begin!</p>
          </div>
          {/* Right Side - Content */}
          <div className="relative flex-1 flex flex-col justify-start items-center p-3 sm:p-5 lg:p-6 bg-transparent min-h-[220px]">
            {/* Top icons */}
            <div className="flex w-full justify-between items-start mb-1">
              <span className="text-2xl sm:text-3xl">🧙‍♂️</span>
              <span className="text-yellow-300 text-lg sm:text-xl">✨</span>
            </div>
            {/* Title */}
            <div className="w-full flex flex-col items-center mb-1">
              <span className="text-yellow-300 font-extrabold font-cinzel drop-shadow-lg text-lg sm:text-xl md:text-2xl text-center tracking-tight" style={{letterSpacing: '1px'}}>HOGWARTS<br className="hidden sm:block"/> MOVIE NIGHT</span>
            </div>
            {/* Lightning */}
            <div className="w-full flex justify-center mb-1">
              <span className="text-yellow-300 text-lg sm:text-xl">⚡</span>
            </div>
            {/* Invitation text */}
            <p className="text-white text-xs sm:text-sm font-medium text-center mb-1" style={{textShadow: '0 2px 8px #0008'}}>Dear Witch or Wizard,<br/>You&apos;ve been cordially invited to a magical movie night at Hogwarts!<br/>Will you join me for a spellbinding adventure?</p>
            {/* Info box */}
            <div className="w-full bg-[#232347]/70 border-2 border-[#ffe066] rounded-xl mb-3 p-2 text-left text-white shadow-lg flex flex-col gap-1" style={{fontSize: '0.85rem'}}>
              <div><b className="text-yellow-300">🪄 Movie:</b> Harry Potter and the Sorcerer&apos;s Stone</div>
              <div><b className="text-yellow-300">📅 Date:</b> Saturday, May 11, 2024</div>
              <div><b className="text-yellow-300">⏰ Time:</b> 9:00 PM</div>
              <div><b className="text-yellow-300">🏰 Location:</b> jie jie maganda Discord server</div>
            </div>
            {/* Buttons */}
            <div className="w-full flex flex-col gap-2 mt-1">
              <button
                className="w-full rounded-full font-bold shadow-xl transition transform hover:scale-105 flex items-center justify-center bg-yellow-400 text-[#232347] hover:bg-yellow-300 border-none outline-none backdrop-blur-md text-sm sm:text-base py-2 sm:py-2.5 px-2 sm:px-4"
                style={{ boxShadow: '0 6px 24px 0 rgba(255,224,102,0.18)' }}
                onClick={() => router.push('/accept-invite?email=magic@hogwarts.com')}
              >
                Accept the Owl Post <span className="ml-2" role="img" aria-label="owl">🦉</span>
              </button>
              <button
                className="w-full rounded-full font-bold shadow-xl transition transform hover:scale-105 flex items-center justify-center bg-[#d7263d] text-white hover:bg-[#a8001c] border-none outline-none backdrop-blur-md text-sm sm:text-base py-2 sm:py-2.5 px-2 sm:px-4"
                style={{ boxShadow: '0 6px 24px 0 rgba(215,38,61,0.18)' }}
                onClick={() => setShowWizards(true)}
              >
                Decline (Muggle Duty) <span className="ml-2" role="img" aria-label="broom">🧹</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Wizards Pop Modal */}
      {showWizards && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-[#232347] border-4 border-[#ffe066] rounded-2xl p-2 sm:p-4 shadow-2xl flex flex-col items-center max-w-xs sm:max-w-md mx-auto animate-fade-in" style={{height: 'min(90vh, 400px)'}}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="text-3xl sm:text-4xl md:text-5xl wizard-pop" style={{ animationDelay: `${i * 0.1}s` }}>🧙‍♂️</span>
              ))}
            </div>
            <h2 className="text-yellow-300 text-lg sm:text-xl md:text-2xl font-bold mb-2 font-cinzel drop-shadow-lg">Wizards say NO!</h2>
            <p className="text-white mb-4 sm:mb-6 text-xs sm:text-base md:text-lg">You can&apos;t decline a magical invitation that easily!<br/>Try again, brave witch or wizard.</p>
            <button
              className="mt-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full bg-yellow-400 text-[#232347] font-bold text-sm sm:text-base md:text-lg shadow hover:bg-yellow-300 transition"
              onClick={() => setShowWizards(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

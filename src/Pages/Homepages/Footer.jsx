import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white">

      <div className="max-w-6xl mx-auto px-4 py-8 text-center">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Keen Keeper
        </h1>

        <p className="text-xs md:text-sm opacity-70 mt-2 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* SOCIAL */}
        <h2 className="text-lg md:text-2xl mt-6">
          Social Link
        </h2>

        <div className="flex gap-4 justify-center mt-3">
          <img className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" src="/assets/instagram.png" alt="" />
          <img className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" src="/assets/facebook.png" alt="" />
          <img className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" src="/assets/twitter.png" alt="" />
        </div>

        {/* BOTTOM */}
        <div className="mt-8 border-t border-white/20 pt-4">

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm opacity-60">

            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex flex-wrap justify-center gap-3">
              <p className="cursor-pointer hover:opacity-100">Privacy Policy</p>
              <p className="cursor-pointer hover:opacity-100">Terms of Service</p>
              <p className="cursor-pointer hover:opacity-100">Cookies</p>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
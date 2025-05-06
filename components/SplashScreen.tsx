import { jersey10 } from '@/app/fonts';
import React from 'react';
import clsx from 'clsx';

const SplashScreen = ({ fadeOut }: { fadeOut: boolean }) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center w-full h-screen bg-[#111] text-white fixed top-0 left-0 transition-all duration-1000 z-50',
        fadeOut ? 'scale-200' : 'opacity-100 scale-100'
      )}
    > 
    {/* make zoom IN ZOOM IN~! */}
    {/* make localstorage key to determine if its s1ddiq */}
      <p className={`${jersey10.className} text-5xl text-yellow-300`}>s1ddiq's room</p>
    </div>
  );
};

export default SplashScreen;

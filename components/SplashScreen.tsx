'use client'

import { jersey10, pressStart } from '@/app/fonts'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

const bootLines = [
  'Loading kernel modules...',
  'Initializing RAM...',
  'Detecting floppy disk...',
  'Mounting /dev/s1ddiq...',
  'Initiating Launch Protocol',
  'Launching X11 retro GUI...',
  'Welcome to RetroLinux v3.1!',
]

const SplashScreen = ({ fadeOut }: { fadeOut: boolean }) => {
  const [zoom, setZoom] = useState(false)
  const [visibleLines, setVisibleLines] = useState<string[]>([])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < bootLines.length) {
        setVisibleLines((prev) => [...prev, bootLines[index]])
        index++
      } else {
        clearInterval(interval)
        setTimeout(() => setZoom(true), 1000)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center w-full h-screen bg-black text-green-400 fixed top-0 left-0 transition-all duration-1000 ease-in-out z-50 px-8',
        zoom ? 'scale-250 opacity-0' : 'scale-100 opacity-100'
      )}
    >
      <p className={`${jersey10.className} text-4xl mb-6 text-yellow-300`}>
        s1ddiq's room
      </p>
        <p className={`${pressStart.className} text-[6px]`}>#{Math.random() * 3}</p>
      <div className="font-mono text-sm leading-relaxed">
        {visibleLines.map((line, i) => (
          <p key={i} className="animate-pulse-fast">
            {`> ${line}`}
          </p>
        ))}
      </div>
    </div>
  )
}

export default SplashScreen

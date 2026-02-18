"use client";
import React, { useRef, useState } from 'react';

interface MediaProps {
  src: string;
  alt?: string;
  aspectRatio?: string;
  radius?: string;
  fillWidth?: boolean;
  className?: string;
  poster?: string;
}

export const Media = ({ src, alt, aspectRatio = "16 / 9", radius = "l", fillWidth, className }: MediaProps) => {
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className={`relative overflow-hidden cursor-pointer group ${fillWidth ? 'w-full' : ''} ${className}`}
      style={{ aspectRatio, borderRadius: `var(--radius-${radius})` }}
      onClick={isVideo ? togglePlay : undefined}
    >
      {isVideo ? (
        <>
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
              </div>
            </div>
          )}
        </>
      ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      )}
    </div>
  );
};
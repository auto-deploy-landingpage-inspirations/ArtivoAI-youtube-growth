"use client";

import { Pause, Play } from "lucide-react";
// components/AudioPlayer.tsx
import { useState } from "react";

const AudioPlayer: React.FC<{ src: string }> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const audioPlayer = document.getElementById(
      "audioPlayer"
    ) as HTMLAudioElement;

    if (audioPlayer) {
        audioPlayer.volume = 0.2; // Set the initial volume to 50%
      if (audioPlayer.paused) {
        audioPlayer.play();
        setIsPlaying(true);
      } else {
        audioPlayer.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audioPlayer = document.getElementById(
      "audioPlayer"
    ) as HTMLAudioElement;

    if (audioPlayer) {
      const volume = parseFloat(event.target.value);
      audioPlayer.volume = volume;
    }
  };

  return (
    <div className="flex">
      <audio id="audioPlayer" controls={false} loop src={src} >
        Your browser does not support the audio tag.
      </audio>
      <button onClick={handlePlayPause}>
        {isPlaying ? (
          <Pause className="h-5 w-5 text-zinc-400 items-center" />
        ) : (
          <Play className="h-5 w-5 text-zinc-400" />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;

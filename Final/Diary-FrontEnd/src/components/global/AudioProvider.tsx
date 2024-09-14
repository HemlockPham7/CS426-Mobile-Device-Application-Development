import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Audio, AVPlaybackStatus } from "expo-av";

type AudioContextType = {
  togglePlayPause: (uri: string, shouldLoop?: boolean) => Promise<void>;
  stopSound: () => Promise<void>;
  isPlaying: boolean;
  currentUri: string | null;
  progress: number;
  duration: number;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentUri, setCurrentUri] = useState<any | null>(null);
  const [status, setStatus] = useState<AVPlaybackStatus>();
  const [duration, setDuration] = useState<number>(1);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const togglePlayPause = async (path: any) => {
    if (sound && currentUri === path) {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    } else {
      if (sound) {
        await sound.unloadAsync();
      }
      const { sound: newSound } = await Audio.Sound.createAsync(path, {
        shouldPlay: true,
        isLooping: true,
      });
      setSound(newSound);
      setCurrentUri(path);
      setIsPlaying(true);

      newSound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
        if (status.isLoaded) {
          setIsPlaying(status.isPlaying);
          setStatus(status);
          setDuration(status.durationMillis!);
        }
      });
    }
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
      setCurrentUri(null);
    }
  };

  const position = status?.isLoaded ? status.positionMillis : 0;
  let progress: number = 0;
  if (position == duration) {
    progress = 0;
  } else {
    progress = position / (duration ? duration : 1);
  }

  return (
    <AudioContext.Provider
      value={{
        togglePlayPause,
        stopSound,
        isPlaying,
        currentUri,
        progress,
        duration,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = React.useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

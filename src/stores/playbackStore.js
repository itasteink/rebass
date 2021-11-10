import * as React from "react";
import { createContextHook } from "@kensie/create-context-hook";
import store from "store";

const INITIAL_VOLUME = store.get("volume");

const context = createContextHook(() => {
  const [playingId, setPlayingId] = React.useState();
  const [volume, setVolume] = React.useState(INITIAL_VOLUME);
  const [isMuted, setIsMuted] = React.useState(false);
  const [playbackPosition, setPlaybackPosition] = React.useState(0);
  const finalVolume = isMuted ? 0 : volume;

  React.useEffect(() => {
    store.set("volume", volume);
  }, [volume]);

  const playDemo = (id) => {
    setPlaybackPosition(0);
    setPlayingId(id);
  };

  const stopDemo = () => {
    setPlaybackPosition(0);
    setPlayingId();
  };

  const turnDownVolume = () => {
    if (volume <= 0.0) return;
    const newVolume = (Number.parseFloat(volume) - 0.1).toFixed(1);
    setVolume(newVolume);
  };

  const turnUpVolume = () => {
    if (volume >= 1.0) return;
    const newVolume = (Number.parseFloat(volume) + 0.1).toFixed(1);
    setVolume(newVolume);
  };

  const muteVolume = () => {
    if (isMuted) return setIsMuted(false);
    setIsMuted(true);
  };

  return {
    volume: finalVolume,
    playbackPosition,
    playingId,
    playDemo,
    stopDemo,
    turnDownVolume,
    turnUpVolume,
    muteVolume,
    setPlaybackPosition,
    setPlayingId,
    setVolume,
  };
});

export const [PlaybackProvider, usePlaybackStore] = context;

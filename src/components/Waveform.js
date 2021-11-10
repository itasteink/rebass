import Wavesurfer from "react-wavesurfer3"
import wavesurfer from "wavesurfer.js"
import styled from "styled-components"

// Why?
window.WaveSurfer = wavesurfer

export const Waveform = (props) => {
  return (
    <Wavesurfer
      audioFile={props.url}
      pos={props.playbackPosition}
      onPosChange={props.onPositionChange}
      playing={props.isPlaying}
      volume={props.volume}
      responsive
      zoom={0}
      options={{
        audioRate: 1,
        height: 200,
        waveColor: "#c2c0c2",
        progressColor: "#686668",
        cursorColor: "transparent",
      }}
    />
  )
}

Waveform.defaultProps = {
  url: undefined,
  position: undefined,
  onPositionChange: undefined,
  isPlaying: undefined,
}

const Wraoper = styled(Wavesurfer)``

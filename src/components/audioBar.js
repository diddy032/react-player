import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
export default function AudioBar() {
  return (
    <div>
      <AudioPlayer
        autoPlay
        src="/audio/URL Melt - Unicorn Heads.mp3"
        onPlay={(e) => console.log("onPlay")}
      />
    </div>
  );
}

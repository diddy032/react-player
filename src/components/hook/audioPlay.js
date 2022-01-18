import { useState, useEffect } from "react";

export default function useAudioPlay(urls) {
  //音樂播放的陣列
  const [sources] = useState(
    urls.map((url) => {
      return {
        url: url.AlbumAudio,
        audio: new Audio(url.AlbumAudio),
      };
    })
  );

  //音樂狀態的陣列
  const [players, setPlayers] = useState(
    urls.map((url) => {
      return {
        url: url.AlbumAudio,
        playing: false,
      };
    })
  );

  //音量
  const [volume, setVolume] = useState(20);

  //目前播放的物件
  const [nowPlayer, setNowPlayer] = useState(0);

  //偵測如果音樂狀態是true就播放，反之暫停
  useEffect(() => {
    sources.forEach((item, i) => {
      if (players[i].playing) {
        item.audio.play();
      } else {
        !players[i].followPlay && (item.audio.currentTime = 0);
        item.audio.pause();
      }
    });
    // sources.forEach((item, i) => {
    //   players[i].playing ? item.audio.play() : item.audio.pause();
    // });
  }, [sources, players]);

  //檢測音量數值
  useEffect(() => {
    sources.forEach((item, i) => {
      item.audio.volume = volume / 100;
    });
  }, [volume]);

  useEffect(() => {
    sources.forEach((item, i) => {
      item.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = false;
        setPlayers(newPlayers);
      });
    });
    return () => {
      sources.forEach((item, i) => {
        item.audio.removeEventListener("ended", () => {
          const newPlayers = [...players];
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      });
    };
  }, []);

  //點擊按鈕後的行為
  const toggle = (targetIndex, followPlay) => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex((e) => e.playing === true); //找出第幾個音樂播放
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
      followPlay && (newPlayers[targetIndex].followPlay = true);
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
  };

  const handleChangeMusecSec = (value) => {
    sources.forEach((item, i) => {
      if (players[i].playing) {
        let time = (value / 100) * item.audio.duration;
        item.audio.currentTime = time;
      }
    });
  };

  return [players, toggle, volume, setVolume, handleChangeMusecSec];
}

import { useState, useEffect, useMemo } from "react";

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
        followPlay: false,
        currentTime: 0,
      };
    })
  );

  //音量
  const [volume, setVolume] = useState(30);

  //目前播放的物件秒數
  const [secPercentage, setSecPercentage] = useState(0);

  //儲存 setIntervalId , 之後會需要取消
  const [intervalId, setIntervalId] = useState();

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
      newPlayers[currentIndex].followPlay = false;
      newPlayers[targetIndex].playing = true;
      newPlayers[targetIndex].followPlay = false;
      clearInterval(intervalId);
      setIntervalId(countMusicSec(sources[targetIndex]));
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
      if (followPlay) {
        newPlayers[targetIndex].followPlay = true;
        newPlayers[targetIndex].duration = sources[targetIndex].audio.duration;
        newPlayers[targetIndex].currentTime =
          sources[targetIndex].audio.currentTime;
      }
      clearInterval(intervalId);
    } else {
      newPlayers[targetIndex].playing = true;
      setIntervalId(countMusicSec(sources[targetIndex]));
    }
    setPlayers(newPlayers);
  };

  //計算秒數
  function countMusicSec(playing) {
    const refreshIntervalId = setInterval(() => {
      const totleLength = playing.audio.duration;
      const currentLenght = playing.audio.currentTime;
      const secPercentage = Math.ceil((currentLenght / totleLength) * 100);
      console.log("secPercentage:", secPercentage);
      setSecPercentage(secPercentage);
    }, 1000);

    return refreshIntervalId;
  }

  //計算拖曳的時間並且播放
  function handleChangeMusecSec(value) {
    sources.forEach((item, i) => {
      if (players[i].playing) {
        let time = (value / 100) * item.audio.duration;
        item.audio.currentTime = time;
      }
    });
  }

  return [
    players,
    toggle,
    volume,
    setVolume,
    handleChangeMusecSec,
    secPercentage,
  ];
}

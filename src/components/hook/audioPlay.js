import React, { useState, useEffect } from "react";

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

  //點擊按鈕後的行為
  const toggle = (targetIndex) => {
    console.log("點擊toggle的function:", targetIndex);
    const newPlayers = [...players];
    const currentIndex = players.findIndex((e) => e.playing === true); //找出第幾個音樂播放

    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
  };

  //偵測如果音樂狀態是true就播放，反之暫停
  useEffect(() => {
    sources.forEach((item, i) => {
      players[i].playing ? item.audio.play() : item.audio.pause();
    });
  }, [sources, players]);

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

  return [players, toggle];
}

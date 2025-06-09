// javascript.js

function changeVideo(playerId, videoId) {
  const iframe = document.getElementById(playerId);
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
}

// 必要に応じて今後追加機能を拡張できます。
// 例：自動スライド、トランジション効果、再生制御など

document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail-bar img");
  const mainVideo = document.getElementById("main-video");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const videoId = thumb.getAttribute("data-video");
      mainVideo.src = `https://www.youtube.com/embed/${videoId}`;

      thumbnails.forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });
});

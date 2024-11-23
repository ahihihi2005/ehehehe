document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const video1= document.getElementById("fullscreen-video1");
  const text= document.getElementById("text");
  // Khi nhấn Yes
  yesButton.addEventListener("click", () => {
    // Ẩn overlay
    overlay.style.display = "none";

    // Hiển thị video
    video1.style.display = "block";

    // Mở video ở chế độ toàn màn hình
    if (video1.requestFullscreen) {
      video1.requestFullscreen();
    } else if (video1.webkitRequestFullscreen) { // Safari
      video1.webkitRequestFullscreen();
    } else if (video1.msRequestFullscreen) { // IE/Edge
      video1.msRequestFullscreen();
    }

    // Phát video
    video1.play().catch((error) => {
      console.error("Cannot play video automatically:", error);
    });
  });
  // Khi nhấn No
  noButton.addEventListener("click", () => {
    text.style.display = "block";
  });
});
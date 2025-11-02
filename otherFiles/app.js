(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


  // function playVideo(src) {
  //   const modal = document.getElementById("videoModal");
  //   const video = document.getElementById("projectVideo");
  //   modal.style.display = "block";
  //   video.src = src;
  //   video.play();
  // }

  // function closeVideo() {
  //   const modal = document.getElementById("videoModal");
  //   const video = document.getElementById("projectVideo");
  //   modal.style.display = "none";
  //   video.pause();
  //   video.src = "";
  // }

  function openVideo(button) {
  const videoSrc = button.getAttribute("data-video");
  const overlay = document.getElementById("videoOverlay");
  const video = document.getElementById("overlayVideo");

  video.src = videoSrc;
  overlay.style.display = "flex";
  video.play();
}

function closeVideo() {
  const overlay = document.getElementById("videoOverlay");
  const video = document.getElementById("overlayVideo");

  video.pause();
  video.currentTime = 0;
  overlay.style.display = "none";
  video.src = ""; // reset to stop audio
}


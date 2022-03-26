(function () {
  window.URL.createObjectURL =
    window.URL.createObjectURL || window.webkitURL.createObjectURL;

  const video = document.querySelector('#basic video');
  const audio = document.querySelector('#basic audio');
  var paused = false;

  const stopVideoButton = document.querySelector('#basic #stop-button');
  const muteVideoButton = document.querySelector('#basic #mute-button');
  const unmuteVideoButton = document.querySelector('#basic #unmute-button');
  const toggle = document.querySelector('#toggle');

  var uploadField = document.getElementById('file-selector'),
    videoEle = document.getElementById('video-player'),
    timeCodeBtn = document.getElementById('time-code'),
    timeCodeHolder = document.getElementById('time-code-holder');

  muteVideoButton.onclick = function () {
    video.muted = true;
    videoEle.muted = true;
  };

  unmuteVideoButton.onclick = function () {
    video.muted = false;
    videoEle.muted = false;
  };

  stopVideoButton.onclick = function () {
    if (paused) {
      paused = false;
      video.play();
      videoEle.play();
      toggle.value = 'true';
    } else {
      paused = true;
      video.pause();
      videoEle.pause();
      toggle.value = 'false';
    }
  };

  // select a file
  uploadField.addEventListener('change', function () {
    videoEle.src = window.URL.createObjectURL(this.files[0]);
  });

  // click button
  timeCodeBtn.addEventListener('click', function () {
    timeCodeHolder.innerHTML = videoEle.currentTime + 's';
    videoEle.pause();
  });
})();

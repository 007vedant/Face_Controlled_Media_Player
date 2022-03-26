function canvas(ctx, callback) {
  var self = this;
  this.ctx = ctx;
  this.callback = callback;

  this.video = document.querySelector('#basic video');
  navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(
    function (stream) {
      // webcam input as a stream
      self.video.srcObject = stream;
      self.update();
    },
    function (err) {
      throw err;
    }
  );

  this.update = function () {
    var self = this;
    var last = Date.now();
    var loop = function () {
      var dt = Date.now() - last;
      self.callback(self.video, dt);
      last = Date.now();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  };
}

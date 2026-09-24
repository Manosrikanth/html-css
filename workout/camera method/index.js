function cam() {
    let cond = { video: true, audio: true };

    let video = document.querySelector("video");

    window.navigator.mediaDevices
        .getUserMedia(cond)
        .then((res) => video.srcObject = res);
}
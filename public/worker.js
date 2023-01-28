onmessage = function (event) {
  event.data.forEach((image) => {
    postMessage(image.src);
  });
};

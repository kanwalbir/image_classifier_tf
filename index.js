let net;

async function app() {
  console.log("Loading mobilnet ..");

  // Load the model.
  net = await modilenet.load();
  console.log("Sucessfully loaded model");

  // Make a preduction through the model on our image
  const imgEl = document.getElementById("img");
  const result = await net.classify(imgEl);
  console.log(result);
}

app();

// Classifier initialization
let video;
let label = "waiting.."
let classifier;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/667ZJVIwA/';

function classifyVideo() {
  classifier.classify(video, gotResults);
}

function gotResults(error, result) {
  if (error) {
    console.error(error)
    return
  }
  label = result[0].label;
  classifyVideo();
  trigger();
}
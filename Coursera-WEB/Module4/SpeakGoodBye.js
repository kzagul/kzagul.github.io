(function(window){
  let byeSpeaker = new Object();
  const speakWord = "Good Bye";

  byeSpeaker.speak = (name) => console.log(speakWord + " " + name)
  window.byeSpeaker = byeSpeaker;
})(window);
  
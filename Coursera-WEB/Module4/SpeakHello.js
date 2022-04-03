(function(window){
  let helloSpeaker = new Object();
  const speakWord = "Hello";
  
  helloSpeaker.speak = (name) => console.log(speakWord + " " + name)
  window.helloSpeaker = helloSpeaker;
})(window);
  
  
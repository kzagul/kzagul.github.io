(function () {
  const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  names.forEach(elem => {
    if (elem.charAt(0).toLowerCase() === 'j')  byeSpeaker.speak(elem)
    else (helloSpeaker.speak(elem))
  })
})();

const speak = message => {
    let msg = new SpeechSynthesisUtterance(message)
    let voices = window.speechSynthesis.getVoices()
    msg.voice = voices[4]
    window.speechSynthesis.speak(msg)
}

speak("Go home michael you're drunk")
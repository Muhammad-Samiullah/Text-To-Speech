let speech = new SpeechSynthesisUtterance();
speech.lang = "en-US";
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;
let voiceIndex = 0;



function setSpeech() {
    return new Promise(
        function (resolve, reject) {
            let synth = window.speechSynthesis;
            let id;

            id = setInterval(() => {
                if (synth.getVoices().length !== 0) {
                    resolve(synth.getVoices());
                    clearInterval(id);
                }
            }, 10);
        }
    )
}
voicesList = []
let s = setSpeech();
s.then((voices) => {
    // console.log(voices)
    voicesList = voices;
});


function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    speech.text = msg;
    
    window.speechSynthesis.speak(speech);
}

function changeLanguage() {
    if(voiceIndex < voicesList.length) {
        voiceIndex += 1;
    }
    else {
        voiceIndex = 0;
    }
    speech.voice = voicesList[voiceIndex];
}

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
    voicesList = voices;
    for(let i=0; i<voicesList.length; i++) {
        var option = document.createElement('option');
        option.innerText = 'Voice ' + (parseInt(i)+1);
        option.setAttribute('value', i);
        document.getElementById('voice-select').append(option)
    }
});

function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    speech.text = msg;
    
    window.speechSynthesis.speak(speech);
}

function changeLanguage() {
    let value = document.getElementById('voice-select').value;
    speech.voice = voicesList[value];
}

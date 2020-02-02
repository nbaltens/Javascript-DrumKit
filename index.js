document.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.btn[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('keyPress');
});

function removeTransition(e) {
    if(e.propertyName != 'transform') return;
    this.classList.remove('keyPress');
}

const keys = document.querySelectorAll('.btn');
keys.forEach(key => key.addEventListener('transitioned', removeTransition));

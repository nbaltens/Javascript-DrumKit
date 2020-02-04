function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('glow');
    audio.currentTime = 0;
    audio.play();
  }

function removeGlow(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('glow');
  }

const btn = document.querySelectorAll('.btn');
document.addEventListener('keydown', playSound);
btn.forEach(e => e.addEventListener('transitionend', removeGlow));

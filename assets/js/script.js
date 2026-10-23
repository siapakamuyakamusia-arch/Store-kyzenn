const audio = document.getElementById('bgMusic');
const overlay = document.getElementById('welcomeOverlay');
const mainContent = document.getElementById('mainContent');
const audioToggleBtn = document.getElementById('audioToggle');
const audioIcon = document.getElementById('audioIcon');
const musicDisc = document.getElementById('musicDisc');
const musicWave = document.getElementById('musicWave');
let isPlaying = false;

function initTypewriter() {
    const elements = document.querySelectorAll('.typewriter-text');
    elements.forEach(el => {
        const fullText = el.getAttribute('data-text');
        if (!fullText) return;

        let charIndex = 0;
        let isDeleting = false;

        function typeStep() {
            if (!isDeleting && charIndex <= fullText.length) {
                el.textContent = fullText.substring(0, charIndex);
                charIndex++;
                setTimeout(typeStep, 110);
            } else if (!isDeleting && charIndex > fullText.length) {
                setTimeout(() => { 
                    isDeleting = true; 
                    typeStep(); 
                }, 3000);
            } else if (isDeleting && charIndex >= 0) {
                el.textContent = fullText.substring(0, charIndex);
                charIndex--;
                setTimeout(typeStep, 45);
            } else if (isDeleting && charIndex < 0) {
                isDeleting = false;
                charIndex = 0;
                setTimeout(typeStep, 500);
            }
        }
        typeStep();
    });
}

initTypewriter();

function startCounters() {
    const counters = document.querySelectorAll('.counter');
    const duration = 3500; 

    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = counter.hasAttribute('data-decimal');
        let startTime = null;

        function easeOutExpo(t) {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }

        function countUp(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easedProgress = easeOutExpo(percentage); 
            
            const currentVal = target * easedProgress;
            
            if (isDecimal) {
                counter.innerText = currentVal.toFixed(1);
            } else {
                counter.innerText = Math.floor(currentVal);
            }

            if (progress < duration) {
                requestAnimationFrame(countUp); 
            } else {
                counter.innerText = isDecimal ? target.toFixed(1) : target;
            }
        }
        requestAnimationFrame(countUp);
    });
}

overlay.addEventListener('click', () => {
    audio.play().then(() => {
        isPlaying = true;
    }).catch(e => {
        console.log("Audio failed to play", e);
    });

    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        mainContent.style.display = 'flex'; 
        startCounters();
    }, 800);
});

audioToggleBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        audioIcon.classList.remove('fa-volume-high');
        audioIcon.classList.add('fa-volume-xmark');
        musicDisc.classList.remove('spin-active');
        musicWave.classList.remove('active');
    } else {
        audio.play();
        audioIcon.classList.remove('fa-volume-xmark');
        audioIcon.classList.add('fa-volume-high');
        musicDisc.classList.add('spin-active');
        musicWave.classList.add('active');
    }
    isPlaying = !isPlaying;
});

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const startButton = document.getElementById('start-button');
    const initialView = document.getElementById('initial-view');
    const mainContent = document.getElementById('main-content');
    const animatedText = document.getElementById('animated-text');
    const heartContainer = document.getElementById('heart-container');
    const proposalQuestion = document.getElementById('proposal-question');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const yesResponse = document.getElementById('yes-response');
    const resetContainer = document.getElementById('reset-container');
    const resetButton = document.getElementById('reset-button');
    const floatingHeartsContainer = document.querySelector('.floating-hearts-container');

    // Messages for typewriter effect
    const messages = [
        "Hari ini kayanya sibuk bangett yak",
        "BTW, kamu baik baik aja kann di sana?",
        "Aku ngga tau lagii mau ngapainn abis ini",
        "Ada sesuatu nihh buat kamu",
        "Tapi jangan kaget yak, karena ini khusus buat kamu dan aku mau tau jawaban muu :v"
    ];

    // Start button click event
    startButton.addEventListener('click', function() {
        initialView.classList.add('d-none');
        mainContent.classList.remove('d-none');
        typeWriter(messages, 0, 0);
    });

    // Typewriter effect function
    function typeWriter(messages, messageIndex, charIndex) {
        if (messageIndex < messages.length) {
            if (charIndex < messages[messageIndex].length) {
                animatedText.innerHTML += messages[messageIndex].charAt(charIndex);
                charIndex++;
                setTimeout(() => typeWriter(messages, messageIndex, charIndex), 50);
            } else {
                // Move to next message after delay
                setTimeout(() => {
                    animatedText.innerHTML = '';
                    typeWriter(messages, messageIndex + 1, 0);
                }, 1500);
            }
        } else {
            // All messages displayed, show heart and proposal
            heartContainer.classList.remove('d-none');
            setTimeout(() => {
                proposalQuestion.classList.remove('d-none');
            }, 1500);
        }
    }

    // Yes button click event
    yesButton.addEventListener('click', function() {
        proposalQuestion.classList.add('d-none');
        heartContainer.classList.add('d-none');
        yesResponse.classList.remove('d-none');
        resetContainer.classList.remove('d-none');
        
        // Create floating hearts animation
        createFloatingHearts();
    });

    // No button hover and click events
    noButton.addEventListener('mouseover', function() {
        // Move button to random position within viewport
        const viewportWidth = window.innerWidth - 100;
        const viewportHeight = window.innerHeight - 100;
        
        const randomX = Math.random() * viewportWidth;
        const randomY = Math.random() * viewportHeight;
        
        this.style.position = 'absolute';
        this.style.left = `${randomX}px`;
        this.style.top = `${randomY}px`;
    });
    
    noButton.addEventListener('click', function() {
        // This is unlikely to happen, but just in case
        alert("Hey! You caught me! But are you sure about that? 😢");
    });

    // Reset button click event
    resetButton.addEventListener('click', function() {
        // Reset all elements to initial state
        yesResponse.classList.add('d-none');
        resetContainer.classList.add('d-none');
        initialView.classList.remove('d-none');
        mainContent.classList.add('d-none');
        heartContainer.classList.add('d-none');
        proposalQuestion.classList.add('d-none');
        animatedText.innerHTML = '';
        
        // Clear any floating hearts
        if (floatingHeartsContainer) {
            floatingHeartsContainer.innerHTML = '';
        }
        
        // Reset no button position if it was moved
        noButton.style.position = '';
        noButton.style.left = '';
        noButton.style.top = '';
    });

    // Create floating hearts animation for "Yes" response
    function createFloatingHearts() {
        if (!floatingHeartsContainer) return;
        
        // Create 50 hearts
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('i');
                heart.classList.add('fas', 'fa-heart', 'floating-heart');
                
                // Random position, size, and delay
                const left = Math.random() * 100;
                const size = Math.random() * 1 + 0.5; // Size between 0.5 and 1.5rem
                const delay = Math.random() * 2;
                
                heart.style.left = `${left}%`;
                heart.style.fontSize = `${size}rem`;
                heart.style.animationDelay = `${delay}s`;
                
                floatingHeartsContainer.appendChild(heart);
                
                // Remove heart after animation completes
                setTimeout(() => {
                    heart.remove();
                }, 4000 + (delay * 1000));
                
            }, i * 100); // Stagger creation
        }
    }
});
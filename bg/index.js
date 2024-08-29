// index.js

document.querySelectorAll('.navbar .items a').forEach(link => {
    link.addEventListener('click', () => {
        const progressBar = document.querySelector('#bar');
        progressBar.style.width = '100%';

        // Reset progress bar after animation
        setTimeout(() => {
            progressBar.style.width = '0';
        }, 3000); // Match the duration of the transition (3000ms = 3s)
    });
});

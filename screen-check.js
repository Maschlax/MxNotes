function checkScreenWidth() {
    if (window.innerWidth < 450) {
        if (!window.location.href.includes('small-screen.html')) {
            window.location.href = 'small-screen.html';
        }
    } else if (window.location.href.includes('small-screen.html')) {
        window.location.href = 'index.html';
    }
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth); 
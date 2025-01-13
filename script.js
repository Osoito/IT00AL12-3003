document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('.nav-links a[href="#"]');
    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Home link clicked');
    });
});
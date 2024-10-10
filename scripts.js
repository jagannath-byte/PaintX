function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showImage(imgId) {
    var img = document.querySelector(`[alt='${imgId}']`).src;
    document.getElementById("lightbox-image").src = img;
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon.`);

    // Here you would typically send the data to your server or email service
});

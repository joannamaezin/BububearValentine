document.getElementById("no").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});

// When the "Yes" button is clicked, show a message
document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("message").innerHTML = "Yay! You made me the happiest! 💕";
});

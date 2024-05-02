document.addEventListener("DOMContentLoaded", function() {
    const imageGrid = document.getElementById("imageGrid");

    // Sample image URLs (replace with your own)
    const imageUrls = [
        "img/rd1.png",
        "img/rd1.png",
        "img/rd1.png",
        "img/rd1.png",
        "img/rd1.png",
        "img/rd1.png",
        "img/rd1.png",
        "img/rd1.png",
        "img/rd1.png",
        "img/rd1.png",
        "img/rd1.png",
        "img/rd1.png"
        
    ];

    // Load images into the grid
    imageUrls.forEach(function(url) {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Image";
        img.classList.add("img-thumbnail");
        img.addEventListener("click", function() {
            // Open image in a new tab when clicked
            window.open(url);
        });
        imageGrid.appendChild(img);
    });
});

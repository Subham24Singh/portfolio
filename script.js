// Profile image modal
document.querySelector('.profile-pic-container').addEventListener('click', function () {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    var img = this.querySelector('img');

    modal.style.display = "flex";
    modalImg.src = img.src;
});

// Close the modal when clicking on (x)
document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('myModal').style.display = "none";
});

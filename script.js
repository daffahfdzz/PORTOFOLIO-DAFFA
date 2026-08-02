const tombol = document.getElementById("scrollBtn");

tombol.addEventListener("click", () => {

    document.getElementById("about").scrollIntoView({

        behavior:"smooth"

    });

});
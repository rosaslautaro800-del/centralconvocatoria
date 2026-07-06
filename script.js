const intro = document.getElementById("intro");
const videoSection = document.getElementById("videoSection");
const video = document.getElementById("videoIntro");
const convocatoria = document.getElementById("convocatoria");
const musica = document.getElementById("musica");
const ingresarBtn = document.getElementById("ingresarBtn");

// Cuando hace clic en INGRESAR
ingresarBtn.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        videoSection.classList.add("active");

        video.play();

    },800);

});

// Cuando termina el video
video.addEventListener("ended", () => {

    videoSection.style.opacity = "0";

    setTimeout(() => {

        videoSection.style.display = "none";

        convocatoria.style.display = "flex";

        musica.play();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },700);

});
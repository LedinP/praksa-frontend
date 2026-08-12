function zamjeniTekst(){
    document.getElementById("demo").textContent="Tekst je zamjenjen koristeći JavaScript"
}

const buttonTheme = document.getElementById("buttonTheme");
    buttonTheme.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        buttonTheme.textContent = "Svijetla tema";
    } else {
        buttonTheme.textContent = "Tamna tema";
    }
});

let brojKlikova = 0;

const dugmeBrojac = document.getElementById("dugmeBrojac");
const prikazBroja = document.getElementById("brojKlikova");

dugmeBrojac.addEventListener("click", function(){
    brojKlikova++;
    prikazBroja.textContent = "Broj klikova: " + brojKlikova;
});

const dugmeReset = document.getElementById("dugmeReset");

dugmeReset.addEventListener("click", function() {
    brojKlikova = 0;
    prikazBroja.textContent = "Broj klikova: " + brojKlikova;
});
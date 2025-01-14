function obliczRate() {
    const kursReact = document.getElementById("kursReact").checked? parseInt(document.getElementById("kursReact").value) : 0;
    const kursJS = document.getElementById("kursJS").checked? parseInt(document.getElementById("kursJS").value) : 0;
    const liczbaRat = parseInt(document.getElementById("raty").value || 1;
    const miasto = document.getElementById?("miasto").value;

    const kosztCalkowity = kursReact + kursJS;
    const rata = (kosztCalkowity/liczbaRat).toFixed(2);

    document.getElementById("wynik").textContent='Kurs odbędzie się w ${miasto}.Koszt całkowity: ${kosztCalkowity} zł. Płacisz ${liczbaRat} rat po ${rata} zł.';

}
document.addEventListener("DOMContentLoaded", function () {

    // Agafem els textos guardats en els elements
    const textNom = sessionStorage.getItem('textoCopiaNom');
    const textCogNom1 = sessionStorage.getItem('textoCopiaCogNom1');
    const textCogNom2 = sessionStorage.getItem('textoCopiaCogNom2');
    const textEdad = sessionStorage.getItem('textoCopiaEdad');
    const textPais = sessionStorage.getItem('textoCopiaPais');
    const textCiudad = sessionStorage.getItem('textoCopiaCiudad');
    const textCalle = sessionStorage.getItem('textoCopiaCalle');
    const textEstudios = sessionStorage.getItem('textoCopiaEstudios');
    const textExperiencia = sessionStorage.getItem('textoCopiaExperiencia');
    const textIdiomas = sessionStorage.getItem('textoCopiaIdiomas');
    const textCualidades = sessionStorage.getItem('textoCopiaCualidades');
    const textExtra = sessionStorage.getItem('textoCopiaExtras');

    // Agafem els p del html curriculum i els omplim amb el textos guardats
    const resultadoElement1 = document.getElementById('resultadoNom');
    resultadoElement1.textContent = `${textNom}`;

    const resultadoElement2 = document.getElementById('resultadoCogNom');
    resultadoElement2.textContent = `${textCogNom1}` +' '+ `${textCogNom2}`;

    const resultadoElement4 = document.getElementById('resultadoEdad');
    resultadoElement4.textContent = `${textEdad}`;

    const resultadoElement5 = document.getElementById('resultadoPais');
    resultadoElement5.textContent = `${textPais}`;

    const resultadoElement6 = document.getElementById('resultadoCiudad');
    resultadoElement6.textContent = `${textCiudad}`;

    const resultadoElement7 = document.getElementById('resultadoCalles');
    resultadoElement7.textContent = `${textCalle}`;

    const resultadoElement8 = document.getElementById('resultadoEstudios');
    resultadoElement8.textContent = `${textEstudios}`;

    const resultadoElement9 = document.getElementById('resultadoLaboral');
    resultadoElement9.textContent = `${textExperiencia}`;

    const resultadoElement10 = document.getElementById('resultadoIdiomas');
    resultadoElement10.textContent = `${textIdiomas}`;

    const resultadoElement11 = document.getElementById('resultadoCualidades');
    resultadoElement11.textContent = `${textCualidades}`;

    const resultadoElement12 = document.getElementById('resultadoExtra');
    resultadoElement12.textContent = `${textExtra}`;

});


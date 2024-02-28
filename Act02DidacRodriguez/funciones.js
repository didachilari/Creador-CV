function session() {
    let usuari = "Didac";
    let contraseña = "1234";
    if (usuari === document.LogIn.username.value && contraseña === document.LogIn.password.value) {
        window.location = "crear.html";
    } else {
        alert("Nombre de usuario o contraseña incorrectas"); 
    }
}

function rellenar() {
    const inputNom = document.getElementById('nombre');
    const textoNom = inputNom.value;
    const inputCogNmom1 = document.getElementById('apellido1');
    const textoCogNom1 = inputCogNmom1.value;
    const inputCogNmom2 = document.getElementById('apellido2');
    const textoCogNom2 = inputCogNmom2.value;
    const inputEdad = document.getElementById('edad');
    const textoEdad = inputEdad.value;
    const inputPais = document.getElementById('pais');
    const textoPais = inputPais.value;
    const inputCiudad= document.getElementById('ciudad');
    const textoCiudad = inputCiudad.value;
    const inputCalle = document.getElementById('calle');
    const textoCalle = inputCalle.value;
    const inputEstudios = document.getElementById('estudios');
    const textoEstudios = inputEstudios.value;
    const inputExperiencia = document.getElementById('laboral');
    const textoExperiencia = inputExperiencia.value;
    const inputIdiomas = document.getElementById('idiomas');
    const textoIdiomas = inputIdiomas.value;
    const inputCualidades = document.getElementById('cualidades');
    const textoCualidades = inputCualidades.value;
    const inputExtras = document.getElementById('extra');
    const textoExtra = inputExtras.value;

    sessionStorage.setItem('textoCopiaNom', textoNom);
    sessionStorage.setItem('textoCopiaCogNom1', textoCogNom1);
    sessionStorage.setItem('textoCopiaCogNom2', textoCogNom2);
    sessionStorage.setItem('textoCopiaEdad', textoEdad);
    sessionStorage.setItem('textoCopiaPais', textoPais);
    sessionStorage.setItem('textoCopiaCiudad', textoCiudad);
    sessionStorage.setItem('textoCopiaCalle', textoCalle);
    sessionStorage.setItem('textoCopiaEstudios', textoEstudios);
    sessionStorage.setItem('textoCopiaExperiencia', textoExperiencia);
    sessionStorage.setItem('textoCopiaIdiomas', textoIdiomas);
    sessionStorage.setItem('textoCopiaCualidades', textoCualidades);
    sessionStorage.setItem('textoCopiaExtras', textoExtra);

    window.location = "curriculum.html";
}
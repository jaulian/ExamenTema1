const paginaNom = document.getElementById("paginaNom")
const enterNom = document.getElementById("enterNom")
const paginaEmail = document.getElementById("paginaEmail")
const enterEmail = document.getElementById("enterEmail")
const paginaPswd = document.getElementById("paginaPswd")
const enterPswd = document.getElementById("enterPswd")
const paginaFinal = document.getElementById("paginaFinal")
const nombreFinal = document.getElementById("nombreFinal")
const emailFinal = document.getElementById("emailFinal")
const pswdFinal = document.getElementById("pswdFinal")

const btnNext = document.getElementById("btnNext")

let cambio = 0;

paginaEmail.classList.add("hidden")
paginaPswd.classList.add("hidden")
paginaFinal.classList.add("hidden")

enterNom.focus()

btnNext.addEventListener('click', function() {

    cambio++

    switch (cambio) {
        case 1:
            paginaNom.classList.add("hidden")
            paginaEmail.classList.remove("hidden")
            enterEmail.focus()
            break;

        case 2:
            paginaEmail.classList.add("hidden")
            paginaPswd.classList.remove("hidden")
            enterPswd.focus()
            break;
            
        case 3:
            paginaPswd.classList.add("hidden")
            paginaFinal.classList.remove("hidden")
            btnNext.classList.add("hidden")
            break;

        default:
            break;
    }

    nombreFinal.innerText = "Nombre: "
    nombreFinal.append(enterNom.value)
    emailFinal.innerText = "Email: "
    emailFinal.append(enterEmail.value)
    pswdFinal.innerText = "Contraseña: "
    pswdFinal.append(enterPswd.value)
})

const estrella = document.getElementById("estrella")

estrella.classList.add("desaparecer")

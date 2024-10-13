window.addEventListener("load", function () {
    let reto2 = document.getElementById("reto2")
    let reto1 = document.getElementById("reto1")
    let ucarreras = document.getElementById("ucarreras")
    let ubienestar = document.getElementById("ubienestar")
    let univestigacion = document.getElementById("uinvestigacion")
    let uextension = document.getElementById("uextension")
    let reto61 = document.getElementById("reto61")
    let reto62 = document.getElementById("reto62")
    let reto81 = document.getElementById("reto81")
    let reto82 = document.getElementById("reto82")
    let reto91 = document.getElementById("reto91")
    let reto921 = document.getElementById("reto921")
    let reto922 = document.getElementById("reto922")

    if (reto1 != null) {
        reto1.addEventListener('click', function () {
            window.open("https://adalab.es/blog/historia-y-evolucion-mujeres-en-programacion")
        })
    }
    else if (reto2 != null) {
        reto2.addEventListener('click', function () {
            window.open("https://www.amazoncareerchoice.com/Home?country=CRI")
        })

    }
    else if (ucarreras != null) {
        ucarreras.addEventListener('click', function () {
            window.open("https://ucenfotec.ac.cr/carreras/")
        })
        ubienestar.addEventListener('click', function () {
            window.open("https://ucenfotec.ac.cr/bienestar-estudiantil/")
        })
        univestigacion.addEventListener('click', function () {
            window.open("https://ucenfotec.ac.cr/investigacion/")
        })
        uextension.addEventListener('click', function () {
            window.open("https://ucenfotec.ac.cr/extension/")
        })
    }
    else if (reto61 != null) {
        reto61.addEventListener('click', function () {
            window.open("https://www.getonbrd.com/empleos/diseno-ux")
        })
        reto62.addEventListener('click', function () {
            window.open("https://www.getonbrd.com/empleos/programacion")
        })
    }
    else if (reto81 != null) {
        reto81.addEventListener('click', function () {
            window.open("https://grupotsunami.com/nosotros/")
        })
        reto82.addEventListener('click', function () {
            window.open("https://grupotsunami.com/#contacto")
        })
    }


    else if (reto91 != null) {
        reto91.addEventListener('click', function () {
            window.open("pdf/horarios.pdf","_blank")
        })
        reto921.addEventListener('click', function () {
            window.open("pdf/musica.pdf","_blank")
        })
        reto922.addEventListener('click', function () {
            window.open("pdf/pintura.pdf","_blank")
        })
    }
  
})

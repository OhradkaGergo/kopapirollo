function KivalasztottKo ()
{
    let kepKo = document.getElementById("kepKo");
    kepKo.style.border = "2px red solid"
    kepPapir.style.border = "none"
    kepOllo.style.border = "none"

    const getRandomNumber = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
      
        return Math.floor(Math.random() * (max - min)) + min
    }

    const randomNumber = getRandomNumber(0, 2)
    let gepKep = document.getElementById("gepKep")

    switch(randomNumber) {
        case 0:
            gepKep.style.backgroundImage('url("./kő.png")')
            break;
        case 1:
            gepKep.style.backgroundImage('url("./papír.png")')
            break;
        case 3:
            gepKep.style.backgroundImage('url("./olló.png")')
            break;
    }
}

function KivalasztottPapir ()
{
    let kepPapir = document.getElementById("kepPapir");
    kepPapir.style.border = "2px red solid"
    kepKo.style.border = "none"
    kepOllo.style.border = "none"

    const getRandomNumber = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
      
        return Math.floor(Math.random() * (max - min)) + min
    }

    const randomNumber = getRandomNumber(0, 2)
    let gepKep = document.getElementById("gepKep")

    switch(randomNumber) {
        case 0:
            gepKep.style.backgroundImage('url("./kő.png")')
            break;
        case 1:
            gepKep.style.backgroundImage('url("./papír.png")')
            break;
        case 3:
            gepKep.style.backgroundImage('url("./olló.png")')
            break;
    }
}

function KivalasztottOllo ()
{
    let kepOllo = document.getElementById("kepOllo");
    kepOllo.style.border = "2px red solid"
    kepKo.style.border = "none"
    kepPapir.style.border = "none"

    const getRandomNumber = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
      
        return Math.floor(Math.random() * (max - min)) + min
    }

    const randomNumber = getRandomNumber(0, 2)
    let gepKep = document.getElementById("gepKep")

    switch(randomNumber) {
        case 0:
            gepKep.style.backgroundImage('url("./kő.png")')
            break;
        case 1:
            gepKep.style.backgroundImage('url("./papír.png")')
            break;
        case 3:
            gepKep.style.backgroundImage('url("./olló.png")')
            break;
    }
}
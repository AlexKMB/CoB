var cookiedisponible;
var totalcookie;

function statsauver() {
    localStorage.clicker = totalcookie
    document.getElementById("total").innerHTML = totalcookie + " cookie farmé"
}

function clicker() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clicker) {
            localStorage.clicker = Number(localStorage.clicker) + 1;
        }
        else {
            localStorage.clicker = 0;
        }
        document.getElementById("cookie").innerHTML = localStorage.clicker + " cookie disponible"
    }
}

function Marmotte() {
    console.log('ici')
    try {
        if (localStorage.getItem('clicker') > 10) {
            let count = localStorage.getItem('clicker');
            setInterval(_ => {
                localStorage.setItem('clicker', count++);
            }, 1000)
        } else {
            alert("pas assez de cookie du shnaps")
        }
    } catch (err) {
        console.error(err)
    }
}

function JeanKevin() {
    console.log('ici')
    try {
        if (localStorage.getItem('clicker') > 10) {
            localStorage.setItem('clicker', count2-10)
            let count2 = localStorage.getItem('clicker');
            setInterval(_ => {
                localStorage.setItem('clicker', count2+2);
            }, 1000)
        } else {
            alert("pas assez de cookie du shnaps")
        }
    } catch (err) {
        console.error(err)
    }
}

function JackLarnaque() {
    console.log('ici')
    try {
        if (localStorage.getItem('clicker') > 10) {
            let count2 = localStorage.getItem('clicker');
            setInterval(_ => {
                localStorage.setItem('clicker', count2+2);
            }, 1000)
        } else {
            alert("pas assez de cookie du shnaps")
        }
    } catch (err) {
        console.error(err)
    }
}

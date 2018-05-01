var cookiedisponible
function clicker(){
    if(typeof(Storage)!=="undefined"){
        if(localStorage.clicker){
            localStorage.clicker = number(localStorage.clicker) +1;
        }
        else{
            localStorage.clicker = 0;
        }
        document.getElementById("result").innerHTML = + localStorage.clicker + " cookie disponible"
    }
}
setInterval(croma,500)
function croma(){
red = Math.floor(Math.random(100) * 256);
green = Math.floor(Math.random(100) * 256);
blue = Math.floor(Math.random(100) * 256);
document.getElementById("user").style.color="rgb("+red+","+green+","+blue+")";
}

function level1(){
    localStorage.setItem("user",document.getElementById("user_name_input").value);
    localStorage.setItem("lvl","1");
    if(localStorage.getItem("lvl")==1)
    {
        window.location="2.level1.html";
    }

}
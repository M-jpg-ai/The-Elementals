window.onload=()=>{
	localStorage.setItem("clicked","no");
    player_update();
    demon_update();
    chest_update();
}

var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=280;

chest_x=800;
chest_y=350;

demon_x=650;
demon_y=300;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_object="";

var demon_object="";
var chest_object="";
bad_health=100;
health=100;



function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(200);
        player_object.scaleToHeight(200);
        player_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(player_object);
    });
}

function demon_update(){
    fabric.Image.fromURL("demon.png",function(Img){
        demon_object=Img;
        demon_object.scaleToWidth(150);
        demon_object.scaleToHeight(150);
        demon_object.set({
            top: demon_y,
            left:demon_x,
        });
        canvas.add(demon_object);
    });
// setInterval(() => {
//     demon_x=demon_x-10;
//     demon_update();
//     // while(demon_x>600)
//     // {

//     // }
// },500);
    

}



function chest_update(){
    fabric.Image.fromURL("chest.png",function(Img){
        chest_object=Img;
        chest_object.scaleToWidth(100);
        chest_object.scaleToHeight(100);
        chest_object.set({
            top: chest_y,
            left:chest_x,
        });
        canvas.add(chest_object);
    });
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var key_pressed = e.keyCode;

    
    if(key_pressed=="38"){
        up();
    }

    if(key_pressed=="37"){
        left();
    }

    if(key_pressed=="39"){
        right();
    }

    if(key_pressed=="40"){
        down();
    }

    
    
}

function up(){
    if (player_y>=0){
        canvas.remove(player_object);
        player_y=player_y-block_image_height;
       
        player_update();
    }
}

function down(){
    if (player_y<=400){
        canvas.remove(player_object);
        player_y=player_y+block_image_height;
       
        player_update();
    }
}

function left(){
    if (player_x>=0){
        canvas.remove(player_object);
        player_x=player_x - block_image_width;
        
        player_update();
    }
}

function right(){
    if (player_x<=850){
        canvas.remove(player_object);
        player_x=player_x+block_image_width;
       player_update();
    }
}

function punch(){
	localStorage.setItem("clicked","yes");

    bad_health=bad_health-5;
    document.getElementById("bad_health").innerHTML=bad_health;
    
}



function kick(){
	localStorage.setItem("clicked","yes");
    
    bad_health=bad_health-10;
    document.getElementById("bad_health").innerHTML=bad_health;
   
}

interval=setInterval(() => { check()},1 );;
attack_turn = "demon";
num=0;
function check(){
    if (health!=0 && bad_health!=0){if (attack_turn=="player"){
        document.getElementById("kick").style.display="inline";
			document.getElementById("punch").style.display="inline";  
		if(localStorage.getItem("clicked")=="yes"){		                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
			attack_turn="demon";
		}}
	if (attack_turn=="demon"){
        document.getElementById("kick").style.display="none";
		document.getElementById("punch").style.display="none";
        localStorage.setItem("clicked","no");
		num=Math.floor(Math.random(5)*10);
		health=health-num;
		document.getElementById("health").innerHTML=health;
	    attack_turn="player";
	}}
    if(bad_health<=0){
        clearInterval(interval);
        document.getElementById("div").innerHTML = "<div  id='deb' data-toggle='modal' data-target='#modal'></div><div class='modal fade' id='modal'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button></div><div class='modal-body'><img src='fire.jpg' class='img-responsive' id='modal_img'><h3 class='p_modal'>Yay <h3>"+localStorage.getItem("user")+"</h3> Won Against Him Look What He Left For You, Looks Like A Ring ,No But It Is A Fire Elemental Ring With Super Powers </h3><button class='btn btn-info' onclick='level2()'>Click Here For<b>Level 2</b></button></div></div></div></div>";
        deb.click();
        localStorage.setItem("lvl","2")
    }
    if(health<=0){
        clearInterval(interval);
        document.getElementById("div").innerHTML = "<div  id='deb' data-toggle='modal' data-target='#modal'></div><div class='modal fade' id='modal'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button></div><div class='modal-body'><img src='game_over.png' class='img-responsive' id='modal_img'><h3 class='p_modal'> <h3>"+localStorage.getItem("user")+"</h3>You lost ,try again to defeat that zombie.</h3><button class='btn btn-info' onclick='startOver()'> Start Over</button</div></div></div></div>";
        deb.click();
        localStorage.setItem("lvl","2")
    }
    console.log("hello");
}

function startOver(){
window.location="2.level1.html";
}
function level2(){
    window.location="3.level2.html";
}

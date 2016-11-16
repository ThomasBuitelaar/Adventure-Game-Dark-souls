document.getElementById('Opt1').innerHTML = "Talk to the Firekeeper";
document.getElementById('Opt2').innerHTML = 'Go to The High Wall of Lothric';
document.getElementById('Opt3').innerHTML = 'Light the Bonfire';
document.getElementById('level_title').innerHTML = 'Firelink Shrine';

var BonfireLit = false;
var HasKey = false;
var Souls = 0;
var SL = 1;
var Dia = 0;

function firekeeper(){
	console.log("Firelink Shrine")

	var opt1 = document.getElementById('Opt1');
	opt1.innerHTML = 'Level up';
	opt1.setAttribute("onClick", "javascript:levelUp()");

	document.getElementById('level_title').innerHTML = 'Firekeeper';

	//only allow option if binfire is lit//

	var opt2 = document.getElementById('Opt2');
	opt2.innerHTML = 'Talk';
	opt2.onclick = function(){
		var txt1 = document.getElementById('text1');
		txt1.innerHTML = 'Welcome to the bonfire, Unkindled One. I am a Fire Keeper. I tend to the flame, and tend to thee. The Lords have left their thrones, and must be deliverd to them. To this end, I am at thy side.';
	}
}



function wall(){

}

function bonfire(){

}

function dragon(){

}


function ladder(){

}


function archer(){

}


function winged(){

}


function vort(){

}
document.getElementById('Opt1').innerHTML = 'Start';
document.getElementById('level_title').innerHTML = 'Intro';

var BonfireLit = false
var HasKey = false;
var Souls = 900;
var SL = 1;

var opt1 = document.getElementById('Opt1');
var opt2 = document.getElementById('Opt3');
var opt3 = document.getElementById('Opt3');


function firelink(){
	console.log("firelink()");

	var opt1 = document.getElementById('Opt1');
	opt1.innerHTML = 'Talk to the firekeeper';
	opt1.setAttribute("onClick", "javascript:firekeeper();");

	var txt1 = document.getElementById('text1');
	txt1.innerHTML = '';


	var opt2 = document.getElementById('Opt2');
	opt2.innerHTML= 'Go to The High Wall of Lothric';
	opt2.onclick = function(){
		if(BonfireLit){
			highwall();
		} else {
			alert('You need to ignite the bonfire first.');
		}
	}

	var opt3 = document.getElementById('Opt3');
	opt3.innerHTML = 'Light the Bonfire';
	opt3.onclick = function(){
		BonfireLit = true;
	}

}

function firekeeper(){
	console.log("firekeeper()");
	var opt1 = document.getElementById('Opt1');
	opt1.innerHTML = 'Talk';
	opt1.onclick = function(){
		var txt1 = document.getElementById('text1');

		txt1.innerHTML = 'Welcome to the bonfire, Unkindled One. I am a Fire Keeper. I tend to the flame, and tend to thee. The Lords have left their thrones, and must be deliverd to them. To this end, I am at thy side.';
	}
	

	var opt2 = document.getElementById('Opt2');
	opt2.innerHTML = 'Level up';
	
	var opt3 = document.getElementById('Opt3');
	opt3.innerHTML = 'Back';
	opt3.onclick = function(){
		firelink();
	}

}


function highwall(){
	console.log("highwall()");
	opt1.innerHTML = 'Left';
	opt2.innerHTML = 'Back';
	opt3.innerHTML = 'Right';
	
	
}


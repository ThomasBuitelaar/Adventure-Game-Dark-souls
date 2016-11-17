var opt1 = document.getElementById('Opt1');
var opt2 = document.getElementById('Opt2');
var opt3 = document.getElementById('Opt3');
var txt1 = document.getElementById('text1');
var lvl = document.getElementById('level_title');

var BonfireLit = false
var HasKey = false;
var Souls = 0;
var SL = 1;


opt1.innerHTML = 'Start';
document.getElementById('level_title').innerHTML = 'Intro';
opt2.style.visibility = "hidden";
opt3.style.visibility = "hidden";

opt1.onclick = function(){
	opt2.style.visibility = "visible";
	opt3.style.visibility = "visible";
	firelink();
}


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


	opt2.onclick = function(){
		if(Souls >= 500){
			SL = SL + 1;
			console.log(SL);
		} else{
			alert('You need more souls.');
	}
	
}


	var opt3 = document.getElementById('Opt3');
	opt3.innerHTML = 'Back';
	opt3.onclick = function(){
		firelink();
	}

}


function highwall(){
	console.log("highwall()");
	lvl
	opt1.innerHTML = 'Left';
	opt1.onclick = function(){
		dragon();
	}

	opt2.innerHTML = 'Back to Firelink Shrine';
	opt2.onclick = function(){
		firelink();
	}

	opt3.innerHTML = 'Right';
	opt3.onclick = function(){
		ladder();
	}
	
	txt1.innerHTML = 'You arrive at The High Wall of Lothric. You gaze around, taking in the overwelming sight of giant castle looming in the distance';
	
}


function dragon(){
	console.log("dragon()");
	opt1.innerHTML = 'Charge in';
	opt1.onclick = function(){
		charge();
	}

	opt2.innerHTML = 'Back to The High Wall of Lothric';
	opt2.onclick = function(){
		highwall();
	}

	opt3.innerHTML = 'Try to sneak up to them';
	opt3.onclick = function(){
		sneak();
	}
txt1.innerHTML = 'You walk up some stairs. To your right is the backside of a giant petrified dragon. Gathering around him are three hollow soldiers. Will you attack these cursed undead and take their souls or will you leave them be? ';


function charge(){
	console.log("charge()");

}


function sneak(){
	console.log("sneak()");

}


}

function ladder(){
	console.log("ladder");

}
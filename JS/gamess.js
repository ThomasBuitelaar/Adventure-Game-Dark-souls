var opt1 = document.getElementById('Opt1');
var opt2 = document.getElementById('Opt2');
var opt3 = document.getElementById('Opt3');
var txt1 = document.getElementById('text1');
var lvl = document.getElementById('level_title');

var BonfireLit = false;
var HasKey = false;
var Souls = 0;
var SL = 1;


opt2.innerHTML = 'Start';
document.getElementById('level_title').innerHTML = 'Intro';
opt1.style.visibility = "hidden";
opt3.style.visibility = "hidden";
document.getElementById('ammsoul').style.visibility ="hidden";
opt2.onclick = function(){
	opt1.style.visibility = "visible";
	opt3.style.visibility = "visible";
	document.getElementById('ammsoul').style.visibility = "visible";
	document.getElementById('ammsoul').innerHTML = "Souls: 0"
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
		console.log(BonfireLit = true);
	}

}

function firekeeper(){
	console.log("firekeeper()");
	var opt1 = document.getElementById('Opt1');
	opt1.innerHTML = 'Talk';
	opt1.onclick = function(){
		var txt1 = document.getElementById('text1');

		txt1.innerHTML = 'Welcome to the bonfire, Unkindled One. I am a Fire Keeper. I tend to the flame, and tend to thee. The Lords have left their thrones, and must be deliver&#39;d to them. To this end, I am at thy side.';
	}
	


	var opt2 = document.getElementById('Opt2');
	opt2.innerHTML = 'Level up';


	opt2.onclick = function(){
		if(Souls >= 500){
			SL = SL + 1;
			Souls = Souls - 500;
			document.getElementById('ammsoul').innerHTML = "Souls: " + Souls;
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

function highwall2(){
	console.log("highwall2()");
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
	txt1.innerHTML="";
}


function highwall(){
	console.log("highwall()");
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
	txt1.innerHTML = 'You walk up some stairs. To your right is the backside of a giant petrified dragon. Gathering around him are three hollow soldiers. Two of them are asleep. Will you attack these cursed undead and take their souls or will you leave them be? ';

	opt1.innerHTML = 'Charge in';
	opt1.onclick = function(){
		charge();
	}


	opt2.innerHTML = 'Try to sneak up to them';
	opt2.onclick = function(){
		sneak();
		Souls = Souls + 600;
		document.getElementById('ammsoul').innerHTML = "Souls: " + Souls;

	}


	opt3.innerHTML = 'Back to The High Wall of Lothric';
	opt3.onclick = function(){
		highwall2();
	}
}



function charge(){
	console.log("charge()");
	txt1.innerHTML = 'You draw your sword and start running towards the closest enemy. This alerts the other two soldiers who jump up. you try to block their strikes with your shield, but your shield gives out at a simultaneous hit form the first and second soldier. The third soldier inserted his blade into your chest. YOU DIED.';
	opt1.style.visibility = "hidden";
	opt3.style.visibility = "hidden";

	opt2.innerHTML = 'Retry';

	opt2.onclick = function(){
		location.reload();
	}

}

function sneak(){
	console.log("sneak()");
	txt1.innerHTML = 'You stick to the walls, trying to make no sound. The standing soldier turns his back towards you.You impale the undead fiend from behind, trying not to make too much noise and wake up the sleeping soldiers.Walking up to the other undead who are still sound asleep. With a swing with your sword, you decapitate them and claim all their souls.you gaind 600 souls.';

}




function ladder(){
	console.log("ladder()");
	txt1.innerHTML = "You approach a seemingly empty room. A faint light shimmers near the wall to the left.  There are some barrels and boxes littered throughout the room. You hear a slight snoring from the back of the room. Will you go out and explore or go down a ladder that is in the middle of the room?";

	opt1.innerHTML = "Walk towards the light";
	opt1.onclick = function(){

	}
	opt2.innerHTML = "Descent down the ladder";
	opt2.onclick = function(){
		downLadder();
	}
	opt3.innerHTML = "Search the boxes for items";
	opt3.onclick = function(){
		searchBoxes();
	}

}

function searchBoxes(){
	console.log("searchBoxes()");
	txt1.innerHTML = "";

	opt1.style.visibility = "hidden";
	opt3.style.visibility = "hidden";
	opt2.innerHTML = "Retry";
	opt1.onclick = function(){
		location.reload();
	}


	opt2.innerHTML = "Retry"
	opt2.onclick = function(){
		location.reload();
	}
}

function walkLight(){
	console.log("walkLight()")
txt1.innerHTML = "";

	opt2.style.visibility = "hidden";

	opt3.innerHTML = "Back to The High Wall of Lothric";
	opt3.onclick = function(){
		highwall2();
	}



}

function downLadder(){
	console.log("downLadder()");
	txt1.innerHTML = "You climb down the ladder. To your left are stairs and to the right is a small allyway with a few archers.";
	opt1.innerHTML = "Go up the stairs";
	opt1.onclick = function(){
		firetower();
	}



	opt3.innerHTML = "Go down the ally";
	opt3.onclick = function(){
		
	}
}

function archers(){
	console.log("archers()");
	txt1.innerHTML = "";
}


function firetower(){
	console.log("firetower()");
	txt1.innerHTML = "";
	opt2.style.visibility = "hidden";
	opt1.innerHTML = "Run towards the gate";
	opt1.onclick = function(){
		fireRun();
	}
	opt3.innerHTML = "Try to hide behind a wall";
	opt3.onclick = function(){
		fireHide();
	}


	function fireRun(){
		txt1.innerHTML = "";

		opt1.innerHTML = "";
		opt2.innerHTML = "";
		opt3.innerHTML = "";

	}

	function fireHide(){
		txt1.innerHTML = "";

		opt2.style.visibility = "hidden";
		opt3.style.visibility = " hidden";
		opt1.innerHTML = "Retry";
		opt1.onclick =  function(){
			location.reload();
		}

	}

}
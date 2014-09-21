//SampleApp

var count=0;

var findspider : Texture2D;

function Start () {
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	
	GameObject.Find("briefing").guiText.text ="Have you heard?\n\nThere is a ghost\nlurking somewhere in the\ngalery.\n\nSee if you can find it!";
}



function Update () {	

	
	count++;
	if(SampleApp.animal==1){
	if(SampleApp.b2>-76 && count>250){Handheld.Vibrate(); Application.LoadLevel (1);}
	GameObject.Find("b2").guiText.text = ""+SampleApp.b2;
	}
	}
	
	

	
		
	//if (nod==true){GameObject.Find("GUI Text").guiText.text = "Close!";};
	//if (nod==false){GameObject.Find("GUI Text").guiText.text = "Far away!";};

	
	


//while(nod){	anim.SetInteger("close",1);};
//while(!nod){anim.SetInteger("close",0);};



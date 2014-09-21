#pragma strict

var anim : Animator;

var status2="neutral";
var negative=["Getting colder!", "You're getting lost!", "No!"];
var positive=["YES! This way!!", "Yes, this way! \n You're a genius!", "Right direction!!", "Yes! Good job!\nKeep going!!"];
var happy=["Hooray! Nearly\n found me.", "YES!! Almost there!", "GRRRREEAAAT!!"];
var furious=["Oh my god!!", "Turn around!", "The other way!"];
var shocked=["I'm getting\nimpatient!", "AAArrrggh!", "Wrong!", "No No Nooo!"];
var neutral=["I just don't \n know", "Hmmmm...", "???"]; 
var speak=0;
var count=0;
var count2=0;
var anim1=0;
static var intro =1; 


var introCount : int; 
var introSpeak=["Boooo!!", "Hello there\nstranger!", "I need to find\nthe Giant Deer", "Care to\nhelp me out?", "Walk back\npast the shop!"];
var introDurations=[330.0, 160.0, 160.0, 160.0, 160.0];
var a=0;

var endspeak=0;


function Start () {

if(SampleApp.animal==2){introSpeak=["Ah, I finally\nfound you!!", "I'm looking for\nthe big spider!", "It's somewhere in\nthe gallery.", "Go back past\nthe dinosaur!"];}

introCount=0; 
GameObject.Find("speak").guiText.text ="";
anim=this.GetComponent("Animator"); 
count=0;
status2="neutral";
speak=0;
intro=1;
endspeak=0;
count2=0;
SampleApp.nod=4;
}


function Update () {

if(SampleApp.animal==1){

if(SampleApp.deerConfirm==1){anim1=1;}


if(anim1){
if(introCount==0){a=250;}
if(introCount==1){a=160;}
if(introCount==2){a=160;}
if(introCount==3){a=160;}
if(introCount==4){a=160;}


	count2++;
	if(intro==1){
	if (speak==1){endspeak++;};
	if (endspeak>150){speak=0; endspeak=0; anim.SetInteger("speak",0);GameObject.Find("speak").guiText.text =" ";}

	if(count2>a){

	speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text = introSpeak[introCount]; count2=0; introCount++;}
	
	if (introCount>4 && count2>150){intro=0; anim.SetInteger("speak",0); speak=0; endspeak=0;}
}


if(intro==0){
	introCount=0;
	if (speak==1){endspeak++;
	if (endspeak>180){speak=0; endspeak=0; anim.SetInteger("speak",0); GameObject.Find("speak").guiText.text =" ";};
	}

if(speak==0){
	if (SampleApp.nod==1 && status2 != "victory"){status2="victory"; anim1=0;}; 
	if (SampleApp.nod==2 && status2 != "happy"){status2="happy"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =happy[Mathf.Floor(Random.Range(0,happy.Length))];};
	if (SampleApp.nod==3 && status2 != "positive"){status2="positive"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =positive[Mathf.Floor(Random.Range(0,positive.Length))];};
	if (SampleApp.nod==4 && status2 != "neutral"){status2="neutral"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =neutral[Mathf.Floor(Random.Range(0,neutral.Length))];};
	if (SampleApp.nod==5 && status2 != "negative"){status2="negative"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =negative[Mathf.Floor(Random.Range(0,negative.Length))];};
	if (SampleApp.nod==6 && status2 != "furious"){status2="furious"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =furious[Mathf.Floor(Random.Range(0,furious.Length))];};
	if (SampleApp.nod==7 && status2 != "shocked"){status2="shocked"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =shocked[Mathf.Floor(Random.Range(0,shocked.Length))];};
	}
}

}
}






if(SampleApp.animal==2){

if(SampleApp.spiderConfirm==1){anim1=1;}

if(anim1){
if(introCount==0){a=120;}
if(introCount==1){a=80;}
if(introCount==2){a=80;}
if(introCount==3){a=80;}

	count2++;
	if(intro==1){
	if (speak==1){endspeak++;};
	if (speak==1 && endspeak>70){speak=0; endspeak=0; anim.SetInteger("speak",0);GameObject.Find("speak").guiText.text =" ";}

	if(count2>a && speak==0){

	speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text = introSpeak[introCount]; count2=0; introCount++;}
	
	if (introCount>3 && count2>70){intro=0; anim.SetInteger("speak",0); speak=0; endspeak=0;}
}


if(intro==0){
	
	if (speak==1){endspeak++;
	if (endspeak>60){speak=0; endspeak=0; anim.SetInteger("speak",0); GameObject.Find("speak").guiText.text =" ";};
	}

if(speak==0){
	if (SampleApp.nod==1 && status2 != "victory"){status2="victory"; anim1=0;}; 
	if (SampleApp.nod==2 && status2 != "happy"){status2="happy"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =happy[Mathf.Floor(Random.Range(0,happy.Length))];};
	if (SampleApp.nod==3 && status2 != "positive"){status2="positive"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =positive[Mathf.Floor(Random.Range(0,positive.Length))];};
	if (SampleApp.nod==4 && status2 != "neutral"){status2="neutral"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =neutral[Mathf.Floor(Random.Range(0,neutral.Length))];};
	if (SampleApp.nod==5 && status2 != "negative"){status2="negative"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =negative[Mathf.Floor(Random.Range(0,negative.Length))];};
	if (SampleApp.nod==6 && status2 != "furious"){status2="furious"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =furious[Mathf.Floor(Random.Range(0,furious.Length))];};
	if (SampleApp.nod==7 && status2 != "shocked"){status2="shocked"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =shocked[Mathf.Floor(Random.Range(0,shocked.Length))];};
	}
}
}
}











}
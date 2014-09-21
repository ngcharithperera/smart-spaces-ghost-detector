#pragma strict

var anim : Animator;

var status2="neutral";
var negative=["Getting colder!", "You're getting lost!", "No!"];
var positive=["YES! This way!!", "Yes, this way! \n You're a genius!", "Yes! this is the\nright direction!", "Yes! Good job!"];
var happy=["Hooray! Nearly\n found me.", "YES!! Almost there!", "GRRRREEAAAT!!"];
var furious=["Oh my god!!", "Turn around!", "The other way!"];
var shocked=["I'm getting\nimpatient!", "AAArrrggh!", "Wrong!", "Are you\ncorrupted?!"];
var neutral=["I just don't \n know", "Hmmmm...", "Uhh..."];
var speak=0;
var count=0;
var comments=["BOOOOO!!", "Hello there stranger!\ncare to help me out?", "See, I'm a bit lost and \nneed to find the giant deer."]; 
var num_comment=0; 

function Start () {
GameObject.Find("speak").guiText.text ="";
anim=this.GetComponent("Animator"); 
count=0;
status2="neutral"; 
speak=0;
}


function Update () {

	if (speak>0){count++;};
	if(count>180){speak=0; count=0; anim.SetInteger("speak",0); GameObject.Find("speak").guiText.text ="";};

	if (SampleApp.nod==1 && status2 != "victory"){status2="victory"; speak=1;anim.SetInteger("speak",1); };
	if (SampleApp.nod==2 && status2 != "happy"){status2="happy"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =happy[Mathf.Floor(Random.Range(0,happy.Length))];};
	if (SampleApp.nod==3 && status2 != "positive"){status2="positive"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =positive[Mathf.Floor(Random.Range(0,positive.Length))];};
	if (SampleApp.nod==4 && status2 != "neutral"){status2="neutral"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =neutral[Mathf.Floor(Random.Range(0,neutral.Length))];};
	if (SampleApp.nod==5 && status2 != "negative"){status2="negative"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =negative[Mathf.Floor(Random.Range(0,negative.Length))];};
	if (SampleApp.nod==6 && status2 != "furious"){status2="furious"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =furious[Mathf.Floor(Random.Range(0,furious.Length))];};
	if (SampleApp.nod==7 && status2 != "shocked"){status2="shocked"; speak=1;anim.SetInteger("speak",1); GameObject.Find("speak").guiText.text =shocked[Mathf.Floor(Random.Range(0,shocked.Length))];};



}
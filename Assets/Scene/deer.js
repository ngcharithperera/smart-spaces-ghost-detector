//move


var vBTManagerJS : BTManagerJS;
var anim : Animator;
var noticeMessage = "null";
var vBTbeacon : BTbeacon;
var vBTbeaconArray = new Array();
var vBTRssiValue:int;
var vBTRssiValueOld:int;

var scream : AudioClip;
var laugh : AudioClip;
var growl : AudioClip;
var victory : AudioClip;
var happy : AudioClip;
var sad : AudioClip;

var deer:GameObject;

var status : String;
var placeholder="";

function Start () {

anim=this.GetComponent("Animator"); 
}

function Update () {
//GameObject.Find("b2b").guiText.text = "status: "+status +" nod: "+SampleApp.nod;  //locked to neutral
	if(SampleApp.deerConfirm && SampleApp.animal==1){anim.SetInteger("deer_enter",1);};
	if(bubble.intro==0 && SampleApp.animal==1){
	
	anim.SetInteger("intro2",0);
	status=placeholder;
	
	if (SampleApp.nod==1 ){anim.SetInteger("close",1); if(status != "victory"){status="victory"; Handheld.Vibrate(); audio.PlayOneShot(victory);};}
	if (SampleApp.nod==2){anim.SetInteger("close",2); if(status != "happy"){Handheld.Vibrate(); audio.PlayOneShot(laugh); status="happy";};};
	if (SampleApp.nod==3){anim.SetInteger("close",3); if(status != "positive"){Handheld.Vibrate(); audio.PlayOneShot(happy); status="positive";};};
	if (SampleApp.nod==4){anim.SetInteger("close",4); if(status != "neutral"){Handheld.Vibrate();  status="neutral";};};
	if (SampleApp.nod==5){anim.SetInteger("close",5); if(status != "negative"){Handheld.Vibrate(); audio.PlayOneShot(sad); status="negative";};};
	if (SampleApp.nod==6){anim.SetInteger("close",6); if(status != "furious"){Handheld.Vibrate();  status="furious";};};
	if (SampleApp.nod==7){anim.SetInteger("close",7); if(status != "shocked"){Handheld.Vibrate(); status="shocked"; audio.PlayOneShot(scream);};};
	
	}
	placeholder=status;

//GameObject.Find("b2").guiText.text = "status: "+status;  //victory
}
//if(!vibrate && SampleApp.nod==false){Handheld.Vibrate(); vibrate=1;};


//while(nod){	anim.SetInteger("close",1);};
//while(!nod){anim.SetInteger("close",0);};

//if(status=="angry" && !audio.isPlaying){audio.PlayOneShot(growl);}



	//if (nod==true){GameObject.Find("counter").guiText.material.color=Color.green;};
	//if (nod==false){GameObject.Find("counter").guiText.material.color=Color.white;};
	//if (nod==true){GameObject.Find("counter").guiText.text = "aaaaa!";};
	//if (nod==false){GameObject.Find("counter").guiText.text = "bbbbbb";};
	//if (nod==true){transform.Translate(Vector2(0,1)*0.01*Time.deltaTime);};
	//if (nod==false){transform.Translate(Vector2(0,1)*-0.01*Time.deltaTime);};
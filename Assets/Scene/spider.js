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
var placeholder : String;

var deer:GameObject;

var state ="neutral";


function Start () {

anim=this.GetComponent("Animator");  
placeholder="neutral";
}

function Update () {
	if(SampleApp.spiderConfirm && SampleApp.animal==2){anim.SetInteger("spider_enter",1);};

if(SampleApp.animal==2 && bubble.intro==0){
anim.SetInteger("intro2",0);



GameObject.Find("b2b2").guiText.text = "statusss: "+state +" nod: "+SampleApp.nod; //locked to neutral 

	GameObject.Find("b2").guiText.text = "status2: "+state +" placeholder: "+placeholder;
	anim.SetInteger("intro2",0);
	if (SampleApp.nod==1 && placeholder != "victory"){anim.SetInteger("close",1); placeholder="victory"; Handheld.Vibrate(); audio.PlayOneShot(victory); state="victory";};
	if (SampleApp.nod==2 && placeholder != "happy"){anim.SetInteger("close",2); placeholder="happy"; Handheld.Vibrate(); audio.PlayOneShot(laugh); state="happy";};
	if (SampleApp.nod==3 && placeholder != "positive"){anim.SetInteger("close",3); placeholder="positive"; Handheld.Vibrate(); audio.PlayOneShot(happy); state="positive";};
	if (SampleApp.nod==4 && placeholder != "neutral"){anim.SetInteger("close",4); placeholder="neutral"; Handheld.Vibrate();  state="neutral";};
	if (SampleApp.nod==5 && placeholder != "negative"){anim.SetInteger("close",5); placeholder="negative"; Handheld.Vibrate(); audio.PlayOneShot(sad); state="negative";};
	if (SampleApp.nod==6 && placeholder != "furious"){anim.SetInteger("close",6); placeholder="furious"; Handheld.Vibrate();  state="furious";};
	if (SampleApp.nod==7 && placeholder != "shocked"){anim.SetInteger("close",7); placeholder="shocked"; Handheld.Vibrate(); audio.PlayOneShot(scream); state="shocked";};
	
	
}

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
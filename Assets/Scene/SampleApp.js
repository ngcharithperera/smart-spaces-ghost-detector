//SampleApp


var vBTManagerJS : BTManagerJS;
var anim : Animator;
var noticeMessage = "null";
var vBTbeacon : BTbeacon;
var vBTbeacon2 : BTbeacon;
var vBTbeacon3 : BTbeacon;
var vBTbeacon4 : BTbeacon;
var vBTbeacon5 : BTbeacon;
var vBTbeacon6 : BTbeacon;

var beacon1 : BTbeacon;
var beacon2 : BTbeacon;
var beacon3 : BTbeacon;
var beacon4 : BTbeacon;
var beacon5 : BTbeacon;
var beacon6 : BTbeacon;

var best =-90;
var lastbest =-111; 
var bestid ="a";
var lastbestid ="b"; 

var vBTbeaconArray = new Array();
var vBTRssiValue1:int;
var vBTRssiValue2:int;
var vBTRssiValue3:int;
var vBTRssiValue4:int;
var vBTRssiValueOld:int;
var count=0;

var status="placeholder";
static var deerConfirm=0;
var deerPositive=0;
var deerVictory=0;
var deerNegative=0;

static var spiderConfirm=0;
var spiderPositive=0;
var spiderRight=0;
var spiderVictory=0;
var spiderNegative=0;

static var mouseConfirm=0;
var mousePositive=0;
var mouseRight=0;
var mouseVictory=0;
var mouseNegative=0;

var prevNod=4;
var nowNod=4;

static var animal=1;
var beaconstotal=0;

var state=4;
var prevState=4;

static var nod: int;
static var power=0.1;
static var powerb2=0.1;
static var b2=-100;
var deer:GameObject;
var spider:GameObject;

var testcount=0;


function Start () {
popup.popup=0;
deerConfirm=0;
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	anim=this.GetComponent("Animator");
	vBTbeaconArray = vBTManagerJS.getBTArray();
	
beacon1.rssi ="-100";
beacon2.rssi ="-100";
beacon3.rssi ="-100";
beacon4.rssi ="-100";
beacon5.rssi ="-100";
}


function Update () {

		animal=2;
				
		if(animal==2){Destroy (deer);};
		if(animal==3){Destroy (spider);};											
					
		for (var i=0; i<vBTbeaconArray.length; i++){
		vBTbeacon=vBTbeaconArray[i];
		if(animal==1){
		if(vBTbeacon.id=="01 FA FA FA 00 0D "){beacon1=vBTbeacon;} //
		if(vBTbeacon.id=="01 FA FA FA 00 0B "){beacon2=vBTbeacon;} //
		if(vBTbeacon.id=="01 FA FA FA 00 0C "){beacon3=vBTbeacon;} //
		//if(vBTbeacon.id=="01 FA FA FA 00 0B "){beacon4=vBTbeaconArray[i];} //
		}
		
		if(animal==2){
		if(vBTbeacon.id=="01 FA FA FA 00 0D "){beacon1=vBTbeacon;} //
		if(vBTbeacon.id=="01 FA FA FA 00 0B "){beacon2=vBTbeacon;} //
		if(vBTbeacon.id=="01 FA FA FA 00 0C "){beacon3=vBTbeacon;} //
		//if(vBTbeacon.id=="01 FA FA FA 00 0B "){beacon4=vBTbeaconArray[i];} //
		}
}		

		vBTRssiValue1 = int.Parse(beacon1.rssi);
		vBTRssiValue2 = int.Parse(beacon2.rssi);
		vBTRssiValue3 = int.Parse(beacon3.rssi);
		vBTRssiValue4 = int.Parse(beacon4.rssi);
		
		GameObject.Find("1").guiText.text = "Dinosaur: "+ vBTRssiValue1;
		GameObject.Find("2").guiText.text = "Deer: "+ vBTRssiValue2;
		GameObject.Find("3").guiText.text = "Spider: "+ vBTRssiValue3;
		
		GameObject.Find("4").guiText.text = "popup.confirm: "+popup.confirm+" status: "+status + " animal: "+animal+" spider:"+spiderConfirm;
		
		count++;
		
		if(count>90 && animal==1 && nod!=1){
		count=0;
		if(vBTRssiValue1>-70 && deerConfirm==0 && !popup.popup){status="deerEnter"; popup.popup=1;}
		
		if(vBTRssiValue1>-70 && deerPositive==1 && !popup.popup && bubble.intro==0 &&deerNegative==0){deerPositive=0; status="deerNegative"; popup.popup=1;}
		if(vBTRssiValue3>-85 && deerConfirm==1 && !popup.popup && deerPositive!=1 && bubble.intro==0 && !deerNegative){status="deerNegative"; popup.popup=1;}
		
		//if(vBTRssiValue1>-70 && !deerPositive && !popup.popup && bubble.intro==0 &&deerNegative==1){deerNegative=0; status="deerPositive"; popup.popup=1;}
		
		if(vBTRssiValue2>-84 && deerPositive==0 && deerConfirm==1 && bubble.intro==0 && !popup.popup){status="deerPositive"; popup.popup=1; deerNegative=0;}
		
		if(vBTRssiValue2>-70 && deerVictory==0 && deerPositive==1 && !popup.popup && bubble.intro==0){status="deerVictory"; popup.popup=1;}
		}
		
		if(count>90 && animal==2 && nod!=1){
		count=0;
		if(vBTRssiValue2>-70 && spiderConfirm==0 && !popup.popup){status="spiderEnter"; popup.popup=1;}
		if(vBTRssiValue2>-70 && spiderRight==1 && !popup.popup && !spiderNegative && bubble.intro==0){spiderRight=0; status="spiderNegative"; popup.popup=1;}
		
		if(vBTRssiValue1>-84 && spiderRight==0 && spiderConfirm==1 && bubble.intro==0 && !popup.popup){spiderNegative=0; status="spiderRight"; popup.popup=1;}
	//	if(vBTRssiValue1>-80 && spiderPositive==1 && !popup.popup && !spiderNegative && bubble.intro==0){spiderPositive=0; status="spiderNegative"; popup.popup=1;}
		
		if(vBTRssiValue3>-82 && spiderPositive==0 && spiderRight==1 && !popup.popup && bubble.intro==0){spiderNegative=0; status="spiderPositive"; popup.popup=1;}
		
		if(vBTRssiValue3>-65 && spiderVictory==0 && spiderPositive==1 && !popup.popup && bubble.intro==0){status="spiderVictory"; popup.popup=1;}
		}
		
		if(popup.confirm && nod!=1){
			
			count=0;
			if(status=="deerEnter"){deerConfirm=1; popup.confirm=0;}
			if(status=="deerPositive"){deerPositive=1; nod=2; popup.confirm=0;}
			if(status=="deerNegative" && deerNegative==0){deerNegative=1; nod=5; popup.confirm=0;}
			if(status=="deerNegative" && deerNegative==1 && nod!=6){deerNegative=1; nod=6; popup.confirm=0;}
			if(status=="deerVictory"){deerVictory=1; nod=1; popup.confirm=0;}
			
			if(status=="spiderEnter"){spiderConfirm=1; popup.confirm=0;}
			if(status=="spiderRight"){spiderRight=1; nod=3; popup.confirm=0;}
			if(status=="spiderPositive"){spiderPositive=1; nod=2; popup.confirm=0;}
			if(status=="spiderNegative" && spiderNegative==0){spiderNegative=1; nod=5; popup.confirm=0;}
			if(status=="spiderVictory"){spiderVictory=1; nod=1; popup.confirm=0;}
		}
	
	}



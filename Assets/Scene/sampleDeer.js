/////////////////////////////////////////////////////////////////////////                                                                     //
// This is a smple code that show how to access the list of detected   //
// Bluetooth beacons. The data retrieved from each BTBeacon is stored  //
// in an array. This array can be retrieved by calling 'getBTArray()'  //     
//  ..... Created by Charith Perera on 08-05-2014                      //
/////////////////////////////////////////////////////////////////////////

//WARNING: DO NOT CHANGE BUNDLE IDENTIFIER NAME

//create a variable to access the JS script
var vBTManagerJS : BTManagerJS;
var anim : Animator;
var noticeMessage = "null";
var vBTbeacon : BTbeacon;
var vBTbeaconArray = new Array();

var beacon1rss;
var beacon2rss;
var beacon3rss;

var count=0;

function Start () {
anim=this.GetComponent(Animator); 
vBTbeaconArray = vBTManagerJS.getBTArray();
}




function Update () {	

	
	vBTbeacon= vBTbeaconArray[0];
	if(int.Parse(vBTbeacon.rssi)>-60){anim.SetInteger("close",1);}
	if(int.Parse(vBTbeacon.rssi)<-60){anim.SetInteger("close",0);}


}
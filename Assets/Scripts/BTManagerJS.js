/////////////////////////////////////////////////////////////////////////                                                                     //
// This Manager exposes the data retrived from BTBeacons to other JS   //
// part of the Unity project.. Created by Charith Perera on 08-05-2014 //
/////////////////////////////////////////////////////////////////////////

//WARNING: DO NOT CHANGE BUNDLE IDENTIFIER NAME

//create a variable to access the C# script
public var csScript : BTWrapperCS; 

public var BTBeaconInformationJS = "null";
var BTbeaconArray = new Array(); 


var id;   // Bluetooth UID
var rssi; //  Received Signal Strength Indicator (RSSI)
var sd;   // Standard Deviation


function Awake()
{
	//Get the CSharp Script
	//Don't forget to place the CSharp file inside the 'Standard Assets' folder
	csScript = this.GetComponent("BTWrapperCS");
}
	
function OnGUI()
{
	BTBeaconInformationJS = BTWrapperCS.readBTValuesFromCSharp();
	myFunction();
}

function Update () {


	BTBeaconInformationJS = BTWrapperCS.readBTValuesFromCSharp();
	Debug.Log("BTManagerJS: "+BTBeaconInformationJS);
	myFunction();
}

function myFunction() {
	BTbeaconArray.clear();
    var localArray= BTBeaconInformationJS.Split("#"[0]);
	for (var i=0;i<localArray.length;i++){ 			
		var BTbeacon =new BTbeacon();
		BTbeacon.id = localArray[i++];
		BTbeacon.rssi = localArray[i++];
		BTbeacon.sd = localArray[i];		
		BTbeaconArray.Push(BTbeacon);		
	}    
}


public function getBTArray (){
	return BTbeaconArray;
}



public class BTbeacon{
  var id:String;
  var rssi:String;
  var sd:String;
  function BTbeacon(id:String, rssi:String, sd:String){
    this.id = id;
    this.rssi = rssi; 
    this.sd =  sd;
  }
  function BTbeacon(){}
}





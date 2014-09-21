#pragma strict
static var popup=1;
static var confirm=0;
var count=0;


function Start () {
	gameObject.GetComponent(GUITexture).color.a=0.0;
	popup=0;
}

function Update () {
	
	count++;
	
	if (popup){gameObject.GetComponent(GUITexture).color.a=1.0;}
	else{gameObject.GetComponent(GUITexture).color.a=0.0;}
	
	
	if(popup && !confirm && count>100){Handheld.Vibrate(); count=0;}

}
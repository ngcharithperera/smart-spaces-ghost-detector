#pragma strict
var count=0;

var spidervictory : Texture2D;

function Start () {
gameObject.GetComponent(GUITexture).color.a = 0.0;
}

function Update () {

if(SampleApp.animal==2){gameObject.GetComponent(GUITexture).texture=spidervictory;};
if(SampleApp.nod==1){count++; if(count>270){gameObject.GetComponent(GUITexture).color.a+=0.01;}
else{gameObject.GetComponent(GUITexture).color.a = 0.0;}}
}
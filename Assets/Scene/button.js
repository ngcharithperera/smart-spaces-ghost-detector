#pragma strict

var buttonIdle: Texture2D;
var buttonHover: Texture2D;

var clicked=0;
var now=1;

function Start () {

}

function Update () {
}

function OnMouseEnter(){
guiTexture.texture=buttonHover;
}


function OnMouseExit(){
guiTexture.texture=buttonIdle;
}

function OnMouseDown(){

if(!clicked && now){
Debug.Log( "Hello World"); GameObject.Find("GUI Text").guiText.text="HELLO WORLD!!!"; GameObject.Find("GUI Text").guiText.material.color = Color.red; GameObject.Find("GUI Text").guiText.fontSize = 90; clicked=1; now=0;
}
if(clicked && now){Debug.Log( "Noooo!"); GameObject.Find("GUI Text").guiText.text="Press the button"; GameObject.Find("GUI Text").guiText.material.color = Color.white; GameObject.Find("GUI Text").guiText.fontSize = 41; clicked=0; now=0;}

}

function OnMouseUp () {
		now=1;
	}

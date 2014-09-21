#pragma strict

var gobutton:GameObject;
var startbanner:GameObject;
var go: Texture2D;

function Start () {

}

function Update () {

}

function OnMouseDown() {gameObject.GetComponent(GUITexture).texture=go;};
function OnMouseUp() {Destroy (gobutton); Destroy (startbanner);Application.LoadLevel (1);};
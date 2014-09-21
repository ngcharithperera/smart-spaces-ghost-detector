#pragma strict
var popupbuttondown: Texture2D;
var popupbutton: Texture2D;

function Start () {

}

function Update () {
if(popup.popup){gameObject.GetComponent(GUITexture).color.a=1.0;}

else{gameObject.GetComponent(GUITexture).color.a=0.0;}
}

function OnMouseDown() {if(popup.popup){gameObject.GetComponent(GUITexture).texture=popupbuttondown;}};
function OnMouseUp() {if(popup.popup){gameObject.GetComponent(GUITexture).texture=popupbutton; popup.confirm=1; popup.popup=0;}};
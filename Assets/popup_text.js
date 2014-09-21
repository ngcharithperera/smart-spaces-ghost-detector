#pragma strict

function Start () {

}

function Update () {
if(popup.popup){gameObject.GetComponent(GUIText).color.a=1.0;}
else{gameObject.GetComponent(GUIText).color.a=0.0;}
}
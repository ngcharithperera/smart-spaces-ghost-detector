#pragma strict
var vic : Texture2D;
var spider : Texture2D;
function Start () {

}

function Update () {
if(SampleApp.nod==1){gameObject.GetComponent(GUITexture).texture=vic;}
if(SampleApp.animal==2 && SampleApp.nod!=1){gameObject.GetComponent(GUITexture).texture=spider;}

}
#pragma strict

var starton :Texture2D;
var startof :Texture2D;

function Start () {


}

function Update () {

}

function OnMouseUpAsButton() {

	if(quiz.number==3 && SampleApp.animal==1){Application.LoadLevel(1);SampleApp.animal=2;SampleApp.nod=4; bubble.intro=1; GameObject.Find("feedback").guiText.text=" ";}
	if(quiz.number==6 && SampleApp.animal==2){Application.LoadLevel(1);SampleApp.animal=3;SampleApp.nod=4; bubble.intro=1;SampleApp.deerConfirm=0; SampleApp.spiderConfirm=0; GameObject.Find("feedback").guiText.text=" ";}
}

function OnMouseDown() {gameObject.GetComponent(GUITexture).texture=starton;};

function OnMouseUp() {gameObject.GetComponent(GUITexture).texture=startof;};
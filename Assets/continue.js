#pragma strict

var count=0;

var deer:GameObject;
var spider:GameObject;
var quizOn: Texture2D;
var quizOf: Texture2D;

function Start () {
gameObject.GetComponent(GUITexture).color.a = 0.0;
//GUI.color = new Color32(255, 255, 255, 0);
}

function Update () {
if(SampleApp.nod==1){count++; if(count>270){gameObject.GetComponent(GUITexture).color.a+=0.01;} }
}

function OnMouseDown() {gameObject.GetComponent(GUITexture).texture=quizOn;};

function OnMouseUp() {
	if(SampleApp.nod==1 && SampleApp.animal==1){
		Destroy (deer); bubble.intro=1; quiz.feedback=0; quiz.notfirsttry=0; Application.LoadLevel(2); quiz.feedback=0;};
		
	if(SampleApp.nod==1 && SampleApp.animal==2){
		Destroy (spider); bubble.intro=1; quiz.number=3; quiz.right=0; quiz.feedback=0; quiz.notfirsttry=0;  Application.LoadLevel(2); q2.up=0;};
	gameObject.GetComponent(GUITexture).texture=quizOf;
	};
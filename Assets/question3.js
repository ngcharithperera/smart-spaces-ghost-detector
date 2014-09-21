#pragma strict

var yes: Texture2D; 
var no: Texture2D; 
var neutral: Texture2D;
var pressed: Texture2D;  
var anim : Animator;
var q=0;
var count=0;
var noo=0;

function Start () {
anim=this.GetComponent("Animator"); 
q=0;
}

function Update () {

if(SampleApp.animal==2 && q<3){q=3;}

if(quiz.number!=q && !quiz.feedback){
	
	if(SampleApp.animal==2 && quiz.number<3){quiz.number=3; q=3;} 
	else{anim.SetInteger("out",1);count++;}
}

if(count>60){anim.SetInteger("out",0); gameObject.GetComponent(GUITexture).texture=neutral; q=quiz.number; noo=0;q3.down=0;q3.up=0;count=0;}

if(q3.down==1){if(noo==0 && quiz.right==0){gameObject.GetComponent(GUITexture).texture=pressed;}}


if(q3.up==1){if(quiz.right==0){
q3.up=0;
if(quiz.number==0){gameObject.GetComponent(GUITexture).texture=no;noo=1; quiz.incorrect++;}
if(quiz.number==1){gameObject.GetComponent(GUITexture).texture=no;noo=1; quiz.incorrect++;}
if(quiz.number==2){gameObject.GetComponent(GUITexture).texture=no;noo=1; quiz.incorrect++;}
if(quiz.number==3){gameObject.GetComponent(GUITexture).texture=no;noo=1; quiz.incorrect++;}
if(quiz.number==4){gameObject.GetComponent(GUITexture).texture=no;noo=1; quiz.incorrect++;}
if(quiz.number==5){gameObject.GetComponent(GUITexture).texture=no;noo=1; quiz.incorrect++;}
}}

}


function OnMouseDown(){if(noo==0 && quiz.right==0){gameObject.GetComponent(GUITexture).texture=pressed;}
}

function OnMouseUpAsButton()
{
if(quiz.right==0){
if(quiz.number==0){gameObject.GetComponent(GUITexture).texture=no; noo=1; quiz.incorrect++;}
if(quiz.number==1){gameObject.GetComponent(GUITexture).texture=no;noo=1; quiz.incorrect++;}
if(quiz.number==2){gameObject.GetComponent(GUITexture).texture=no;noo=1; quiz.incorrect++;}
if(quiz.number==3){gameObject.GetComponent(GUITexture).texture=no;noo=1; quiz.incorrect++;}
if(quiz.number==4){gameObject.GetComponent(GUITexture).texture=no;noo=1; quiz.incorrect++;}
if(quiz.number==5){gameObject.GetComponent(GUITexture).texture=no;noo=1; quiz.incorrect++;}
}
}

function OnMouseUp(){if(noo==0 && quiz.right==0){gameObject.GetComponent(GUITexture).texture=neutral; Debug.Log("mouse release!!!");}}
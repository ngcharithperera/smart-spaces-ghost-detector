#pragma strict

var yes: Texture2D; 
var no: Texture2D; 
var neutral: Texture2D; 
var pressed: Texture2D; 
var anim : Animator;

var noo=0;
var count=0;
var q=0;

var go=1;

function Start () {
anim=this.GetComponent("Animator"); 
anim.SetInteger("out",0);
}

function Update () {


if (quiz.number==3 && count>20){go=0; q2.down=0; q2.up=0; count++; gameObject.GetComponent(GUITexture).texture=neutral;}
else{
go=1;
GameObject.Find("quiznumber").guiText.text = ""+quiz.number;
if(quiz.number!=q && quiz.number<3 && SampleApp.animal==2){quiz.number=3; q=3;anim.SetInteger("out",0); count=0;}
else if(q!=quiz.number && quiz.number!=3 && !quiz.feedback){
	
	//if(SampleApp.animal==2 && quiz.number<3){quiz.number=3; q=3;anim.SetInteger("out",0); count=0;} 
	anim.SetInteger("out",1);count++;
}


if(count>60){anim.SetInteger("out",0); gameObject.GetComponent(GUITexture).texture=neutral; q=quiz.number; noo=0;q2.down=0;q2.up=0;count=0;}

if(q2.down==1){if(noo==0 && quiz.right==0){gameObject.GetComponent(GUITexture).texture=pressed;}}


if(q2.up==1 && !quiz.feedback){
	q2.up=0;
	if(quiz.right==0){

		if(quiz.right==0 && noo==0){
		
			if(quiz.number==0){gameObject.GetComponent(GUITexture).texture=yes; quiz.right=1; noo=1;}
			else if(quiz.number==1){gameObject.GetComponent(GUITexture).texture=yes; quiz.right=1;noo=1;}
			else if(quiz.number==2){gameObject.GetComponent(GUITexture).texture=yes;quiz.right=1;noo=1;}
			else if(quiz.number==3){gameObject.GetComponent(GUITexture).texture=yes;quiz.right=1;noo=1;}
			else if(quiz.number==4){gameObject.GetComponent(GUITexture).texture=yes;quiz.right=1;noo=1;}
			else if(quiz.number==5){gameObject.GetComponent(GUITexture).texture=yes;quiz.right=1;noo=1;}
			
		}
	}
}
}
}

function OnMouseDown(){if(noo==0 && quiz.right==0){gameObject.GetComponent(GUITexture).texture=pressed;}
}

function OnMouseUpAsButton(){
if(quiz.right==0 && noo==0 && go==1 && !quiz.feedback){
if(quiz.number==0){gameObject.GetComponent(GUITexture).texture=yes; quiz.right=1; noo=1;}
else if(quiz.number==1){gameObject.GetComponent(GUITexture).texture=yes; quiz.right=1;noo=1;}
else if(quiz.number==2){gameObject.GetComponent(GUITexture).texture=yes;quiz.right=1;noo=1; }
else if(quiz.number==3){gameObject.GetComponent(GUITexture).texture=yes;quiz.right=1;noo=1; }
else if(quiz.number==4){gameObject.GetComponent(GUITexture).texture=yes;quiz.right=1;noo=1; }
else if(quiz.number==5){gameObject.GetComponent(GUITexture).texture=yes;quiz.right=1;noo=1; }
}
}


function OnMouseUp(){if(noo==0 && quiz.right==0){gameObject.GetComponent(GUITexture).texture=neutral;}}
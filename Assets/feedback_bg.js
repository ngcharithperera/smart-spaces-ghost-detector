#pragma strict
var anim : Animator;

function Start () {anim=this.GetComponent("Animator"); }

function Update () {
	if(quiz.feedback){anim.SetInteger("feedback_in",1);}
	else {GameObject.Find("feedback").guiText.text=" ";}
	
}
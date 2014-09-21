#pragma strict

var play=0;

var victory : AudioClip;
var anim : Animator;


function Start () {
anim=this.GetComponent("Animator"); 
}

function Update () {

if (play==0){anim.SetInteger("close",1); audio.PlayOneShot(victory); play=1;}

}
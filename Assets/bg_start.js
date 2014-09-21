#pragma strict

var number=0.1;
function Start () {

}

function Update () {
number=SampleApp.powerb2*1.0;
//GameObject.Find("bg_good").renderer.Color.a = 0.5;
if(number>gameObject.GetComponent(SpriteRenderer).color.a){gameObject.GetComponent(SpriteRenderer).color.a += 0.005;}
else{gameObject.GetComponent(SpriteRenderer).color.a -= 0.005;}

//gameObject.GetComponent(SpriteRenderer).color.a = number;

}

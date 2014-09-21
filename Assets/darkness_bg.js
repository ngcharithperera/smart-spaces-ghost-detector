#pragma strict

function Start () {
gameObject.GetComponent(SpriteRenderer).color.a=0.0;
}

function Update () {

if(SampleApp.nod!=1 && gameObject.GetComponent(SpriteRenderer).color.a<1.0){gameObject.GetComponent(SpriteRenderer).color.a+=0.005;}
if(SampleApp.nod==1 && gameObject.GetComponent(SpriteRenderer).color.a>0.0){gameObject.GetComponent(SpriteRenderer).color.a-=0.005;}
	
}
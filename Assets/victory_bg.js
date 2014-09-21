#pragma strict

var count=0;
var on=0;

function Start () {
}

function Update () {

if (SampleApp.nod!=1){count=0; gameObject.GetComponent(SpriteRenderer).color.a=0.0;}
if(SampleApp.nod==1 && on==0){gameObject.GetComponent(SpriteRenderer).color.a=1.0; on=1;}
if (on==1){count++;}
if(count>270){gameObject.GetComponent(SpriteRenderer).color.a-=0.005;}
Debug.Log("victory bg out: "+count);
}


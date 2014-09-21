#pragma strict

var spider=0;
var deer=0;
var mouse=0;
var count=-39;
var go=0;

var show=-1;

function Start () {
gameObject.GetComponent(GUITexture).color.a=0;
}

function Update () {

if(SampleApp.animal==1 && deer==0){go=1; deer=1;}
if(SampleApp.animal==2 && spider==0){go=1; spider=1;}
if(SampleApp.animal==3 && mouse==0){go=1; mouse=1;}

if(go){count++;}

if(go && count%45==0){show=show*-1;}

if(show>0 && gameObject.GetComponent(GUITexture).color.a <0.7){gameObject.GetComponent(GUITexture).color.a +=0.2;}

if(show<0 && gameObject.GetComponent(GUITexture).color.a >0.0){gameObject.GetComponent(GUITexture).color.a -=0.2;}

if(count==450){go=0; count=-39; gameObject.GetComponent(GUITexture).color.a=0.0;}

}
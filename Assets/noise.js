#pragma strict

var number=0.1;
var show=0;
var slowshow=1;
var deer=0;
var spider=0;
var mouse=0; 
var count=199;

function Start () {
gameObject.GetComponent(SpriteRenderer).color.a =0.0;
show=1;
}

function Update () {
/*
if(SampleApp.spiderConfirm==1 || SampleApp.deerConfirm){show=0;}

if(show && gameObject.GetComponent(SpriteRenderer).color.a<1.0){gameObject.GetComponent(SpriteRenderer).color.a+=0.005;}
else if(!show){gameObject.GetComponent(SpriteRenderer).color.a-=0.004;}

Debug.Log("show noise: "+show);
Debug.Log("confirm: "+popup.confirm);
*/

GameObject.Find("noiseinfo").guiText.text = "show: "+show+" count: "+count + " spider: "+spider+" deer:"+deer;
		

if(SampleApp.spiderConfirm && !spider){spider=1; slowshow=1; show=1;}
if(SampleApp.deerConfirm && !deer){deer=1; slowshow=1; show=1;}
if(SampleApp.mouseConfirm && !mouse){mouse=1; slowshow=1; show=1;}

else if(popup.confirm){show=1;}

if(show){count++;}

if(show && slowshow && gameObject.GetComponent(SpriteRenderer).color.a>0.0){gameObject.GetComponent(SpriteRenderer).color.a-=0.005;} //slow
if((show && !slowshow && gameObject.GetComponent(SpriteRenderer).color.a>0.0) || SampleApp.nod==1){gameObject.GetComponent(SpriteRenderer).color.a-=0.02;}
if(!show && gameObject.GetComponent(SpriteRenderer).color.a<1.0 && SampleApp.nod!=1){if(SampleApp.animal==1){gameObject.GetComponent(SpriteRenderer).color.a+=0.004;}; if((SampleApp.animal==2 || SampleApp.animal==3)){gameObject.GetComponent(SpriteRenderer).color.a+=0.01;}}
//if(SampleApp.nod==1){show=0; slowshow=1; count=199; gameObject.GetComponent(SpriteRenderer).color.a+=0.0;}


if(!deer && SampleApp.animal==1){count+=201;}
if(!spider && SampleApp.animal==2){count+=201;}
if(!mouse && SampleApp.animal==3){count+=201;}

if(show && slowshow){
	if(count>1000 && SampleApp.animal==1){slowshow=0; show=0; count=0;}; 
	if(count>430 && (SampleApp.animal==2 || SampleApp.animal==3)){slowshow=0; show=0; count=0;}
}

if(show && !slowshow){if(count>210 && SampleApp.animal==1) {show=0; count=0;}; if(count>110 && (SampleApp.animal==2 || SampleApp.animal==3)){show=0; count=0;}}



}




//if popup confirm hide, wait 5 seconds, show


//show referes to the ghost
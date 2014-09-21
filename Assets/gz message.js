#pragma strict
var count=0;
function Start () {
gameObject.GetComponent(GUIText).color.a =0.0;
if(SampleApp.animal==1){gameObject.GetComponent(GUIText).text="Well done! You found\nthe Giant Deer!!\n\nDo you dare to proceed\nto the next challenge?";}
}

function Update () {

if(SampleApp.nod==1 && gameObject.GetComponent(GUIText).color.a <1.0){count++; if(count>270){gameObject.GetComponent(GUIText).color.a+=0.005;}}
else if(SampleApp.nod!=1){gameObject.GetComponent(GUIText).color.a=0; count=0;}

}

if(SampleApp.animal==2){gameObject.GetComponent(GUIText).text="Well done! You found\nthe Big Spider!!\n\nDo you dare to proceed\nto the next challenge?";}
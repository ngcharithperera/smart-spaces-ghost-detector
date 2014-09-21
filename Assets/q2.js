#pragma strict

static var down=0;
static var up=0;


function Start () {

}

function Update () {
}

function OnMouseDown(){if(!(SampleApp.animal==2 && quiz.number<3)){down=1;}};
function OnMouseUp(){if(!(SampleApp.animal==2 && quiz.number<3)){up=1;}};

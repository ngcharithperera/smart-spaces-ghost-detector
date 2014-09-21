#pragma strict

static var incorrect=0;
static var notfirsttry=0;
static var feedback=0;

static var number=0;
var n=0;
var question=["How old is the\n Giant deer?","How many legs\n does the deer have?", "How big is the\n deer?", "How many legs does\nthe spider have?", "Who designed the\nbig spider?", "How many eyes does\nthe spider have?"];
var a=["very old",  "many", "a razor", "1", "chocolate", "So am I"];
var b=["not that old", "no legs", "a piece of rock", "2", "47", "Me too"];
var c=["it is eternal", "a million", "nuclear fusion", "3", "football", "Same here"];
static var right=0;

var count=0;
var transition=0;


function Start () {
Screen.sleepTimeout = SleepTimeout.NeverSleep;
if(SampleApp.animal==2 && number<3){number=3; right=0;}
GameObject.Find("question").guiText.text = (number+1)+": "+question[number];
GameObject.Find("q1").guiText.text = a[number];
GameObject.Find("q2").guiText.text = b[number];
GameObject.Find("q3").guiText.text = c[number];
}



function Update () {
//Debug.Log("count "+count);

GameObject.Find("feedbackinfo").guiText.text = "notfirsttry: "+ notfirsttry +" incorrect: "+incorrect;

if(right==1 && !feedback && !feedback){right=0; transition=1;}

if(transition==1){count++;}
else{count=0;}
if(incorrect>0 && count==1){notfirsttry++; incorrect=0;}
if (count==50 && feedback !=1){right=0; number++;}

if(count>90 && transition==1 && feedback==0)
{

incorrect=0;

transition=0;
count=0;
GameObject.Find("question").guiText.text = (number+1)+": "+question[number];
GameObject.Find("q1").guiText.text = a[number];
GameObject.Find("q2").guiText.text = b[number];
GameObject.Find("q3").guiText.text = c[number];
}

if(number==3 && SampleApp.animal==1 && !feedback){feedback=1;}
if(number==6 && SampleApp.animal==2 && !feedback){feedback=1;}

//if(number==3 && SampleApp.animal==1){Application.LoadLevel(1);SampleApp.animal=2;SampleApp.nod=4; bubble.intro=1; count=0; transition=0;}
//if(number==6 && SampleApp.animal==2){Application.LoadLevel(1);SampleApp.animal=3;SampleApp.nod=4; bubble.intro=1;SampleApp.deerConfirm=0; SampleApp.spiderConfirm=0;}
}

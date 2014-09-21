#pragma strict

var feedback=["Bah! Not a single question\ncorrectly answered on your\nfirst try. You are hopeless!", "Hmmm, you only managed\nto answer one of the questions\non your first try.\nYou can do better!", "Great! You answered two\nout of three questions on your\nfirst try, good job!", "Amazing! You answered\nall the questions on your first try,\nthis is beyond belief!"];
var ending="\n\nStart your ghost detector\nto continue!";

function Start () {

}

function Update () {
	GameObject.Find("info").guiText.text="notfirsttry: "+quiz.notfirsttry+", feedback: "+quiz.feedback;
	GameObject.Find("feedback").guiText.text=feedback[3-quiz.notfirsttry]+ending;
}

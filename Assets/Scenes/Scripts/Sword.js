var target : GameObject;
var sword : GameObject;

function Start () {

}

function Update () {
sword.transform.parent = target.transform;
}
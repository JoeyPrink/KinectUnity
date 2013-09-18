
var target : GameObject;
var speed : float = 0.1;
private var oldPos : Vector3;
var left : int = 1;

function Start() {
	oldPos = transform.position;
}

function LateUpdate() {
	oldPos = transform.position;
}

function FixedUpdate() {
if(left == 1) 
	transform.position.z = oldPos.z + speed;
	if (left == 0)
	
	transform.position.z = oldPos.z - speed;
}
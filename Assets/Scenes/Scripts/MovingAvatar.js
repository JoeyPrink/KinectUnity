
var target : GameObject;
var speed : float = 0.1;
private var oldPos : Vector3;

function Start() {
	oldPos = transform.position;
}

function LateUpdate() {
	oldPos = transform.position;
}

function FixedUpdate() {
	transform.position.x = oldPos.x + speed;
}
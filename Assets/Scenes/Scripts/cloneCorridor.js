var tile : Transform;
var zombieLeft : Transform;
var zombieRight : Transform;
var target : GameObject;
var currentPosition : float;

function Start () {


  InvokeRepeating("zombieCreation", 0,10);
      //var playerStart = 50+target.transform.position.x;
  InvokeRepeating("zombieCreation", 0,5);
  InvokeRepeating("zombieCreation", 0,7);
  InvokeRepeating("zombieCreation", 0,3);
 
  currentPosition=10+target.transform.position.x;
  
}

function zombieCreation() {

var rand = Random.Range(0,10);
  
if(rand%5 == 0) {
	    Instantiate(zombieLeft, Vector3(target.transform.position.x+70,target.transform.position.y,target.transform.position.z - 70), Quaternion.Euler(0, -45, 0));
	    Instantiate(zombieRight, Vector3(target.transform.position.x+70,target.transform.position.y,target.transform.position.z + 70), Quaternion.Euler(0, 225, 0));
	   
}

if(rand%4 == 0) {
	    Instantiate(zombieRight, Vector3(target.transform.position.x+70,target.transform.position.y,target.transform.position.z + 70), Quaternion.Euler(0, 225, 0));
	   
}


if(rand%3 == 0) {
	    Instantiate(zombieLeft, Vector3(target.transform.position.x+70,target.transform.position.y,target.transform.position.z - 70), Quaternion.Euler(0, -45, 0));
	   
}

}

function Update() {
 currentPosition=10+target.transform.position.x;
}



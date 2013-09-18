var hitText : GameObject;
static var points : int;
var target : GameObject;

function OnTriggerEnter (myTrigger : Collider) {
Debug.Log (myTrigger.gameObject.name + " went through");


if (myTrigger.gameObject.name == "soldier:LeftHand" || myTrigger.gameObject.name == "soldier:RightHand")
{
//do your reset here

showPoints();
Destroy (gameObject);
}
else {
Application.LoadLevel(Application.loadedLevel); //reset this level.
}




	    
// score add
// if (myTrigger.gameObject.name == "Character (Lerpz)" ) points++;
}

function showPoints() {
Instantiate(hitText, Vector3(gameObject.transform.position.x+30, gameObject.transform.position.y+30, gameObject.transform.position.z), Quaternion.Euler(0, 90, 0));
 yield WaitForSeconds (3);
 

}

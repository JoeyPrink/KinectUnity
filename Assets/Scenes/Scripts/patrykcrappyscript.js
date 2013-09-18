var tile : Transform;
var zombieLeft : Transform;
var zombieRight : Transform;
var target : GameObject;

function Start () {

  //var playerStart = 50+target.transform.position.z;
  var currentPosition=10+target.transform.position.z;
  
for (var i : int = 0; i < 25; i++ )
{
	currentPosition = currentPosition+Random.Range(10.0f,80.0f);	
	//Instantiate(tile, Vector3(4,-15,10*i+50), Quaternion.identity);
    Instantiate(zombieLeft, Vector3(-4,-20,currentPosition), Quaternion.identity);
	//Instantiate(zombieRight, Vector3(15,10,Random.Range(50.0f,100.0f)+100), Quaternion.identity);
}

}

function Update () {
  
}
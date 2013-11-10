#pragma strict

public var lives : int = 20;

function OnTriggerEnter(other: Collider)
{
var playerStatus : mainPlayer = other.GetComponent(mainPlayer); //mainPlayer is the name of the script file
if(playerStatus == null) return; 
playerStatus.lives += lives;
Destroy(gameObject); //destroy gameobject
}

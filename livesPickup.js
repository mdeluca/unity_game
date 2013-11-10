#pragma strict

public var lives : int = 5;
public var health : int = 25;
public var damage : int = 45;

function OnTriggerEnter(other: Collider)
{
var playerStatus : mainPlayer = other.GetComponent(mainPlayer); //mainPlayer is the name of the script file
if(playerStatus == null) return; 
playerStatus.lives += lives;
playerStatus.health += health;
Destroy(gameObject); //destroy gameobject
}

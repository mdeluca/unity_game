#pragma strict

public var magic : int = 5;


function OnTriggerEnter(other: Collider)
{
var playerStatus : mainPlayer = other.GetComponent(mainPlayer); //mainPlayer is the name of the script file
if(playerStatus == null) return; 
playerStatus.magic += magic;
Destroy(gameObject); //destroy gameobject
}

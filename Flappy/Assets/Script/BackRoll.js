#pragma strict

function Update () {
	
	transform.position.x -= 0.5;
	
	if(transform.position.x >= 33){
		transform.position.x =6;
	}
	
}
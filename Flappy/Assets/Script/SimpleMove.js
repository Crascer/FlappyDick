var speed : float = 5.0;
 
function Update () {
 transform.Translate(Vector2(0,speed) * Time.deltaTime);
}
#pragma strict

var url = "file:///X:/Development/Oculus Rift/Tuscany_HC.jpg";

function Start () {
     // Start a download of the given URL
    var www : WWW = new WWW (url);
 
    // Wait for download to complete
    yield www;
 
    // assign texture
    renderer.material.mainTexture = www.texture; 
}
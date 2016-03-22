var result="";
var ref=document.getElementById("page");
ref.addEventListener("mousemove",getCoordinates);
function getCoordinates(event){
    var x=event.clientX;
    var y=event.clientY;
    
    result=result +"X:"+x+";Y:"+y +";Time:" +Date()+ " \n ";
    
    document.getElementById("mouseLoc").innerHTML=result;
}

var button = document.getElementById('action');


var input = document.getElementById("input");






button.addEventListener("click", function() {

    var newList = document.createElement("li") ;
    var list = document.getElementsByTagName("ul");
    
    newList.appendChild(document.createTextNode("testing")) ;

    list.appendChild(newList)

});





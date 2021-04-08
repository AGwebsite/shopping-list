
var button = document.getElementById('action');
var list = document.getElementById("list");
var input = document.getElementById("input");
var item = document.getElementsByTagName("li") ;

function addList(){
    if (input.value !== ""){
        addNewList() ;
        checkList();
    }
}

function keyCode(event){
    if (input.value !== "" && event.keyCode === 13){
        addNewList();
        checkList();
        }
}

function checkList (){
    for (var i= 0; i<=item.length; i++){
        item[i].addEventListener("click", function(){
        console.log("test avant de mettre l'action cocher l'item");})
                   }
}

function addNewList (){
    var newList = document.createElement("li") ;
    newList.appendChild(document.createTextNode(input.value)) ;
    list.appendChild(newList) ;
}


button.addEventListener("click", addList);

input.addEventListener("keypress", keyCode);




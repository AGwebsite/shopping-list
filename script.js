
var button = document.getElementById('action');
var list = document.getElementById("list");
var input = document.getElementById("input");
var item = document.getElementsByTagName("li") ;


function addList(){
    if (input.value !== ""){
        addNewList() ;
    }
}

function keyCode(event){
    if (input.value !== "" && event.keyCode === 13){
        addNewList();
        }
}


function addNewList (){
    var newList = document.createElement("li") ;
    newList.addEventListener("click", function(){
        newList.classList.toggle('check')
    })
    newList.appendChild(document.createTextNode(input.value)) ;
    list.appendChild(newList) ;
    
}



button.addEventListener("click", addList);

input.addEventListener("keypress", keyCode);




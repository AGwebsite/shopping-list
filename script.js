
var button = document.getElementById('action');
var list = document.getElementById("list");
var input = document.getElementById("input");
var item = document.getElementsByTagName("li") ;


function addList(){
    if (input.value !== ""){
        addNewList() ;
        input.value="";
    }
}

function keyCode(event){
    if (input.value !== "" && event.keyCode === 13){
        addNewList();
        input.value = "";
        }
}


function addNewList (){
    var newList = document.createElement("li") ;
    newList.addEventListener("click", function(){
        newList.classList.toggle('check')
    }) ;
    newList.className += ("animate__animated animate__rubberBand");
    newList.addEventListener("dblclick", function(){
        this.remove(newList)
    })
    newList.appendChild(document.createTextNode(input.value)) ;
    list.appendChild(newList) ;
}


button.addEventListener("click", addList);

input.addEventListener("keypress", keyCode);




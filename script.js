
var button = document.getElementById('action');
var list = document.getElementById("list");
var input = document.getElementById("input");
var item = document.getElementsByTagName("li") ;


button.addEventListener("click", function() {
    if (input.value !== ""){
        var newList = document.createElement("li") ;
        newList.appendChild(document.createTextNode(input.value)) ;
        list.appendChild(newList) ;

        for (var i= 0; i<=item.length; i++){
            item[i].addEventListener("click", function(){
           console.log("test avant de mettre l'action cocher l'item");
                   })
                   }
        }
    });



input.addEventListener("keypress", function(event){
    if (input.value !== "" && event.keyCode === 13){
        var newList = document.createElement("li") ;
        newList.appendChild(document.createTextNode(input.value)) ;
        list.appendChild(newList) ;
        }

        for (var i= 0; i<=item.length; i++){
             item[i].addEventListener("click", function(){
            console.log("test avant de mettre l'action cocher l'item");
                    })
                    }
    });




// for (var i= 0; i<=item.length; i++){
//     item[i].addEventListener("click", function(){
//         console.log("fjrdslhbfrbjhf");
//     })

//     for (var i= 0; i<=item.length; i++){
//         item[i].addEventListener("click", function(){
//             console.log("fjrdslhbfrbjhf");
//         })
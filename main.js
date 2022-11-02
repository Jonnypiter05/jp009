menuListArray = ["Pizza Vegetariana",
                 "Pizza de frango",
                 "Pizza de portuguesa",
                 "Pizza de quatro queijos",
                 "Pizza de calabresa",
                 "Pizza extravaganza"
                    ];

function getMenu(){
var htmldata="";
menuListArray.sort()
for(var i=0;i<menuListArray.lenght;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id="img1" src="images/pizzaimg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
for(var i=0;i<menuListArray.lenght;i++) {
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}
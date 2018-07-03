
/*All code written by Adam El Mohamad */

$(document).ready(function(){




document.getElementById('addTask').addEventListener("click", function(){
var task = document.getElementById('task').value;

if(task == ""){
	alert("You Must Enter A Value!");
}else{
document.getElementById('myUL').innerHTML += '<li class="list">' + task + '</li>' + '<button class="close" >&#10007</button>'
}

var button = document.querySelectorAll('.close');
for(var i = 0; i < button.length;i++){
button[i].addEventListener("click", function(){
this.parentNode.removeChild(this.previousSibling);
this.parentNode.removeChild(this);
});
}


var listItems = document.querySelectorAll('ul');
for(var i = 0; i < listItems.length;i++){
listItems[i].addEventListener("click", function(e){
if(e.target.className === 'list'){
	this.childNodes[1].style.textDecoration = "line-through";
	e.target.classList.toggle('checked');


}
});
}

 });

});





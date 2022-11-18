function newElement(){
var inputText= document.getElementById("text")
var totalList = document.getElementById("myUL")
var newElement = document.createElement("li")
if(inputText.value ===""){
  alert("You must write something!");

}
else{
  totalList.appendChild(newElement)

  newElement.innerText= inputText.value;
}
document.getElementById("text").value = "";

var newEl= document.createElement("span")
newEl.className="close"
newEl.textContent="\u00D7";
newElement.appendChild(newEl)
var close = document.getElementsByClassName("close")
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

}
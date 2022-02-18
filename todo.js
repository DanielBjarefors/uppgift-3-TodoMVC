


function addListItem(){

let input = document.querySelector("#inputItem").value;
let listItem = document.querySelector("#todoListItem");
let li = listItem.content.cloneNode(true);
li.querySelector("#listItem").textContent = input;
document.querySelector("#todoList").append(li)
}
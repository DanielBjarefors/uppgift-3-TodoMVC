
document.querySelector("#add").addEventListener("click", addListItem);
document.querySelector("#checkAll").addEventListener("click", checkAllItems);
document.querySelector("#removeChecked").addEventListener("click", removeChecked);
document.querySelector(".checkbox"),addEventListener("click", updateCounter)

function addListItem(){

    let input = document.querySelector("#inputItem").value;
    let listItem = document.querySelector("#todoListItem");
    let li = listItem.content.firstElementChild.cloneNode(true);
    li.querySelector(".listItem").textContent = input;
    document.querySelector("#todoList").appendChild(li)

    document.querySelector("#inputItem").value ='';

    li.querySelector(".delete").onclick = () => {
        li.remove();
    }
}

let counter = 0;
function checkAllItems (){
    let items = document.querySelectorAll(".list")
    for (const e of items) {
        if(e.childNodes[1].checked === true) {
            counter++;
        }
    }
    if (counter === items.length) {
        for (const e of items) {
            e.childNodes[1].checked = false;
        } 
    }
    else{
        for (const e of items) {
            e.childNodes[1].checked = true;
        }       
    }
    counter=0;
}

function removeChecked(){
    let items = document.querySelectorAll(".list")
    for (const e of items) {
        if(e.childNodes[1].checked === true) {
            e.remove();
        }
    }
}

function updateCounter(){
    let active=0;
    let items = document.querySelectorAll(".list")
    for (const e of items) {
        if(e.childNodes[1].checked === false) {
            active++;
        }
    }
    document.querySelector("#itemsLeft").textContent=active+" items left";
}


document.querySelector("#add").addEventListener("click", addListItem);
document.querySelector("#checkAll").addEventListener("click", checkAllItems);
document.querySelector("#removeChecked").addEventListener("click", removeChecked);


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


function checkAllItems (){

    let items = document.querySelectorAll(".list")

    for (const e of items) {
        e.childNodes[1].checked = true;
    }

    //remove checked???
}

function removeChecked(){



}

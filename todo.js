//todo :)
//fix active and complete count all

//event listeners
document.querySelector("#inputItem").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addListItem();
    }
});
document.querySelector("#active").addEventListener("click", displayActive);
document.querySelector("#checkAll").addEventListener("click", checkAllItems);
document.querySelector("#clearChecked").addEventListener("click", clearCompleted);
document.querySelector("#all").addEventListener("click", displayAll);
document.querySelector("#completed").addEventListener("click", displayCompleted);
document.querySelector("footer").style.display="none";
document.querySelector("#checkAll").style.display="none";   


function addListItem () {
    let input = document.querySelector("#inputItem").value;
    let li = document.querySelector("#todoListItem").content.firstElementChild.cloneNode(true);
    li.querySelector(".listItem").textContent = input;
    document.querySelector("#todoList").appendChild(li)

    document.querySelector("#inputItem").value ='';

    li.querySelector(".delete").onclick = () => {
        li.remove();
        updateCounter();
    }   

    li.querySelector(".checkbox").onclick = () => {
        updateCounter();
    }
    updateCounter();
    document.querySelector("footer").style.display="flex";

}


function checkAllItems () {
    let items = document.querySelectorAll(".list")
    let counter = 0;
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
    updateCounter();
}

function clearCompleted () {
    let items = document.querySelectorAll(".list")
    for (const e of items) {
        if(e.childNodes[1].checked === true) {
            e.remove();
        }
    }
    updateCounter();
}

function displayAll () {
    let items = document.querySelectorAll(".list")
    for (const e of items) {        
            e.style.display="flex"      
    }
}
function displayActive () {
    let items = document.querySelectorAll(".list")
    for (const e of items) {
        if(e.childNodes[1].checked === true) {
            e.style.display="none"
        }
    }
}

function displayCompleted () {
    let items = document.querySelectorAll(".list")
    for (const e of items) {
        if(e.childNodes[1].checked === false) {
            e.style.display="none"
        }
    }
}

function updateCounter () {
    let activeItems=0;
    let allItems=0;
    let items = document.querySelectorAll(".list")
    for (const e of items) {
        if(e.childNodes[1].checked === false) {
            activeItems++;
        }
        allItems++
    }
    if (allItems===0) {
        document.querySelector("#checkAll").style.display="none";  
        document.querySelector("footer").style.display="none"; 
    }

    if (activeItems>0) {
        document.querySelector("#itemsLeft").textContent=activeItems+" items left";
        document.querySelector("#checkAll").style.display="initial";
    } 
    else {
        document.querySelector("#itemsLeft").textContent="";    
        
    }

    if (activeItems===items.length) {
        document.querySelector("#clearChecked").style.display="none";
    } 
    else {
        document.querySelector("#clearChecked").style.display="initial";
    }
    
}



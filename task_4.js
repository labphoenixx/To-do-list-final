const listContainer = document.querySelector("#list-container");
const button = document.querySelector("button");

button.addEventListener( "click" ,function addTask(){
    const inp = document.getElementById("inp");
    if (inp.value===''){
        alert("write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inp.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inp.value = "";
    save_data();
});//The video method isn't working for me

listContainer.addEventListener("click", function(event){
    if (event.target.tagName === "LI"){
        (event.target.classList.toggle("checked"));
        save_data();
    }
    else if(event.target.tagName === "SPAN"){// span= the cross mark. Thus, removing span's parent element results in removal of li
        event.target.parentElement.remove();
        save_data();
    }
},false);//WHy false?

function save_data(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
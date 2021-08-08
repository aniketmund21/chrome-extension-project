let myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
let deleteBtn = document.getElementById("delete-btn")


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
})



function renderLeads(){
    let listItems = ""
    for(let i=0 ; i<myLeads.length ; i++){
        listItems += `
        <li>
        <a target ='_blank' href='${ myLeads[i]}'>
        ${ myLeads[i]}
        </a>
        </li>`
        
    }

    ulEl.innerHTML = listItems
}

//Peaky Blinders 



// alert("loading")
function addNewweField() {
//   console.log("Adding New Field");

let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('weField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder","Enter Here");

let weOb = document.getElementById("we");
let weAddButtonOb = document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewaqField() {

let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('eqField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder","Enter Here");
    
let aqOb = document.getElementById("aq");
let aqAddButtonOb = document.getElementById("aqAddButton");
    
aqOb.insertBefore(newNode, aqAddButtonOb);    
}

function addNewskField() {

let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('eqField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder","Enter Here");
        
let skOb = document.getElementById("sk");
let skAddButtonOb = document.getElementById("skAddButton");
        
skOb.insertBefore(newNode, skAddButtonOb);    
}

function addNewlgField() {

let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('eqField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder","Enter Here");
            
let lgOb = document.getElementById("lg");
let lgAddButtonOb = document.getElementById("lgAddButton");
            
lgOb.insertBefore(newNode, lgAddButtonOb);    
}

function addNewsksField() {

let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('eqField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder","Enter Here");
                
let sksOb = document.getElementById("sks");
let sksAddButtonOb = document.getElementById("sksAddButton");
                
sksOb.insertBefore(newNode, sksAddButtonOb);    
}

function addNewacField() {

let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('eqField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder","Enter Here");
                    
let acOb = document.getElementById("ac");
let acAddButtonOb = document.getElementById("acAddButton");
                    
acOb.insertBefore(newNode, acAddButtonOb);    
}

//generating cv
function generateCV() {
  // console.log("generating CV");


  let nameField=document.getElementById('nameField').value;
  
  let nameT=document.getElementById('nameT');

  nameT.innerHTML = nameField;

  //direct

  document.getElementById("nameT2").innerHTML=nameField;
  
  //contact
  document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

  //address
  document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

  //Mail ID
  document.getElementById("mailT").innerHTML = document.getElementById("mailField").value;

  //Links
  document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
  document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
  document.getElementById("gitT").innerHTML = document.getElementById("gitField").value;

  //Profile Summary
  document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

  //work experience
  
  let wes = document.getElementsByClassName("weField");

  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;  
}


// alert("loading")
function addNewweField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('weField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let weOb = document.getElementById("we");
  let weAddButtonOB = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOB);
}


function addNewaqField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOB = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOB);
}

function addNewskField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let skOb = document.getElementById("sk");
  let skAddButtonOb = document.getElementById("skAddButton");

  skOb.insertBefore(newNode, skAddButtonOb);
}

function addNewlgField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let lgOb = document.getElementById("lg");
  let lgAddButtonOb = document.getElementById("lgAddButton");

  lgOb.insertBefore(newNode, lgAddButtonOb);
}

function addNewksField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let ksOb = document.getElementById("ks");
  let ksAddButtonOb = document.getElementById("ksAddButton");

  ksOb.insertBefore(newNode, ksAddButtonOb);
}

function addNewacField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let acOb = document.getElementById("ac");
  let acAddButtonOb = document.getElementById("acAddButton");

  acOb.insertBefore(newNode, acAddButtonOb);
}

//generating cv
function generateCV() {
  // console.log("generating CV");


  let nameField = document.getElementById('nameField').value;

  let nameT = document.getElementById('nameT');

  nameT.innerHTML = nameField;

  //direct

  document.getElementById("nameT2").innerHTML = nameField;

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


  //Academic Qualifications

  let aqs = document.getElementsByClassName("eqField");

  let str1 = "";

  for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  //Key Skills

  
  let sks = document.getElementsByClassName("weField");

  let str2 = "";

  for (let e of sks) {
    str2 += `<li> ${e.value} </li>`;
  }

  document.getElementById("skT").innerHTML = str2;

  //Languages

  
  let lgs = document.getElementsByClassName("eqField");

  let str3 = "";

  for (let e of lgs) {
    str3 += `<li> ${e.value} </li>`;
  }

  document.getElementById("lgT").innerHTML = str3;

  //Soft Skills

  
  let kss = document.getElementsByClassName("eqField");

  let str4 = "";

  for (let e of kss) {
    str4 += `<li> ${e.value} </li>`;
  }

  document.getElementById("ksT").innerHTML = str4;

  //Accomplishments

  
  let acs = document.getElementsByClassName("eqField");

  let str5 = "";

  for (let e of acs) {
    str5 += `<li> ${e.value} </li>`;
  }

  document.getElementById("acT").innerHTML = str5;
}


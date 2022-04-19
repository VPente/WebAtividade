
const enviarMsg = document.getElementById("form");

enviarMsg.addEventListener('submit',function(event){
event.preventDefault();
// Criar itens 

let msg = document.getElementById("msg").value;
const divMsg = document.getElementById("page");
const nMsgDiv = document.createElement("div");
const nMsgH = document.createElement("h5");
const nMsgP = document.createElement("p");
nMsgP.innerText = msg;
nMsgH.innerText = "Você diz:";
nMsgDiv.className = "voce";
nMsgDiv.appendChild(nMsgH);
nMsgDiv.appendChild(nMsgP);

divMsg.appendChild(nMsgDiv);
form.reset();











})

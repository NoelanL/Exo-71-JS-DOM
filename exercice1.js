let monDiv = document.createElement('div');
monDiv.innerHTML = "Ce div e été ajouté en utilisant JavaScript";
let premierDiv = document.getElementById('viewport').appendChild(monDiv);
premierDiv.appendChild(monDiv);

let monDiv2 = document.createElement('div');
monDiv2.style.backgroundColor = "red";
monDiv2.style.width = 100 + "px";
monDiv2.style.height = 100 + "px";
premierDiv.appendChild(monDiv2);

let monSpan = document.getElementById('aSupprimer');
monSpan.remove(premierDiv);








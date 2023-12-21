/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */


document.getElementById("btn").addEventListener("click", getExternal)

function getExternal(){
  fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => outputExternal(data))
    .catch(error => console.log(error))
}

function outputExternal(data){
  const div = document.getElementById("output")
  const message = document.getElementById("message")
  
  
  message.style.display = "none"
  
  let output = ""
  data.forEach(user => {
    output += `
      <div class="user-card">
        <p>Username: ${user.login}</p>
        <img src="${user.avatar_url}" alt="Avatar" class="avatar">
      </div>
    `
  })
  div.innerHTML = output
}



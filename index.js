
// function appenedUserData() {
//   fetch("http://localhost:3000/users")
//   .then(res => res.json())
//   .then(data => appender(data))
//   .catch(function (error) {
//     alert("There was an error");
//   });
// }
// appenedUserData()

// code below, good! ----

// function submitData(name, email) {
//   const userData = {
//     name: `${name}`,
//     email: `${email}`
//   }
// return fetch("http://localhost:3000/users", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify(userData)
// })
// .then(res => res.json())
// }


// submitData('Steve', 'steve@steve.com')

// function postIt(userData) {
//   return fetch("http://localhost:3000/users", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify(userData)
// })
// .then(res => res.json())
// }

// function appender(data) {
//   var paragraph = document.createElement("p");
//   paragraph.textContent = data;
//   document.body.appendChild(paragraph);
// }

// function submitData(name, email) {
// const userData = {
//   name: `${name}`,
//   email: `${email}`
//   }
//   dataRender(userData)
//   postIt(userData)
// }

// // Renders to DOM
// function dataRender(userData) {
//   let newInfo = document.createElement('li')
//   newInfo.innerHTML = `
//   <p>${userData.name}</p>
//   <p>${userData.email}</p>`
//   document.body.appendChild(newInfo)
// }

// submitData('Steve', 'steve@steve.com')
// postIt()

function submitData(name, email) {
  const confgObj = {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "name": name,
      "email": email
    })
  }
  return fetch("http://localhost:3000/users", confgObj)
  .then(res => res.json())
  .then(body => addNewContact(body.id))

  .catch(response => appendError(response))
}

function addNewContact(newID) {
  console.log(newID)
  document.getElementsByTagName("body")[0].innerHTML = newID;
  document.body.append(message)
  console.log(newID)
}

function appendError(error) {
  document.body.append(error)
}

submitData("Name", "name@name.com")